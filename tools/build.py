#!/usr/bin/env python3
"""Build the static pages of greenlionlandscape.com from src/.

    python3 tools/build.py          write index.html, services/index.html, gallery/index.html and sitemap.xml
    python3 tools/build.py --check  exit 1 if any built file is out of date (run before committing)

Every page shares src/_layout.html, the header, footer and tab bar partials, /assets/site.css and
/assets/site.js. Each page's own content lives in src/pages/<name>.html. The built files are committed,
so Vercel serves them as plain static files with no build step. Edit src/, never the built files.
"""
import hashlib
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'src'
SITE = 'https://www.greenlionlandscape.com'

PAGES = [
    {
        'page': 'home', 'out': 'index.html', 'path': '/',
        'title': 'Landscape Contractor Modesto, CA | Green Lion Landscape',
        'description': 'Green Lion Landscape: custom landscaping, design and water features in Modesto and the Central Valley.',
        'og_title': 'Green Lion Landscape: water features and outdoor living in Modesto',
        'og_description': 'Custom landscaping, design and water features for outdoor spaces that feel connected. Call (209) 646-4046.',
        'og_image': 'wf-creek-firebowl',
    },
    {
        'page': 'services', 'out': 'services/index.html', 'path': '/services',
        'title': 'Landscaping & Water Feature Services | Green Lion Landscape',
        'description': 'Water features, outdoor kitchens, pavers, lighting, retaining walls, saunas, fire features, turf and free 3D design from Green Lion Landscape in Modesto, Turlock and Tracy.',
        'og_title': 'Green Lion Landscape services: water features and outdoor living',
        'og_description': 'Water features lead. Everything else connects: kitchens, pavers, lighting, walls, saunas, fire and turf, with a free 3D design. Call (209) 646-4046.',
        'og_image': 'svc-water',
    },
    {
        'page': 'gallery', 'out': 'gallery/index.html', 'path': '/gallery',
        'title': 'Water Feature & Landscaping Gallery | Green Lion Landscape',
        'description': 'Photos of real Green Lion Landscape projects: waterfalls, koi ponds, water walls, patios, outdoor kitchens, saunas and planting around Modesto and the Central Valley.',
        'og_title': 'Our work: Green Lion Landscape project gallery',
        'og_description': 'Real Green Lion water features, patios, kitchens and planting around Modesto and the Central Valley.',
        'og_image': 'wf-three-column-wall',
    },
]

BANNER = '<!-- Built by tools/build.py from src/. Edit src/ and run: python3 tools/build.py -->'


def version(path):
    return hashlib.sha1((ROOT / path).read_bytes()).hexdigest()[:10]


def attr(value):
    return value.replace('&', '&amp;').replace('"', '&quot;').replace('<', '&lt;')


def mark_current(html, page):
    """Mark the nav links for this page with aria-current, so the right tab is lit without JavaScript."""
    return re.sub(r'data-nav="(\w+)"', lambda m: m.group(0) + (' aria-current="page"' if m.group(1) == page else ''), html)


def render(p):
    layout = (SRC / '_layout.html').read_text()
    parts = {
        'header': mark_current((SRC / '_header.html').read_text().rstrip('\n'), p['page']),
        'footer': (SRC / '_footer.html').read_text().rstrip('\n'),
        'tail': mark_current((SRC / '_tail.html').read_text().rstrip('\n'), p['page']),
        'main': (SRC / 'pages' / f"{p['page']}.html").read_text().rstrip('\n'),
        'url': SITE + p['path'],
        'page': p['page'],
        'css_version': version('assets/site.css'),
        'js_version': version('assets/site.js'),
    }
    for k in ('title', 'description', 'og_title', 'og_description', 'og_image'):
        parts[k] = attr(p[k])

    def fill(m):
        key = m.group(1)
        if key not in parts:
            raise KeyError(f'unknown placeholder {{{{{key}}}}} in src/_layout.html')
        return parts[key]

    html = re.sub(r'\{\{(\w+)\}\}', fill, layout)
    return html.replace('<html lang="en">\n', '<html lang="en">\n' + BANNER + '\n', 1)


def sitemap():
    urls = ''.join(f'  <url><loc>{SITE}{p["path"]}</loc></url>\n' for p in PAGES)
    return f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{urls}</urlset>\n'


def main():
    check = '--check' in sys.argv
    outputs = {p['out']: render(p) for p in PAGES}
    outputs['sitemap.xml'] = sitemap()
    stale = []
    for rel, text in outputs.items():
        f = ROOT / rel
        if check:
            if not f.exists() or f.read_text() != text:
                stale.append(rel)
        else:
            f.parent.mkdir(parents=True, exist_ok=True)
            f.write_text(text)
            print('wrote', rel)
    if stale:
        print('Out of date, run python3 tools/build.py:', ', '.join(stale))
        sys.exit(1)
    if check:
        print('All built pages are up to date.')


if __name__ == '__main__':
    main()
