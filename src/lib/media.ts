// Where the demo videos live: the "static" R2 bucket behind static.nicraft.co. Files are immutable and named
// by content (<name>-<first 12 hex of sha256>.mp4), so a new recording is a new name, never a replacement.
export const MEDIA_BASE = 'https://static.nicraft.co/tangent/videos/';
