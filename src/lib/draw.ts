// Small geometry helpers for the site's line drawings. Everything is computed at build time
// and lands in the HTML as plain SVG paths.

export type Pt = [number, number];

const C = Math.cos(Math.PI / 6);
const S = Math.sin(Math.PI / 6);

/** Isometric projection: x runs right-down, y runs left-down, z runs up. */
export const iso = (x: number, y: number, z: number): Pt => [(x - y) * C, (x + y) * S - z];

export const poly = (pts: Pt[]) => 'M' + pts.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join('L') + 'Z';

export function viewBox(pts: Pt[], pad = 8) {
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  const x0 = Math.min(...xs) - pad;
  const y0 = Math.min(...ys) - pad;
  return `${x0.toFixed(1)} ${y0.toFixed(1)} ${(Math.max(...xs) + pad - x0).toFixed(1)} ${(Math.max(...ys) + pad - y0).toFixed(1)}`;
}

export interface Face { d: string; kind: 'top' | 'left' | 'right' }

/** The three faces of an axis-aligned box that face an isometric viewer. */
export function isoBox(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): Face[] {
  return [
    { kind: 'right', d: poly([iso(x1, y0, z0), iso(x1, y1, z0), iso(x1, y1, z1), iso(x1, y0, z1)]) },
    { kind: 'left', d: poly([iso(x0, y1, z0), iso(x1, y1, z0), iso(x1, y1, z1), iso(x0, y1, z1)]) },
    { kind: 'top', d: poly([iso(x0, y0, z1), iso(x1, y0, z1), iso(x1, y1, z1), iso(x0, y1, z1)]) },
  ];
}

/** A horizontal circle (hole) seen in isometric. */
export function isoCircle(cx: number, cy: number, z: number, r: number, n = 20) {
  return poly(Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return iso(cx + r * Math.cos(a), cy + r * Math.sin(a), z);
  }));
}

/** Simplified spur gear outline: trapezoid teeth, outward for external gears, inward for a ring. */
export function gear(cx: number, cy: number, teeth: number, module: number, phase = 0, internal = false) {
  const r = (module * teeth) / 2;
  const tip = internal ? r - module : r + module;
  const root = internal ? r + 1.25 * module : r - 1.25 * module;
  const step = (Math.PI * 2) / teeth;
  const pts: Pt[] = [];
  for (let i = 0; i < teeth; i++) {
    const a = i * step + phase;
    const at = (rad: number, f: number): Pt => [cx + rad * Math.cos(a + f * step), cy + rad * Math.sin(a + f * step)];
    pts.push(at(root, 0), at(tip, 0.16), at(tip, 0.34), at(root, 0.5));
  }
  return poly(pts);
}

export function circle(cx: number, cy: number, r: number) {
  return `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`;
}
