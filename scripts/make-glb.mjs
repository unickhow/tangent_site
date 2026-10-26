// Packs the extracted mesh (src/data/mandarin.json) into a minimal GLB for the desktop 3D viewer:
// one mesh, positions only (the viewer shades flat), triangles wound to face outward, plus the
// model's facet edges as lines: the sides of every face that is a single triangle, the same edges
// the fallback drawing strokes.
// Usage: node scripts/make-glb.mjs src/data/mandarin.json public/ref/mandarin.glb
import { readFileSync, writeFileSync } from 'node:fs';

const [src, out] = process.argv.slice(2);
const { parts } = JSON.parse(readFileSync(src, 'utf8'));
const pos = [];
const edges = new Map();
for (const { p, n, e } of parts[0].faces) {
  const [a, b, c] = [0, 3, 6].map((i) => p.slice(i, i + 3));
  const u = b.map((v, i) => v - a[i]), v = c.map((w, i) => w - a[i]);
  const cross = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
  if (Math.hypot(...cross) < 1e-9) continue; // degenerate
  if (e === 1) {
    for (const [s, t] of [[a, b], [b, c], [c, a]]) {
      const key = [s.join(), t.join()].sort().join('|');
      if (!edges.has(key)) edges.set(key, [...s, ...t]);
    }
  }
  // Counter-clockwise seen from outside, so front-face culling and lighting agree with the stored normal
  pos.push(...(cross[0] * n[0] + cross[1] * n[1] + cross[2] * n[2] < 0 ? [...a, ...c, ...b] : [...a, ...b, ...c]));
}
const lines = [...edges.values()].flat();
const posBin = Buffer.from(new Float32Array(pos).buffer);
const lineBin = Buffer.from(new Float32Array(lines).buffer);
const bin = Buffer.concat([posBin, lineBin]);
const bounds = (v) => [0, 1, 2].map((k) => v.filter((_, i) => i % 3 === k)).map((a) => [Math.min(...a), Math.max(...a)]);
const accessor = (view, v) => {
  const b = bounds(v);
  return { bufferView: view, componentType: 5126, count: v.length / 3, type: 'VEC3', min: b.map((x) => x[0]), max: b.map((x) => x[1]) };
};
const json = {
  asset: { version: '2.0', generator: 'tangent_site make-glb' },
  scene: 0,
  scenes: [{ nodes: [0, 1] }],
  nodes: [{ mesh: 0, name: 'mandarin' }, { mesh: 1, name: 'edges' }],
  meshes: [{ primitives: [{ attributes: { POSITION: 0 } }] }, { primitives: [{ attributes: { POSITION: 1 }, mode: 1 }] }],
  accessors: [accessor(0, pos), accessor(1, lines)],
  bufferViews: [
    { buffer: 0, byteOffset: 0, byteLength: posBin.length, target: 34962 },
    { buffer: 0, byteOffset: posBin.length, byteLength: lineBin.length, target: 34962 },
  ],
  buffers: [{ byteLength: bin.length }],
};
const pad = (b, fill) => Buffer.concat([b, Buffer.alloc((4 - (b.length % 4)) % 4, fill)]);
const jsonChunk = pad(Buffer.from(JSON.stringify(json)), 0x20);
const binChunk = pad(bin, 0);
const header = Buffer.alloc(12);
header.writeUInt32LE(0x46546c67, 0); // glTF
header.writeUInt32LE(2, 4);
header.writeUInt32LE(12 + 8 + jsonChunk.length + 8 + binChunk.length, 8);
const chunk = (type, data) => { const h = Buffer.alloc(8); h.writeUInt32LE(data.length, 0); h.writeUInt32LE(type, 4); return Buffer.concat([h, data]); };
writeFileSync(out, Buffer.concat([header, chunk(0x4e4f534a, jsonChunk), chunk(0x004e4942, binChunk)]));
console.log(`Wrote ${out}: ${pos.length / 9} triangles, ${lines.length / 6} edges`);
