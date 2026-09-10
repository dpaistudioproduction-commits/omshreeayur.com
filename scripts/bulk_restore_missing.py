import requests
from bs4 import BeautifulSoup
import os
import json
import re

URLS = [
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
    content_container = soup.find('div', class_='text-holder') or soup.find('article') or soup.find('div', class_='entry-content')
    text_holders = soup.find_all('div', class_='text-holder')
    if text_holders:
        content_html = "\n".join([str(th) for th in text_holders])
    elif content_container:
        content_html = str(content_container)
    else:
        main_content = soup.find('main') or soup.find('body')
        content_html = str(main_content)

    # Convert old image paths in content HTML
    content_html = re.sub(r'https?://omshreeayur\.com/wp-content/uploads/\d{4}/\d{2}/([^"]+)', r'/images/treatments/\1', content_html)
    content_html = re.sub(r'https?://web\.archive\.org/web/\d+/https?://omshreeayur\.com/wp-content/uploads/\d{4}/\d{2}/([^"]+)', r'/images/treatments/\1', content_html)


    # 4. Extract Primary Image
    img_url = None
    featured_img = soup.find('img', class_='wp-post-image')
    if featured_img and 'src' in featured_img.attrs:
        img_url = featured_img['src']
    else:
        if content_container:
            first_img = content_container.find('img')
            if first_img and 'src' in first_img.attrs:
                img_url = first_img['src']
    
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

    # Generate a quick answer from description or first paragraph
    quick_answer = description
    if not quick_answer:
        first_p = soup.find('p')
        if first_p:
            quick_answer = first_p.text[:150] + "..."

    # Check if JSON already exists to preserve existing fields if needed
    json_path = f"src/data/treatments/{slug}.json"
    data = {}
    if os.path.exists(json_path):
         with open(json_path, 'r', encoding='utf-8') as f:
              data = json.load(f)

    # Update Data
    data.update({
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
        "quickAnswer": quick_answer,
    })

    # Default empty fields if they don't exist
    for field in ["whatItMeans", "ayurvedicContext", "howTreatmentIsPlanned", "whoShouldSeek", "patientJourney"]:
        if field not in data:
            data[field] = ""
    for field in ["therapies", "faqs", "relatedConditions", "relatedTherapies"]:
        if field not in data:
            data[field] = []

    
    os.makedirs('src/data/treatments', exist_ok=True)
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        
    print(f"Successfully processed {slug}\n")

if __name__ == "__main__":
    for url in URLS:
        process_url(url)
