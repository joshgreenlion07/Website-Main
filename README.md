# Green Lion Landscape: website concept

App-first website concept for **Green Lion Landscape** (Modesto and the Central Valley), built by CreatorLab Studios to the **Green Lion Brand Guide 2026**.

> Outdoor living. Beautifully built.

The site is static HTML, CSS and JavaScript with its photos and the brand assets. There is no backend. Real pages share one layout: Home (`/`), Services (`/services`), Gallery (`/gallery`), and the water features section (`/water-features` plus city pages for Tracy, Modesto and Turlock).

## Run it

Serve the folder (the pages use root paths such as `/img/` and `/services`, so open them through a server, not as files):

```bash
python3 -m http.server 8000
```

Python's server opens `/services` by redirecting to `/services/`; Vercel serves `/services` directly.

## Edit and build

The pages are built from `src/` by a short script, and the built files are committed so Vercel needs no build step.

- Shared layout and `<head>`: `src/_layout.html`. Header, footer and tab bar: `src/_header.html`, `src/_footer.html`, `src/_tail.html`.
- Page content: one file per page in `src/pages/` (`home`, `services`, `gallery`, `water-features`, `tracy`, `modesto`, `turlock`). Titles, descriptions, share images, breadcrumbs and service areas are in `PAGES` at the top of `tools/build.py`, which also writes each city page's structured data (breadcrumbs and service area).
- Styles and script for every page: `assets/site.css` and `assets/site.js` (edit these directly).

```bash
python3 tools/build.py          # writes every page (index.html, services/index.html, water-features/tracy/index.html ...) and sitemap.xml
python3 tools/build.py --check  # fails if a built file is out of date
```

To add a page, add its content file to `src/pages/` and an entry to `PAGES` (with its `share` eyebrow, heading and photos); the sitemap picks it up.

Link previews: each page has its own 1200 x 630 share image in `img/share/` with the page's heading and photo, plus Open Graph and X (Twitter) card tags. After changing a heading or share photo, run `python3 tools/share_images.py`, then `python3 tools/build.py`. The image address carries a version, so texts and social apps fetch the new image instead of a cached one. The icon addresses carry a version too, because Safari keeps old favicons; changing an icon changes its address on the next build. `.vercelignore` keeps `src/` and `tools/` off the live site.

## Brand

- Palette from the 2026 guide, in the **Charcoal Split** direction: Charcoal header, navigation, home hero and footer; Leaf green rules and buttons; a light beige page with Warm white bands and Deep green accent blocks for the content.
- Type: Liberation Serif for display and Liberation Sans for body, loaded as Tinos and Arimo from Google Fonts.
- The header uses the approved October 16 logos on Charcoal (the guide's preferred background): the lion emblem on phones and tablets and the horizontal signature on desktop. The footer uses the Master lockup.

Details are in [`docs/BRAND.md`](docs/BRAND.md).

## Layout

Navigation adapts by screen size, with the same tabs (**Home · Services · Call · Gallery · My Project**). On phones and tablets the raised circle in the middle of the tab bar is a **Call** button that dials (209) 646-4046:

- **Phones (under 768 px):** a one-screen app. The header and bottom tab bar stay on screen and only the content scrolls.
- **Tablets (768–1199 px):** a left side rail plus the fixed header.
- **Desktop (1200 px and up):** a top nav with the full horizontal signature.

Every booking button is a **Call** button (`tel:+12096464046`), and the header keeps a Call button too. **My Project** links to Green Lion Area Planner (https://area-planner-beta.vercel.app/) in a new tab, and so does the footer's **Vendor login**. The page uses a light beige background throughout; Deep green is kept for a few accent blocks. Each page has its own address, title, description and canonical link. Deep links: `/services#svc-pavers` (a service), `/services#design-case`, `/gallery#water` (a filtered gallery; also `#pavers`, `#kitchens`, `#landscaping`, `#turf`, `#3d`) and `/#contact`. Links from the old one-page version (`/#services`, `/#gallery-water`, `/#svc-pavers`) are forwarded to the new pages.

| Page | What it does |
| --- | --- |
| **Home** `/` | A water-feature hero with a swipeable gallery that leads with *Fire Bowl Creek*, *Lavender Creek*, *Moonlit Water Wall* and *Palm Koi Pond*. Then the *3D Before You Build* band (free 3D design offer, the daytime *We built this yard in 3D first* reel on a silent loop and a design-vs-built slide gallery), a *What we install* showcase (custom water features, landscaping, pavers, outdoor kitchens and synthetic grass, each linking to the Gallery), Lisa's Design Notebook article *Water Features Are Taking Over*, one short Journal lesson with the frost check, other services, recent projects and a design consultation call to action. |
| **Services** `/services` | The five-step process; *From a Measured Plan to Your Yard in 3D* (one client's scaled site plan and six 3D views of the same yard, with no client details); the service categories; and the project scopes. No prices are shown. Water features, Pavers and Turf & planting each carry a free 3D design row that opens a 3D walkthrough reel. |
| **Water Features** `/water-features` | A short hub: links to the three city pages, the kinds of water features, and a call to action. |
| **Tracy** `/water-features/tracy` | Modern water features with an upscale look: a full-width photo hero, water walls, scuppers and fire-and-water, a charcoal whole-yard band, a gallery and seven local questions (wind, HOA approval, water use, permits, mosquitoes, plants, cost). |
| **Modesto** `/water-features/modesto` | Ponds and pondless waterfalls with a warm, natural look: rounded photos, a pond-or-pondless comparison, what we build, a gallery, a deep green "around the water" band and eight local questions (water rules, watering days, the turf rebate, soil, mosquitoes, winter, cost). |
| **Turlock** `/water-features/turlock` | Both styles with an elegant, centered look: natural and modern paths side by side, a mixed gallery, the whole yard, and six local questions (style, watering days, water use, mosquitoes, permits, cost). |
| **Gallery** `/gallery` | 51 photos of Green Lion work in a grid, with filters for water features, patios and pavers, kitchens and pavilions, fire and lighting, saunas and hot tubs, planting and turf, and 3D design vs built. Tap a photo for a larger view, its project and a Call button. |

## Going live

`vercel.json` sends the 27 page addresses of the old site (for example `/service-pavers.html` and `/gallery-water.html`) to the matching page of this site with permanent redirects. `robots.txt` and `sitemap.xml` point search engines at the three pages on https://www.greenlionlandscape.com/. The domain's DNS is at Squarespace; see `docs/CONTENT_NOTES.md` for the records.

Photos are daytime only. Night and dusk shots were swapped for daytime photos of the same subject (see `docs/CONTENT_NOTES.md`).

## Project structure

```
index.html            Home page (built)
services/index.html   Services page (built)
gallery/index.html    Gallery page (built)
water-features/       Water features hub and the tracy/, modesto/ and turlock/ pages (built)
assets/site.css       Styles for every page
assets/site.js        Script for every page: data, carousel, gallery, dialogs
src/                  Page sources and shared layout (not deployed)
tools/build.py        Builds the pages and sitemap.xml from src/ (not deployed)
favicon.ico           Lion icon; img/icons/ has the 32, 192 and 512 px icons, the Apple touch icon and a maskable icon
site.webmanifest      Name, colors and icons for phones that save the site (written by build.py)
img/share/            Link-preview images, one per page (1200 x 630)
tools/share_images.py Makes img/share/*.jpg and the icons (needs the Liberation fonts)
img/                  Web-sized photos and logo crops (3d-* are the 3D promo slides and reel covers)
video/                Web-sized 3D promo reels (H.264, 720 × 1280)
vercel.json           Redirects from the old site's pages to the new pages
robots.txt, sitemap.xml
brand/                Approved Oct 16 logos (PNG + SVG) and guide page renders
docs/BRAND.md         Colors, type, logo and voice rules used in the build
docs/CONTENT_NOTES.md What's real, what's sample data, open decisions, photo sources
```

## Status

This is a prototype. [`docs/CONTENT_NOTES.md`](docs/CONTENT_NOTES.md) lists the content that needs sign-off before launch and the open decisions (phone number, hero headline, bottom navigation).

Not built yet:

- Online booking. Visitors call for now.
- A client portal on this site. My Project opens Area Planner.
