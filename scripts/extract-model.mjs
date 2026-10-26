// Copies a model's final mesh out of a saved Tangent project into src/data/, for the
// reference-image demo. Reads the project only. Usage:
//   node scripts/extract-model.mjs "<path to project .json>" src/data/mandarin.json
import { readFileSync, writeFileSync } from 'node:fs';

const [src, out] = process.argv.slice(2);
const tab = JSON.parse(readFileSync(src, 'utf8')).tab;
const r = (n) => Math.round(n * 100) / 100;
const parts = tab.agentModel.geometry.parts.map((p) => ({
  color: p.color,
  size: p.size,
  // Positions are in view space (Y up); the stored normal is in CAD space (Z up): (x, y, z) → (x, z, -y)
  // One entry per triangle: a face's `indices` triangulate its `positions` (curved faces have many)
  faces: p.faces.flatMap((f) => {
    const n = [f.normal[0], f.normal[2], -f.normal[1]].map(r);
    const tris = [];
    for (let i = 0; i < f.indices.length; i += 3) {
      // e: the triangle is the whole face, so its sides are real model edges
      tris.push({ p: f.indices.slice(i, i + 3).flatMap((k) => f.positions.slice(3 * k, 3 * k + 3)).map(r), n, e: f.indices.length === 3 ? 1 : 0 });
    }
    return tris;
  }),
}));
writeFileSync(out, JSON.stringify({ versions: tab.snapshots.length, parts }) + '\n');
console.log(`Wrote ${out}: ${parts.map((p) => p.faces.length).join('+')} triangles, ${tab.snapshots.length} versions`);
