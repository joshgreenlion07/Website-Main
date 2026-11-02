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

- Palette from the 2026 guide: a lighter beige page with Warm white bands, Leaf green accents and rules, and Deep green buttons and accent blocks.
- Type: Liberation Serif for display and Liberation Sans for body, loaded as Tinos and Arimo from Google Fonts.
- The header uses the approved October 16 logos on Warm white (the guide's alternate background): the lion emblem on phones and tablets and the horizontal signature on desktop. The footer uses the Master lockup.

Details are in [`docs/BRAND.md`](docs/BRAND.md).

## Layout

Navigation adapts by screen size, with the same five tabs (**Home · Services · Inspire · Book · My Project**):

- **Phones (under 768 px):** a one-screen app. The header and bottom tab bar stay on screen and only the content scrolls.
- **Tablets (768–1199 px):** a left side rail plus the fixed header.
- **Desktop (1200 px and up):** a top nav with the full horizontal signature.

Call and *Schedule your design consultation* stay in the header. The page uses a light beige background throughout; Deep green is kept for a few accent blocks. Views are routed on the URL hash (`#home`, `#services`, `#inspire`, `#book`, `#portal`).

| View | What it does |
| --- | --- |
| **Home** | Follows the guide's homepage order: a water-feature hero with a swipeable waterfall and pond gallery, Lisa's featured article, the seasonal Journal, other services and recent projects, then a design consultation call to action. |
| **Services** | The five-step process, the service categories and the project scopes. No prices are shown. |
| **Get Inspired** | Marked *coming soon*. Matches the visitor's words against tags on past Green Lion projects. |
| **Book** | Lets the visitor pick project types, a day and a preferred time. The receipt says the time is not booked yet. |
| **My Project** | A sign-in screen and a demo project with plants, watering by season, lighting, hardscape and water-feature care. It includes a water-feature maintenance request. |

## Project structure

```
index.html            The whole site: markup, styles and script
img/                  Web-sized photos and logo crops
brand/                Approved Oct 16 logos (PNG + SVG) and guide page renders
docs/BRAND.md         Colors, type, logo and voice rules used in the build
docs/CONTENT_NOTES.md What's real, what's sample data, open decisions, photo sources
```

## Status

This is a prototype. [`docs/CONTENT_NOTES.md`](docs/CONTENT_NOTES.md) lists the content that needs sign-off before launch and the open decisions (phone number, hero headline, bottom navigation).

Not built yet:

- Booking submission, real availability and maintenance dispatch, which need a scheduling backend. Today's receipts are previews only.
- Client authentication and per-client data for My Project. The demo uses a sample record.
- The *Get Inspired* generator. Today it only matches keywords.
