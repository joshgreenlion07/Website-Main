#!/usr/bin/env python3
"""Build the static pages of greenlionlandscape.com from src/.

    python3 tools/build.py          write every page in PAGES (index.html, services/index.html, ...) and sitemap.xml
    python3 tools/build.py --check  exit 1 if any built file is out of date (run before committing)

Every page shares src/_layout.html, the header, footer and tab bar partials, /assets/site.css and
/assets/site.js. Each page's own content lives in src/pages/<name>.html. The built files are committed,
so Vercel serves them as plain static files with no build step. Edit src/, never the built files.
"""
import hashlib
import json
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
        'og_title': "Central Valley's Favorite Water Features | Green Lion Landscape",
        'og_description': 'Custom landscaping, design and water features for outdoor spaces that feel connected. Call (209) 646-4046.',
        'share': {'eyebrow': 'Modesto · Turlock · Tracy', 'heading': "Central Valley's Favorite Water Features", 'photos': [('wf-creek-firebowl', .5, .62)]},
    },
    {
        'page': 'services', 'out': 'services/index.html', 'path': '/services',
        'title': 'Landscaping & Water Feature Services | Green Lion Landscape',
        'description': 'Water features, outdoor kitchens, pavers, lighting, retaining walls, saunas, fire features, turf and free 3D design from Green Lion Landscape in Modesto, Turlock and Tracy.',
        'og_title': 'Outdoor Living. Beautifully Built. | Green Lion Landscape',
        'og_description': 'Water features lead. Everything else connects: kitchens, pavers, lighting, walls, saunas, fire and turf, with a free 3D design. Call (209) 646-4046.',
        'share': {'eyebrow': 'Services', 'heading': 'Outdoor Living. Beautifully Built.', 'photos': [('svc-water', .5, .5), ('svc-pavilion', .5, .5)]},
    },
    {
        'page': 'gallery', 'out': 'gallery/index.html', 'path': '/gallery',
        'title': 'Water Feature & Landscaping Gallery | Green Lion Landscape',
        'description': 'Photos of real Green Lion Landscape projects: waterfalls, koi ponds, water walls, patios, outdoor kitchens, saunas and planting around Modesto and the Central Valley.',
        'og_title': 'Our Work | Green Lion Landscape',
        'og_description': 'Real Green Lion water features, patios, kitchens and planting around Modesto and the Central Valley.',
        'share': {'eyebrow': 'Gallery', 'heading': 'Our Work', 'sub': 'Water features, patios, kitchens and planting around the Central Valley.', 'photos': [('wf-three-column-wall', .5, .5), ('wf-koi', .5, .5), ('svc-pavilion', .5, .5), ('pj-well-2', .5, .5)]},
    },
    {
        'page': 'water-features', 'nav': 'services', 'out': 'water-features/index.html', 'path': '/water-features',
        'title': 'Custom Water Features in the Central Valley | Green Lion',
        'description': 'Waterfalls, koi ponds, pondless streams and water walls designed and built by Green Lion Landscape for Modesto, Turlock, Tracy and the Central Valley.',
        'og_title': 'Custom Water Features in the Central Valley | Green Lion Landscape',
        'og_description': 'Waterfalls, koi ponds, pondless streams and water walls for Modesto, Turlock and Tracy. Call (209) 646-4046.',
        'share': {'eyebrow': 'Water features', 'heading': 'Custom Water Features in the Central Valley', 'photos': [('wf-lantern-falls', .45, .5)]},
        'crumbs': [('Home', '/'), ('Water Features', '/water-features')],
        'service_area': ['Modesto, CA', 'Turlock, CA', 'Tracy, CA'],
    },
    {
        'page': 'tracy', 'nav': 'services', 'out': 'water-features/tracy/index.html', 'path': '/water-features/tracy',
        'title': 'Modern Water Features in Tracy, CA | Green Lion Landscape',
        'description': 'Water walls, scuppers and spillways for Tracy and Mountain House homes, designed with the whole yard. Answers on wind, HOA approval and permits.',
        'og_title': 'Modern Water Features for Tracy Homes | Green Lion Landscape',
        'og_description': 'Water walls, scuppers and spillways designed with the whole yard by Green Lion Landscape. Call (209) 646-4046.',
        'share': {'eyebrow': 'Water features · Tracy, CA', 'heading': 'Modern Water Features for Tracy Homes', 'photos': [('wf-modern', .5, .45)]},
        'crumbs': [('Home', '/'), ('Water Features', '/water-features'), ('Tracy', '/water-features/tracy')],
        'service_area': ['Tracy, CA', 'Mountain House, CA'],
    },
    {
        'page': 'modesto', 'nav': 'services', 'out': 'water-features/modesto/index.html', 'path': '/water-features/modesto',
        'title': 'Koi Ponds & Pondless Waterfalls in Modesto, CA | Green Lion',
        'description': 'Koi ponds, pondless waterfalls and boulder streams built in Modesto by Green Lion Landscape. Pond or pondless, watering days, the turf rebate and more.',
        'og_title': 'Koi Ponds and Pondless Waterfalls in Modesto | Green Lion Landscape',
        'og_description': 'Boulder waterfalls, pondless streams and koi ponds by Green Lion Landscape. Call (209) 646-4046.',
        'share': {'eyebrow': 'Ponds · Pondless · Modesto, CA', 'heading': 'Koi Ponds and Pondless Waterfalls in Modesto', 'photos': [('wf-koi', .42, .5)]},
        'crumbs': [('Home', '/'), ('Water Features', '/water-features'), ('Modesto', '/water-features/modesto')],
        'service_area': ['Modesto, CA'],
    },
    {
        'page': 'turlock', 'nav': 'services', 'out': 'water-features/turlock/index.html', 'path': '/water-features/turlock',
        'title': 'Water Features in Turlock, CA | Green Lion Landscape',
        'description': 'Natural ponds and streams or modern water walls for Turlock homes, designed with the whole yard. Answers on watering days, mosquitoes and permits.',
        'og_title': 'Water Features in Turlock: Natural Ponds to Modern Water Walls | Green Lion',
        'og_description': 'Natural ponds and streams or modern water walls, designed with the whole yard by Green Lion Landscape. Call (209) 646-4046.',
        'share': {'eyebrow': 'Water features · Turlock, CA', 'heading': 'Water Features in Turlock', 'sub': 'Natural ponds to modern water walls.', 'photos': [('wf-pond-garden', .5, .5), ('wf-waterwall-day', .5, .5)]},
        'crumbs': [('Home', '/'), ('Water Features', '/water-features'), ('Turlock', '/water-features/turlock')],
        'service_area': ['Turlock, CA'],
    },
]

BANNER = '<!-- Built by tools/build.py from src/. Edit src/ and run: python3 tools/build.py -->'


ICONS = ['favicon.ico', 'img/icons/icon-32.png', 'img/icons/icon-192.png', 'img/icons/icon-512.png',
         'img/icons/icon-maskable-512.png', 'img/icons/apple-touch-icon.png']


def icon_version():
    """One version for all the icons. Browsers (Safari above all) keep old favicons, so a new icon gets a new address."""
    h = hashlib.sha1()
    for path in ICONS:
        h.update((ROOT / path).read_bytes())
    return h.hexdigest()[:10]


def manifest():
    v = icon_version()
    icons = [{'src': f'/img/icons/icon-192.png?v={v}', 'sizes': '192x192', 'type': 'image/png'},
             {'src': f'/img/icons/icon-512.png?v={v}', 'sizes': '512x512', 'type': 'image/png'},
             {'src': f'/img/icons/icon-maskable-512.png?v={v}', 'sizes': '512x512', 'type': 'image/png', 'purpose': 'maskable'}]
    data = {'name': 'Green Lion Landscape', 'short_name': 'Green Lion',
            'description': 'Custom landscaping, design and water features in Modesto, Turlock, Tracy and the Central Valley.',
            'start_url': '/', 'display': 'browser', 'background_color': '#202321', 'theme_color': '#202321', 'icons': icons}
    return json.dumps(data, indent=2) + '\n'


def version(path):
    return hashlib.sha1((ROOT / path).read_bytes()).hexdigest()[:10]


def attr(value):
    return value.replace('&', '&amp;').replace('"', '&quot;').replace('<', '&lt;')


def mark_current(html, page):
    """Mark the nav links for this page with aria-current, so the right tab is lit without JavaScript."""
    return re.sub(r'data-nav="(\w+)"', lambda m: m.group(0) + (' aria-current="page"' if m.group(1) == page else ''), html)


def structured_data(p):
    """Breadcrumbs and the water-feature service for the hub and city pages (schema.org JSON-LD)."""
    if 'crumbs' not in p:
        return ''
    graph = [{
        '@type': 'BreadcrumbList',
        'itemListElement': [{'@type': 'ListItem', 'position': i + 1, 'name': n, 'item': SITE + u} for i, (n, u) in enumerate(p['crumbs'])],
    }, {
        '@type': 'Service',
        'name': 'Water feature design and installation',
        'serviceType': 'Water feature installation',
        'url': SITE + p['path'],
        'areaServed': [{'@type': 'City', 'name': c} for c in p['service_area']],
        'provider': {'@type': 'HomeAndConstructionBusiness', 'name': 'Green Lion Landscape', 'telephone': '+1-209-646-4046', 'url': SITE + '/'},
    }]
    data = json.dumps({'@context': 'https://schema.org', '@graph': graph}, indent=None, separators=(',', ':'))
    return '<script type="application/ld+json">' + data.replace('</', '<\\/') + '</script>\n'


def render(p):
    layout = (SRC / '_layout.html').read_text()
    parts = {
        'header': mark_current((SRC / '_header.html').read_text().rstrip('\n'), p.get('nav', p['page'])),
        'footer': (SRC / '_footer.html').read_text().rstrip('\n'),
        'tail': mark_current((SRC / '_tail.html').read_text().rstrip('\n'), p.get('nav', p['page'])),
        'structured_data': structured_data(p),
        'main': (SRC / 'pages' / f"{p['page']}.html").read_text().rstrip('\n'),
        'url': SITE + p['path'],
        'page': p['page'],
        'css_version': version('assets/site.css'),
        'icon_version': icon_version(),
        'js_version': version('assets/site.js'),
    }
    for k in ('title', 'description', 'og_title', 'og_description'):
        parts[k] = attr(p[k])
    parts['og_image'] = f"{SITE}/img/share/{p['page']}.jpg?v={version('img/share/' + p['page'] + '.jpg')}"
    parts['og_image_alt'] = attr(p['share']['heading'] + ': Green Lion Landscape')

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
    outputs['site.webmanifest'] = manifest()
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
