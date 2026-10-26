// One definition of how the reference model is seen, shared by the build-time drawing
// (RefMock.astro, the fallback everyone gets) and the desktop viewer (viewer.ts), so the swap
// from one to the other is pixel-for-pixel invisible. Direction and field of view follow the
// app's project cards (tangent/src/lib/thumbnail.ts).
import { MathUtils, PerspectiveCamera, Vector3 } from 'three';

export const VIEW = {
  fov: 28,
  aspect: 4 / 3, // the stage box is fixed at this ratio; the SVG viewBox is 400 × 300
  fit: 0.74, // camera distance as a share of "bounding sphere just fills the height"
  ambient: 0.58,
  diffuse: 0.42,
  edge: { rgb: [42, 20, 8] as const, alpha: 0.45 },
  width: 400,
  height: 300,
};

export const DIRECTION = new Vector3(1, 0.72, 1.18).normalize();
/** Fixed in the world, so turning the model moves its shading like a real object. */
export const LIGHT = new Vector3(DIRECTION.x - 0.5, DIRECTION.y + 1, DIRECTION.z).normalize();

/** The camera both renderers use, for a model centred on the origin. */
export function makeCamera(radius: number) {
  const camera = new PerspectiveCamera(VIEW.fov, VIEW.aspect, radius * 0.1, radius * 20);
  const distance = (radius / Math.sin(MathUtils.degToRad(VIEW.fov / 2))) * VIEW.fit;
  camera.position.copy(DIRECTION).multiplyScalar(distance);
  camera.lookAt(0, 0, 0);
  camera.updateMatrixWorld();
  camera.updateProjectionMatrix();
  return camera;
}

/** Flat shade for a face normal (world space), 0–1, applied to the sRGB base colour. */
export const shade = (n: Vector3) => VIEW.ambient + VIEW.diffuse * Math.max(0, n.dot(LIGHT));

/** Colours from the icon (tangent/design/icon/mandarin.cjs): stem, and each leaf's lit green. */
export const REGION_COLOR = { stem: '#5A3210', leafLeft: '#6DB845', leafRight: '#86C957' } as const;
export type Region = 'body' | keyof typeof REGION_COLOR;

// The model's own construction (the project's build123d code): body up to 57 mm, a cone and a
// cylinder tilted 10° about the depth axis for the stem, a leaf either side above 56 mm.
const BODY_TOP = 57, STEM_FROM = 52.5, STEM_REACH = 4.7, LEAF_FROM = 55.5;
const TILT = MathUtils.degToRad(10);
/** Horizontal distance from the stem: its upright cone or its tilted cylinder, whichever is nearer. */
const stemDistance = (x: number, y: number, z: number) => {
  const upright = Math.hypot(x, z);
  const along = (y - (BODY_TOP - 3)) / Math.cos(TILT);
  const tilted = Math.hypot(x - Math.sin(TILT) * along, z);
  return Math.min(upright, tilted);
};

/** Which part of the mandarin a triangle (9 numbers, view space, Y up, uncentred) belongs to. */
export function regionOf(p: ArrayLike<number>): Region {
  const ys = [p[1], p[4], p[7]];
  const minY = Math.min(...ys);
  const cx = (p[0] + p[3] + p[6]) / 3;
  const near = [0, 3, 6].every((i) => stemDistance(p[i], p[i + 1], p[i + 2]) <= STEM_REACH);
  if (minY >= STEM_FROM && near) return 'stem';
  // Leaf faces fan out from the stem to the ridge, so any corner reaching past the stem marks a leaf
  if (minY >= LEAF_FROM) return cx < 0 ? 'leafLeft' : 'leafRight';
  return 'body';
}
