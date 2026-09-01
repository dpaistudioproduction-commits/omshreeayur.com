const BASE_URL = 'http://localhost:3001';

async function runStage13ApiAudit() {
  console.log('====================================================');
  console.log('STAGE 13 — API & LEAD CAPTURE HARDENING AUDIT');
  console.log('Target:', `${BASE_URL}/api/enquiry`);
  console.log('====================================================\n');

  let passed = 0;
  let failed = 0;

  async function assertTest(name, condition, details = '') {
    if (condition) {
      console.log(`[PASS] ${name} ${details}`);
      passed++;
    } else {
      console.error(`[FAIL] ${name} ${details}`);
      failed++;
    }
  }

  // 1. Unsupported GET method (Expect 405)
  try {
    const res = await fetch(`${BASE_URL}/api/enquiry`, { method: 'GET' });
    await assertTest('Unsupported HTTP Method (GET) returns 405', res.status === 405);
  } catch (err) {
    await assertTest('Unsupported HTTP Method (GET)', false, err.message);
  }

  // 2. Unsupported PUT method (Expect 405)
  try {
    const res = await fetch(`${BASE_URL}/api/enquiry`, { method: 'PUT' });
    await assertTest('Unsupported HTTP Method (PUT) returns 405', res.status === 405);
  } catch (err) {
    await assertTest('Unsupported HTTP Method (PUT)', false, err.message);
  }

  // 3. Malformed JSON (Expect 400)
  try {
    const res = await fetch(`${BASE_URL}/api/enquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{ malformed json string !!'
    });
    await assertTest('Malformed JSON returns 400 Bad Request', res.status === 400);
  } catch (err) {
    await assertTest('Malformed JSON test', false, err.message);
  }

  // 4. Missing Patient Type (Expect 400)
  try {
    const res = await fetch(`${BASE_URL}/api/enquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Test Patient',
        email: 'test@example.com',
        phone: '+91 98469 11111',
        healthConcern: 'General Consultation'
      })
    });
    const data = await res.json();
    await assertTest('Missing patientType returns 400', res.status === 400 && data.fieldErrors?.patientType);
  } catch (err) {
    await assertTest('Missing patientType test', false, err.message);
  }

  // 5. Malformed Email (Expect 400)
  try {
    const res = await fetch(`${BASE_URL}/api/enquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        patientType: 'domestic',
        fullName: 'Test Patient',
        email: 'invalid-email-format',
        phone: '+91 98469 11111',
        healthConcern: 'Cardiac Assessment'
      })
    });
    const data = await res.json();
    await assertTest('Malformed email returns 400 with email error', res.status === 400 && data.fieldErrors?.email);
  } catch (err) {
    await assertTest('Malformed email test', false, err.message);
  }

  // 6. Insufficient Phone Digits (Expect 400)
  try {
    const res = await fetch(`${BASE_URL}/api/enquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        patientType: 'domestic',
        fullName: 'Test Patient',
        email: 'patient@example.com',
        phone: '123',
        healthConcern: 'Cardiac Assessment'
      })
    });
    const data = await res.json();
    await assertTest('Insufficient phone digits returns 400', res.status === 400 && data.fieldErrors?.phone);
  } catch (err) {
    await assertTest('Insufficient phone test', false, err.message);
  }

  // 7. Missing Health Concern (Expect 400)
  try {
    const res = await fetch(`${BASE_URL}/api/enquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        patientType: 'domestic',
        fullName: 'Test Patient',
        email: 'patient@example.com',
        phone: '+91 98469 11111',
        healthConcern: ''
      })
    });
    const data = await res.json();
    await assertTest('Missing healthConcern returns 400', res.status === 400 && data.fieldErrors?.healthConcern);
  } catch (err) {
    await assertTest('Missing health concern test', false, err.message);
  }

  // 8. International Patient Missing Country (Expect 400)
  try {
    const res = await fetch(`${BASE_URL}/api/enquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        patientType: 'international',
        fullName: 'International Patient',
        email: 'intl@example.com',
        phone: '+44 7700 900123',
        healthConcern: 'Ayurvedic Treatment Inquiry',
        country: ''
      })
    });
    const data = await res.json();
    await assertTest('International enquiry missing country returns 400', res.status === 400 && data.fieldErrors?.country);
  } catch (err) {
    await assertTest('International missing country test', false, err.message);
  }

  // 9. Honeypot Trigger (Expect 200 with discarded ID, no email dispatch)
  try {
    const res = await fetch(`${BASE_URL}/api/enquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        patientType: 'domestic',
        fullName: 'Bot Spammer',
        email: 'bot@spam.com',
        phone: '+91 99999 99999',
        healthConcern: 'Spam backlinks',
        website: 'https://spam-site.com'
      })
    });
    const data = await res.json();
    await assertTest('Honeypot field safely neutralizes bot (200 OK + Discarded ID)', res.status === 200 && data.leadId === 'HONEYPOT-DISCARDED');
  } catch (err) {
    await assertTest('Honeypot test', false, err.message);
  }

  // 10. Valid Domestic Request (Expect 200 OK + Valid Lead ID)
  try {
    const res = await fetch(`${BASE_URL}/api/enquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        patientType: 'domestic',
        fullName: 'Suresh Menon',
        email: 'suresh.menon@example.com',
        phone: '+91 98469 55555',
        state: 'Kerala',
        city: 'Ernakulam',
        healthConcern: 'Low EF Cardiac Supportive Care Consultation',
        message: 'Looking for a preliminary residential consultation appointment.'
      })
    });
    const data = await res.json();
    await assertTest('Valid Domestic Enquiry returns 200 OK with LEAD ID', res.status === 200 && data.success && data.leadId?.startsWith('LEAD-'));
  } catch (err) {
    await assertTest('Valid Domestic test', false, err.message);
  }

  // 11. Valid International Request (Expect 200 OK + Valid Lead ID)
  try {
    const res = await fetch(`${BASE_URL}/api/enquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        patientType: 'international',
        fullName: 'Michael Weber',
        email: 'm.weber@example.de',
        phone: '+49 170 1234567',
        country: 'Germany',
        healthConcern: 'Fatty Liver & Metabolic Health Inpatient Treatment',
        message: 'Seeking guidance on Cochin Airport transfer and length of stay.'
      })
    });
    const data = await res.json();
    await assertTest('Valid International Enquiry returns 200 OK with LEAD ID', res.status === 200 && data.success && data.leadId?.startsWith('LEAD-'));
  } catch (err) {
    await assertTest('Valid International test', false, err.message);
  }

  console.log('\n====================================================');
  console.log(`STAGE 13 API AUDIT SUMMARY: ${passed} Passed, ${failed} Failed.`);
  console.log('====================================================\n');
}

runStage13ApiAudit();
