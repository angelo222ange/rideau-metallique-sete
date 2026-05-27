#!/usr/bin/env node
// Download all assets from roofinity.framer.website to public/template-17/

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, '..', 'public', 'template-17');

// All unique image URLs from homepage + internal pages, mapped to local destinations
const ASSETS = [
  // Bucket A — KEEP (roofing photos)
  ['https://framerusercontent.com/images/gAFQ9JmSvRkyiBdW8wQ9rCEtCg.png', 'keep/hero-roof-blue-sky.png'],
  ['https://framerusercontent.com/images/4z309hjETsnKijimSliRg0UyiZQ.png', 'keep/footer-cta-bg.png'],
  ['https://framerusercontent.com/images/Np289SBmgkHggL9v5Bo83bYd90k.jpg', 'keep/couvreur-power-drill.jpg'],
  ['https://framerusercontent.com/images/hSMD14xN2Eoqmc2kRmB7ARAAo.jpg', 'keep/two-couvreurs-roof.jpg'],
  ['https://framerusercontent.com/images/1zUOwVkjYnJhZlzdddTtxHg5jVE.png', 'keep/page-header-about.png'],
  ['https://framerusercontent.com/images/TNoEgjilSrcPGx1zF6FyUVHkas.png', 'keep/page-header-contact.png'],
  ['https://framerusercontent.com/images/cmxOg6khaf7DVVdcYo8j1hFTc.png', 'keep/page-header-service.png'],
  ['https://framerusercontent.com/images/01t3YFubdiOfCBuOLYk2AdPPMs.png', 'keep/page-header-blog.png'],
  ['https://framerusercontent.com/images/JZW27hAgYbmximnMy3IC8Z9RgY.jpeg', 'keep/page-header-service-detail.jpeg'],
  // Process section thumbs
  ['https://framerusercontent.com/images/M9OYeEQoqzXyNus8kFSLRl0mes.png', 'keep/process/step-1.png'],
  ['https://framerusercontent.com/images/dwIIz1jDLLmERH9QnSk1KTw9DuY.png', 'keep/process/step-3.png'],
  // Works gallery
  ['https://framerusercontent.com/images/mLZZeVSWGACke3SUtxKBXtvERw.png', 'keep/projects/1.png'],
  ['https://framerusercontent.com/images/62cpQ4lGkjmhM0CGycaksEBVE.png', 'keep/projects/2.png'],
  ['https://framerusercontent.com/images/E8lw8mmIO6VHzwhYGeTL6fzQOs.png', 'keep/projects/3.png'],
  ['https://framerusercontent.com/images/HCo6rUGbMzx0gsHI4KvxBRueOoE.png', 'keep/projects/4.png'],
  // Blog thumbnails
  ['https://framerusercontent.com/images/Kp3Zq2puG9coePYNdHJbJbuNzFU.jpg', 'keep/blog/1-pink-house.jpg'],
  ['https://framerusercontent.com/images/1VThzgGSjM2nfT22dxKRVaRRzw.jpg', 'keep/blog/2-brown-roof.jpg'],
  ['https://framerusercontent.com/images/JoO24jOx2pQ2qXcW66UBWySoMk.jpg', 'keep/blog/3-roof-tiles.jpg'],
  ['https://framerusercontent.com/images/ZhPMn3bRnSgmTfWlBgA6pvwryhI.png', 'keep/blog/4.png'],
  ['https://framerusercontent.com/images/0F7XC2yKrE2oGWduyyx3YqzqqD0.jpg', 'keep/blog/5-triangle-window.jpg'],
  ['https://framerusercontent.com/images/lW4Cd4OMIsOOkjvUPgkeLZIc0w0.jpg', 'keep/blog/6.jpg'],

  // Bucket B — REPLACE (generic, placeholder names)
  ['https://framerusercontent.com/images/Rrgibfii1xrLwyAYLFDO4fOcX34.jpg', 'replace/service-card-1-woman-bridge.jpg'],
  ['https://framerusercontent.com/images/3qD2F4GeCThFvqj6UV2JhonX7AA.jpg', 'replace/service-card-2-wooden-chairs.jpg'],
  ['https://framerusercontent.com/images/5BWypKs3RUtG8s4SoaUshaJyo4.jpeg', 'replace/service-card-4.jpeg'],

  // Bucket C — Avatars (review + team)
  ['https://framerusercontent.com/images/HeHP9ZxfDekCwWOAUYRrl1g4dw.png', 'avatars/reviewer-a.png'],
  ['https://framerusercontent.com/images/jHlg6zevwIrCz8B1ltPTrVhss.png', 'avatars/reviewer-b.png'],
  ['https://framerusercontent.com/images/FjXOPDqIH4yr6EfzS3fiC86Zk00.png', 'avatars/reviewer-c.png'],
  ['https://framerusercontent.com/images/CQIlpS7oknJxH0JsbXSyIFvhbfQ.png', 'avatars/team-1.png'],
  ['https://framerusercontent.com/images/SxVLAZrwqtyarRPV1WyeVM0d8.png', 'avatars/team-2.png'],
  ['https://framerusercontent.com/images/1C3cuPlzPJpjU2jvTNo2gqsvR7c.png', 'avatars/team-3.png'],
  ['https://framerusercontent.com/images/v5q3nQo17zssTSQjRkL75VgRSn0.png', 'avatars/team-4.png'],
  ['https://framerusercontent.com/images/sv8yxw1Yg9pFqPrQA96Bndyiaw.png', 'avatars/team-5.png'],
  ['https://framerusercontent.com/images/HYRii9SEWW1cvfruUXWldMk2HE.png', 'avatars/team-6.png'],

  // About section secondary
  ['https://framerusercontent.com/images/nirnzrJo1ZYgbh44faNKAJmMfo.png', 'keep/about-homepage-image.png'],
  ['https://framerusercontent.com/images/y44CQON3RvCmy26TVW1qBlHubfI.png', 'keep/about-inline.png'],
  ['https://framerusercontent.com/images/vp8nViqvnVUhWS3rcU5Kq0IFfAk.png', 'keep/about-page-main.png'],

  // SVGs — icons
  ['https://framerusercontent.com/images/wsoRk1kPwNap6wlsc5QmpCRZ8.svg', 'icons/about-logo-deco.svg'],
  ['https://framerusercontent.com/images/Jt8TNTqTi78EAe5kkqmmQYHYFc.svg', 'icons/check-1.svg'],
  ['https://framerusercontent.com/images/7VttLtafNC4kOludCiuXrh3FoM.svg', 'icons/check-2.svg'],
  ['https://framerusercontent.com/images/S6dtZ3b7g9J06DLyUXTPx6sQxjw.svg', 'icons/check-3.svg'],
  ['https://framerusercontent.com/images/WD0JjusXa7PWQgIECyJ0jHsf6bk.svg', 'icons/check-4.svg'],
  ['https://framerusercontent.com/images/mJewmwV26WVeoqkPE2B5pnqf200.svg', 'icons/arrow-services.svg'],
  ['https://framerusercontent.com/images/h1MTZWuQ0JkdAWs1cwjF5L6wWE.svg', 'icons/arrow-up-right.svg'],
  ['https://framerusercontent.com/images/bLqysM3PcVeKa7WnpjzumOY9k.svg', 'icons/arrow-detail.svg'],
  ['https://framerusercontent.com/images/RvtCSE4RFXx5xuxQpfO0opDBTQ.svg', 'icons/about-decor.svg'],
  ['https://framerusercontent.com/images/OAhJ8k8XghCiyZBlDQtefC0fjhU.svg', 'icons/area-1.svg'],
  ['https://framerusercontent.com/images/HRZt4b2x6pWI8umVUc9k9Rhfc2U.svg', 'icons/area-2.svg'],
  ['https://framerusercontent.com/images/g3rjYoZyJkLHfh2FJkc3G5p3Ek.svg', 'icons/area-3.svg'],
  ['https://framerusercontent.com/images/UxIGLDNM9gcOTj2BvTG3L0Ch0.svg', 'icons/area-4.svg'],
  ['https://framerusercontent.com/images/kredn7Xrw48CW563JeGFCCptOE.svg', 'icons/area-5.svg'],
  ['https://framerusercontent.com/images/vbFx3IaDDKouvwNxXh61tHfTwMU.svg', 'icons/area-6.svg'],

  // Brand
  ['https://framerusercontent.com/images/vx8yvB9ExRrr9R851jIwvXNHk.svg', 'brand/logo-header.svg'],
  ['https://framerusercontent.com/images/xdr0TLtt4YxPJWON5q7F93gWAPA.svg', 'brand/logo-footer.svg'],
  ['https://framerusercontent.com/images/kpb5J8qYAxIoj2zQ0VcKKDwrs.png', 'brand/favicon-source.png'],
  ['https://framerusercontent.com/images/AIxQlSCWRuH9bfT2ySR1ul7XQLg.png', 'brand/apple-touch-icon-source.png'],
];

async function downloadOne(url, dest) {
  const fullPath = path.join(PUBLIC, dest);
  await mkdir(dirname(fullPath), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(fullPath, buf);
  return { dest, bytes: buf.length };
}

async function main() {
  console.log(`Downloading ${ASSETS.length} assets to ${PUBLIC}`);
  await mkdir(PUBLIC, { recursive: true });
  const concurrency = 6;
  const results = [];
  for (let i = 0; i < ASSETS.length; i += concurrency) {
    const batch = ASSETS.slice(i, i + concurrency);
    const r = await Promise.allSettled(batch.map(([u, d]) => downloadOne(u, d)));
    r.forEach((res, j) => {
      const [u, d] = batch[j];
      if (res.status === 'fulfilled') {
        console.log(`  OK  ${d} (${(res.value.bytes / 1024).toFixed(1)} KB)`);
        results.push(res.value);
      } else {
        console.error(`  FAIL ${d}: ${res.reason.message}`);
      }
    });
  }
  console.log(`\nDone: ${results.length}/${ASSETS.length}`);
}

main().catch(e => { console.error(e); process.exit(1); });
