#!/usr/bin/env python3
"""
Stage 18b — Download CSS background images for all treatment pages.
The archived WordPress site uses CSS background-image for treatment hero images.
"""

import requests
import re
import os
import time

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

TREATMENTS = [
    ("gout", "https://web.archive.org/web/20250324102613/https://omshreeayur.com/treatments/gout/"),
    ("fistula", "https://web.archive.org/web/20250424154554/https://omshreeayur.com/treatments/fistula/"),
    ("i-v-d-p-intervertebral-disc-prolapse", "https://web.archive.org/web/20250324105237/https://omshreeayur.com/treatments/i-v-d-p-intervertebral-disc-prolapse/"),
    ("vitiligo", "https://web.archive.org/web/20250324102453/https://omshreeayur.com/treatments/vitiligo/"),
    ("copd-chronic-obstructive-pulmonary-disease", "https://web.archive.org/web/20250424162626/https://omshreeayur.com/treatments/copd-chronic-obstructive-pulmonary-disease/"),
    ("other-treatments", "https://web.archive.org/web/20250324093641/https://omshreeayur.com/treatments/other-treatments/"),
    ("polycystic-ovarian-disease-pcod", "https://web.archive.org/web/20250622231656/https://omshreeayur.com/treatments/polycystic-ovarian-disease-pcod/"),
    ("stress-management", "https://web.archive.org/web/20250324105337/https://omshreeayur.com/treatments/stress-management/"),
    ("kidney-problems", "https://web.archive.org/web/20250324105613/https://omshreeayur.com/treatments/kidney-problems/"),
    ("snoring", "https://web.archive.org/web/20250324102059/https://omshreeayur.com/treatments/snoring/"),
    ("fatty-liver", "https://web.archive.org/web/20250512083120/https://omshreeayur.com/treatments/fatty-liver/"),
    ("rasayana-and-vajikarana-science-of-aphrodisicas", "https://web.archive.org/web/20250512090058/https://omshreeayur.com/treatments/rasayana-and-vajikarana-science-of-aphrodisicas/"),
    ("strokeparalysiscva", "https://web.archive.org/web/20250424152457/https://omshreeayur.com/treatments/strokeparalysiscva/"),
    ("hair-loss", "https://web.archive.org/web/20250424171445/https://omshreeayur.com/treatments/hair-loss/"),
    ("infertility", "https://web.archive.org/web/20250424154115/https://omshreeayur.com/treatments/infertility/"),
    ("varicose-ulcers", "https://web.archive.org/web/20250324105206/https://omshreeayur.com/treatments/varicose-ulcers/"),
    ("varicose-veins", "https://web.archive.org/web/20250324102653/https://omshreeayur.com/treatments/varicose-veins/"),
    ("cancer-and-tumor-management", "https://web.archive.org/web/20250424161939/https://omshreeayur.com/treatments/cancer-and-tumor-management/"),
    ("cholesterol", "https://web.archive.org/web/20250424161602/https://omshreeayur.com/treatments/cholesterol/"),
    ("hepatitis-a-jaundice-b-and-c", "https://web.archive.org/web/20250512083430/https://omshreeayur.com/treatments/hepatitis-a-jaundice-b-and-c/"),
    ("weight-loss", "https://web.archive.org/web/20250424173926/https://omshreeayur.com/treatments/weight-loss/"),
    ("piles", "https://web.archive.org/web/20250512083506/https://omshreeayur.com/treatments/piles/"),
    ("dandruff", "https://web.archive.org/web/20250424153758/https://omshreeayur.com/treatments/dandruff/"),
    ("diabetes-mellitus", "https://web.archive.org/web/20250512084126/https://omshreeayur.com/treatments/diabetes-mellitus/"),
    ("ankylosing-spondylitis", "https://web.archive.org/web/20250324090351/https://omshreeayur.com/treatments/ankylosing-spondylitis/"),
    ("blood-pressure", "https://web.archive.org/web/20250424173636/https://omshreeayur.com/treatments/blood-pressure/"),
    ("acidity", "https://web.archive.org/web/20250622232008/https://omshreeayur.com/treatments/acidity/"),
    ("sciatica", "https://web.archive.org/web/20250324095352/https://omshreeayur.com/treatments/sciatica/"),
    ("tennis-elbow", "https://web.archive.org/web/20250623001705/https://omshreeayur.com/treatments/tennis-elbow/"),
    ("recurrent-cold", "https://web.archive.org/web/20250324084349/https://omshreeayur.com/treatments/recurrent-cold/"),
    ("sneezing-treatment", "https://web.archive.org/web/20250622235341/https://omshreeayur.com/treatments/sneezing-treatment/"),
    ("obesity", "https://web.archive.org/web/20250512085308/https://omshreeayur.com/treatments/obesity/"),
    ("calcaneal-spur", "https://web.archive.org/web/20250623002154/https://omshreeayur.com/treatments/calcaneal-spur/"),
    ("frozen-shoulder", "https://web.archive.org/web/20250512083816/https://omshreeayur.com/treatments/frozen-shoulder/"),
    ("sleep-apnea", "https://web.archive.org/web/20250512075844/https://omshreeayur.com/treatments/sleep-apnea/"),
    ("sinusitis-treatment", "https://web.archive.org/web/20250623001816/https://omshreeayur.com/treatments/sinusitis-treatment/"),
    ("vertigo", "https://web.archive.org/web/20250512082035/https://omshreeayur.com/treatments/vertigo/"),
    ("osteoarthritis-knee-pain", "https://web.archive.org/web/20250424154810/https://omshreeayur.com/treatments/osteoarthritis-knee-pain/"),
    ("rheumatoid-arthritis", "https://web.archive.org/web/20250324084154/https://omshreeayur.com/treatments/rheumatoid-arthritis/"),
    ("migraine", "https://web.archive.org/web/20250424153658/https://omshreeayur.com/treatments/migraine/"),
    ("cervical-lumbar-spondylosis", "https://web.archive.org/web/20250424165141/https://omshreeayur.com/treatments/cervical-lumbar-spondylosis/"),
    ("heart-disease-and-blocks", "https://web.archive.org/web/20250324085545/https://omshreeayur.com/treatments/heart-disease-and-blocks/"),
    ("eczema", "https://web.archive.org/web/20250512093159/https://omshreeayur.com/treatments/eczema/"),
    ("psoriasis", "https://web.archive.org/web/20250623002829/https://omshreeayur.com/treatments/psoriasis/"),
]


def extract_css_bg_image(html):
    """Extract CSS background-image URL from page HTML."""
    # Look for background-image: url(...) in inline styles or style tags
    patterns = [
        r'background-image:\s*url\(["\']?(https?://[^"\')\s]+)["\']?\)',
        r'background:\s*(?:[^;]*\s+)?url\(["\']?(https?://[^"\')\s]+)["\']?\)',
        r'background-image:\s*url\(["\']?(/web/[^"\')\s]+)["\']?\)',
    ]
    
    for pattern in patterns:
        matches = re.findall(pattern, html, re.IGNORECASE)
        for m in matches:
            # Filter out non-treatment images
            if ('wp-content/uploads' in m and 
                'whatsapp' not in m.lower() and 
                'logo' not in m.lower() and
                'banner' not in m.lower()):
                return m
    return None


def download_image(img_url, save_path):
    """Download image. Returns True on success."""
    os.makedirs(os.path.dirname(save_path), exist_ok=True)
    
    # Normalize URL
    if img_url.startswith('/'):
        img_url = 'https://web.archive.org' + img_url
    
    # Make sure it's the im_ variant for proper download
    if 'web.archive.org/web/' in img_url and 'im_/' not in img_url:
        img_url = re.sub(r'/web/(\d+)/', r'/web/\1im_/', img_url)
    
    for attempt in range(3):
        try:
            resp = requests.get(img_url, headers=HEADERS, timeout=25)
            if resp.status_code == 200 and len(resp.content) > 1000:
                ct = resp.headers.get('Content-Type', '')
                if 'image' in ct or True:  # Accept all content for archival images
                    with open(save_path, 'wb') as f:
                        f.write(resp.content)
                    return True, len(resp.content)
        except Exception as e:
            print(f"    Attempt {attempt+1} failed: {e}")
            time.sleep(2)
    return False, 0


def process_treatment_images(slug, url):
    """Download images for one treatment."""
    save_path = f"public/images/treatments/{slug}.jpg"
    
    # Skip if already downloaded and valid
    if os.path.exists(save_path) and os.path.getsize(save_path) > 5000:
        print(f"  {slug}: Already have image ({os.path.getsize(save_path)} bytes)")
        return True
    
    print(f"  {slug}: Fetching page...")
    
    try:
        resp = requests.get(url, headers=HEADERS, timeout=30)
        if resp.status_code != 200:
            print(f"  {slug}: HTTP {resp.status_code}")
            return False
    except Exception as e:
        print(f"  {slug}: Fetch failed: {e}")
        return False
    
    html = resp.text
    
    # Find CSS background image
    img_url = extract_css_bg_image(html)
    
    if img_url:
        print(f"  {slug}: Found CSS bg image: {img_url[-60:]}")
        success, size = download_image(img_url, save_path)
        if success:
            print(f"  {slug}: ✓ Downloaded ({size} bytes)")
            return True
        else:
            print(f"  {slug}: ✗ Download failed")
    else:
        print(f"  {slug}: No CSS background image found")
        
        # Try to find any wp-content image
        wp_images = re.findall(r'(https?://[^\s"\']*wp-content/uploads/[^\s"\']+\.(?:jpg|jpeg|png|webp))', html)
        for img in wp_images:
            if 'whatsapp' not in img.lower() and 'logo' not in img.lower():
                print(f"  {slug}: Trying fallback image: {img[-60:]}")
                success, size = download_image(img, save_path)
                if success:
                    print(f"  {slug}: ✓ Downloaded via fallback ({size} bytes)")
                    return True
    
    return False


def main():
    print("Stage 18b — Downloading CSS Background Treatment Images")
    print(f"Processing {len(TREATMENTS)} treatments...")
    print()
    
    os.makedirs('public/images/treatments', exist_ok=True)
    
    results = {'success': [], 'failed': []}
    
    for slug, url in TREATMENTS:
        success = process_treatment_images(slug, url)
        if success:
            results['success'].append(slug)
        else:
            results['failed'].append(slug)
        time.sleep(1.5)  # Be polite
    
    print()
    print("="*60)
    print("IMAGE DOWNLOAD SUMMARY")
    print("="*60)
    print(f"Downloaded: {len(results['success'])}/{len(TREATMENTS)}")
    if results['failed']:
        print(f"\nFailed ({len(results['failed'])}):")
        for s in results['failed']:
            print(f"  - {s}")
    
    # Now update the JSON files with image paths
    print("\nUpdating JSON files with image paths...")
    import json
    for slug, _ in TREATMENTS:
        json_path = f"src/data/treatments/{slug}.json"
        img_path = f"public/images/treatments/{slug}.jpg"
        
        if os.path.exists(json_path) and os.path.exists(img_path) and os.path.getsize(img_path) > 1000:
            with open(json_path, 'r') as f:
                data = json.load(f)
            
            data['hero']['backgroundImageUrl'] = f"/images/treatments/{slug}.jpg"
            
            with open(json_path, 'w') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            
            print(f"  Updated {slug}.json with image path")


if __name__ == "__main__":
    main()
