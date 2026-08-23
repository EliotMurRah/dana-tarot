/* ═══════════════════════════════════════════════
   Dana · The Reading Room — interactions
   ═══════════════════════════════════════════════ */

const S = 'fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"';
const star = (x, y, r) => `<path d="M${x} ${y - r}l${r * .3} ${r * .7} ${r * .7} ${r * .3} -${r * .7} ${r * .3} -${r * .3} ${r * .7} -${r * .3} -${r * .7} -${r * .7} -${r * .3} ${r * .7} -${r * .3}z" fill="currentColor"/>`;

const ARCANA = [
  { n: '0', name: 'The Fool', kw: 'beginnings · trust · lightness',
    m: 'A beginning taken on trust. Not knowing the whole map, and stepping anyway — with an open heart and light hands.',
    svg: `<circle cx="60" cy="30" r="10" ${S}/><path d="M60 40v30M60 70l-18 30M60 70l18 30M40 55l20 10 22-14" ${S}/><path d="M82 41l10-10" ${S}/><circle cx="94" cy="29" r="4" ${S}/>${star(22, 22, 5)}` },
  { n: 'I', name: 'The Magician', kw: 'focus · skill · manifestation',
    m: 'Everything needed is already at hand. Will, focus and one clear intention turn possibility into something real.',
    svg: `<path d="M60 22v-10M60 12l-4 4M60 12l4 4" ${S}/><path d="M48 96a12 12 0 1 1 24 0" ${S}/><circle cx="60" cy="48" r="9" ${S}/><path d="M60 57v28M40 70h40" ${S}/><path d="M28 100c8-6 56-6 64 0" ${S}/><path d="M34 34c6 0 6 8 12 8s6-8 12-8 6 8 12 8 6-8 12-8" ${S}/>` },
  { n: 'II', name: 'The High Priestess', kw: 'intuition · stillness · mystery',
    m: 'Quiet knowing. The answer is not in more information but in the intuition that keeps getting talked over.',
    svg: `<path d="M44 30a16 16 0 1 0 32 0" ${S}/><circle cx="60" cy="30" r="6" ${S}/><path d="M60 38v56M44 100h32" ${S}/><path d="M30 20v80M90 20v80" ${S}/><path d="M48 68l12-8 12 8" ${S}/>` },
  { n: 'III', name: 'The Empress', kw: 'nurture · abundance · growth',
    m: 'Nurture, abundance and slow growth. Things ripening at their own pace; care given, and care allowed in.',
    svg: `<path d="M60 100c0-20-20-30-30-50 10 0 22 8 30 20 8-12 20-20 30-20-10 20-30 30-30 50z" ${S}/><path d="M60 70v30" ${S}/>${star(60, 18, 6)}${star(30, 34, 4)}${star(90, 34, 4)}` },
  { n: 'IV', name: 'The Emperor', kw: 'structure · steadiness · boundaries',
    m: 'Structure and steadiness. A boundary, a decision, a shape given to things — and the calm that comes with it.',
    svg: `<rect x="30" y="40" width="60" height="60" rx="3" ${S}/><path d="M30 70h60M60 40v60" ${S}/><path d="M40 40l10-16h20l10 16" ${S}/><circle cx="60" cy="18" r="4" ${S}/>` },
  { n: 'V', name: 'The Hierophant', kw: 'wisdom · tradition · guidance',
    m: 'Wisdom handed down. Learning from those who walked the road before, and finding your own voice inside tradition.',
    svg: `<path d="M60 12v88M46 30h28M50 50h20" ${S}/><path d="M30 100h60" ${S}/><path d="M30 100v-20a30 30 0 0 1 60 0v20" ${S}/>` },
  { n: 'VI', name: 'The Lovers', kw: 'connection · choice · heart',
    m: 'A choice made from the heart rather than from fear. A bond — with someone, or with yourself — asking for more honesty.',
    svg: `<path d="M60 96C40 82 26 70 26 54a16 16 0 0 1 34-8 16 16 0 0 1 34 8c0 16-14 28-34 42z" ${S}/>${star(60, 16, 7)}` },
  { n: 'VII', name: 'The Chariot', kw: 'momentum · willpower · direction',
    m: 'Momentum and will. Moving forward even when the road is not perfectly clear, holding the reins lightly.',
    svg: `<rect x="36" y="50" width="48" height="34" rx="4" ${S}/><circle cx="42" cy="92" r="8" ${S}/><circle cx="78" cy="92" r="8" ${S}/><path d="M44 50l8-20h16l8 20" ${S}/>${star(60, 26, 6)}` },
  { n: 'VIII', name: 'Strength', kw: 'courage · patience · softness',
    m: 'Courage that looks like gentleness. Meeting what is wild with patience instead of force.',
    svg: `<path d="M30 70c10-24 50-24 60 0" ${S}/><path d="M38 72a22 22 0 0 0 44 0" ${S}/><path d="M60 30c-8 0-10 10-4 14M60 30c8 0 10 10 4 14" ${S}/><circle cx="60" cy="36" r="8" ${S}/><path d="M50 18a10 4 0 0 1 20 0" ${S}/>` },
  { n: 'IX', name: 'The Hermit', kw: 'reflection · solitude · inner light',
    m: 'A turning inward. Solitude, reflection, and a light that turns out to be your own.',
    svg: `<path d="M60 20v70M48 90h24" ${S}/><path d="M48 34h24l-4 18H52z" ${S}/><circle cx="60" cy="43" r="3" fill="currentColor"/><path d="M40 60l-10 6M80 60l10 6" ${S}/>` },
  { n: 'X', name: 'Wheel of Fortune', kw: 'change · cycles · luck',
    m: 'A turning point. Cycles moving, luck shifting — and the wisdom not to grip too tightly to how it “should” go.',
    svg: `<circle cx="60" cy="60" r="38" ${S}/><circle cx="60" cy="60" r="22" ${S}/><circle cx="60" cy="60" r="5" ${S}/><path d="M60 22v76M22 60h76M33 33l54 54M87 33L33 87" ${S}/>` },
  { n: 'XI', name: 'Justice', kw: 'clarity · balance · truth',
    m: 'Clear sight and balance. Seeing things as they are, being fair to yourself included, and deciding cleanly.',
    svg: `<path d="M60 16v84M40 100h40" ${S}/><path d="M24 38h72" ${S}/><path d="M24 38l-10 24h20zM96 38l-10 24h20z" ${S}/>` },
  { n: 'XII', name: 'The Hanged Man', kw: 'pause · surrender · new perspective',
    m: 'A pause. Surrender, a new angle, and the strange progress that comes from not pushing.',
    svg: `<path d="M30 20h60" ${S}/><path d="M60 20v20" ${S}/><circle cx="60" cy="90" r="9" ${S}/><path d="M60 40v40M60 50l-14 16M60 50l14 16M46 66l8-4" ${S}/>` },
  { n: 'XIII', name: 'Death', kw: 'endings · release · renewal',
    m: 'An ending that makes room. Something released with gratitude so that something truer can begin.',
    svg: `<path d="M60 100c0-24-18-30-18-50a18 18 0 0 1 36 0c0 20-18 26-18 50z" ${S}/><path d="M60 18v-8" ${S}/>${star(24, 30, 5)}${star(96, 30, 5)}<path d="M40 96a20 6 0 0 0 40 0" ${S}/>` },
  { n: 'XIV', name: 'Temperance', kw: 'balance · patience · harmony',
    m: 'The middle way. Opposites blended, patience practised, and a quiet harmony that arrives on its own.',
    svg: `<path d="M34 40l8 40h-16z" ${S}/><path d="M86 40l8 40h-16z" ${S}/><path d="M40 44c14 20 26 20 40 0" ${S}/><circle cx="60" cy="90" r="8" ${S}/><path d="M60 98v10" ${S}/>` },
  { n: 'XV', name: 'The Devil', kw: 'patterns · honesty · freedom',
    m: 'A pattern with a hold — a habit, a worry, a story. Naming it gently is already half the freedom.',
    svg: `<path d="M36 34l12 14h24l12-14" ${S}/><circle cx="60" cy="60" r="18" ${S}/><path d="M52 78v16M68 78v16M44 100h32" ${S}/><path d="M52 56h4M64 56h4" ${S}/>` },
  { n: 'XVI', name: 'The Tower', kw: 'breakthrough · truth · clearing',
    m: 'A sudden clearing. What was not built on solid ground gives way, and afterwards the air is clearer than it has been in ages.',
    svg: `<path d="M44 100V40h32v60" ${S}/><path d="M40 40l6-12h28l6 12" ${S}/><path d="M88 12l-10 14 8 2-10 16" ${S}/><path d="M52 56h16M52 72h16" ${S}/>` },
  { n: 'XVII', name: 'The Star', kw: 'hope · healing · faith',
    m: 'Hope returning. Healing, faith, and a wish worth meaning.',
    svg: `${star(60, 54, 26)}${star(24, 26, 6)}${star(96, 26, 6)}${star(22, 90, 5)}${star(98, 90, 5)}` },
  { n: 'XVIII', name: 'The Moon', kw: 'dreams · intuition · the unseen',
    m: 'The unclear and the dreamlike. Intuition, feelings and instincts leading where the light is soft.',
    svg: `<path d="M72 24a36 36 0 1 0 0 72 30 30 0 0 1 0-72z" ${S}/>${star(88, 40, 5)}${star(94, 76, 4)}<path d="M22 104c10-6 20-6 30 0 10-6 20-6 30 0" ${S}/>` },
  { n: 'XIX', name: 'The Sun', kw: 'joy · clarity · warmth',
    m: 'Joy, warmth and clarity. Enjoyment allowed fully and without apology.',
    svg: `<circle cx="60" cy="60" r="20" ${S}/><path d="M60 14v12M60 94v12M14 60h12M94 60h12M28 28l8 8M84 84l8 8M28 92l8-8M84 36l8-8" ${S}/>` },
  { n: 'XX', name: 'Judgement', kw: 'awakening · calling · forgiveness',
    m: 'An awakening. A calling answered, the past forgiven, a more honest life stepped into.',
    svg: `<path d="M30 30l50-8-6 24z" ${S}/><path d="M30 30l-6 4" ${S}/><path d="M40 100c0-14 8-22 20-22s20 8 20 22" ${S}/><circle cx="60" cy="66" r="8" ${S}/><path d="M20 100h80" ${S}/>` },
  { n: 'XXI', name: 'The World', kw: 'completion · wholeness · celebration',
    m: 'Completion and wholeness. A cycle finished, a journey honoured — and the next one waiting.',
    svg: `<ellipse cx="60" cy="60" rx="40" ry="44" ${S}/><circle cx="60" cy="60" r="12" ${S}/>${star(60, 14, 5)}${star(60, 106, 5)}${star(18, 60, 5)}${star(102, 60, 5)}` },
];

const POS = [
  { label: 'I · What was', frame: 'Behind you' },
  { label: 'II · What is', frame: 'Around you now' },
  { label: 'III · What comes', frame: 'Ahead of you' },
];

/* ── The Spread ── */
(function spread() {
  const deck = document.getElementById('deck');
  const slots = [...document.querySelectorAll('.slot')];
  const out = document.getElementById('interpretation');
  const resetBtn = document.getElementById('reset-spread');
  const bookBtn = document.getElementById('spread-book');
  if (!deck || !slots.length) return;

  let order = [], picked = [];

  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  const buildDeck = () => {
    deck.innerHTML = '';
    deck.classList.remove('is-done');
    order = shuffle(ARCANA.map((_, i) => i));
    const n = order.length, span = innerWidth < 720 ? 46 : 64; // degrees
    order.forEach((cardIdx, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'deck__card';
      b.style.setProperty('--r', (-span / 2 + (span / (n - 1)) * i).toFixed(2) + 'deg');
      b.style.zIndex = i;
      b.dataset.idx = cardIdx;
      b.setAttribute('aria-label', 'Card ' + (i + 1) + ' of ' + n);
      b.innerHTML = '<svg viewBox="0 0 120 200"><use href="#back"/></svg>';
      b.addEventListener('click', () => pick(b));
      b.addEventListener('pointerenter', () => warm(cardIdx), { once: true });
      b.addEventListener('touchstart', () => warm(cardIdx), { once: true, passive: true });
      deck.appendChild(b);
    });
  };

  const art = (i) => '../assets/cards/' + String(i).padStart(2, '0') + '.jpg';
  const cardFace = (c, i) => `
    <div class="flip">
      <div class="flip__face flip__front">
        <div class="flip__art"><img src="${art(i)}" width="440" height="758" alt="${c.name} — Rider-Waite-Smith tarot, 1909" decoding="async"></div>
      </div>
      <div class="flip__face flip__back"><svg viewBox="0 0 120 200"><use href="#back"/></svg></div>
    </div>`;
  // warm the image cache for a card the moment a finger/cursor lands on it, so the flip never waits
  const warm = (i) => { const im = new Image(); im.src = art(i); };

  const setNext = () => {
    slots.forEach((s, i) => s.classList.toggle('is-next', i === picked.length));
  };

  const pick = (btn) => {
    if (picked.length >= 3 || btn.classList.contains('is-taken')) return;
    const idx = +btn.dataset.idx;
    btn.classList.add('is-taken');
    picked.push(idx);
    const slot = slots[picked.length - 1];
    const holder = slot.querySelector('.slot__card');
    holder.innerHTML = cardFace(ARCANA[idx], idx);
    holder.setAttribute('aria-label', POS[picked.length - 1].label + ': ' + ARCANA[idx].name);
    const img = holder.querySelector('img');
    const open = () => holder.querySelector('.flip').classList.add('is-open');
    // flip once the art has arrived (or after a short grace period on slow connections)
    let opened = false; const go = () => { if (!opened) { opened = true; requestAnimationFrame(() => requestAnimationFrame(open)); } };
    if (img.complete) go(); else { img.addEventListener('load', go, { once: true }); img.addEventListener('error', go, { once: true }); setTimeout(go, 1500); }
    setNext();

    if (picked.length < 3) {
      out.innerHTML = `<p class="interpretation__hint">${picked.length === 1 ? 'Now a card for what is.' : 'And one more — for what is coming.'}</p>`;
    } else {
      deck.classList.add('is-done');
      slots.forEach(s => s.classList.remove('is-next'));
      setTimeout(() => {
        out.innerHTML = picked.map((ci, i) => {
          const c = ARCANA[ci];
          return `<div class="reading-line" style="animation-delay:${i * .25}s">
            <h3><small>${POS[i].label} — ${POS[i].frame}</small>${c.name}</h3>
            <p>${c.m}</p>
          </div>`;
        }).join('') + `<p class="interpretation__hint" style="animation:rise 1s var(--ease) .9s both">A spread like this, read with Dana, goes much deeper.</p>`;
        resetBtn.hidden = false; bookBtn.hidden = false;
      }, 900);
    }
  };

  const reset = () => {
    picked = [];
    slots.forEach(s => { const h = s.querySelector('.slot__card'); h.innerHTML = '<div class="slot__empty"></div>'; h.removeAttribute('aria-label'); });
    out.innerHTML = '<p class="interpretation__hint">Choose your first card from the deck above.</p>';
    resetBtn.hidden = true; bookBtn.hidden = true;
    buildDeck(); setNext();
    deck.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  resetBtn.addEventListener('click', reset);
  buildDeck(); setNext();
})();

/* ── Constellations ── */
(function constellations() {
  const cv = document.querySelector('.constellations');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w, h, stars = [];
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = cv.width = innerWidth * dpr; h = cv.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = innerWidth < 720 ? 70 : 140;
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      r: Math.random() * 1.3 + .3, a: Math.random() * Math.PI * 2,
      s: .15 + Math.random() * .35, vx: (Math.random() - .5) * .06, vy: (Math.random() - .5) * .06,
    }));
  };
  const draw = (t) => {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    // faint links between near stars
    ctx.strokeStyle = 'rgba(212,175,106,.07)'; ctx.lineWidth = .6;
    for (let i = 0; i < stars.length; i++) for (let j = i + 1; j < stars.length; j++) {
      const dx = stars[i].x - stars[j].x, dy = stars[i].y - stars[j].y, d = dx * dx + dy * dy;
      if (d < 75 * 75) { ctx.globalAlpha = 1 - d / (75 * 75); ctx.beginPath(); ctx.moveTo(stars[i].x, stars[i].y); ctx.lineTo(stars[j].x, stars[j].y); ctx.stroke(); }
    }
    ctx.globalAlpha = 1;
    for (const s of stars) {
      const tw = reduced ? .7 : .55 + .45 * Math.sin(t * .001 * s.s * 4 + s.a);
      ctx.fillStyle = `rgba(240,217,164,${(tw * .9).toFixed(3)})`;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
      if (!reduced) { s.x += s.vx; s.y += s.vy; if (s.x < 0) s.x = innerWidth; if (s.x > innerWidth) s.x = 0; if (s.y < 0) s.y = innerHeight; if (s.y > innerHeight) s.y = 0; }
    }
    if (!reduced) requestAnimationFrame(draw);
  };
  resize(); addEventListener('resize', resize); requestAnimationFrame(draw);
})();

/* ── Whispers carousel ── */
(function whispers() {
  const items = [...document.querySelectorAll('.whisper')];
  const dots = [...document.querySelectorAll('.whispers__dots button')];
  if (!items.length) return;
  let i = 0, timer;
  const go = (n) => {
    i = (n + items.length) % items.length;
    items.forEach((el, k) => el.classList.toggle('is-active', k === i));
    dots.forEach((d, k) => d.setAttribute('aria-selected', String(k === i)));
  };
  const auto = () => { clearInterval(timer); timer = setInterval(() => go(i + 1), 7000); };
  dots.forEach((d, k) => d.addEventListener('click', () => { go(k); auto(); }));
  auto();
})();

/* ── Mobile menu ── */
(function nav() {
  const b = document.querySelector('.burger'), m = document.getElementById('menu');
  if (!b || !m) return;
  const setOpen = (o) => { m.classList.toggle('is-open', o); b.setAttribute('aria-expanded', String(o)); b.setAttribute('aria-label', o ? 'Close menu' : 'Open menu'); };
  b.addEventListener('click', () => setOpen(!m.classList.contains('is-open')));
  m.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && m.classList.contains('is-open')) { setOpen(false); b.focus(); } });
  document.addEventListener('click', (e) => { if (m.classList.contains('is-open') && !m.contains(e.target) && !b.contains(e.target)) setOpen(false); });
})();

/* ── Reveal blocks ── */
(function reveal() {
  const els = document.querySelectorAll('.block, .whispers');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .08 });
  els.forEach(e => io.observe(e));
})();

/* ── Prefill reading in form ── */
(function prefill() {
  const sel = document.getElementById('reading-select');
  if (!sel) return;
  document.querySelectorAll('[data-reading]').forEach(a => a.addEventListener('click', () => { sel.value = a.dataset.reading; }));
})();

const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
