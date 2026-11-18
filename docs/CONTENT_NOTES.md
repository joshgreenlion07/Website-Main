# Content notes

What in the prototype is real Green Lion content, what is sample data, what still needs a decision, and where the photos came from.

## Real content

- Brand colors, fonts, logos and voice, per [BRAND.md](BRAND.md) (Green Lion Brand Guide 2026).
- Phone (209) 646-4046 (set by the owner on Nov 18, 2026; the 2026 guide lists the old (209) 585-9767) and CSLB #1150882 from the guide. The email info@greenlionlandscape.com and greenlionlandscape.com also come from the guide.
- Project names, stories and features for the Look Book projects **Hidden Resort** and **Luxe Lounge**, from the Look Book creative brief.
- The five-step process and the Essential / Signature / Luxury project scopes, from the Look Book creative brief. Dollar ranges have been removed (see below).
- Service categories, from the *Website Marketing* content brief.
- Lisa Taylor's article **"Are Water Features Taking Over Modesto Backyards?"**, from her design-notebook draft. The page shows an abridged version with a "Draft for Lisa's review" label. Lisa needs to approve the first-person text before it is published.
- All photos are Green Lion projects. Nothing is AI-generated.

## Home page simplified (Nov 18, 2026)

At the owner's request:

- **Get Inspired is off for now:** the nav item, the Inspire tab, the coming-soon banner and side card, the footer link, the Services button, the project-dialog button and the Get Inspired page itself. An old `#inspire` link now opens Home. The code is in git history (commit 771d5fc) if it comes back.
- **Middle tab:** the raised circle in the tab bar is now a Call button (`tel:+12096464046`).
- **Hero gallery order:** Fire Bowl Creek, Lavender Creek, Moonlit Water Wall and Palm Koi Pond come first, then the rest as before.
- **Shorter Journal:** after the frost check ("Try it"), the home page drops the two Built by Green Lion bands, the plant cards, winter watering, the winter checklist, the Journal side cards and the Quick reads posts. The page goes straight to other services, recent projects and the consultation band. On a phone it is about 12 screens long instead of 20. Watering and plant care for clients are still in My Project.

## 3D Before You Build promos

Added November 18, 2026 with the owner's approval of the free 3D design offer.

- **Home:** a band under the hero with the offer, the three steps (we map your yard, you walk through it in 3D, then we build it), *Book your 3D design consultation*, a silent loop of the *plan, 3D, built* reel, a dusk / daytime switch and slides 1 to 7 of the *Designed in 3D. Built for real.* carousel. *Watch with sound* opens the reel with sound.
- **Services:** Water features, Pavers & decorative concrete, and Turf, planting & irrigation each have a free 3D design row. It opens one reel in a dialog: water features get *We built this backyard in 3D first* (19 s), pavers get *Walk your yard in 3D* (13 s), and turf and planting get *Same yard, every hour of the day* (12 s). Their booking button reads *Book your 3D design consultation*.
- The disclosure line sits under the home video and in every video dialog: *Real Green Lion project. 3D design from our planning software; photo motion, voice and music made with AI tools.* The slides are still photos and 3D renders labeled *3D design* and *Built*.
- No client names appear in the copy, the slides or the reels.
- Booking buttons pick *Design consultation* and prefill the note "I'd like a free 3D design of my yard."
- Every reel on the site stops just before its end card, with a half-second fade. The end cards in the social files still show the old number, (209) 585-9767, and the page has its own booking button anyway. The silent home loops (`video/3d-loop-dusk.mp4`, `video/3d-loop-day.mp4`) stop at 12.8 s. The pop-up reels with sound are 13, 19, 13 and 12 s.
- When the social media files are re-exported with (209) 646-4046, the full reels can go back in. Carousel slide 8 shows the old number too, and the site doesn't use it.
- The loop plays only while it is on screen, and does not autoplay for visitors who ask for reduced motion (they get play controls).
- Not used yet: the spa and sauna reel, the *see it before ground* daytime reel and carousel slide 8 (the end card).

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
| Hero headline | The owner asked for "Central Valley's favorite water features". The guide says to keep claims grounded. Lisa's draft suggests "Water. Stone. Your backyard retreat." instead. | Shows the owner's headline. |
| Bottom navigation | The UX spec's bottom nav is Home, Services, Call, My Project. The owner first asked for Home, Services, Inspire, Book, My Project. | Since Nov 18, 2026: Home, Services, Call (the raised circle), Book, My Project. The header Call button is still there too. |

## Placeholders to confirm before launch

| Item | Where | Note |
| --- | --- | --- |
| Water-feature working titles | Home carousel | *Boulder Falls*, *Lavender Creek*, *Moonlit Water Wall*, *Palm Koi Pond*, *Garden Pond*, *Lantern Falls*, *Scupper Water Wall*, *Fire Bowl Creek*, *Garden Stream* and *Ledgestone Spill Wall* are working titles. |
| Project working titles | Project cards, My Project | *Water Wall Garden*, *Palm Koi Pond*, *Creekside Pavilion Yard* and *Modern Wellness Yard* are working titles. The Creekside project's city is not confirmed, so it is captioned "Green Lion project". |
| My Project data | My Project | Plants, the Hunter Hydrawise controller, zone run times, the transformer and the fixtures are a **sample record** that shows the layout. They don't describe a real client's install. |
| My Project files | My Project › Overview | The listed plans, maps and manuals are placeholders. |
| Frost thresholds and winter watering times | Journal, My Project | General Central Valley guidance. The crew should review the numbers. |
| Booking | Book | Time slots and full slots are generated sample data. The form sends nothing. Its receipt says the preferred time is not booked yet. |
| Water-feature maintenance request | My Project | Preview only, so nothing is sent. Its receipt says the preferred date is not booked yet and that the team will confirm. |

## Photo sources

Exported from the Green Lion shared drive at web size (JPEG, quality 72). The RAW-shoot images are full-size previews pulled from the Canon CR3 files, with automatic contrast applied. The files added on October 29, 2026 come from the CreatorLab drive's Branding folder.

| Files | Source folder | Shot |
| --- | --- | --- |
| `wf-koi`, `wf-stonewall`, `pj-koi-*`, `pj-well-*`, `learn-tropical`, `svc-lighting`, `svc-wellness`, `svc-fire` | Branding › Photos RAW | Feb 2026 |
| `wf-waterwall`, `pj-wall-*`, `learn-citrus`, `learn-agave`, `learn-feathergrass`, `learn-mossrock`, `learn-spotlight`, `learn-sconce`, `learn-blueflowers`, `pt-urn`, `pt-fixture` | Completed client project photography | Aug 2026 |
| `wf-boulder-night`, `wf-modern`, `svc-water` | Look Book › Inspirational Waterscapes | 2025 |
| `pj-hidden-*`, `svc-kitchen`, `svc-turf` | Look Book › Hidden Resort | 2025 |
| `pj-luxe-*`, `svc-pavers`, `learn-bougainvillea`, `pt-pavers` | Look Book › Luxe Lounge | 2025 |
| `wf-boulder-falls` (IMG_0397), `wf-pond-garden` (IMG_1815), `wf-stream` (IMG_6162), `lisa-stream` (IMG_6163), `learn-foxtail` (IMG_0848), `svc-walls` (IMG_1810) | CreatorLab drive › Branding | Added Oct 29, 2026 |
| `wf-creek-falls` (IMG_6484), `wf-creek-firebowl` (IMG_6376), `pj-creek-1` (IMG_6379), `pj-creek-2` (IMG_6381), `pj-creek-3` (IMG_6483), `pj-creek-4` (IMG_6371), `pj-creek-5` (IMG_6358), `pj-creek-6` (IMG_6360), `svc-pavilion` (IMG_6382), `learn-lavender` (IMG_6463) | CreatorLab drive › Branding › Final Photos (edited and upscaled versions of real project photos) | Added Nov 13, 2026 |
| `3d-*` images and `video/3d-*` reels (covers, design-vs-built slides 1 to 7, dusk and daytime) | Green Lion Landscape › 3D Before You Build, and its daytime subfolder | Reels and carousels made for social, Nov 2026. Reels re-encoded to 720 × 1280 H.264; slides resized to 720 × 900. |

`svc-walls` (IMG_1810) replaces the earlier Hidden Resort raised-bed shot. `svc-pavilion` replaces the Hidden Resort kitchen photo on the Services card; that photo is still used in the Hidden Resort project.

Final Photos also holds 13 copies of the Aug 2026 client project shots that were already on the site, so they were not added twice.

The full RAW shoot has 276 frames. This build uses a sample of every sixth frame, so there are more shots to choose from.

The logo images in `img/` (`logo-horizontal`, `logo-master`, `logo-compact`, `lion-emblem`) are web-sized crops of the approved October 16 logos. See [BRAND.md](BRAND.md).
