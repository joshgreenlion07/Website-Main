# Green Lion Landscape: website concept

App-first website concept for **Green Lion Landscape** (Modesto and the Central Valley), built by CreatorLab Studios to the **Green Lion Brand Guide 2026**.

> Outdoor living. Beautifully built.

This is a clickable static prototype: one HTML file, its photos and the brand assets. There is no build step and no backend.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

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

Every booking button is a **Call** button (`tel:+12096464046`), and the header keeps a Call button too. **My Project** links to Green Lion Area Planner (https://area-planner-beta.vercel.app/) in a new tab, and so does the footer's **Vendor login**. The page uses a light beige background throughout; Deep green is kept for a few accent blocks. Views are routed on the URL hash (`#home`, `#services`, `#gallery`). Links from the old site land on deep links such as `#svc-pavers`, `#gallery-water` and `#contact`.

| View | What it does |
| --- | --- |
| **Home** | A water-feature hero with a swipeable gallery that leads with *Fire Bowl Creek*, *Lavender Creek*, *Moonlit Water Wall* and *Palm Koi Pond*. Then the *3D Before You Build* band (free 3D design offer, a silent 3D-to-built loop with a dusk/daytime switch and a design-vs-built slide gallery), Lisa's featured article, one short Journal lesson with the frost check, other services, recent projects and a design consultation call to action. |
| **Services** | The five-step process, the service categories and the project scopes. No prices are shown. Water features, Pavers and Turf & planting each carry a free 3D design row that opens a 3D walkthrough reel. |
| **Gallery** | 50 photos of Green Lion work in a grid, with filters for water features, patios and pavers, kitchens and pavilions, fire and lighting, saunas and hot tubs, planting and turf, and 3D design vs built. Tap a photo for a larger view, its project and a Call button. |

## Going live

`vercel.json` sends the 27 page addresses of the old site (for example `/service-pavers.html` and `/gallery-water.html`) to the matching part of this site with permanent redirects. `robots.txt` and `sitemap.xml` point search engines at https://www.greenlionlandscape.com/. The domain's DNS is at Squarespace; see `docs/CONTENT_NOTES.md` for the records.

## Project structure

```
index.html            The whole site: markup, styles and script
img/                  Web-sized photos and logo crops (3d-* are the 3D promo slides and reel covers)
video/                Web-sized 3D promo reels (H.264, 720 × 1280)
vercel.json           Redirects from the old site's pages
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
