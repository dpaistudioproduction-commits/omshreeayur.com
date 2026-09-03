#!/usr/bin/env python3
"""
STAGE 18 — COMPLETE ARCHIVED TREATMENT CONTENT + IMAGE RESTORATION
Restores all 44 treatment pages from Wayback Machine archives.
"""

import requests
from bs4 import BeautifulSoup
import os
import json
import re
import time
import urllib.parse

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


def extract_wayback_timestamp(url):
    """Extract timestamp from wayback URL for image fetching."""
    m = re.search(r'/web/(\d+)/', url)
    return m.group(1) if m else "20250324000000"


def make_wayback_img_url(timestamp, original_url):
    """Make a valid wayback image URL."""
    if original_url.startswith('http'):
        return f"https://web.archive.org/web/{timestamp}im_/{original_url}"
    elif original_url.startswith('/web/'):
        return f"https://web.archive.org{original_url}"
    return original_url


def download_image(img_url, save_path, timestamp):
    """Download image from wayback. Returns True on success."""
    os.makedirs(os.path.dirname(save_path), exist_ok=True)
    
    # Try multiple URL variations
    urls_to_try = [img_url]
    
    # If it's an archive.org URL, also try the im_ variant
    if 'web.archive.org' in img_url and 'im_' not in img_url:
        ts_match = re.search(r'/web/(\d+)', img_url)
        if ts_match:
            ts = ts_match.group(1)
            original = re.sub(r'https://web\.archive\.org/web/\d+/', '', img_url)
            urls_to_try.append(f"https://web.archive.org/web/{ts}im_/{original}")
    
    # If original url, add wayback prefix
    if not img_url.startswith('https://web.archive.org'):
        urls_to_try.append(f"https://web.archive.org/web/{timestamp}im_/{img_url}")
    
    for url in urls_to_try:
        try:
            resp = requests.get(url, headers=HEADERS, timeout=20)
            if resp.status_code == 200 and len(resp.content) > 500:
                # Verify it's image content
                ct = resp.headers.get('Content-Type', '')
                if 'image' in ct or save_path.endswith(('.jpg', '.jpeg', '.png', '.webp', '.gif')):
                    with open(save_path, 'wb') as f:
                        f.write(resp.content)
                    return True
        except Exception as e:
            pass
    return False


def extract_content(soup, timestamp):
    """Extract the main treatment content from the archived page."""
    
    # Strategy: find the second col-lg-9 (main content column)
    col_lg_9_all = soup.find_all('div', class_='col-lg-9')
    main_content = None
    
    # The main treatment content is in the second col-lg-9 (first is sidebar header)
    for col in col_lg_9_all:
        text = col.get_text(strip=True)
        # The real content column won't be just contact info
        if len(text) > 200 and 'Call us now' not in text[:50]:
            main_content = col
            break
    
    if not main_content:
        # Fallback: look for col-md-9
        for col in soup.find_all('div', class_='col-md-9'):
            text = col.get_text(strip=True)
            if len(text) > 200 and 'Call us now' not in text[:50]:
                main_content = col
                break
    
    if not main_content:
        # Fallback: find container with treatment content
        # Look for 'Note:' or 'Benefits' as marker
        for h2 in soup.find_all('h2'):
            if 'Benefits' in h2.get_text() or 'What is' in h2.get_text() or 'Note:' in h2.get_text():
                # Walk up to find a good container
                parent = h2.parent
                for _ in range(5):
                    if parent and parent.get('class') and any(c.startswith('col-') for c in parent.get('class', [])):
                        main_content = parent
                        break
                    parent = parent.parent if parent else None
                if main_content:
                    break
    
    if not main_content:
        # Last resort: find any div with substantial medical content
        for div in soup.find_all('div'):
            text = div.get_text(strip=True)
            if ('Benefits' in text or 'treatment' in text.lower()) and len(text) > 500:
                main_content = div
                break
    
    return main_content


def clean_content_html(content_div, timestamp, slug):
    """Clean and fix the HTML content for use in the Next.js site."""
    if not content_div:
        return ""
    
    # Work on a copy
    import copy
    content = copy.copy(content_div)
    
    # Remove the consultation form
    for form in content.find_all('form'):
        form.decompose()
    
    # Remove script tags
    for script in content.find_all('script'):
        script.decompose()
    
    # Remove style tags
    for style in content.find_all('style'):
        style.decompose()
    
    # Remove the "Fill the below form..." h1
    for h1 in content.find_all('h1'):
        if 'Fill' in h1.get_text() or 'form' in h1.get_text().lower():
            h1.decompose()
    
    # Fix image URLs - replace wayback archive image URLs with local paths
    for img in content.find_all('img'):
        src = img.get('src', '')
        
        # Skip non-content images
        if 'logo' in src.lower() or 'whatsapp' in src.lower() or not src:
            img.decompose()
            continue
        
        # Extract original filename from wayback URL
        if 'wp-content/uploads' in src:
            filename_match = re.search(r'wp-content/uploads/\d{4}/\d{2}/([^"?\s]+)', src)
            if filename_match:
                original_filename = filename_match.group(1)
                # Use slug-based image path
                img['src'] = f"/images/treatments/{slug}.jpg"
                img['class'] = 'treatment-image w-full rounded-lg'
        elif 'web.archive.org' in src:
            original_match = re.search(r'omshreeayur\.com/wp-content/uploads/[^/]+/[^/]+/([^"?\s]+)', src)
            if original_match:
                img['src'] = f"/images/treatments/{slug}.jpg"
                img['class'] = 'treatment-image w-full rounded-lg'
    
    # Fix all links - remove wayback prefixes
    for a in content.find_all('a'):
        href = a.get('href', '')
        if 'web.archive.org' in href:
            # Convert back to original
            orig = re.sub(r'https://web\.archive\.org/web/\d+/', '', href)
            a['href'] = orig
        if 'omshreeayur.com' in href:
            # Make relative
            a['href'] = re.sub(r'https?://omshreeayur\.com', '', href)
    
    # Get the inner HTML
    html = str(content)
    
    # Clean up wayback artifact URLs in inline styles / attributes
    html = re.sub(r'https?://web\.archive\.org/web/\d+im_/', '', html)
    html = re.sub(r'https?://web\.archive\.org/web/\d+/', '', html)
    
    return html


def extract_featured_image_url(soup, timestamp):
    """Find the main featured/hero image URL."""
    
    # Look for wp-post-image (WordPress featured image)
    featured = soup.find('img', class_='wp-post-image')
    if featured and featured.get('src'):
        return featured['src']
    
    # Look for any image in the main content with wp-content/uploads
    for img in soup.find_all('img'):
        src = img.get('src', '')
        if 'wp-content/uploads' in src and 'logo' not in src.lower() and 'whatsapp' not in src.lower():
            return src
    
    return None


def get_page_title(soup):
    """Get the page title."""
    # Try to get the main page title (from breadcrumb h1 or entry-title)
    # In this site, there's a breadcrumb h1 and then the main title
    h1_tags = soup.find_all('h1')
    for h1 in h1_tags:
        text = h1.get_text(strip=True)
        if text and 'Fill' not in text and 'form' not in text.lower():
            return text
    
    # Fallback to <title> tag
    title_tag = soup.find('title')
    if title_tag:
        title = title_tag.get_text(strip=True)
        # Clean "- OmShree..." suffix
        title = re.sub(r'\s*[-–|]\s*OmShree.*', '', title).strip()
        title = re.sub(r'\s*[-–|]\s*Omshree.*', '', title).strip()
        return title
    
    return ""


def get_seo_description(soup):
    """Get SEO meta description."""
    meta = soup.find('meta', attrs={'name': 'description'})
    if meta and meta.get('content'):
        return meta['content'].strip()
    
    meta_og = soup.find('meta', attrs={'property': 'og:description'})
    if meta_og and meta_og.get('content'):
        return meta_og['content'].strip()
    
    return ""


def get_quick_answer(main_content, seo_desc):
    """Get a quick intro text from the content."""
    if seo_desc:
        return seo_desc
    
    if main_content:
        # Get first substantial paragraph
        for p in main_content.find_all('p'):
            text = p.get_text(strip=True)
            if len(text) > 80:
                return text[:300] + ("..." if len(text) > 300 else "")
        
        # Fallback: first substantial text
        text = main_content.get_text(strip=True)
        if len(text) > 80:
            return text[:300] + ("..." if len(text) > 300 else "")
    
    return ""


def process_treatment(slug, url):
    """Process one treatment page from archive."""
    print(f"\n{'='*60}")
    print(f"Processing: {slug}")
    print(f"URL: {url}")
    print(f"{'='*60}")
    
    timestamp = extract_wayback_timestamp(url)
    
    # Fetch the page
    max_retries = 3
    response = None
    for attempt in range(max_retries):
        try:
            response = requests.get(url, headers=HEADERS, timeout=30)
            if response.status_code == 200:
                break
            print(f"  Attempt {attempt+1}: HTTP {response.status_code}")
            time.sleep(2)
        except Exception as e:
            print(f"  Attempt {attempt+1} failed: {e}")
            time.sleep(3)
    
    if not response or response.status_code != 200:
        print(f"  FAILED to fetch {url}")
        return False
    
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # 1. Extract title
    title = get_page_title(soup)
    print(f"  Title: {title}")
    
    # 2. SEO description
    seo_desc = get_seo_description(soup)
    
    # 3. Find main content
    main_content = extract_content(soup, timestamp)
    if main_content:
        print(f"  Content found: {len(main_content.get_text())} chars")
    else:
        print(f"  WARNING: No main content found!")
    
    # 4. Clean content HTML
    content_html = clean_content_html(main_content, timestamp, slug)
    
    # 5. Find and download featured image
    featured_img_url = extract_featured_image_url(soup, timestamp)
    local_image_path = f"/images/treatments/{slug}.jpg"
    image_downloaded = False
    
    if featured_img_url:
        print(f"  Image URL: {featured_img_url[:80]}...")
        save_path = f"public/images/treatments/{slug}.jpg"
        
        # Make it a proper wayback URL
        if not featured_img_url.startswith('http'):
            featured_img_url = "https://web.archive.org" + featured_img_url
        
        image_downloaded = download_image(featured_img_url, save_path, timestamp)
        if image_downloaded:
            print(f"  Image saved: {save_path}")
        else:
            print(f"  Image download failed, trying alternative...")
            # Try the im_ variant
            alt_url = re.sub(r'/web/(\d+)/', r'/web/\1im_/', featured_img_url)
            image_downloaded = download_image(alt_url, save_path, timestamp)
            if image_downloaded:
                print(f"  Image saved via im_ variant: {save_path}")
    else:
        print(f"  No featured image found in archived HTML")
    
    if not image_downloaded:
        local_image_path = ""
        print(f"  No image available for {slug}")
    
    # 6. Check if image file already exists (from previous runs)
    if not image_downloaded:
        existing = f"public/images/treatments/{slug}.jpg"
        if os.path.exists(existing) and os.path.getsize(existing) > 1000:
            local_image_path = f"/images/treatments/{slug}.jpg"
            image_downloaded = True
            print(f"  Using existing image: {existing}")
    
    # 7. Quick answer
    quick_answer = get_quick_answer(main_content, seo_desc)
    
    # 8. Save JSON data
    data = {
        "slug": slug,
        "name": title,
        "category": "treatment",
        "seoTitle": f"{title} | OmShree Sidha Hospital",
        "seoDescription": seo_desc or quick_answer[:160] if quick_answer else f"Ayurvedic treatment for {title} at OmShree Sidha Hospital, Kerala.",
        "hero": {
            "title": title,
            "subtitle": "",
            "backgroundImageUrl": local_image_path
        },
        "contentHtml": content_html,
        "quickAnswer": quick_answer,
        "whatItMeans": "",
        "ayurvedicContext": "",
        "howTreatmentIsPlanned": "",
        "whoShouldSeek": "",
        "patientJourney": "",
        "therapies": [],
        "faqs": [],
        "relatedConditions": [],
        "relatedTherapies": []
    }
    
    os.makedirs('src/data/treatments', exist_ok=True)
    json_path = f"src/data/treatments/{slug}.json"
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"  Saved: {json_path}")
    print(f"  Content length: {len(content_html)} chars")
    print(f"  Image: {'✓' if image_downloaded else '✗'}")
    
    # Be polite to archive.org
    time.sleep(1)
    
    return True


def main():
    print("STAGE 18 — COMPLETE ARCHIVED TREATMENT CONTENT + IMAGE RESTORATION")
    print(f"Processing {len(TREATMENTS)} treatments...")
    
    os.makedirs('public/images/treatments', exist_ok=True)
    
    results = []
    for slug, url in TREATMENTS:
        success = process_treatment(slug, url)
        results.append((slug, success))
        time.sleep(1)
    
    print("\n" + "="*60)
    print("RESTORATION SUMMARY")
    print("="*60)
    succeeded = [r for r in results if r[1]]
    failed = [r for r in results if not r[1]]
    print(f"Succeeded: {len(succeeded)}/{len(TREATMENTS)}")
    if failed:
        print(f"Failed: {len(failed)}")
        for slug, _ in failed:
            print(f"  - {slug}")


if __name__ == "__main__":
    main()
