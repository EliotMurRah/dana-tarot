/* ───────────────────────────────────────────────
   Dana · Tarot — interactions
   ─────────────────────────────────────────────── */

/* ── Major Arcana (soft, encouraging daily meanings) ── */
const S = 'fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"';
const star = (x, y, r) => `<path d="M${x} ${y - r}l${r * .3} ${r * .7} ${r * .7} ${r * .3} -${r * .7} ${r * .3} -${r * .3} ${r * .7} -${r * .3} -${r * .7} -${r * .7} -${r * .3} ${r * .7} -${r * .3}z" fill="currentColor"/>`;

const ARCANA = [
  { n: '0', name: 'The Fool', kw: 'beginnings · trust · lightness',
    m: 'Something new wants to start today. You don’t need the whole map — just the next step, taken with an open heart. Say yes to the small adventure.',
    svg: `<circle cx="60" cy="30" r="10" ${S}/><path d="M60 40v30M60 70l-18 30M60 70l18 30M40 55l20 10 22-14" ${S}/><path d="M82 41l10-10" ${S}/><circle cx="94" cy="29" r="4" ${S}/>${star(22, 22, 5)}` },
  { n: 'I', name: 'The Magician', kw: 'focus · skill · manifestation',
    m: 'You already have everything you need. Today is about using it — one clear intention, one clear action. Your will is stronger than you think.',
    svg: `<path d="M60 22v-10M60 12l-4 4M60 12l4 4" ${S}/><path d="M48 96a12 12 0 1 1 24 0" ${S}/><circle cx="60" cy="48" r="9" ${S}/><path d="M60 57v28M40 70h40" ${S}/><path d="M28 100c8-6 56-6 64 0" ${S}/><path d="M34 34c6 0 6 8 12 8s6-8 12-8 6 8 12 8 6-8 12-8" ${S}/>` },
  { n: 'II', name: 'The High Priestess', kw: 'intuition · stillness · mystery',
    m: 'Listen inward. The answer you’re looking for isn’t in more information — it’s in the quiet knowing you keep talking over. Trust what you sense.',
    svg: `<path d="M44 30a16 16 0 1 0 32 0" ${S}/><circle cx="60" cy="30" r="6" ${S}/><path d="M60 38v56M44 100h32" ${S}/><path d="M30 20v80M90 20v80" ${S}/><path d="M48 68l12-8 12 8" ${S}/>` },
  { n: 'III', name: 'The Empress', kw: 'nurture · abundance · growth',
    m: 'Be gentle with yourself today and let things grow at their own pace. Nourish what you love. Receiving is allowed.',
    svg: `<path d="M60 100c0-20-20-30-30-50 10 0 22 8 30 20 8-12 20-20 30-20-10 20-30 30-30 50z" ${S}/><path d="M60 70v30" ${S}/>${star(60, 18, 6)}${star(30, 34, 4)}${star(90, 34, 4)}` },
  { n: 'IV', name: 'The Emperor', kw: 'structure · steadiness · boundaries',
    m: 'Give your day a shape. A little structure — a list, a boundary, a decision — will bring surprising calm. You’re allowed to lead.',
    svg: `<rect x="30" y="40" width="60" height="60" rx="3" ${S}/><path d="M30 70h60M60 40v60" ${S}/><path d="M40 40l10-16h20l10 16" ${S}/><circle cx="60" cy="18" r="4" ${S}/>` },
  { n: 'V', name: 'The Hierophant', kw: 'wisdom · tradition · guidance',
    m: 'Ask someone who’s walked this road before. Today, learning from others isn’t weakness — it’s a shortcut to your own wisdom.',
    svg: `<path d="M60 12v88M46 30h28M50 50h20" ${S}/><path d="M30 100h60" ${S}/><path d="M30 100v-20a30 30 0 0 1 60 0v20" ${S}/>` },
  { n: 'VI', name: 'The Lovers', kw: 'connection · choice · heart',
    m: 'Choose with your heart today, not your fear. A relationship — with someone, or with yourself — wants more honesty. Let it in.',
    svg: `<path d="M60 96C40 82 26 70 26 54a16 16 0 0 1 34-8 16 16 0 0 1 34 8c0 16-14 28-34 42z" ${S}/>${star(60, 16, 7)}` },
  { n: 'VII', name: 'The Chariot', kw: 'momentum · willpower · direction',
    m: 'Move. Even if the road isn’t perfectly clear, your determination is the engine today. Hold the reins lightly and keep going.',
    svg: `<rect x="36" y="50" width="48" height="34" rx="4" ${S}/><circle cx="42" cy="92" r="8" ${S}/><circle cx="78" cy="92" r="8" ${S}/><path d="M44 50l8-20h16l8 20" ${S}/>${star(60, 26, 6)}` },
  { n: 'VIII', name: 'Strength', kw: 'courage · patience · softness',
    m: 'True strength today looks like gentleness. Meet whatever is wild — in you or around you — with patience rather than force.',
    svg: `<path d="M30 70c10-24 50-24 60 0" ${S}/><path d="M38 72a22 22 0 0 0 44 0" ${S}/><path d="M60 30c-8 0-10 10-4 14M60 30c8 0 10 10 4 14" ${S}/><circle cx="60" cy="36" r="8" ${S}/><path d="M50 18a10 4 0 0 1 20 0" ${S}/>` },
  { n: 'IX', name: 'The Hermit', kw: 'reflection · solitude · inner light',
    m: 'Take a little time alone today, even ten minutes. What you’re seeking is found in the quiet, not the noise. Your own light is enough.',
    svg: `<path d="M60 20v70M48 90h24" ${S}/><path d="M48 34h24l-4 18H52z" ${S}/><circle cx="60" cy="43" r="3" fill="currentColor"/><path d="M40 60l-10 6M80 60l10 6" ${S}/>` },
  { n: 'X', name: 'Wheel of Fortune', kw: 'change · cycles · luck',
    m: 'Things are turning — and in your favour. Don’t grip too tightly to how it “should” go. Let the wheel move and stay open to surprise.',
    svg: `<circle cx="60" cy="60" r="38" ${S}/><circle cx="60" cy="60" r="22" ${S}/><circle cx="60" cy="60" r="5" ${S}/><path d="M60 22v76M22 60h76M33 33l54 54M87 33L33 87" ${S}/>` },
  { n: 'XI', name: 'Justice', kw: 'clarity · balance · truth',
    m: 'Look at things as they actually are today. Fairness — to yourself included — brings balance. A clear decision is waiting to be made.',
    svg: `<path d="M60 16v84M40 100h40" ${S}/><path d="M24 38h72" ${S}/><path d="M24 38l-10 24h20zM96 38l-10 24h20z" ${S}/>` },
  { n: 'XII', name: 'The Hanged Man', kw: 'pause · surrender · new perspective',
    m: 'Stop pushing for a moment. The view changes completely when you let go of needing it to happen your way. Rest is progress today.',
    svg: `<path d="M30 20h60" ${S}/><path d="M60 20v20" ${S}/><circle cx="60" cy="90" r="9" ${S}/><path d="M60 40v40M60 50l-14 16M60 50l14 16M46 66l8-4" ${S}/>` },
  { n: 'XIII', name: 'Death', kw: 'endings · release · renewal',
    m: 'Something is ready to end so that something better can begin. Let it go with gratitude. You are not losing — you’re making room.',
    svg: `<path d="M60 100c0-24-18-30-18-50a18 18 0 0 1 36 0c0 20-18 26-18 50z" ${S}/><path d="M60 18v-8" ${S}/>${star(24, 30, 5)}${star(96, 30, 5)}<path d="M40 96a20 6 0 0 0 40 0" ${S}/>` },
  { n: 'XIV', name: 'Temperance', kw: 'balance · patience · harmony',
    m: 'Find your middle today. Not too much, not too little. Blend what seems opposite and a surprising peace appears.',
    svg: `<path d="M34 40l8 40h-16z" ${S}/><path d="M86 40l8 40h-16z" ${S}/><path d="M40 44c14 20 26 20 40 0" ${S}/><circle cx="60" cy="90" r="8" ${S}/><path d="M60 98v10" ${S}/>` },
  { n: 'XV', name: 'The Devil', kw: 'patterns · honesty · freedom',
    m: 'Notice what has a hold on you today — a habit, a worry, a story. Naming it gently is already half of the freedom. The chain is looser than it looks.',
    svg: `<path d="M36 34l12 14h24l12-14" ${S}/><circle cx="60" cy="60" r="18" ${S}/><path d="M52 78v16M68 78v16M44 100h32" ${S}/><path d="M52 56h4M64 56h4" ${S}/>` },
  { n: 'XVI', name: 'The Tower', kw: 'breakthrough · truth · clearing',
    m: 'If something shakes today, let it — what falls wasn’t built on solid ground. Afterwards, the air is clearer than it’s been in ages.',
    svg: `<path d="M44 100V40h32v60" ${S}/><path d="M40 40l6-12h28l6 12" ${S}/><path d="M88 12l-10 14 8 2-10 16" ${S}/><path d="M52 56h16M52 72h16" ${S}/>` },
  { n: 'XVII', name: 'The Star', kw: 'hope · healing · faith',
    m: 'Hope is returning. Even if you can’t feel it fully yet, something in you is healing. Make a wish today — and mean it.',
    svg: `${star(60, 54, 26)}${star(24, 26, 6)}${star(96, 26, 6)}${star(22, 90, 5)}${star(98, 90, 5)}` },
  { n: 'XVIII', name: 'The Moon', kw: 'dreams · intuition · the unseen',
    m: 'Not everything is clear today, and that’s okay. Pay attention to dreams, feelings and gut instincts. Move slowly and trust the soft light.',
    svg: `<path d="M72 24a36 36 0 1 0 0 72 30 30 0 0 1 0-72z" ${S}/>${star(88, 40, 5)}${star(94, 76, 4)}<path d="M22 104c10-6 20-6 30 0 10-6 20-6 30 0" ${S}/>` },
  { n: 'XIX', name: 'The Sun', kw: 'joy · clarity · warmth',
    m: 'A bright, open day. Say the kind thing, wear the colour, take the walk. You’re allowed to enjoy yourself — fully and without apology.',
    svg: `<circle cx="60" cy="60" r="20" ${S}/><path d="M60 14v12M60 94v12M14 60h12M94 60h12M28 28l8 8M84 84l8 8M28 92l8-8M84 36l8-8" ${S}/>` },
  { n: 'XX', name: 'Judgement', kw: 'awakening · calling · forgiveness',
    m: 'Something is calling you to rise. Forgive what’s behind you and answer. You’re ready for a more honest version of your life.',
    svg: `<path d="M30 30l50-8-6 24z" ${S}/><path d="M30 30l-6 4" ${S}/><path d="M40 100c0-14 8-22 20-22s20 8 20 22" ${S}/><circle cx="60" cy="66" r="8" ${S}/><path d="M20 100h80" ${S}/>` },
  { n: 'XXI', name: 'The World', kw: 'completion · wholeness · celebration',
    m: 'A cycle completes. Look how far you’ve come. Celebrate it — properly — before the next journey begins. You’re exactly where you should be.',
    svg: `<ellipse cx="60" cy="60" rx="40" ry="44" ${S}/><circle cx="60" cy="60" r="12" ${S}/>${star(60, 14, 5)}${star(60, 106, 5)}${star(18, 60, 5)}${star(102, 60, 5)}` },
];

/* ── Daily card: same card all day, "shuffle" gives a fresh one ── */
/* Cards that have Dana's illustrated art (assets/cards-daylight/manifest.js). While the deck is
   still being painted, the daily draw comes only from the finished cards. */
const WITH_ART = (window.DANA_CARDS || []).filter(i => i >= 0 && i < ARCANA.length);
const POOL = WITH_ART.length ? WITH_ART : ARCANA.map((_, i) => i);
const artSrc = (i) => WITH_ART.includes(i) ? 'assets/cards-daylight/' + String(i).padStart(2, '0') + '.jpg' : null;

function dayIndex() {
  const d = new Date();
  const seed = d.getFullYear() * 372 + (d.getMonth() + 1) * 31 + d.getDate();
  let x = Math.sin(seed) * 10000;
  return POOL[Math.floor((x - Math.floor(x)) * POOL.length)];
}

(function dailyCard() {
  const btn = document.getElementById('daily-card-btn');
  if (!btn) return;
  const num = document.getElementById('card-num');
  const sym = document.getElementById('card-symbol');
  const name = document.getElementById('card-name');
  const out = document.getElementById('daily-reading');
  let current = dayIndex();
  let flipped = false, busy = false;

  const artBox = document.getElementById('card-art');
  const frame = btn.querySelector('.tarot-card__frame');
  const load = (i) => {
    const c = ARCANA[i];
    num.textContent = c.n;
    name.textContent = c.name;
    sym.innerHTML = `<svg viewBox="0 0 120 120" aria-hidden="true">${c.svg}</svg>`;
    const src = artSrc(i);
    if (src && artBox) {
      artBox.innerHTML = `<img src="${src}" width="560" height="882" alt="${c.name}" decoding="async">`;
      artBox.hidden = false; frame.hidden = true;
    } else if (artBox) { artBox.hidden = true; frame.hidden = false; }
  };
  // warm the cache for today's card so the first flip is instant
  if (artSrc(current)) { const im = new Image(); im.src = artSrc(current); }

  const show = (i) => {
    const c = ARCANA[i];
    out.innerHTML = `
      <p class="eyebrow">Today’s card</p>
      <h3>${c.name}</h3>
      <p class="keywords">${c.kw}</p>
      <p class="meaning">${c.m}</p>
      <button class="btn btn--ghost" id="draw-again" type="button">Draw another</button>
    `;
    document.getElementById('draw-again').addEventListener('click', (e) => {
      e.stopPropagation();
      if (busy) return;
      busy = true;
      btn.classList.add('is-shuffling');
      btn.classList.remove('is-flipped');
      flipped = false;
      out.innerHTML = '<p class="daily__hint">Shuffling…</p>';
      setTimeout(() => {
        btn.classList.remove('is-shuffling');
        let next;
        do { next = POOL[Math.floor(Math.random() * POOL.length)]; } while (next === current && POOL.length > 1);
        current = next;
        load(current);
        setTimeout(() => { btn.classList.add('is-flipped'); flipped = true; busy = false; show(current); btn.setAttribute('aria-label', 'Today’s card: ' + ARCANA[current].name); const again = document.getElementById('draw-again'); if (again) again.focus({ preventScroll: true }); }, 350);
      }, 700);
    });
  };

  load(current);
  btn.addEventListener('click', () => {
    if (flipped || busy) return;
    btn.classList.add('is-flipped');
    flipped = true;
    btn.setAttribute('aria-label', 'Today’s card: ' + ARCANA[current].name);
    setTimeout(() => show(current), 450);
  });
})();

/* ── Drifting stars ── */
(function sky() {
  const sky = document.querySelector('.sky');
  if (!sky) return;
  const count = window.innerWidth < 720 ? 28 : 55;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const s = document.createElement('span');
    s.className = 'star' + (Math.random() < .25 ? ' star--plus' : '');
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%';
    s.style.setProperty('--dur', (4 + Math.random() * 7).toFixed(1) + 's');
    s.style.setProperty('--delay', (-Math.random() * 10).toFixed(1) + 's');
    s.style.setProperty('--size', (.4 + Math.random() * .9).toFixed(2));
    frag.appendChild(s);
  }
  sky.appendChild(frag);
})();

/* ── Mobile nav ── */
(function nav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;
  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus(); } });
  document.addEventListener('click', (e) => { if (nav.classList.contains('is-open') && !nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false); });
})();

/* ── Reveal on scroll ── */
(function reveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('is-visible')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((e, i) => { e.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(e); });
})();

/* ── "Book this reading" pre-selects the reading in the form ── */
(function prefill() {
  const select = document.getElementById('reading-select');
  if (!select) return;
  document.querySelectorAll('[data-reading]').forEach(a => {
    a.addEventListener('click', () => { select.value = a.dataset.reading; });
  });
})();

/* ── Footer year ── */
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
