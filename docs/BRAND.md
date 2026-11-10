# Green Lion Brand Guide 2026: rules used in this build

Source: *Green Lion Brand Guide 2026*, Version 1.0, October 24, 2026 (website direction and Lisa's design-notebook addendum updated October 29, 2026). The October 16, 2026 logo is retained; the palette, typography and application rules in the guide are the standards for that identity.

The guide PDF itself is not kept in this repo (13 MB). Renders of the two pages the build relies on most are in `brand/`:

- [`../brand/guide-2026-colors.jpg`](../brand/guide-2026-colors.jpg): page 7, color palette
- [`../brand/guide-2026-type.jpg`](../brand/guide-2026-type.jpg): page 9, typography

## Colors

| Name | Hex | RGB | Role in the guide |
| --- | --- | --- | --- |
| Charcoal | `#202321` | 32, 35, 33 | Primary dark surface |
| Warm white | `#F5F2EA` | 245, 242, 234 | Primary light surface |
| Leaf green | `#7DC00F` | 125, 192, 15 | Brand accents and rules |
| Lime highlight | `#AFE414` | 175, 228, 20 | Small highlights |
| Deep green | `#244A1C` | 36, 74, 28 | Buttons and dark accents |
| Mineral stone | `#B6AEA1` | 182, 174, 161 | Supporting neutral |
| Logo white | `#FFFFFF` | 255, 255, 255 | Logo artwork only |

Let neutral surfaces dominate and use green for key cues, not every background. The page defines these as CSS custom properties (`--charcoal`, `--warm`, `--leaf`, `--lime`, `--deep`, `--stone`, `--white`) at the top of the `<style>` block in `index.html`.

### Contrast pairs used

| Text on background | Ratio | Where |
| --- | --- | --- |
| Warm white on Charcoal | 14.18:1 | Editorial text on dark surfaces |
| Warm white on Deep green | 9.06:1 | Primary buttons on light pages |
| Charcoal on Leaf green | 7.11:1 | Buttons and banners on dark surfaces |
| Warm white on Leaf green | 1.99:1 | **Never used.** Put Charcoal text on Leaf green instead. |

Normal text needs at least 4.5:1.

## Type

| Role | Brand font | Web font loaded | Fallbacks |
| --- | --- | --- | --- |
| Display and headings | Liberation Serif | Tinos | `"Liberation Serif", Georgia, serif` |
| Body, labels, buttons | Liberation Sans | Arimo | `"Liberation Sans", Arial, sans-serif` |

- Liberation Serif and Liberation Sans are licensed under the SIL Open Font License 1.1.
- Tinos and Arimo on Google Fonts are the same designs as Liberation Serif and Liberation Sans, so the page loads those.
- Use Regular (400) and Bold (700). Italic is only for a short editorial accent.

## Logos

All files are the approved October 16, 2026 artwork. The PNGs are the pixel-accurate reference. The SVGs are traced from the PNGs with approximated gradients, so check them against the PNG before using them in production.

| File | Use |
| --- | --- |
| `brand/Greenlion-Landscape-Logo-Master.png` / `.svg` | Master lockup with the service descriptor and CL #1150882 line |
| `brand/Greenlion-Landscape-Logo-Horizontal.png` / `.svg` | Horizontal full signature |
| `brand/Greenlion-Landscape-Logo-Vertical.png` / `.svg` | Stacked signature |
| `brand/Greenlion-Landscape-Logo-Square.png` / `.svg` | Square lockup |
| `brand/Greenlion-Landscape-Lionhead.png` | Lion emblem |
| `brand/Greenlion-Landscape-Logo-Social-Circle.png` | Social profile image |

Web-sized crops used by the page are in `img/`: `logo-horizontal.png`, `logo-master.png`, `logo-compact.png` and `lion-emblem.png`.

### Rules used in the build

- The logo always sits on a solid, quiet panel. This build uses Charcoal, the guide's preferred background. The logo is never placed over photos.
- No stretching, retyping or retracing, added effects (shadows, glows, outlines) or mixed lions.
- Earlier lion and waterfall marks are retired. The Inspirational Waterscapes mark has been removed from the site.
- Clear space: X = 8% of the logo's total width on every side.

### Formats and minimum sizes

| Format | Minimum | Where in the build |
| --- | --- | --- |
| Full signature | 360 px wide | Desktop header (horizontal). The footer uses the Master lockup at 360 px. |
| Compact signature | 180 px wide | Not used on the page yet |
| Lion emblem | 48 px wide | Phone and tablet header, shown at 64 px |

## Voice

- Primary line: **Outdoor living. Beautifully built.**
- Short description: *Custom landscaping, design and water features for outdoor spaces that feel connected.*
- Primary action: **Explore water features**. Secondary action: **Schedule your design consultation**.
- Keep claims grounded. Avoid "best", guaranteed timelines and unapproved pricing.
- Brand name in prose: Green Lion Landscape. Formal name: Green Lion Landscape Inc.
- CSLB #1150882. Phone (209) 585-9767.

## Homepage order

From the guide's digital application section:

1. Water-feature hero
2. Waterfall and pond gallery
3. Lisa's featured article
4. Other landscape services
5. Design consultation

## Page surfaces in this build

The site uses the **Charcoal Split** direction (chosen November 10, 2026), styled closer to greenlionlandscape.com while keeping the 2026 palette and logo:

- Charcoal (`#202321`) info bar, header, tab bar or side rail, home hero, Get Inspired hero and footer. Charcoal is the guide's preferred logo background, so the logo now sits on Charcoal everywhere.
- A 3 px Leaf green rule under the header and the home hero.
- Home hero is split on screens 960 px and wider: headline, lede and buttons on the left, a Leaf green divider, and the water-feature gallery on the right. Phones and tablets stack the copy above the gallery.
- Buttons in the dark areas are Leaf green with Charcoal text, in uppercase with letter spacing. The italic accent word in hero headlines is Lime.
- Content sections stay light: the beige page (`#FBF8F1`), Warm white bands, white cards, and Deep green accent blocks (Lisa's article, the consultation band, the booking summary, the featured scope and the My Project header).
