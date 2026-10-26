// Desktop-only 3D viewer for the reference-image demo. Loaded on demand (dynamic import), so
// phones, tablets and crawlers never download three.js. Its first frame is the fallback drawing:
// same camera (lib/refView.ts), same flat shading formula written straight out in sRGB, same edge
// set at one device pixel. Drag (or arrow keys) turns the model; the wheel keeps scrolling the page.
import {
  Box3,
  BufferAttribute,
  Color,
  Group,
  LineBasicMaterial,
  LineSegments,
  MathUtils,
  Mesh,
  Scene,
  ShaderMaterial,
  Sphere,
  Vector3,
  WebGLRenderer,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { LIGHT, REGION_COLOR, VIEW, makeCamera, regionOf } from './refView';

interface Options { url: string; color: string; reducedMotion: boolean }

// Flat normal from screen-space derivatives; shade = ambient + diffuse · max(0, n·light), applied to
// the sRGB colour and written without colour-space conversion or tone mapping, as the SVG does.
const vertexShader = `
  attribute vec3 tint;
  varying vec3 vWorld;
  varying vec3 vTint;
  void main() {
    vTint = tint;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }`;
const fragmentShader = `
  uniform vec3 uLight;
  uniform float uAmbient;
  uniform float uDiffuse;
  varying vec3 vWorld;
  varying vec3 vTint;
  void main() {
    vec3 n = normalize(cross(dFdx(vWorld), dFdy(vWorld)));
    gl_FragColor = vec4(vTint * (uAmbient + uDiffuse * max(0.0, dot(n, uLight))), 1.0);
  }`;

export async function mountViewer(host: HTMLElement, { url, color, reducedMotion }: Options) {
  const gltf = await new GLTFLoader().loadAsync(url);
  const meshSource = gltf.scene.getObjectByName('mandarin') as Mesh;
  const edgeSource = gltf.scene.getObjectByName('edges') as LineSegments;

  // Per-triangle sRGB base colour, by the same regions the drawing uses: body in the project's
  // orange, stem and leaves like the icon. Kept as raw sRGB numbers (no colour-space conversion).
  const srgb = (hex: string) => { const c = new Color().setStyle(hex, 'srgb-linear'); return [c.r, c.g, c.b]; };
  const position = meshSource.geometry.getAttribute('position');
  const tint = new Float32Array(position.count * 3);
  for (let t = 0; t < position.count; t += 3) {
    const p = Array.from({ length: 9 }, (_, i) => position.array[t * 3 + i]);
    const region = regionOf(p);
    const c = srgb(region === 'body' ? color : REGION_COLOR[region]);
    for (let v = 0; v < 3; v++) tint.set(c, (t + v) * 3);
  }
  meshSource.geometry.setAttribute('tint', new BufferAttribute(tint, 3));
  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uLight: { value: LIGHT },
      uAmbient: { value: VIEW.ambient },
      uDiffuse: { value: VIEW.diffuse },
    },
    // Edges sit exactly on the faces; push the faces back a little so the edges win the depth test
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1,
  });
  const [r, g, b] = VIEW.edge.rgb;
  const edgeMaterial = new LineBasicMaterial({ color: `rgb(${r},${g},${b})`, transparent: true, opacity: VIEW.edge.alpha });

  const model = new Group();
  model.add(new Mesh(meshSource.geometry, material), new LineSegments(edgeSource.geometry, edgeMaterial));

  // Centre and radius exactly as the drawing computes them (bounding box of the triangles)
  meshSource.geometry.computeBoundingBox();
  const box = meshSource.geometry.boundingBox!.clone();
  model.position.sub(box.getCenter(new Vector3()));
  const pivot = new Group();
  pivot.add(model);
  const scene = new Scene();
  scene.add(pivot);
  const camera = makeCamera(box.getBoundingSphere(new Sphere()).radius);

  const renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  host.appendChild(renderer.domElement);

  const render = () => renderer.render(scene, camera);
  const resize = () => {
    const { width, height } = host.getBoundingClientRect();
    renderer.setSize(width, height, false); // the box is VIEW.aspect, so the camera never changes
    render();
  };

  // Yaw turns freely; pitch is held to ±60° so the model never flips over.
  let yaw = 0, pitch = 0, vYaw = 0, vPitch = 0, frame = 0;
  const turn = (dYaw: number, dPitch: number) => {
    yaw += dYaw;
    pitch = MathUtils.clamp(pitch + dPitch, -Math.PI / 3, Math.PI / 3);
    pivot.rotation.set(pitch, yaw, 0, 'YXZ');
    render();
  };
  const coast = () => {
    vYaw *= 0.92;
    vPitch *= 0.92;
    turn(vYaw, vPitch);
    frame = Math.abs(vYaw) + Math.abs(vPitch) > 0.0005 ? requestAnimationFrame(coast) : 0;
  };

  let last: { x: number; y: number; t: number } | null = null;
  host.addEventListener('pointerdown', (e) => {
    cancelAnimationFrame(frame);
    vYaw = vPitch = 0;
    last = { x: e.clientX, y: e.clientY, t: e.timeStamp };
    host.setPointerCapture(e.pointerId);
    host.classList.add('is-dragging');
  });
  host.addEventListener('pointermove', (e) => {
    if (!last) return;
    const dYaw = (e.clientX - last.x) * 0.01, dPitch = (e.clientY - last.y) * 0.01;
    turn(dYaw, dPitch);
    vYaw = dYaw;
    vPitch = dPitch;
    last = { x: e.clientX, y: e.clientY, t: e.timeStamp };
  });
  const release = (e: PointerEvent) => {
    if (!last) return;
    // Light inertia, unless the drag had already stopped or motion is reduced
    const still = e.timeStamp - last.t > 80;
    last = null;
    host.classList.remove('is-dragging');
    if (!reducedMotion && !still) frame = requestAnimationFrame(coast);
  };
  host.addEventListener('pointerup', release);
  host.addEventListener('pointercancel', release);
  host.addEventListener('keydown', (e) => {
    const step = MathUtils.degToRad(15);
    const keys: Record<string, [number, number]> = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
    const k = keys[e.key];
    if (!k) return;
    e.preventDefault();
    cancelAnimationFrame(frame);
    turn(...k);
  });

  new ResizeObserver(resize).observe(host);
  resize();
  /** Back to the starting pose (the drawing's frame), for a replay. */
  const reset = () => {
    cancelAnimationFrame(frame);
    yaw = pitch = vYaw = vPitch = 0;
    turn(0, 0);
  };
  return { render, reset };
}
