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

Navigation adapts by screen size, with the same tabs (**Home · Services · Call · Book · My Project**). On phones and tablets the raised circle in the middle of the tab bar is a **Call** button that dials (209) 585-9767:

- **Phones (under 768 px):** a one-screen app. The header and bottom tab bar stay on screen and only the content scrolls.
- **Tablets (768–1199 px):** a left side rail plus the fixed header.
- **Desktop (1200 px and up):** a top nav with the full horizontal signature.

Call and *Schedule your design consultation* stay in the header. The footer has a **Vendor login** button for vendors and crew that opens Green Lion Area Planner (https://area-planner-beta.vercel.app/) in a new tab. The page uses a light beige background throughout; Deep green is kept for a few accent blocks. Views are routed on the URL hash (`#home`, `#services`, `#inspire`, `#book`, `#portal`).

| View | What it does |
| --- | --- |
| **Home** | A water-feature hero with a swipeable gallery that leads with *Fire Bowl Creek*, *Lavender Creek*, *Moonlit Water Wall* and *Palm Koi Pond*. Then the *3D Before You Build* band (free 3D design offer, a silent 3D-to-built loop with a dusk/daytime switch and a design-vs-built slide gallery), Lisa's featured article, one short Journal lesson with the frost check, other services, recent projects and a design consultation call to action. |
| **Services** | The five-step process, the service categories and the project scopes. No prices are shown. Water features, Pavers and Turf & planting each carry a free 3D design row that opens a 3D walkthrough reel. |
| **Book** | Lets the visitor pick project types, a day and a preferred time. The receipt says the time is not booked yet. |
| **My Project** | A sign-in screen and a demo project with plants, watering by season, lighting, hardscape and water-feature care. It includes a water-feature maintenance request. |

## Project structure

```
index.html            The whole site: markup, styles and script
img/                  Web-sized photos and logo crops (3d-* are the 3D promo slides and reel covers)
video/                Web-sized 3D promo reels (H.264, 720 × 1280)
brand/                Approved Oct 16 logos (PNG + SVG) and guide page renders
docs/BRAND.md         Colors, type, logo and voice rules used in the build
docs/CONTENT_NOTES.md What's real, what's sample data, open decisions, photo sources
```

## Status

This is a prototype. [`docs/CONTENT_NOTES.md`](docs/CONTENT_NOTES.md) lists the content that needs sign-off before launch and the open decisions (phone number, hero headline, bottom navigation).

Not built yet:

- Booking submission, real availability and maintenance dispatch, which need a scheduling backend. Today's receipts are previews only.
- Client authentication and per-client data for My Project. The demo uses a sample record.
