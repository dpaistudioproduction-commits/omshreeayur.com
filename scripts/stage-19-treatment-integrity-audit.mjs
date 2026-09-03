#!/usr/bin/env node
/**
 * Stage 19 — Treatment Integrity Audit
 * Verifies:
 *   - 44 required treatment JSON records exist
 *   - 44 treatment images exist in /public/images/treatments/
 *   - 44 JSON files have non-empty hero.backgroundImageUrl
 *   - Image file actually exists on disk
 *   - Content is non-empty
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const REQUIRED_TREATMENTS = [
  { slug: 'gout', name: 'Gout' },
  { slug: 'fistula', name: 'Fistula' },
  { slug: 'i-v-d-p-intervertebral-disc-prolapse', name: 'I.V.D.P.' },
  { slug: 'vitiligo', name: 'Vitiligo' },
  { slug: 'copd-chronic-obstructive-pulmonary-disease', name: 'COPD' },
  { slug: 'other-treatments', name: 'Other Treatments' },
  { slug: 'polycystic-ovarian-disease-pcod', name: 'PCOD' },
  { slug: 'stress-management', name: 'Stress Management' },
  { slug: 'kidney-problems', name: 'Kidney Problems' },
  { slug: 'snoring', name: 'Snoring' },
  { slug: 'fatty-liver', name: 'Fatty Liver' },
  { slug: 'rasayana-and-vajikarana-science-of-aphrodisicas', name: 'Rasayana' },
  { slug: 'strokeparalysiscva', name: 'Stroke/Paralysis/CVA' },
  { slug: 'hair-loss', name: 'Hair Loss' },
  { slug: 'infertility', name: 'Infertility' },
  { slug: 'varicose-ulcers', name: 'Varicose Ulcers' },
  { slug: 'varicose-veins', name: 'Varicose Veins' },
  { slug: 'cancer-and-tumor-management', name: 'Cancer and Tumor Management' },
  { slug: 'cholesterol', name: 'Cholesterol' },
  { slug: 'hepatitis-a-jaundice-b-and-c', name: 'Hepatitis' },
  { slug: 'weight-loss', name: 'Weight Loss' },
  { slug: 'piles', name: 'Piles' },
  { slug: 'dandruff', name: 'Dandruff' },
  { slug: 'diabetes-mellitus', name: 'Diabetes Mellitus' },
  { slug: 'ankylosing-spondylitis', name: 'Ankylosing Spondylitis' },
  { slug: 'blood-pressure', name: 'Blood Pressure' },
  { slug: 'acidity', name: 'Acidity' },
  { slug: 'sciatica', name: 'Sciatica' },
  { slug: 'tennis-elbow', name: 'Tennis Elbow' },
  { slug: 'recurrent-cold', name: 'Recurrent Cold' },
  { slug: 'sneezing-treatment', name: 'Sneezing Treatment' },
  { slug: 'obesity', name: 'Obesity' },
  { slug: 'calcaneal-spur', name: 'Calcaneal Spur' },
  { slug: 'frozen-shoulder', name: 'Frozen Shoulder' },
  { slug: 'sleep-apnea', name: 'Sleep Apnea' },
  { slug: 'sinusitis-treatment', name: 'Sinusitis Treatment' },
  { slug: 'vertigo', name: 'Vertigo' },
  { slug: 'osteoarthritis-knee-pain', name: 'Osteoarthritis' },
  { slug: 'rheumatoid-arthritis', name: 'Rheumatoid Arthritis' },
  { slug: 'migraine', name: 'Migraine' },
  { slug: 'cervical-lumbar-spondylosis', name: 'Cervical/Lumbar Spondylosis' },
  { slug: 'heart-disease-and-blocks', name: 'Heart Disease and Blocks' },
  { slug: 'eczema', name: 'Eczema' },
  { slug: 'psoriasis', name: 'Psoriasis' },
];

const dataDir = path.join(projectRoot, 'src', 'data', 'treatments');
const imagesDir = path.join(projectRoot, 'public', 'images', 'treatments');

let pass = 0;
let fail = 0;
const issues = [];

function check(label, condition, detail = '') {
  if (condition) {
    pass++;
    return true;
  } else {
    fail++;
    issues.push(`  ✗ ${label}${detail ? ': ' + detail : ''}`);
    return false;
  }
}

console.log('Stage 19 — Treatment Integrity Audit');
console.log('='.repeat(60));
console.log('');

for (const { slug, name } of REQUIRED_TREATMENTS) {
  const jsonPath = path.join(dataDir, `${slug}.json`);
  const imgPath = path.join(imagesDir, `${slug}.jpg`);
  const imgPathWebp = path.join(imagesDir, `${slug}.webp`);

  console.log(`Checking: ${name} (${slug})`);

  // 1. JSON file exists
  if (!check(`JSON exists`, fs.existsSync(jsonPath), slug)) {
    issues.push(`    → Missing: src/data/treatments/${slug}.json`);
    continue;
  }

  // 2. Parse JSON
  let data;
  try {
    data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  } catch (e) {
    check(`JSON valid`, false, `${slug} — parse error: ${e.message}`);
    continue;
  }

  // 3. Name correct
  check(`Name non-empty`, !!data.name && data.name.length > 0, slug);

  // 4. Content non-empty
  const hasContent = (data.contentHtml && data.contentHtml.length > 100) ||
    (data.quickAnswer && data.quickAnswer.length > 20);
  check(`Content non-empty (>100 chars)`, hasContent, `${slug} — contentHtml: ${(data.contentHtml || '').length} chars`);

  // 5. backgroundImageUrl set
  const imgUrlSet = !!data.hero?.backgroundImageUrl && data.hero.backgroundImageUrl.length > 1;
  check(`hero.backgroundImageUrl set`, imgUrlSet, slug);

  // 6. Image file exists
  const jpgExists = fs.existsSync(imgPath) && fs.statSync(imgPath).size > 5000;
  const webpExists = fs.existsSync(imgPathWebp) && fs.statSync(imgPathWebp).size > 5000;
  check(`Image file exists`, jpgExists || webpExists, `${slug}.jpg (${jpgExists ? fs.statSync(imgPath).size + 'B' : 'missing'})`);

  // 7. backgroundImageUrl matches actual file
  if (imgUrlSet && (jpgExists || webpExists)) {
    const urlFile = data.hero.backgroundImageUrl.split('/').pop();
    const actualFile = jpgExists ? `${slug}.jpg` : `${slug}.webp`;
    check(`Image URL matches file`, urlFile === actualFile, `URL=${urlFile}, file=${actualFile}`);
  }
}

// Summary
console.log('');
console.log('='.repeat(60));
console.log('AUDIT RESULTS');
console.log('='.repeat(60));
console.log(`PASS: ${pass}`);
console.log(`FAIL: ${fail}`);
console.log(`Total checks: ${pass + fail}`);

if (issues.length > 0) {
  console.log('');
  console.log('ISSUES FOUND:');
  issues.forEach(i => console.log(i));
}

// Check ALL treatment files (not just required 44)
console.log('');
console.log('='.repeat(60));
console.log('ALL TREATMENT FILES');
console.log('='.repeat(60));
const allFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
console.log(`Total JSON files: ${allFiles.length}`);

const allImgs = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg') || f.endsWith('.webp'));
console.log(`Total image files: ${allImgs.length}`);

// Treatments without images
const slugsWithImages = new Set(allImgs.map(f => f.replace(/\.(jpg|webp)$/, '')));
const missingImgs = allFiles
  .map(f => f.replace('.json', ''))
  .filter(s => !slugsWithImages.has(s));

if (missingImgs.length > 0) {
  console.log(`\nTreatments missing images (${missingImgs.length}):`);
  missingImgs.forEach(s => console.log(`  - ${s}`));
} else {
  console.log('\n✓ All treatments have images');
}

console.log('');
if (fail === 0) {
  console.log('✅ ALL CHECKS PASSED — Stage 19 audit complete');
} else {
  console.log(`❌ ${fail} checks FAILED — see issues above`);
  process.exit(1);
}
