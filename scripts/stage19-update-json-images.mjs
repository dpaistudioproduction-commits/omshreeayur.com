#!/usr/bin/env node
/**
 * Stage 19 — Update all treatment JSON files with correct hero.backgroundImageUrl
 * Run AFTER images are downloaded to public/images/treatments/
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const dataDir = path.join(projectRoot, 'src', 'data', 'treatments');
const imagesDir = path.join(projectRoot, 'public', 'images', 'treatments');

const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));

let updated = 0;
let alreadySet = 0;
let noImage = 0;
const missing = [];

for (const file of files) {
  const slug = file.replace('.json', '');
  const jsonPath = path.join(dataDir, file);
  const imgPath = path.join(imagesDir, `${slug}.jpg`);

  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const expectedUrl = `/images/treatments/${slug}.jpg`;

  // Check if image exists and is valid (>5KB)
  const imageExists = fs.existsSync(imgPath) && fs.statSync(imgPath).size > 5000;

  if (!imageExists) {
    // Also check webp
    const webpPath = path.join(imagesDir, `${slug}.webp`);
    const webpExists = fs.existsSync(webpPath) && fs.statSync(webpPath).size > 5000;
    if (!webpExists) {
      noImage++;
      missing.push(slug);
      console.log(`  ✗ NO IMAGE: ${slug}`);
      continue;
    }
    // Use webp
    data.hero.backgroundImageUrl = `/images/treatments/${slug}.webp`;
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
    updated++;
    console.log(`  ✓ Updated (webp): ${slug}`);
    continue;
  }

  if (data.hero.backgroundImageUrl === expectedUrl) {
    alreadySet++;
    console.log(`  = Already set: ${slug}`);
    continue;
  }

  data.hero.backgroundImageUrl = expectedUrl;
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
  updated++;
  console.log(`  ✓ Updated: ${slug} → ${expectedUrl}`);
}

console.log(`\n${'='.repeat(60)}`);
console.log(`JSON IMAGE PATH UPDATE SUMMARY`);
console.log(`${'='.repeat(60)}`);
console.log(`Updated:     ${updated}`);
console.log(`Already set: ${alreadySet}`);
console.log(`No image:    ${noImage}`);
if (missing.length > 0) {
  console.log(`\nMissing images:`);
  missing.forEach(s => console.log(`  - ${s}`));
}
