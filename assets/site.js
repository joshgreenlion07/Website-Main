(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const PHONE = '(209) 646-4046';
  const toast = msg => { const t = $('#toast'); t.textContent = msg; t.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(() => t.hidden = true, 2400); };

  /* ---------- Data (real Green Lion project photos; titles are working names) ---------- */
  const waterFeatures = [
    { img: 'wf-creek-firebowl', title: 'Fire Bowl Creek', place: 'Green Lion project', type: 'Stream with a gravel fire court', note: 'A concrete fire bowl on a gravel court, set in front of the falls so the fire and the water share one view.', project: 'creek' },
    { img: 'wf-creek-falls', title: 'Lavender Creek', place: 'Green Lion project', type: 'Pondless stream and waterfalls', note: 'A pondless stream steps down over boulders between lavender, salvia and ornamental grasses.', project: 'creek' },
    { img: 'wf-waterwall-day', title: 'Moonlit Water Wall', place: 'Modesto', year: '2026', type: 'Stucco and ledgestone water wall', note: 'A sheer spillway into a stone basin, framed by agave planters, wall sconces and leaping-frog sculptures.', project: 'wall' },
    { img: 'wf-koi', title: 'Palm Koi Pond', place: 'Green Lion project', year: '2026', type: 'Koi pond with boulder falls', note: 'A deep koi pond under palms, with stepped falls and feather grass at the edge.', project: 'koi' },
    { img: 'wf-boulder-falls', title: 'Boulder Falls', place: 'Green Lion project', type: 'Boulder waterfall and stream', note: 'Moving water, rock and planting working as one design.' },
    { img: 'wf-pond-garden', title: 'Garden Pond', place: 'Green Lion project', type: 'Pond with planted edges', note: 'A low waterfall feeding a planted pond, with grasses and perennials to the waterline.' },
    { img: 'wf-lantern-falls', title: 'Lantern Falls', place: 'Green Lion project', type: 'Boulder waterfall and pond', note: 'Multi-tier boulder falls spilling into a deep pond, framed by grasses and shade planting.' },
    { img: 'wf-modern', title: 'Scupper Water Wall', place: 'Hidden Resort', type: 'Porcelain wall with three scuppers', note: 'Stainless scuppers pour into a river-rock basin in the Hidden Resort wellness yard.', project: 'hidden' },
    { img: 'wf-stream', title: 'Garden Stream', place: 'Green Lion project', type: 'Pondless stream', note: 'A shallow stream stepping over stone between ornamental grasses.' },
    { img: 'wf-three-column-wall', title: 'Ledgestone Spill Wall', place: 'Green Lion project', year: '2026', type: 'Stacked stone wall with spillways', note: 'Ledgestone panels and thin spillways between three smooth stucco columns.', project: 'well' }
  ];

  const projects = {
    hidden: { name: 'Hidden Resort', sub: 'Wellness meets modern living', imgs: ['pj-hidden-1', 'pj-hidden-2', 'wf-modern', 'svc-kitchen'],
      story: 'A wellness walkway leads to a cedar sauna and spa. Raised beds, lush planting and stone accents give it a boutique resort feel, anchored by an outdoor kitchen under a louvered pergola.',
      features: ['Cedar barrel sauna', 'Hot tub', 'Scupper water wall', 'Outdoor kitchen', 'Louvered pergola', 'Turf', 'Raised beds', 'Covered lounge'],
      tags: ['sauna', 'spa', 'hot tub', 'wellness', 'water wall', 'kitchen', 'pergola', 'turf', 'raised beds', 'modern', 'lounge', 'bar', 'fire'] },
    luxe: { name: 'Luxe Lounge', sub: 'Open-air comfort, low maintenance', imgs: ['pj-luxe-1', 'pj-luxe-2', 'svc-pavers'],
      story: 'A modern louvered pergola creates a refined gathering space, with paver patios, drought-tolerant planting and integrated lighting.',
      features: ['Louvered pergola', 'Paver patio', 'Drought-tolerant planting', 'Trellis climbers', 'Integrated lighting'],
      tags: ['pergola', 'lounge', 'pavers', 'low maintenance', 'drought', 'minimal', 'trellis', 'dining', 'shade'] },
    wall: { name: 'Water Wall Garden', sub: 'Modesto, 2026', imgs: ['pj-wall-1', 'pj-wall-wide', 'learn-agave', 'learn-citrus'],
      story: 'A stucco and ledgestone water wall with leaping-frog sculptures, agave urns, flagstone, citrus and warm landscape lighting.',
      features: ['Custom water wall', 'Wall sconces', 'Spotlights', 'Agave urns', 'Flagstone patio', 'Citrus tree', 'River rock'],
      tags: ['water wall', 'fountain', 'water feature', 'lighting', 'agave', 'citrus', 'flagstone', 'drought', 'night', 'modern'] },
    koi: { name: 'Palm Koi Pond', sub: 'Green Lion project, 2026', imgs: ['pj-koi-1', 'pj-koi-2', 'learn-tropical', 'wf-koi'],
      story: 'A large koi pond with boulder waterfalls, palms, tropical planting and ornamental grasses around the shoreline.',
      features: ['Koi pond', 'Boulder waterfalls', 'Palms', 'Tropical planting', 'Ornamental grasses'],
      tags: ['koi', 'pond', 'waterfall', 'water feature', 'palms', 'tropical', 'fish', 'boulders', 'grasses'] },
    creek: { name: 'Creekside Pavilion Yard', sub: 'Green Lion project', imgs: ['pj-creek-1', 'pj-creek-2', 'pj-creek-3', 'pj-creek-4', 'pj-creek-5', 'pj-creek-6'],
      story: 'A pondless stream winds through lavender and ornamental grasses to a gravel fire-bowl court, a few steps from a timber pavilion with an outdoor kitchen, a stone-veneer bar and a beer tap. A flagstone path leads past a tiered fountain to the side yard.',
      features: ['Pondless stream and waterfalls', 'Gravel fire-bowl court', 'Timber pavilion', 'Outdoor kitchen', 'Stone-veneer bar with fridge', 'Beer tap', 'Stamped concrete', 'Flagstone path', 'Tiered fountain', 'Lavender and ornamental grasses'],
      tags: ['waterfall', 'stream', 'pondless', 'water feature', 'fire', 'fire pit', 'kitchen', 'bar', 'pavilion', 'stamped concrete', 'flagstone', 'fountain', 'lavender', 'grasses', 'drought', 'gravel', 'entertain'] },
    well: { name: 'Modern Wellness Yard', sub: 'Green Lion project, 2026', imgs: ['pj-well-1', 'pj-well-2', 'svc-wellness-day', 'svc-fire-day'],
      story: 'Hot tub on a composite deck, cube sauna, gas fire lounge and an uplit stone water wall on porcelain pavers.',
      features: ['Hot tub', 'Cube sauna', 'Gas fire table', 'Porcelain pavers', 'Stone water wall', 'Landscape lighting', 'Turf'],
      tags: ['hot tub', 'spa', 'sauna', 'fire', 'fire pit', 'lounge', 'pavers', 'lighting', 'water wall', 'turf', 'night', 'modern', 'wellness'] }
  };

  const frostPlants = [
    { name: 'Citrus (lemon, lime, mandarin)', img: 'learn-citrus', cover: 32, damage: 28, tip: 'Young trees and lemons are most tender.' },
    { name: 'Bougainvillea', img: 'learn-bougainvillea', cover: 32, damage: 30, tip: 'Leaves burn first; wait to prune until spring.' },
    { name: 'Elephant ears and tropicals', img: 'learn-tropical', cover: 33, damage: 30, tip: 'Tops die back in frost; roots usually return.' },
    { name: 'Foxtail fern', img: 'learn-foxtail', cover: 30, damage: 26, tip: 'Cover in the ground; move potted ones under the eaves.' },
    { name: 'Queen palm', ph: 'PLM', cover: 28, damage: 25, tip: 'Mexican fan palms are hardier.' },
    { name: 'Variegated agave', img: 'learn-agave', cover: 27, damage: 24, tip: 'Cold plus wet causes rot. Keep it dry.' },
    { name: 'Mexican feather grass, blue fescue', img: 'learn-bluefescue', cover: 10, damage: 5, tip: 'Fully hardy here. Comb out in February.' },
    { name: 'Roses and lavender', img: 'learn-lavender', cover: 15, damage: 10, tip: 'Hardy. Prune roses mid-January to mid-February.' }
  ];
  const lisa = {
    img: 'lisa-waterfall', tag: "Lisa's Design Notebook", title: 'Water Features Are Taking Over',
    byline: 'Lisa Taylor, Designer, Green Lion Landscape',
    sections: [
      ['', "Across Modesto, Turlock and Tracy, more backyards are being built around moving water: a waterfall over stone, a stream through planting, a water wall that glows after dark. Water features are taking over, and it isn't hard to see why."],
      ['People Want Nature at Home', "After a long day, most of us don't want another screen. We want to step outside into something living: plants, stone, birds and the sound of water. A water feature brings a piece of the creek or the mountains home, so nature is a few steps from the back door instead of a long drive away."],
      ['Comfort You Can See, Hear and Feel', "The best outdoor spaces work on every sense. You see the light move on the water, you hear it fall, and you feel the cooler air on a hot valley evening. That is what turns a yard into an escape: a place for coffee in the morning and family time after dinner."],
      ['A Place for Peace', "For many people, the water is where they slow down. Some use it as a quiet place to think, pray or reflect; for others it is simply where the day lets go. Moving water makes a space feel calm, and connected to nature and to something bigger than ourselves."],
      ['This Is Our Passion', "Creating these escapes is what we love to do at Green Lion. We start with how you want to feel, then shape the water, stone, planting and lighting around it. Every project starts with a free 3D design, so you can see your escape before we break ground."]
    ],
    gallery: ['wf-waterwall-day', 'wf-three-column-wall']
  };
  const services = [
    { id: 'water', name: 'Water Features', img: 'svc-water', promo: 'seeday', more: ['/water-features', 'Water features in Modesto, Turlock and Tracy'], desc: 'Waterfalls, koi ponds, water walls and pondless streams, designed as part of your complete outdoor space.', items: ['Waterfalls', 'Koi ponds', 'Water walls', 'Pondless streams', 'Fountains'] },
    { id: 'kitchen', name: 'Pavilions & Outdoor Kitchens', img: 'svc-pavilion', desc: 'Custom pavilions, louvered pergolas and outdoor kitchens built for how you cook and host.', items: ['Outdoor kitchens', 'Louvered pergolas', 'Pavilions', 'Bar seating'] },
    { id: 'pavers', name: 'Pavers & Decorative Concrete', img: 'svc-pavers', promo: 'walk', desc: 'Paver patios and driveways, porcelain, stamped and stained concrete, and walkways.', items: ['Paver patios', 'Driveways', 'Porcelain tile', 'Stamped concrete', 'Walkways'] },
    { id: 'lighting', name: 'Landscape Lighting', img: 'svc-lighting-closeup', desc: 'Low-voltage LED landscape lighting: spotlights, uplights and wall sconces that show off your yard after dark.', items: ['Spotlights', 'Uplighting', 'Wall sconces', 'Path lights'] },
    { id: 'walls', name: 'Retaining Walls & Seat Walls', img: 'svc-retaining', desc: 'Segmental block and veneer walls, curved seat walls and raised planters.', items: ['Retaining walls', 'Seat walls', 'Raised beds'] },
    { id: 'wellness', name: 'Saunas, Hot Tubs & Wellness', img: 'svc-wellness-day', desc: 'Cedar barrel and cube saunas, hot tubs and wellness walkways.', items: ['Cube saunas', 'Barrel saunas', 'Hot tubs', 'Wellness walkways'] },
    { id: 'fire', name: 'Fire Features', img: 'svc-fire-day', desc: 'Gas fire tables, fire pits and lounge layouts built around them.', items: ['Fire tables', 'Fire pits', 'Lounge layouts'] },
    { id: 'turf', name: 'Turf, Planting & Irrigation', img: 'svc-turf', promo: 'planday', desc: 'Drought-tolerant planting, artificial turf and smart irrigation controllers.', items: ['Artificial turf', 'Drought-tolerant planting', 'Smart irrigation', 'Sod'] },
    { id: 'design', name: '2D & 3D Design', img: 'design-plan', desc: 'Scaled 2D site plans and 3D renderings, revised with you until it feels right. Renderings are always labeled as concepts.', items: ['2D site plans', '3D renderings', 'Interactive revisions'] }
  ];

  /* ---------- Pages ---------- */
  // Real pages: / (home), /services and /gallery. Links from the old one-page site (#services, #svc-water,
  // #design-case, #gallery, #gallery-water) are sent to the matching page, so bookmarks and cached redirects still land.
  const PAGE = document.body.dataset.page || 'home';
  const legacyUrl = h => {
    if (h === 'services') return '/services';
    if (/^svc-[a-z]+$/.test(h) || h === 'design-case') return '/services#' + h;
    if (h === 'gallery') return '/gallery';
    if (/^gallery-[a-z0-9]+$/.test(h)) return '/gallery#' + h.slice(8);
    return null;
  };
  if (PAGE === 'home') {
    const fromHash = () => { const h = location.hash.slice(1); if (h === 'home') history.replaceState(null, '', '/'); return legacyUrl(h); };
    const to = fromHash(); if (to) { location.replace(to); return; }
    window.addEventListener('hashchange', () => { const t = fromHash(); if (t) location.replace(t); });
  }
  const scrollToHash = () => { const id = decodeURIComponent(location.hash.slice(1)); const el = id && document.getElementById(id); if (el) requestAnimationFrame(() => el.scrollIntoView({ block: 'start' })); };

  /* ---------- Carousel (home) ---------- */
  const track = $('#wf-track'), dots = $('#wf-dots');
  if (track) {
    track.innerHTML = waterFeatures.map((w, i) => `
      <figure class="wf-card" aria-label="${i + 1} of ${waterFeatures.length}">
        <img src="/img/${w.img}.jpg" alt="${esc(w.title)}: ${esc(w.type)}" ${i > 1 ? 'loading="lazy"' : ''}>
        <figcaption><span class="type">${esc(w.type)}</span><h3>${esc(w.title)}</h3><p>${esc(w.note)}</p>
          <span class="meta"><span>${esc(w.place)}${w.year ? ' · ' + w.year : ''}</span>${w.project ? `<button type="button" class="copy-btn" style="color:#F5F2EA" data-project="${w.project}">View the project</button>` : ''}</span></figcaption>
      </figure>`).join('');
    dots.innerHTML = waterFeatures.map((w, i) => `<button type="button" role="tab" aria-label="${esc(w.title)}" data-i="${i}"></button>`).join('');
    const cards = $$('.wf-card', track);
    let current = 0;
    const setDot = i => { current = i; $$('button', dots).forEach((b, j) => b.setAttribute('aria-current', j === i ? 'true' : 'false')); };
    const goTo = i => { const c = cards[(i + cards.length) % cards.length]; track.scrollTo({ left: c.offsetLeft, behavior: 'smooth' }); };
    setDot(0);
    track.addEventListener('scroll', () => {
      const x = track.scrollLeft; let best = 0, bd = Infinity;
      cards.forEach((c, i) => { const d = Math.abs(c.offsetLeft - x); if (d < bd) { bd = d; best = i; } });
      if (best !== current) setDot(best);
    }, { passive: true });
    dots.addEventListener('click', e => { const b = e.target.closest('button'); if (b) goTo(+b.dataset.i); });
    $('#wf-prev').addEventListener('click', () => goTo(current - 1));
    $('#wf-next').addEventListener('click', () => goTo(current + 1));
    track.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current + 1); } if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current - 1); } });
  }

  /* ---------- Journal modules ---------- */
  const frost = $('#frost');
  function renderFrost() {
    const t = +frost.value;
    $('#frost-out').textContent = t + '°F';
    $('#frost-label').textContent = t <= 28 ? 'Hard frost night' : t <= 32 ? 'Frost likely' : t <= 36 ? 'Chilly, frost possible in low spots' : 'Mild night';
    $('#frost-list').innerHTML = frostPlants.map(p => {
      const s = t <= p.damage ? ['s-bad', 'Cover + add heat'] : t <= p.cover ? ['s-warn', 'Cover tonight'] : ['s-ok', 'Fine'];
      const pic = p.img ? `<img src="/img/${p.img}.jpg" alt="" loading="lazy">` : `<span class="ph" aria-hidden="true">${p.ph}</span>`;
      return `<li>${pic}<div><b>${esc(p.name)}</b><small>${esc(p.tip)}</small></div><span class="status ${s[0]}">${s[1]}</span></li>`;
    }).join('');
  }
  if (frost) { frost.addEventListener('input', renderFrost); renderFrost(); }

  const projScroll = $('#proj-scroll'), svcStrip = $('#svc-strip');
  if (projScroll) projScroll.innerHTML = Object.entries(projects).map(([k, p]) => `<button type="button" class="proj-card" data-project="${k}"><div class="img"><img src="/img/${p.imgs[0]}.jpg" alt="${esc(p.name)}" loading="lazy"></div><b>${esc(p.name)}</b><small>${esc(p.sub)}</small></button>`).join('');
  if (svcStrip) svcStrip.innerHTML = services.filter(s => ['kitchen', 'pavers', 'lighting', 'walls'].includes(s.id)).map(s => `<a class="svc-tile" href="/services#svc-${s.id}"><img src="/img/${s.img}.jpg" alt="" loading="lazy"><span>${esc(s.name)} <span aria-hidden="true">→</span></span></a>`).join('');

  /* ---------- 3D Before You Build (reels and slides from the social campaign; files in video/ and img/3d-*) ---------- */
  const DISCLOSE_3D = 'Real Green Lion project. 3D design from our own Green Lion Growth Studio; photo motion, voice and music made with AI tools.';
  // The credit line carries the Green Lion Growth Studio wordmark (stacked, on Charcoal), from the Growth-Studio repo's brand/wordmark folder.
  const GS_MARK = '<img class="gs-wordmark" src="/img/growth-studio-wordmark.svg" alt="Green Lion Growth Studio" width="115" height="44">';
  const disclose3d = (cls = 'p3-disclose') => `<p class="${cls} gs-credit">${GS_MARK}<span>${esc(DISCLOSE_3D)}</span></p>`;
  const promoVideos = {
    seeday: { src: '/video/3d-see-it-first-day.mp4', poster: '/img/3d-see-it-first-day-cover.jpg', len: 19, title: 'We Built This Backyard in 3D First', text: 'The water wall, the fire lounge, the spa and sauna deck, every planter and path: placed and walked through before we broke ground.' },
    walk: { src: '/video/3d-walk-your-yard.mp4', poster: '/img/3d-walk-your-yard-cover.jpg', len: 13, title: 'Walk Your Yard in 3D Before a Single Paver Is Laid', text: 'From the side yard to the covered patio, you see the space, the walkways and the water feature first. Then we build it.' },
    planday: { src: '/video/3d-plan-built-day.mp4', poster: '/img/3d-plan-built-day-cover.jpg', len: 13, title: 'How It Works', text: 'We map your yard. You walk through it in 3D. Then we build it.' }
  };
  const promoRow = k => { const v = promoVideos[k]; return `<div class="svc-3d"><button type="button" class="svc-3d-thumb" data-video="${k}" aria-label="Watch the 3D walkthrough, ${v.len} seconds"><img src="${v.poster}" alt="" loading="lazy"><span class="play"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4v16l14-8z"/></svg></span></button>
    <div><span class="k">Free 3D design</span><p>See your yard before we build it.</p><button type="button" class="link-btn" data-video="${k}">Watch the 3D walkthrough · ${v.len} s</button></div></div>`; };
  const p3Slides = ['The Side Yard, Designed in 3D and Built for Real', 'The Water Wall', 'The Fire Lounge', 'The Spa Deck', 'The Sauna', 'The Covered Patio', 'The Turf Yard'];
  const P3 = {
    // The band plays the daytime "We built this yard in 3D first" reel muted; Watch with sound opens it with sound. Daytime only, no dusk or night footage.
    day: { loop: '/video/3d-see-it-first-day.mp4', poster: '/img/3d-see-it-first-day-cover.jpg', reel: 'seeday', slide: i => `/img/3d-dvb-day-${i}.jpg` }
  };
  let p3Mode = 'day', p3Visible = false;
  const p3v = $('#p3-video');
  if (p3v) {
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
    $('#dvb-scroll').innerHTML = p3Slides.map((t, i) => `<figure><img src="${P3[p3Mode].slide(i + 1)}" alt="${esc(t)}: the 3D design above, the finished yard below" width="720" height="900" loading="lazy"></figure>`).join('');
    const p3Play = () => {
      if (reduceMotion.matches) return;
      if (!p3v.dataset.loaded) { p3v.src = P3[p3Mode].loop; p3v.dataset.loaded = '1'; }
      const pr = p3v.play(); if (pr && pr.catch) pr.catch(() => {});
    };
    if (reduceMotion.matches) { p3v.controls = true; p3v.src = P3[p3Mode].loop; p3v.dataset.loaded = '1'; }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(es => es.forEach(e => { p3Visible = e.isIntersecting; if (p3Visible) p3Play(); else p3v.pause(); }), { threshold: .35 }).observe(p3v);
    }
  }

  /* ---------- Services ---------- */
  const svcGrid = $('#svc-grid');
  if (svcGrid) svcGrid.innerHTML = services.map(s => `
    <article class="svc" id="svc-${s.id}"><div class="img"><img src="/img/${s.img}.jpg" alt="${esc(s.name)}" loading="lazy"></div>
      <div class="body"><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p><ul>${s.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>
        ${s.more ? `<a class="svc-more" href="${s.more[0]}">${esc(s.more[1])} <span aria-hidden="true">→</span></a>` : ''}
        ${s.promo ? promoRow(s.promo) : ''}
        <div class="actions"><a class="btn btn-primary btn-sm" href="tel:+12096464046">${s.promo ? 'Call to book your free 3D design' : 'Call to schedule'}</a></div></div></article>`).join('');
  if (PAGE === 'services') scrollToHash();


  /* ---------- Gallery ---------- */
  const GAL_CATS = [['all', 'All'], ['water', 'Water features'], ['pavers', 'Patios & pavers'], ['kitchens', 'Kitchens & pavilions'], ['fire', 'Fire & lighting'], ['wellness', 'Saunas & hot tubs'], ['planting', 'Planting & turf'], ['3d', '3D design vs built']];
  const GAL_ALIAS = { landscaping: 'planting', planting: 'planting', water: 'water', pavers: 'pavers', retaining: 'pavers', kitchens: 'kitchens', pergolas: 'kitchens', fire: 'fire', sauna: 'wellness', turf: 'planting', highlights: 'all', fencing: 'all', all: 'all', kitchens: 'kitchens', wellness: 'wellness', '3d': '3d' };
  const gallery = [{"img":"wf-creek-firebowl","cap":"Fire Bowl Creek","cats":["water","fire"],"project":"creek","w":1050,"h":1400},{"img":"wf-creek-falls","cap":"Lavender Creek","cats":["water","planting"],"project":"creek","w":1050,"h":1400},{"img":"wf-waterwall-day","cap":"Moonlit Water Wall","cats":["water"],"project":"wall","w":1400,"h":933},{"img":"wf-koi","cap":"Palm Koi Pond","cats":["water"],"project":"koi","w":1400,"h":934},{"img":"wf-three-column-wall","cap":"Three-Column Water Wall","cats":["water"],"project":"well","w":1400,"h":933},{"img":"lisa-waterfall","cap":"Waterfall and Pebble Stream","cats":["water","planting"],"project":null,"w":960,"h":1280},{"img":"pj-creek-1","cap":"Gravel Fire-Bowl Court","cats":["fire","pavers"],"project":"creek","w":1000,"h":750},{"img":"svc-pavilion","cap":"Timber Pavilion and Outdoor Kitchen","cats":["kitchens"],"project":"creek","w":1000,"h":750},{"img":"wf-boulder-falls","cap":"Boulder Falls","cats":["water"],"project":null,"w":1400,"h":1050},{"img":"pj-well-1","cap":"Hot Tub on a Composite Deck","cats":["wellness"],"project":"well","w":1000,"h":667},{"img":"pj-koi-1","cap":"Koi Pond with Boulder Waterfalls","cats":["water"],"project":"koi","w":1000,"h":667},{"img":"svc-fire-day","cap":"Fire Table Lounge","cats":["fire","pavers"],"project":"well","w":1200,"h":800},{"img":"pj-hidden-1","cap":"Outdoor Kitchen and Bar","cats":["kitchens"],"project":"hidden","w":1000,"h":667},{"img":"wf-pond-garden","cap":"Garden Pond","cats":["water","planting"],"project":null,"w":1400,"h":1050},{"img":"pj-wall-1","cap":"Water Wall Garden","cats":["water"],"project":"wall","w":1000,"h":667},{"img":"svc-wellness-day","cap":"Cube Sauna","cats":["wellness"],"project":"well","w":1200,"h":800},{"img":"pj-luxe-1","cap":"Louvered Pergola Lounge","cats":["kitchens","pavers"],"project":"luxe","w":1000,"h":667},{"img":"wf-lantern-falls","cap":"Lantern Falls","cats":["water"],"project":null,"w":1200,"h":900},{"img":"pj-creek-2","cap":"Pavilion Bar and Kitchen","cats":["kitchens"],"project":"creek","w":1000,"h":750},{"img":"svc-turf","cap":"Turf and Covered Patio","cats":["planting","pavers"],"project":null,"w":1000,"h":667},{"img":"wf-modern","cap":"Scupper Water Wall","cats":["water"],"project":"hidden","w":1400,"h":934},{"img":"pj-hidden-2","cap":"Cedar Barrel Sauna","cats":["wellness"],"project":"hidden","w":1000,"h":667},{"img":"pj-creek-3","cap":"Pondless Stream and Waterfalls","cats":["water","planting"],"project":"creek","w":750,"h":1000},{"img":"svc-pavers","cap":"Paver Patio","cats":["pavers"],"project":"luxe","w":1000,"h":667},{"img":"pj-wall-wide","cap":"Water Wall Garden","cats":["water"],"project":"wall","w":1200,"h":800},{"img":"svc-kitchen","cap":"Kitchen Under a Louvered Pergola","cats":["kitchens"],"project":"hidden","w":1000,"h":667},{"img":"wf-stream","cap":"Garden Stream","cats":["water","planting"],"project":null,"w":1050,"h":1400},{"img":"pj-well-2","cap":"Porcelain Paver Lounge","cats":["pavers","fire"],"project":"well","w":1000,"h":667},{"img":"svc-walls","cap":"Seat Wall and Pavers","cats":["pavers","planting"],"project":null,"w":1000,"h":750},{"img":"svc-retaining","cap":"Block Retaining Wall and Raised Bed","cats":["pavers","planting"],"project":"hidden","w":1200,"h":800},{"img":"pj-creek-4","cap":"Stone-Veneer Bar with a Beer Tap","cats":["kitchens"],"project":"creek","w":750,"h":1000},{"img":"pj-koi-2","cap":"Koi Pond Shoreline","cats":["water","planting"],"project":"koi","w":1000,"h":667},{"img":"svc-lighting-closeup","cap":"Spotlight Among Yucca","cats":["fire","planting"],"project":null,"w":1200,"h":800},{"img":"pj-luxe-2","cap":"Pergola Dining Patio","cats":["kitchens","pavers"],"project":"luxe","w":1000,"h":667},{"img":"pt-pavers","cap":"Paver Walkway","cats":["pavers"],"project":null,"w":1000,"h":667},{"img":"pj-creek-5","cap":"Flagstone Path","cats":["pavers","planting"],"project":"creek","w":750,"h":1000},{"img":"learn-agave","cap":"Agave Urn by the Water Wall","cats":["planting"],"project":"wall","w":1000,"h":667},{"img":"learn-citrus","cap":"Citrus and Ferns","cats":["planting"],"project":"wall","w":1000,"h":667},{"img":"learn-tropical","cap":"Tropical Planting by the Pond","cats":["planting","water"],"project":"koi","w":1000,"h":667},{"img":"pj-creek-6","cap":"Tiered Fountain","cats":["water","planting"],"project":"creek","w":750,"h":1000},{"img":"learn-mossrock","cap":"Moss Rock and Grasses","cats":["planting"],"project":null,"w":1000,"h":667},{"img":"learn-sconce","cap":"Wall Sconces on a Water Wall","cats":["fire","water"],"project":"wall","w":1000,"h":667},{"img":"learn-bougainvillea","cap":"Bougainvillea Trellis","cats":["planting"],"project":null,"w":1000,"h":667},{"img":"learn-foxtail","cap":"Foxtail Fern and Boulders","cats":["planting"],"project":null,"w":750,"h":1000},{"img":"3d-dvb-day-1","cap":"The Side Yard: 3D Design and Built","cats":["3d"],"project":null,"w":720,"h":900},{"img":"3d-dvb-day-2","cap":"The Water Wall: 3D Design and Built","cats":["3d"],"project":null,"w":720,"h":900},{"img":"3d-dvb-day-3","cap":"The Fire Lounge: 3D Design and Built","cats":["3d"],"project":null,"w":720,"h":900},{"img":"3d-dvb-day-4","cap":"The Spa Deck: 3D Design and Built","cats":["3d"],"project":null,"w":720,"h":900},{"img":"3d-dvb-day-5","cap":"The Sauna: 3D Design and Built","cats":["3d"],"project":null,"w":720,"h":900},{"img":"3d-dvb-day-6","cap":"The Covered Patio: 3D Design and Built","cats":["3d"],"project":null,"w":720,"h":900},{"img":"3d-dvb-day-7","cap":"The Turf Yard: 3D Design and Built","cats":["3d"],"project":null,"w":720,"h":900}];
  let galFilter = 'all';
  function setGalleryFilter(f) { galFilter = GAL_CATS.some(([k]) => k === f) ? f : 'all'; renderGallery(); }
  function renderGallery() {
    if (!$('#gal-filter')) return;
    $('#gal-filter').innerHTML = GAL_CATS.map(([k, l]) => `<button type="button" class="chip" data-gal="${k}" aria-pressed="${k === galFilter}">${esc(l)}</button>`).join('');
    const list = gallery.filter(g => galFilter === 'all' || g.cats.includes(galFilter));
    $('#gal-grid').classList.toggle('tall', galFilter === '3d');
    $('#gal-grid').innerHTML = list.map(g => `<button type="button" class="gal-item" data-photo="${g.img}"><img src="/img/${g.img}.jpg" alt="${esc(g.cap)}" width="${g.w}" height="${g.h}" loading="lazy"><span>${esc(g.cap)}</span></button>`).join('');
  }
  function openZoom(src, cap) {
    openDlg(`<div class="dlg-photo"><img src="/img/${src}.jpg" alt="${esc(cap)}"></div><div class="dlg-body"><p class="eyebrow">2D &amp; 3D design</p><h2 id="dlg-title">${esc(cap)}</h2>
      <p class="note">3D renderings are design concepts. The finished yard can differ as plans are refined.</p>
      <div><a class="btn btn-primary" href="tel:+12096464046">Call to book your free 3D design</a></div></div>`, 'photo-mode');
  }
  function openPhoto(id) {
    const g = gallery.find(x => x.img === id); if (!g) return;
    const prj = g.project && projects[g.project];
    openDlg(`<div class="dlg-photo"><img src="/img/${g.img}.jpg" alt="${esc(g.cap)}"></div><div class="dlg-body"><p class="eyebrow">${g.cats.includes('3d') ? '3D design and built' : esc(prj ? prj.name : 'Green Lion project')}</p><h2 id="dlg-title">${esc(g.cap)}</h2>
      ${g.cats.includes('3d') ? disclose3d('note') : ''}
      <div style="display:flex;gap:.5rem;flex-wrap:wrap">${prj ? `<button class="btn btn-ghost" type="button" data-project="${g.project}">See the whole project</button>` : ''}<a class="btn btn-primary" href="tel:+12096464046">Call about a project like this</a></div></div>`, 'photo-mode');
  }
  // /gallery#water, /gallery#pavers ... open the gallery filtered; old #gallery-water links still work.
  const galFromHash = () => { const h = location.hash.slice(1).replace(/^gallery-/, ''); return GAL_ALIAS[h] || 'all'; };
  if ($('#gal-filter')) {
    setGalleryFilter(galFromHash());
    window.addEventListener('hashchange', () => setGalleryFilter(galFromHash()));
    $('#gal-filter').addEventListener('click', e => { const b = e.target.closest('[data-gal]'); if (!b) return; setGalleryFilter(b.dataset.gal); history.replaceState(null, '', location.pathname + (galFilter === 'all' ? '' : '#' + galFilter)); });
  }

  /* ---------- Dialogs ---------- */
  const dlg = $('#dlg');
  const stopDlgVideo = () => $$('video', dlg).forEach(v => v.pause());
  const openDlg = (html, mode = '') => { stopDlgVideo(); dlg.className = mode; $('#dlg-content').innerHTML = html; if (!dlg.open) { if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', ''); } };
  const closeDlg = () => { stopDlgVideo(); dlg.close ? dlg.close() : dlg.removeAttribute('open'); };
  $('#dlg-close').addEventListener('click', closeDlg);
  dlg.addEventListener('click', e => { if (e.target === dlg) closeDlg(); });
  dlg.addEventListener('close', stopDlgVideo);
  function openVideo(k) {
    const v = promoVideos[k]; if (!v) return;
    if (p3v) p3v.pause();
    openDlg(`<div class="dlg-vid"><video src="${v.src}" poster="${v.poster}" controls playsinline autoplay preload="auto" aria-label="${esc(v.title)}"></video></div>
      <div class="dlg-body"><p class="eyebrow">3D before you build</p><h2 id="dlg-title">${esc(v.title)}</h2><p>${esc(v.text)}</p>${disclose3d()}
        <div style="display:flex;gap:.6rem;flex-wrap:wrap;align-items:center"><a class="btn btn-primary" href="tel:+12096464046">Call to book your free 3D design</a><span class="phone-line" style="font-weight:700">${PHONE} <button class="copy-btn" type="button" data-copy="${PHONE}">Copy</button></span></div>
        <p class="note">Free 3D design for water features, pavers and landscaping, big or small projects. CSLB #1150882</p></div>`, 'video-mode');
  }
  function openProject(k) {
    const p = projects[k]; if (!p) return;
    openDlg(`<div class="dlg-img"><img src="/img/${p.imgs[0]}.jpg" alt="${esc(p.name)}"></div><div class="dlg-body"><p class="eyebrow">${esc(p.sub)}</p><h2 id="dlg-title">${esc(p.name)}</h2><p>${esc(p.story)}</p>
      <ul class="feat-list">${p.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul><div class="dlg-gallery">${p.imgs.slice(1).map(i => `<img src="/img/${i}.jpg" alt="" loading="lazy">`).join('')}</div>
      <div style="display:flex;gap:.5rem;flex-wrap:wrap"><a class="btn btn-primary" href="tel:+12096464046">Call about a project like this</a></div></div>`);
  }

  function openPost(id) {
    if (id === 'lisa') {
      openDlg(`<div class="dlg-img"><img src="/img/${lisa.img}.jpg" alt="Waterfall over boulders into a pebble stream, with Russian sage and shrubs along a wood fence, a Green Lion project"></div><div class="dlg-body"><p class="eyebrow">${esc(lisa.tag)}</p><h2 id="dlg-title">${esc(lisa.title)}</h2>
        <p style="font-weight:700">${esc(lisa.byline)}</p><div class="prose-col">${lisa.sections.map(([h, t]) => `${h ? `<h3>${esc(h)}</h3>` : ''}<p>${esc(t)}</p>`).join('')}</div>
        <div class="dlg-gallery">${lisa.gallery.map(i => `<img src="/img/${i}.jpg" alt="Green Lion Landscape water feature project" loading="lazy">`).join('')}</div>
        <p class="note">Project photos are starting points for a conversation, not promises that the same design suits every property.</p>
        <div style="display:flex;gap:.5rem;flex-wrap:wrap"><a class="btn btn-primary" href="/water-features">Explore water features</a><a class="btn btn-ghost" href="tel:+12096464046">Call to schedule</a></div></div>`);
    }
  }

  /* ---------- Global clicks ---------- */
  document.addEventListener('click', e => {
    const vd = e.target.closest('[data-video]'); if (vd) { e.preventDefault(); openVideo(vd.dataset.video); return; }
    const zm = e.target.closest('[data-zoom]'); if (zm) { e.preventDefault(); openZoom(zm.dataset.zoom, zm.dataset.cap); return; }
    const ph = e.target.closest('[data-photo]'); if (ph) { e.preventDefault(); openPhoto(ph.dataset.photo); return; }
    const po = e.target.closest('[data-post]'); if (po) { openPost(po.dataset.post); return; }
    const pj = e.target.closest('[data-project]'); if (pj) { e.preventDefault(); openProject(pj.dataset.project); return; }
    const cp = e.target.closest('[data-copy]');
    if (cp) { e.preventDefault(); e.stopPropagation(); const v = cp.dataset.copy; const p = navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(v) : Promise.reject(); p.then(() => toast('Phone number copied')).catch(() => toast('Call ' + v)); return; }
  });

})();
