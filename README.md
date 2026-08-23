# Dana · Tarot — website

Two versions of the same site live here:

- `/` — **daylight**: soft & celestial (cream, blush, lavender), daily card draw
- `/v2/` — **midnight**: candlelight & gold, interactive three-card spread

Live: https://eliotmurrah.github.io/dana-tarot/ and https://eliotmurrah.github.io/dana-tarot/v2/

A single-page, static site. No build step: open `index.html` or host the folder anywhere (Netlify, GitHub Pages, Vercel).

Preview locally from the project root:

```bash
python3 -m http.server 8090 --directory dana-tarot
```

## Things to fill in (all in `index.html`)

| Where | What to change |
|---|---|
| `<title>` / `meta description` | Dana's full name or brand name, if she has one |
| **About** section | `[X] years`, `[and other languages]`, `[City]`; photo is in `assets/` (portrait crop + square for link previews) |
| **Readings** | Names, durations, prices (currently €25 / €45 / €85) |
| **Kind words** | Real testimonials + names (or delete the section) |
| **Book a reading** | `hello@example.com` (appears twice: the link and the form `action`), Instagram URL + handle, WhatsApp number (`https://wa.me/<number>`) |
| Footer | Name / year text |

## Daily card
`script.js` holds the 22 Major Arcana with keywords and a short, gentle meaning for each. The card of the day is the same for everyone all day; "Draw another" shuffles a fresh one. Edit the text in the `ARCANA` array to match Dana's voice.

## Booking form
The form uses `mailto:` so it works with zero backend — it opens the visitor's email app. For a proper form (no email app needed), point `action` at a free service like Formspree or Netlify Forms.
