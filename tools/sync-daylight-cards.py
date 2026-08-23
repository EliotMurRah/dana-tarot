#!/usr/bin/env python3
"""Sync hand-made card art from ~/Desktop/tarot into the daylight site.

- Maps filenames like '00-the-fool.png' or 'the-high-priestess.png' to Major Arcana 0-21
- Trims the export border, resizes to 560px wide JPEG -> assets/cards-daylight/NN.jpg
- Writes assets/cards-daylight/manifest.js  (window.DANA_CARDS = [indices with art])
- Commits + pushes if anything changed.  Safe to run repeatedly.
"""
import os, re, sys, glob, json, subprocess
from PIL import Image

SRC = os.path.expanduser('~/Desktop/tarot')
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'assets', 'cards-daylight')
NAMES = ['the fool','the magician','the high priestess','the empress','the emperor','the hierophant','the lovers','the chariot','strength','the hermit','wheel of fortune','justice','the hanged man','death','temperance','the devil','the tower','the star','the moon','the sun','judgement','the world']
ALIASES = {'judgment': 'judgement', 'the wheel of fortune': 'wheel of fortune', 'the strength': 'strength', 'the justice': 'justice', 'the temperance': 'temperance', 'the death': 'death'}

def index_for(filename):
    slug = os.path.splitext(os.path.basename(filename))[0].lower()
    slug = re.sub(r'^\d+[\s_-]*', '', slug)          # leading number
    slug = re.sub(r'[_\-]+', ' ', slug).strip()
    slug = ALIASES.get(slug, slug)
    if slug in NAMES: return NAMES.index(slug)
    if slug.startswith('the ') and slug[4:] in NAMES: return NAMES.index(slug[4:])
    if 'the ' + slug in NAMES: return NAMES.index('the ' + slug)
    return None

def trim_and_resize(src, dst):
    im = Image.open(src).convert('RGB'); w, h = im.size
    # exports carry a thin parchment margin and sometimes a grey strip on the right
    im = im.crop((int(w*.015), int(h*.012), int(w*.965), int(h*.988)))
    im = im.resize((560, round(560 * im.height / im.width)), Image.LANCZOS)
    im.save(dst, 'JPEG', quality=80, optimize=True, progressive=True)

os.makedirs(OUT, exist_ok=True)
changed, have, skipped = [], [], []
for f in sorted(glob.glob(os.path.join(SRC, '*.png')) + glob.glob(os.path.join(SRC, '*.jpg')) + glob.glob(os.path.join(SRC, '*.jpeg'))):
    i = index_for(f)
    if i is None: skipped.append(os.path.basename(f)); continue
    dst = os.path.join(OUT, f'{i:02d}.jpg')
    have.append(i)
    if not os.path.exists(dst) or os.path.getmtime(dst) < os.path.getmtime(f):
        try:
            trim_and_resize(f, dst); changed.append(f'{i:02d} {NAMES[i]}')
        except Exception as e:
            skipped.append(f'{os.path.basename(f)} ({e})')
have = sorted(set(have))
manifest = f'window.DANA_CARDS = {json.dumps(have)};\n'
mpath = os.path.join(OUT, 'manifest.js')
if not os.path.exists(mpath) or open(mpath).read() != manifest:
    open(mpath, 'w').write(manifest); changed.append('manifest')

print(f'{len(have)}/22 cards with art: {have}')
if skipped: print('skipped (unrecognised name):', skipped)
if not changed: print('nothing new'); sys.exit(0)
print('updated:', changed)
if '--no-push' in sys.argv: sys.exit(0)
g = lambda *a: subprocess.run(['git', '-C', ROOT, '-c', 'user.name=EliotMurRah', '-c', 'user.email=m.e.urosevic@gmail.com', *a], check=True, capture_output=True, text=True)
g('add', '-A', 'assets/cards-daylight')
g('commit', '-m', f'Daylight card art: {len(have)}/22 ({", ".join(c for c in changed if c != "manifest")})\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>')
g('push', 'origin', 'main')
print('pushed')
