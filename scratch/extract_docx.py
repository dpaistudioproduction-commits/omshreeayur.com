import docx
import sys
from docx.document import Document
from docx.oxml.shape import CT_Picture

def extract_docx_with_image_names(file_path):
    doc = docx.Document(file_path)
    
    with open("scratch/docx_content_with_images.txt", "w", encoding="utf-8") as f:
        for para in doc.paragraphs:
            text = para.text.strip()
            if text:
                f.write(text + "\n")
            
            for run in para.runs:
                # Find pictures in the run
                for child in run._element.iter():
                    if child.tag.endswith('pic'):
                        embed = child.xpath('.//a:blip/@r:embed')
                        if embed:
                            rel_id = embed[0]
                            rel = doc.part.rels[rel_id]
                            target_ref = rel.target_ref
                            f.write(f"[IMAGE: {target_ref}]\n")

if __name__ == "__main__":
    extract_docx_with_image_names("/Users/arundevv/Downloads/website low EF.docx")
