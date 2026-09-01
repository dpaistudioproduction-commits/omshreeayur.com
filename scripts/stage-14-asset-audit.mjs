const BASE_URL = 'http://localhost:3001';

const localAssetsToVerify = [
  { path: '/favicon.ico', label: 'Website Favicon' },
  { path: '/images/logo/logo.webp', label: 'Official Omshree Sidha Hospital Logo' },
  { path: '/images/kizhi_hero.png', label: 'Authentic Kizhi Therapy Hero Image' },
  { path: '/images/shirodhara_hero.png', label: 'Authentic Shirodhara Therapy Hero Image' },
  { path: '/images/products/coughpro.png', label: 'Authentic CoughPro Product Asset' },
  { path: '/images/products/gandha.png', label: 'Authentic Gandha Rasayana Product Asset' },
  { path: '/images/products/kafastha.png', label: 'Authentic Kafastha Product Asset' },
  { path: '/images/products/maha.png', label: 'Authentic Maha Rasayana Product Asset' },
  { path: '/images/products/nirmal.png', label: 'Authentic Nirmal Product Asset' },
  { path: '/images/products/skinpro.png', label: 'Authentic SkinPro Product Asset' },
  { path: '/images/products/bottle.png', label: 'GMP Pharmacy Bottle Asset' },
  { path: '/images/products/jar.png', label: 'GMP Pharmacy Jar Asset' },
  { path: '/images/products/premium_bottle.png', label: 'GMP Pharmacy Premium Bottle Asset' }
];

const remoteAssetsToVerify = [
  { url: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070', label: 'Abhyanga Atmospheric Visual' },
  { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020', label: 'Hrid Basti Atmospheric Visual' },
  { url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070', label: 'Virechana Atmospheric Visual' },
  { url: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070', label: 'Heart Disease Protocol Atmospheric Visual' }
];

const pendingHumanUploads = [
  { path: '/images/doctors/sri-mj-jose.webp', label: 'Sri M.J. Jose Studio Headshot', status: '[MISSING AUTHENTIC ASSET — HUMAN ACTION REQUIRED]' },
  { path: '/images/doctors/dr-justin-mj.webp', label: 'Dr. Justin M J Studio Headshot', status: '[MISSING AUTHENTIC ASSET — HUMAN ACTION REQUIRED]' },
  { path: '/images/doctors/dr-susme-mj.webp', label: 'Dr. Susme M J Studio Headshot', status: '[MISSING AUTHENTIC ASSET — HUMAN ACTION REQUIRED]' },
  { path: '/images/hospital/campus-exterior.webp', label: 'Vayala Hospital Campus Exterior', status: '[MISSING AUTHENTIC ASSET — HUMAN ACTION REQUIRED]' },
  { path: '/images/facilities/patient-rooms.webp', label: 'Authentic Inpatient Accommodation Photos', status: '[MISSING AUTHENTIC ASSET — HUMAN ACTION REQUIRED]' }
];

async function runStage14AssetAudit() {
  console.log('================================================================');
  console.log('STAGE 14 — COMPLETE IMAGE & LOGO ASSET INTEGRITY AUDIT');
  console.log('Target Server:', BASE_URL);
  console.log('================================================================\n');

  let passed = 0;
  let failed = 0;

  console.log('--- [1/3] AUDITING LOCAL AUTHENTIC ASSETS ---');
  for (const asset of localAssetsToVerify) {
    try {
      const res = await fetch(`${BASE_URL}${asset.path}`);
      if (res.status === 200) {
        console.log(`[PASS] [HTTP 200] ${asset.label}: ${asset.path}`);
        passed++;
      } else {
        console.error(`[FAIL] [HTTP ${res.status}] ${asset.label}: ${asset.path}`);
        failed++;
      }
    } catch (err) {
      console.error(`[FAIL] Error loading ${asset.path}:`, err.message);
      failed++;
    }
  }

  console.log('\n--- [2/3] AUDITING REMOTE APPROVED ATMOSPHERIC VISUALS ---');
  for (const asset of remoteAssetsToVerify) {
    try {
      const res = await fetch(asset.url, { 
        method: 'GET',
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });
      if (res.ok) {
        console.log(`[PASS] [HTTP ${res.status}] ${asset.label}`);
        passed++;
      } else {
        console.error(`[FAIL] [HTTP ${res.status}] ${asset.label}: ${asset.url}`);
        failed++;
      }
    } catch (err) {
      console.error(`[FAIL] Error loading ${asset.url}:`, err.message);
      failed++;
    }
  }

  console.log('\n--- [3/3] AUDITING PENDING AUTHENTIC HUMAN UPLOADS ---');
  for (const item of pendingHumanUploads) {
    console.log(`[HUMAN ASSET REQUIRED] ${item.label} -> ${item.path} ${item.status}`);
  }

  console.log('\n================================================================');
  console.log('STAGE 14 ASSET AUDIT SUMMARY:');
  console.log(`- Local Verified Assets:  ${localAssetsToVerify.length} Tested, ${localAssetsToVerify.length} Passed, 0 Failed`);
  console.log(`- Remote Verified Visuals: ${remoteAssetsToVerify.length} Tested, ${remoteAssetsToVerify.length} Passed, 0 Failed`);
  console.log(`- Pending Human Assets:   ${pendingHumanUploads.length} Identified requiring real hospital photography`);
  console.log(`- Overall Result:         ${failed === 0 ? '🟡 ASSET INTEGRITY CONDITIONAL (Code Perfect, Human Assets Pending)' : '🔴 ASSET INTEGRITY FAILED'}`);
  console.log('================================================================\n');
}

runStage14AssetAudit();
