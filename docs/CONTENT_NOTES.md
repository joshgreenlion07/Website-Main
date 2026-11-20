# Content notes

What in the prototype is real Green Lion content, what is sample data, what still needs a decision, and where the photos came from.

## Real content

- Brand colors, fonts, logos and voice, per [BRAND.md](BRAND.md) (Green Lion Brand Guide 2026).
- Phone (209) 646-4046 (set by the owner on Nov 18, 2026; the 2026 guide lists the old (209) 585-9767) and CSLB #1150882 from the guide. The email info@greenlionlandscape.com and greenlionlandscape.com also come from the guide.
- Project names, stories and features for the Look Book projects **Hidden Resort** and **Luxe Lounge**, from the Look Book creative brief.
- The five-step process and the Essential / Signature / Luxury project scopes, from the Look Book creative brief. Dollar ranges have been removed (see below).
- Service categories, from the *Website Marketing* content brief.
- Lisa's Design Notebook article **"Water Features Are Taking Over"** was rewritten on Nov 20, 2026 at the owner's request. It covers nature, comfort and peace in the backyard, and Green Lion's passion for building these escapes. It's written in the team's voice, but it runs under Lisa Taylor's byline, so **Lisa should read it**. Her earlier article, approved on Nov 18, is in git history (commit 3b626d6).
- All photos are Green Lion projects. Nothing is AI-generated.

## Daytime photos only (Nov 20, 2026)

At the owner's request the site shows no night or dusk photos. Each one was swapped for a daytime photo of the same subject, or removed where none exists:

| Was (night or dusk) | Now (daytime) |
| --- | --- |
| Moonlit Water Wall, lit at dusk | The same water wall by day, with the leaping-frog sculptures (`wf-waterwall-day`, Aug 2026 client photography) |
| Water Wall Garden, wide at dusk | The same yard, wide, by day (`pj-wall-wide`) |
| Lit agave urn | The same urn by day (`learn-agave`) |
| Lantern Falls with underwater lights | The same boulder falls by day (`wf-lantern-falls`, Inspirational Waterscapes IMG_0174) |
| Ledgestone Spill Wall at night | The same three-column wall by day (`wf-three-column-wall`, E9A9118) |
| Gas fire lounge at night | The same lounge by day (`svc-fire-day`, E9A9130) |
| Cube sauna at night | The same sauna by day (`svc-wellness-day`, E9A9142) |
| Fire table and lighting at night | Removed; the daytime lounge is already in the Gallery |
| Uplit feather grass | Removed from the Gallery. The frost check's feather grass row uses daytime blue fescue (`learn-bluefescue`). |
| Dusk 3D reels and slides, and the day-to-night reel | Removed with the Daytime / Dusk switch. The 3D band, the slides and the service reels are daytime only. |

The working titles *Moonlit Water Wall* and *Lantern Falls* are kept; their captions now describe the daytime photos.

## Services: from a measured plan to 3D (Nov 20, 2026)

The Services page has a *From a Measured Plan to Your Yard in 3D* section after *How It Works*. It shows one client's yard with the owner's details removed:

- **The plan** (`design-plan`) is the *Site Development Plan* from the project's design set (Oct 2025). It's cropped to remove the title block, which holds the client's names, address, the design team's credits and the plan index. The house is shown only as a generic "Owner's House" roof, with no rooms. The plan keeps the yard dimensions, the lettered features, the plant legend and the hardscape materials. The same image replaces the sample drawing on the *2D & 3D Design* service card.
- **The 3D** (`design-3d-1` to `-6`) is six daytime renderings of the same yard from that design set: the view from above, the fire pit lounge, the hot tub and pergola fireplace, the water feature wall, the outdoor kitchen and the side yard. They're labeled as design concepts.
- Tapping the plan or a render opens it larger. No client name, address or street appears anywhere on the site.

## Home page updates (Nov 20, 2026)

- **Landscape Lighting:** the service is no longer *Lighting, Audio & Video*. Audio and video are out at the owner's request. It now shows a close-up of a lit spotlight among yucca blades (`svc-lighting-closeup`, from the Aug 2026 client photography).
- **Retaining walls:** the service now shows a block retaining wall with a raised bed (`svc-retaining`, Hidden Resort frame E9A5259). The curved seat-wall photo (`svc-walls`) stays in the Gallery.

- **Hero text:** now about specialty water feature design and installation.
- **What we install:** a showcase sits after the 3D band, followed by Lisa's Design Notebook band. It has five photo tiles: custom water features, landscaping, pavers, outdoor kitchens and synthetic grass. Each tile opens the matching Gallery filter, and *See more in our gallery* opens the full Gallery.
- **Gallery filters:** landscaping and synthetic grass both open the *Planting & turf* filter.
- **Lisa's photo:** the band and the article open with `lisa-waterfall`, a waterfall over boulders into a pebble stream with Russian sage. It is Final Photos IMG_6463 and was chosen by the owner on Nov 20, 2026. The article's photo strip shows the Moonlit Water Wall and the three-column water wall. The photo is also sixth in the Gallery.
- **Three-column water wall:** the photo (`wf-three-column-wall`) leads the showcase and sits fifth in the Gallery. It is frame E9A9118 from the Feb 2026 RAW shoot. It's cropped to the wall and brightened with a shadow lift and automatic contrast, because it was backlit. It is the same wall as *Ledgestone Spill Wall* (`wf-stonewall`, at night).
- **Headings:** every heading on the site is in title case. Small words such as *and*, *of*, *the*, *to* and *with* stay lowercase unless they come first or last. This covers service names, video titles and gallery captions, because they show as headings in the pop-ups.

## Going live (Nov 18, 2026)

At the owner's request, before pointing greenlionlandscape.com at this site:

- **Book is off for now.** The booking form only showed a receipt and sent nothing, so it was removed. Every booking button is now a Call button (`tel:+12096464046`).
- **Gallery** takes Book's place in the nav and tab bar: 50 project photos with category filters and a larger view.
- **My Project** links to Green Lion Area Planner in a new tab. The demo client portal was removed.
- **Lisa's article** is approved, and the draft label is gone.
- **SEO:** the page title matches the old site ("Landscape Contractor Modesto, CA | Green Lion Landscape"). It also has a canonical URL, social preview tags, `robots.txt` and `sitemap.xml`.
- **Redirects:** `vercel.json` sends all 27 page addresses of the old site to the matching view, service card or gallery filter. On Nov 20, 2026 it also gained the 29 older addresses Google still showed in search, which were returning 404: `/inspirational-waterscapes` (the top page, about 5,100 impressions over 16 months), `/portfolio` and its sub-pages, `/contact-us`, `/contact`, the service and project pages, and the blog posts. `trailingSlash: false` makes `/portfolio/` redirect the same way as `/portfolio`. Fencing and maintenance pages go to Services, because this site has no fencing or maintenance service yet. The About and Accessibility pages go to Home.

### DNS at Squarespace

The domain's DNS is at Squarespace. Before the switch it pointed at the old site on Hostinger: `A @ 194.195.84.174` and `CNAME www greenlionlandscape.com`. To go live:

1. In Vercel, add `www.greenlionlandscape.com` and `greenlionlandscape.com` to the `website-main` project (team joshua-jackson). Vercel then shows the exact records to use.
2. In Squarespace, under Domains › greenlionlandscape.com › DNS, change the `@` A record and the `www` CNAME to Vercel's values.
3. Leave the Google email record (`MX 1 smtp.google.com`) and the three `google-site-verification` TXT records alone.

To undo the switch, put the two Hostinger values back.

## Home page simplified (Nov 18, 2026)

At the owner's request:

- **Get Inspired is off for now:** the nav item, the Inspire tab, the coming-soon banner and side card, the footer link, the Services button, the project-dialog button and the Get Inspired page itself. An old `#inspire` link now opens Home. The code is in git history (commit 771d5fc) if it comes back.
- **Middle tab:** the raised circle in the tab bar is now a Call button (`tel:+12096464046`).
- **Hero gallery order:** Fire Bowl Creek, Lavender Creek, Moonlit Water Wall and Palm Koi Pond come first, then the rest as before.
- **Shorter Journal:** after the frost check ("Try it"), the home page drops the two Built by Green Lion bands, the plant cards, winter watering, the winter checklist, the Journal side cards and the Quick reads posts. The page goes straight to other services, recent projects and the consultation band. On a phone it is about 12 screens long instead of 20. The removed winter watering and plant-care content is in git history (commit 771d5fc).

## 3D Before You Build promos

Added November 18, 2026 with the owner's approval of the free 3D design offer.

- **Home:** a band under the hero with the offer, the three steps (we map your yard, you walk through it in 3D, then we build it), *Call to book your free 3D design*, the *We built this yard in 3D first* reel playing silently on a loop (the daytime version, chosen by the owner on Nov 20, 2026), and the daytime slides 1 to 7 of the *Designed in 3D. Built for real.* carousel. *Watch with sound* opens the same reel with sound.
- **Services:** Water features, Pavers & decorative concrete, and Turf, planting & irrigation each have a free 3D design row that opens one reel in a dialog. Water features get *We Built This Backyard in 3D First* (19 s, daytime), pavers get *Walk Your Yard in 3D* (13 s) and turf and planting get *How It Works* (13 s, daytime). Their button reads *Call to book your free 3D design*.
- The disclosure line sits under the home video and in every video dialog: *Real Green Lion project. 3D design from our planning software; photo motion, voice and music made with AI tools.* The slides are still photos and 3D renders labeled *3D design* and *Built*.
- No client names appear in the copy, the slides or the reels.
- The 3D buttons call (209) 646-4046.
- Every reel on the site stops just before its end card, with a half-second fade. The end cards in the social files still show the old number, (209) 585-9767, and the page has its own Call button anyway. The band's daytime reel (`video/3d-see-it-first-day.mp4`, from `post1d_final.mp4`, the same file as the Drive daytime reel) is 18.8 s. The pop-up reels with sound are 19 s (water features), 13 s (pavers) and 13 s (turf and planting). All of them are daytime.
- When the social media files are re-exported with (209) 646-4046, the full reels can go back in. Carousel slide 8 shows the old number too, and the site doesn't use it.
- The loop plays only while it is on screen, and does not autoplay for visitors who ask for reduced motion (they get play controls).
- Not used: the spa and sauna reel, the dusk versions of the reels and carousel, the day-to-night reel (it ends after dark) and carousel slide 8 (the end card).

## Changes made for brand compliance

- Pools removed (2026-11-01): Green Lion doesn't build pools. The Pools & spas service, the Palmstone Escape lap-pool project and its photos, and every pool option in Book and Get Inspired were taken out. Hot tubs moved under Saunas, hot tubs & wellness.

The 2026 guide asks for grounded claims, no unapproved pricing and only the current logo. To follow it:

- Package dollar ranges and project budget ranges were removed because the pricing is not approved. Services now says pricing is set after the design consultation.
- The "No. 1" / "No. 2" ranking labels were removed from the water-feature carousel.
- The Inspirational Waterscapes mark was removed, because the guide retires earlier lion and waterfall marks.
- City names appear only where the location is confirmed: Modesto for the water wall project. Other photos are captioned "Green Lion project".

## Open decisions

| Decision | What conflicts | Prototype today |
| --- | --- | --- |
| Phone number | The older *Website Marketing* brief listed (209) 338-8766 and the 2026 guide used (209) 585-9767. On Nov 18, 2026 the owner changed the number to (209) 646-4046. | Uses (209) 646-4046 everywhere on the site. The 3D reels and carousel slide 8 still show the old number in their end cards until the social media files are re-exported (see below). |
| Hero headline | The owner asked for "Central Valley's Favorite Water Features" (title case since Nov 20, 2026, with the eyebrow "Water features · Modesto, Turlock, Tracy"). The guide says to keep claims grounded. Lisa's draft suggests "Water. Stone. Your backyard retreat." instead. | Shows the owner's headline. |
| Bottom navigation | The UX spec's bottom nav is Home, Services, Call, My Project. The owner first asked for Home, Services, Inspire, Book, My Project. | Since Nov 18, 2026: Home, Services, Call (the raised circle), Gallery, My Project (opens Area Planner). The header Call button is still there too. |

## Placeholders to confirm before launch

| Item | Where | Note |
| --- | --- | --- |
| Water-feature working titles | Home carousel | *Boulder Falls*, *Lavender Creek*, *Moonlit Water Wall*, *Palm Koi Pond*, *Garden Pond*, *Lantern Falls*, *Scupper Water Wall*, *Fire Bowl Creek*, *Garden Stream* and *Ledgestone Spill Wall* are working titles. |
| Project working titles | Project cards, Gallery | *Water Wall Garden*, *Palm Koi Pond*, *Creekside Pavilion Yard* and *Modern Wellness Yard* are working titles. The Creekside project's city is not confirmed, so it is captioned "Green Lion project". |
| Frost thresholds | Journal | General Central Valley guidance. The crew should review the numbers. |

## Photo sources

Exported from the Green Lion shared drive at web size (JPEG, quality 72). The RAW-shoot images are full-size previews pulled from the Canon CR3 files, with automatic contrast applied. The files added on October 29, 2026 come from the CreatorLab drive's Branding folder.

| Files | Source folder | Shot |
| --- | --- | --- |
| `wf-koi`, `wf-stonewall`, `wf-three-column-wall`, `pj-koi-*`, `pj-well-*`, `learn-tropical`, `svc-lighting`, `svc-wellness`, `svc-fire` | Branding › Photos RAW | Feb 2026 |
| `wf-waterwall`, `pj-wall-*`, `learn-citrus`, `learn-agave`, `learn-feathergrass`, `learn-mossrock`, `learn-spotlight`, `learn-sconce`, `svc-lighting-closeup`, `learn-blueflowers`, `pt-urn`, `pt-fixture` | Completed client project photography | Aug 2026 |
| `wf-lantern-falls` (IMG_0174, daytime), `wf-modern`, `svc-water` | Look Book › Inspirational Waterscapes | 2025 |
| `pj-hidden-*`, `svc-kitchen`, `svc-turf`, `svc-retaining` (E9A5259) | Look Book › Hidden Resort | 2025 |
| `pj-luxe-*`, `svc-pavers`, `learn-bougainvillea`, `pt-pavers` | Look Book › Luxe Lounge | 2025 |
| `wf-boulder-falls` (IMG_0397), `wf-pond-garden` (IMG_1815), `wf-stream` (IMG_6162), `lisa-stream` (IMG_6163), `learn-foxtail` (IMG_0848), `svc-walls` (IMG_1810) | CreatorLab drive › Branding | Added Oct 29, 2026 |
| `wf-creek-falls` (IMG_6484), `lisa-waterfall` (IMG_6463), `wf-creek-firebowl` (IMG_6376), `pj-creek-1` (IMG_6379), `pj-creek-2` (IMG_6381), `pj-creek-3` (IMG_6483), `pj-creek-4` (IMG_6371), `pj-creek-5` (IMG_6358), `pj-creek-6` (IMG_6360), `svc-pavilion` (IMG_6382), `learn-lavender` (IMG_6463) | CreatorLab drive › Branding › Final Photos (edited and upscaled versions of real project photos) | Added Nov 13, 2026 |
| `3d-*` images and `video/3d-*` reels (covers, daytime design-vs-built slides 1 to 7) | Green Lion Landscape › 3D Before You Build, and its daytime subfolder | Reels and carousels made for social, Nov 2026. Reels re-encoded to 720 × 1280 H.264; slides resized to 720 × 900. |

`svc-walls` (IMG_1810) replaces the earlier Hidden Resort raised-bed shot. `svc-pavilion` replaces the Hidden Resort kitchen photo on the Services card; that photo is still used in the Hidden Resort project.

Final Photos also holds 13 copies of the Aug 2026 client project shots that were already on the site, so they were not added twice.

The full RAW shoot has 276 frames. This build uses a sample of every sixth frame, so there are more shots to choose from.

The logo images in `img/` (`logo-horizontal`, `logo-master`, `logo-compact`, `lion-emblem`) are web-sized crops of the approved October 16 logos. See [BRAND.md](BRAND.md).
