import requests
from bs4 import BeautifulSoup
import os
import json
import re

URLS = [
    "https://web.archive.org/web/20250324102613/https://omshreeayur.com/treatments/gout/",
    "https://web.archive.org/web/20250424154554/https://omshreeayur.com/treatments/fistula/",
    "https://web.archive.org/web/20250324105237/https://omshreeayur.com/treatments/i-v-d-p-intervertebral-disc-prolapse/",
    "https://web.archive.org/web/20250324102453/https://omshreeayur.com/treatments/vitiligo/",
    "https://web.archive.org/web/20250424162626/https://omshreeayur.com/treatments/copd-chronic-obstructive-pulmonary-disease/",
    "https://web.archive.org/web/20250324093641/https://omshreeayur.com/treatments/other-treatments/",
    "https://web.archive.org/web/20250622231656/https://omshreeayur.com/treatments/polycystic-ovarian-disease-pcod/",
    "https://web.archive.org/web/20250324105337/https://omshreeayur.com/treatments/stress-management/",
    "https://web.archive.org/web/20250324105613/https://omshreeayur.com/treatments/kidney-problems/",
    "https://web.archive.org/web/20250324102059/https://omshreeayur.com/treatments/snoring/",
    "https://web.archive.org/web/20250512083120/https://omshreeayur.com/treatments/fatty-liver/",
    "https://web.archive.org/web/20250512090058/https://omshreeayur.com/treatments/rasayana-and-vajikarana-science-of-aphrodisicas/",
    "https://web.archive.org/web/20250424152457/https://omshreeayur.com/treatments/strokeparalysiscva/",
    "https://web.archive.org/web/20250424171445/https://omshreeayur.com/treatments/hair-loss/",
    "https://web.archive.org/web/20250424154115/https://omshreeayur.com/treatments/infertility/",
    "https://web.archive.org/web/20250324105206/https://omshreeayur.com/treatments/varicose-ulcers/",
    "https://web.archive.org/web/20250324102653/https://omshreeayur.com/treatments/varicose-veins/",
    "https://web.archive.org/web/20250424161939/https://omshreeayur.com/treatments/cancer-and-tumor-management/",
    "https://web.archive.org/web/20250424161602/https://omshreeayur.com/treatments/cholesterol/",
    "https://web.archive.org/web/20250512083430/https://omshreeayur.com/treatments/hepatitis-a-jaundice-b-and-c/",
    "https://web.archive.org/web/20250424173926/https://omshreeayur.com/treatments/weight-loss/",
    "https://web.archive.org/web/20250512083506/https://omshreeayur.com/treatments/piles/",
    "https://web.archive.org/web/20250424153758/https://omshreeayur.com/treatments/dandruff/",
    "https://web.archive.org/web/20250512084126/https://omshreeayur.com/treatments/diabetes-mellitus/",
    "https://web.archive.org/web/20250324090351/https://omshreeayur.com/treatments/ankylosing-spondylitis/",
    "https://web.archive.org/web/20250424173636/https://omshreeayur.com/treatments/blood-pressure/",
    "https://web.archive.org/web/20250622232008/https://omshreeayur.com/treatments/acidity/",
    "https://web.archive.org/web/20250324095352/https://omshreeayur.com/treatments/sciatica/",
    "https://web.archive.org/web/20250623001705/https://omshreeayur.com/treatments/tennis-elbow/",
    "https://web.archive.org/web/20250324084349/https://omshreeayur.com/treatments/recurrent-cold/",
    "https://web.archive.org/web/20250622235341/https://omshreeayur.com/treatments/sneezing-treatment/",
    "https://web.archive.org/web/20250512085308/https://omshreeayur.com/treatments/obesity/",
    "https://web.archive.org/web/20250623002154/https://omshreeayur.com/treatments/calcaneal-spur/",
    "https://web.archive.org/web/20250512083816/https://omshreeayur.com/treatments/frozen-shoulder/",
    "https://web.archive.org/web/20250512075844/https://omshreeayur.com/treatments/sleep-apnea/",
    "https://web.archive.org/web/20250623001816/https://omshreeayur.com/treatments/sinusitis-treatment/",
    "https://web.archive.org/web/20250512082035/https://omshreeayur.com/treatments/vertigo/",
    "https://web.archive.org/web/20250424154810/https://omshreeayur.com/treatments/osteoarthritis-knee-pain/",
    "https://web.archive.org/web/20250324084154/https://omshreeayur.com/treatments/rheumatoid-arthritis/",
    "https://web.archive.org/web/20250424153658/https://omshreeayur.com/treatments/migraine/",
    "https://web.archive.org/web/20250424165141/https://omshreeayur.com/treatments/cervical-lumbar-spondylosis/",
    "https://web.archive.org/web/20250324085545/https://omshreeayur.com/treatments/heart-disease-and-blocks/",
    "https://web.archive.org/web/20250512093159/https://omshreeayur.com/treatments/eczema/",
    "https://web.archive.org/web/20250623002829/https://omshreeayur.com/treatments/psoriasis/"
]

def process_url(url):
    print(f"Processing {url}...")
    match = re.search(r'/treatments/([^/]+)/?$', url)
    if not match:
        print(f"Could not extract slug from {url}")
        return
    slug = match.group(1)
    
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
    try:
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
    except Exception as e:
        print(f"Failed to fetch {url}: {e}")
        return

    soup = BeautifulSoup(response.text, 'html.parser')
    
    # 1. Extract Title
    title_tag = soup.find('title')
    title = title_tag.text if title_tag else ""
    title = title.replace(" – OmShree Sidha Hospital", "").strip()
    
    # 2. Extract SEO Meta Description
    meta_desc = soup.find('meta', attrs={'name': 'description'})
    description = meta_desc['content'] if meta_desc and 'content' in meta_desc.attrs else ""
    
    # 3. Extract Main Content
    # Let's try to find the article content. Usually it's in a div with a specific class.
    # Looking at similar WordPress themes, it could be `<div class="text-holder">`, `<div class="entry-content">`, `<div class="content">`.
    content_container = soup.find('div', class_='text-holder') or soup.find('article') or soup.find('div', class_='entry-content')
    
    # If the text-holder is inside a specific section, we might need to be more precise.
    # We will grab all text-holder divs and combine them if there are multiple.
    text_holders = soup.find_all('div', class_='text-holder')
    if text_holders:
        # Often the first one is the main content
        content_html = "\n".join([str(th) for th in text_holders])
    elif content_container:
        content_html = str(content_container)
    else:
        # fallback
        main_content = soup.find('main') or soup.find('body')
        content_html = str(main_content)

    # 4. Extract Primary Image
    # Look for the first image in the content area, or a featured image.
    img_url = None
    featured_img = soup.find('img', class_='wp-post-image')
    if featured_img and 'src' in featured_img.attrs:
        img_url = featured_img['src']
    else:
        # try any image inside content
        if content_container:
            first_img = content_container.find('img')
            if first_img and 'src' in first_img.attrs:
                img_url = first_img['src']
    
    # If it's a relative URL in the archive, we need to resolve it
    if img_url and img_url.startswith('/'):
        img_url = "https://web.archive.org" + img_url
    
    local_image_path = f"/images/treatments/{slug}.jpg"
    
    if img_url:
        print(f"Downloading image from {img_url}")
        try:
            img_response = requests.get(img_url, headers=headers, timeout=30)
            if img_response.status_code == 200:
                os.makedirs('public/images/treatments', exist_ok=True)
                with open(f"public/images/treatments/{slug}.jpg", 'wb') as f:
                    f.write(img_response.content)
            else:
                print(f"Warning: Image download failed with status {img_response.status_code}")
                local_image_path = ""
        except Exception as e:
            print(f"Warning: Failed to download image {img_url}: {e}")
            local_image_path = ""

    # Create JSON
    data = {
        "slug": slug,
        "name": title,
        "category": "treatment",
        "seoTitle": f"{title} - OmShree Sidha Hospital",
        "seoDescription": description,
        "hero": {
            "title": title,
            "subtitle": "",
            "backgroundImageUrl": local_image_path
        },
        "contentHtml": content_html,
        "quickAnswer": "",
        "whatItMeans": "",
        "ayurvedicContext": "",
        "howTreatmentIsPlanned": "",
        "therapies": [],
        "whoShouldSeek": "",
        "patientJourney": "",
        "faqs": [],
        "relatedConditions": [],
        "relatedTherapies": []
    }
    
    os.makedirs('src/data/treatments', exist_ok=True)
    with open(f"src/data/treatments/{slug}.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        
    print(f"Successfully processed {slug}\n")

if __name__ == "__main__":
    for url in URLS:
        process_url(url)
