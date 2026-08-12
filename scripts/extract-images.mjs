// One-time migration script: pulls the 34 unique base64 JPEGs embedded in the
// original index.html out into real files under public/images/.
// Run with: node scripts/extract-images.mjs

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

const ROOM_SLUGS = {
  "The Stylish Boho": "stylish-boho",
  "Trendy Terracotta Nest": "terracotta-nest",
  "The Olive Room": "olive-room",
  "The Rainforest Suite": "rainforest-suite",
  "Birdsong Nature Stylish": "birdsong-nature",
};

function sha256(b64) {
  return crypto.createHash("sha256").update(b64).digest("hex");
}

function decodeAndValidateJpeg(b64, label) {
  const buf = Buffer.from(b64, "base64");
  if (!(buf[0] === 0xff && buf[1] === 0xd8)) {
    throw new Error(`${label}: missing JPEG SOI marker`);
  }
  if (!(buf[buf.length - 2] === 0xff && buf[buf.length - 1] === 0xd9)) {
    throw new Error(`${label}: missing JPEG EOI marker`);
  }
  return buf;
}

// --- 0. Sanity ceiling: every base64 literal in the document ---
const ALL_RE = /data:image\/jpeg;base64,([A-Za-z0-9+/=]+)/g;
const allMatches = [...html.matchAll(ALL_RE)];
if (allMatches.length !== 50) {
  throw new Error(`expected 50 base64 literal occurrences, found ${allMatches.length}`);
}

// --- 1. Host avatars ---
const HOST_RE =
  /id="hostBtn-(nigel|amelia)"[\s\S]*?<img src="data:image\/jpeg;base64,([A-Za-z0-9+/=]+)" alt="([^"]*)"/g;
const hostMatches = [...html.matchAll(HOST_RE)];
if (hostMatches.length !== 2) {
  throw new Error(`expected 2 host avatar matches, found ${hostMatches.length}`);
}

// --- 2. Room cover photos ---
const COVER_RE =
  /data-room="([^"]+)"[^>]*>\s*<img src="data:image\/jpeg;base64,([A-Za-z0-9+/=]+)" alt="([^"]*)"/g;
const coverMatches = [...html.matchAll(COVER_RE)];
if (coverMatches.length !== 5) {
  throw new Error(`expected 5 room cover matches, found ${coverMatches.length}`);
}

// --- 3. Guest gallery: 32 occurrences (16 unique, then 16 duplicated for the marquee loop) ---
const GUEST_RE =
  /<div class="guest-photo-card"><img src="data:image\/jpeg;base64,([A-Za-z0-9+/=]+)" alt="([^"]*)"[^>]*><\/div>/g;
const guestMatches = [...html.matchAll(GUEST_RE)];
if (guestMatches.length !== 32) {
  throw new Error(`expected 32 guest photo occurrences, found ${guestMatches.length}`);
}
const first16 = guestMatches.slice(0, 16);
const second16 = guestMatches.slice(16, 32);
first16.forEach((m, i) => {
  if (sha256(m[1]) !== sha256(second16[i][1])) {
    throw new Error(`guest photo ${i} duplicate set does not match first set`);
  }
});
const uniqueGuestHashes = new Set(first16.map((m) => sha256(m[1])));
if (uniqueGuestHashes.size !== 16) {
  throw new Error(`expected 16 unique guest photo hashes, found ${uniqueGuestHashes.size}`);
}

// --- 4. Shared kitchen photo (JS constant) ---
const KITCHEN_RE = /const kitchenPhoto = "data:image\/jpeg;base64,([A-Za-z0-9+/=]+)"/;
const kitchenMatch = html.match(KITCHEN_RE);
if (!kitchenMatch) {
  throw new Error("kitchenPhoto constant not found");
}

// --- 5. Per-room extra photos (JS object literal, 2 images per room) ---
const EXTRA_RE =
  /"([^"]+)":\s*\["data:image\/jpeg;base64,([A-Za-z0-9+/=]+)",\s*"data:image\/jpeg;base64,([A-Za-z0-9+/=]+)",\s*kitchenPhoto\]/g;
const extraMatches = [...html.matchAll(EXTRA_RE)];
if (extraMatches.length !== 5) {
  throw new Error(`expected 5 extraPhotos entries, found ${extraMatches.length}`);
}

// --- Write files ---
const outDir = path.join(root, "public", "images");
const written = new Map(); // relPath -> sha256
const manifest = [];

function writeImage(relPath, b64) {
  const buf = decodeAndValidateJpeg(b64, relPath);
  const hash = sha256(b64);
  if (written.has(relPath)) {
    if (written.get(relPath) !== hash) {
      throw new Error(`${relPath} written twice with different content`);
    }
    return;
  }
  const fullPath = path.join(outDir, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, buf);
  written.set(relPath, hash);
  manifest.push({ path: `images/${relPath.replace(/\\/g, "/")}`, sha256: hash, bytes: buf.length });
}

for (const [, key, b64] of hostMatches) {
  writeImage(`hosts/${key}.jpg`, b64);
}

for (const [, roomName, b64] of coverMatches) {
  const slug = ROOM_SLUGS[roomName];
  if (!slug) throw new Error(`unknown room name in cover match: ${roomName}`);
  writeImage(`rooms/${slug}/cover.jpg`, b64);
}

writeImage(`kitchen/shared-kitchen.jpg`, kitchenMatch[1]);

for (const [, roomName, b64a, b64b] of extraMatches) {
  const slug = ROOM_SLUGS[roomName];
  if (!slug) throw new Error(`unknown room name in extraPhotos match: ${roomName}`);
  writeImage(`rooms/${slug}/extra-1.jpg`, b64a);
  writeImage(`rooms/${slug}/extra-2.jpg`, b64b);
}

first16.forEach((m, i) => {
  const num = String(i + 1).padStart(2, "0");
  writeImage(`guests/guest-${num}.jpg`, m[1]);
});

if (written.size !== 34) {
  throw new Error(`expected 34 unique files written, wrote ${written.size}`);
}

manifest.sort((a, b) => a.path.localeCompare(b.path));
fs.writeFileSync(
  path.join(__dirname, "extract-images.manifest.json"),
  JSON.stringify(manifest, null, 2) + "\n"
);

console.log(`Wrote ${written.size} images to public/images/`);
console.log(`Manifest written to scripts/extract-images.manifest.json`);
