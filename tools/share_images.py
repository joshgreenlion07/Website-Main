#!/usr/bin/env python3
"""Make the link-preview images (1200 x 630) and the site icons.

    python3 tools/share_images.py

For every page in tools/build.py PAGES that has a 'share' entry, this writes img/share/<page>.jpg: a Charcoal
panel with the logo, the page's eyebrow and heading, and the phone number, next to the page's own photo.
Texts, iMessage, Facebook, LinkedIn and X show this image when someone shares the page's link.

It also writes the icons: favicon.ico, img/icons/icon-32.png, icon-192.png, icon-512.png, icon-maskable-512.png
and apple-touch-icon.png, all from the approved Lionhead logo on Charcoal.

Fonts: Liberation Serif and Liberation Sans, the typefaces named in the 2026 brand guide
(Debian/Ubuntu package fonts-liberation). Run it after changing a heading or a share photo, then run build.py.
"""
import importlib.util
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location('build', ROOT / 'tools' / 'build.py')
build = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build)

FONT_DIR = Path('/usr/share/fonts/truetype/liberation')
SERIF = str(FONT_DIR / 'LiberationSerif-Regular.ttf')
SANS = str(FONT_DIR / 'LiberationSans-Regular.ttf')
SANS_BOLD = str(FONT_DIR / 'LiberationSans-Bold.ttf')

CHARCOAL = (32, 35, 33)
WARM = (245, 242, 234)
LEAF = (125, 192, 15)
LIME = (175, 228, 20)
STONE = (182, 174, 161)
MUTED = (216, 211, 198)

W, H = 1200, 630
PANEL = 560          # Charcoal text panel on the left
RULE = 8             # Leaf green rule between the panel and the photos
PAD = 60


def cover(img, w, h, fx=.5, fy=.5):
    """Scale and crop img to exactly w x h, keeping the focus point (fx, fy) in view."""
    img = ImageOps.exif_transpose(img).convert('RGB')
    s = max(w / img.width, h / img.height)
    img = img.resize((round(img.width * s), round(img.height * s)), Image.LANCZOS)
    x = min(max(round(img.width * fx - w / 2), 0), img.width - w)
    y = min(max(round(img.height * fy - h / 2), 0), img.height - h)
    return img.crop((x, y, x + w, y + h))


def spaced(draw, xy, text, font, fill, spacing):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + spacing
    return x


def wrap(draw, text, font, width):
    lines, line = [], ''
    for word in text.split():
        test = (line + ' ' + word).strip()
        if draw.textlength(test, font=font) <= width or not line:
            line = test
        else:
            lines.append(line)
            line = word
    lines.append(line)
    return lines


def photos_area(share):
    """The right side: one photo, two photos side by side, or a 2 x 2 mosaic."""
    area_w, area_h = W - PANEL - RULE, H
    out = Image.new('RGB', (area_w, area_h), CHARCOAL)
    shots = share['photos']
    if len(shots) == 1:
        img, fx, fy = shots[0]
        out.paste(cover(Image.open(ROOT / 'img' / f'{img}.jpg'), area_w, area_h, fx, fy), (0, 0))
    elif len(shots) == 2:
        gap, half = 6, (area_w - 6) // 2
        for i, (img, fx, fy) in enumerate(shots):
            out.paste(cover(Image.open(ROOT / 'img' / f'{img}.jpg'), half, area_h, fx, fy), (i * (half + gap), 0))
        ImageDraw.Draw(out).rectangle((half, 0, half + gap - 1, area_h), fill=LEAF)
    else:
        gap = 6
        tw, th = (area_w - gap) // 2, (area_h - gap) // 2
        for i, (img, fx, fy) in enumerate(shots[:4]):
            out.paste(cover(Image.open(ROOT / 'img' / f'{img}.jpg'), tw, th, fx, fy), ((i % 2) * (tw + gap), (i // 2) * (th + gap)))
    return out


def share_image(p):
    share = p['share']
    im = Image.new('RGB', (W, H), CHARCOAL)
    im.paste(photos_area(share), (PANEL + RULE, 0))
    d = ImageDraw.Draw(im)
    d.rectangle((PANEL, 0, PANEL + RULE - 1, H), fill=LEAF)

    # Logo: the approved horizontal signature, which is drawn for Charcoal backgrounds.
    logo = Image.open(ROOT / 'brand' / 'Greenlion-Landscape-Logo-Horizontal.png').convert('RGBA')
    logo = logo.crop(logo.split()[-1].getbbox())
    lw = 300
    logo = logo.resize((lw, round(logo.height * lw / logo.width)), Image.LANCZOS)
    im.paste(logo, (PAD, 52), logo)

    text_w = PANEL - 2 * PAD
    # Heading: as large as fits in three lines, else four.
    for max_lines in (3, 4):
        for size in (66, 62, 58, 54, 50, 46):
            hf = ImageFont.truetype(SERIF, size)
            lines = wrap(d, share['heading'], hf, text_w)
            if len(lines) <= max_lines:
                break
        if len(lines) <= max_lines:
            break
    line_h = round(size * 1.1)
    sub_f = ImageFont.truetype(SANS, 24)
    sub_lines = wrap(d, share['sub'], sub_f, text_w) if share.get('sub') else []
    eyebrow = share['eyebrow'].upper()
    for esize in (19, 18, 17, 16, 15):  # the eyebrow stays on one line inside the panel
        eyebrow_f = ImageFont.truetype(SANS_BOLD, esize)
        if 44 + sum(d.textlength(ch, font=eyebrow_f) + 2.2 for ch in eyebrow) <= text_w:
            break
    block_h = 30 + len(lines) * line_h + (14 + len(sub_lines) * 32 if sub_lines else 0)
    top = 52 + logo.height + max(36, (H - 150 - (52 + logo.height) - block_h) // 2)

    d.rectangle((PAD, top + 9, PAD + 30, top + 11), fill=LEAF)
    spaced(d, (PAD + 44, top + (19 - esize) // 2), eyebrow, eyebrow_f, LIME, 2.2)
    y = top + 38
    for line in lines:
        d.text((PAD, y), line, font=hf, fill=WARM)
        y += line_h
    if sub_lines:
        y += 10
        for line in sub_lines:
            d.text((PAD, y), line, font=sub_f, fill=MUTED)
            y += 32

    phone_f = ImageFont.truetype(SANS_BOLD, 30)
    small_f = ImageFont.truetype(SANS_BOLD, 16)
    d.text((PAD, H - 108), '(209) 646-4046', font=phone_f, fill=WARM)
    spaced(d, (PAD, H - 64), 'GREENLIONLANDSCAPE.COM  ·  CSLB #1150882', small_f, STONE, 1.6)
    d.rectangle((0, H - 6, PANEL - 1, H), fill=LEAF)

    out = ROOT / 'img' / 'share' / f"{p['page']}.jpg"
    out.parent.mkdir(parents=True, exist_ok=True)
    im.save(out, quality=84, optimize=True, progressive=True)
    return out


def icons():
    """Lionhead on Charcoal. Favicons fill the square; the Apple and maskable icons keep a safe margin."""
    lion = Image.open(ROOT / 'brand' / 'Greenlion-Landscape-Lionhead.png').convert('RGBA')

    def icon(size, scale):
        big = size * 4
        c = Image.new('RGBA', (big, big), CHARCOAL + (255,))
        w = round(big * scale)
        h = round(w * lion.height / lion.width)
        c.alpha_composite(lion.resize((w, h), Image.LANCZOS), ((big - w) // 2, (big - h) // 2))
        return c.resize((size, size), Image.LANCZOS).convert('RGB')

    d = ROOT / 'img' / 'icons'
    d.mkdir(parents=True, exist_ok=True)
    written = []
    for name, size, scale in (('icon-32.png', 32, .98), ('icon-192.png', 192, .96), ('icon-512.png', 512, .96),
                              ('icon-maskable-512.png', 512, .74), ('apple-touch-icon.png', 180, .86)):
        icon(size, scale).save(d / name, optimize=True)
        written.append(d / name)
    icon(256, .98).save(ROOT / 'favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
    written.append(ROOT / 'favicon.ico')
    return written


if __name__ == '__main__':
    for p in build.PAGES:
        if 'share' in p:
            print('wrote', share_image(p).relative_to(ROOT))
    for f in icons():
        print('wrote', f.relative_to(ROOT))
