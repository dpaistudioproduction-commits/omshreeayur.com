import os
import re

def fix_buttons_in_file(filepath):
    # skip manually optimized files
    if 'Header.tsx' in filepath or 'HeroSlider.tsx' in filepath or 'button.tsx' in filepath or filepath == 'src/app/page.tsx':
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    def replace_class(match):
        pre = match.group(1)
        classes = match.group(2)
        post = match.group(3)
        
        cls_list = classes.split()
        to_remove = set()
        for c in cls_list:
            if c.startswith('bg-') or c.startswith('text-') or c.startswith('hover:bg-') or c.startswith('hover:text-') or \
               c.startswith('border-') or c.startswith('border') or c.startswith('hover:border-') or \
               c.startswith('px-') or c.startswith('py-') or c.startswith('h-') or \
               c.startswith('rounded-') or c.startswith('shadow') or c.startswith('font-') or \
               c.startswith('tracking-') or c.startswith('uppercase') or c.startswith('transition-') or \
               c == 'flex' or c == 'items-center' or c == 'justify-center' or c == 'group':
                
                # exceptions we want to keep
                if c in ['w-full', 'sm:w-auto', 'w-auto', 'flex-1', 'shrink-0', 'self-start', 'mt-auto', 'flex-col', 'sm:flex-row', 'block']:
                    continue
                else:
                    to_remove.add(c)
        
        new_classes = [c for c in cls_list if c not in to_remove]
        
        if new_classes:
            return f'{pre}className="{" ".join(new_classes)}"{post}'
        else:
            # strip className entirely
            return f'{pre}{post}'.replace(' className=""', '').replace(' className= ', ' ')

    # regex explanation: Match <Button, then anything that is NOT <Button or className=", then className=", then anything
    # This prevents matching className from other elements.
    new_content = re.sub(r'(<Button(?:(?!<Button|className=)[\s\S])*?)className="([^"]*)"([\s\S]*?(?:/>|>))', replace_class, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('src/app'):
    for file in files:
        if file.endswith('.tsx'):
            fix_buttons_in_file(os.path.join(root, file))
