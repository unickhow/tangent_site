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
