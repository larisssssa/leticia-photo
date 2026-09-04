# Photography Website Template

An editorial-style photography portfolio template built with React + Vite.
All site copy, images, and labels are driven by a single file —
`src/content.js` — so you can update the entire site without opening any
component.

## Structure

```
lfp/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── content.js         # ← EDIT THIS FILE to change any text/image/label
│   ├── index.css          # design tokens + global styles
│   └── components/
│       ├── Header.jsx / .css
│       ├── Hero.jsx / .css
│       ├── About.jsx / .css
│       ├── Statement.jsx / .css
│       ├── Portfolio.jsx / .css   # asymmetric "contact sheet" gallery
│       ├── Testimonials.jsx / .css # auto-rotating quote slider
│       ├── Experience.jsx / .css
│       ├── Inquire.jsx / .css
│       └── Footer.jsx / .css
```

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Editing the site

Open **`src/content.js`**. Every section of the site is its own object in
that file:

| Object | Controls |
|---|---|
| `brand` | Studio name, tagline, email, office hours |
| `nav` | Shared nav links (used in both header and footer) |
| `hero` | Hero eyebrow, heading, subtext, background image |
| `about` | About heading, body paragraphs, signature, portrait image |
| `statement` | Pull-quote band eyebrow + heading |
| `portfolio` | Gallery heading, subtext, button, and the array of gallery images |
| `testimonials` | Array of client quotes + how fast they auto-rotate |
| `experience` | Section heading + array of process steps |
| `inquire` | Call-to-action eyebrow, heading, button text, background image |
| `footer` | About blurb, menu labels, social links, legal/copyright lines |
| `theme` | Reference copy of the color tokens (see note below) |

Change any value in that file, save, and every component that uses it
updates automatically — no need to touch anything in `src/components/`.

### Adding or removing items

Several fields are arrays, so you can add/remove entries directly:

- `portfolio.frames` — add or remove `{ id, src }` objects to change the
  gallery grid. The layout (`nth-child` rules in `Portfolio.css`) is tuned
  for 8 frames; changing the count may require adjusting the grid spans.
- `testimonials.quotes` — add/remove `{ text, who }` objects freely; the
  slider and dot navigation adapt automatically.
- `experience.steps` — add/remove `{ eyebrow, title, text }` objects; the
  grid is `repeat(3, 1fr)` in CSS, so 3 items lay out best by default.
- `nav` — add/remove `{ label, href }` objects; used identically by the
  header and footer.

### Colors & fonts

`theme` in `content.js` is a **reference copy only** — actually changing the
site's colors requires editing the CSS custom properties at the top of
`src/index.css`. Each property is named for *where it's used*, not what it
looks like, so you can swap the whole palette without touching any component:

| Property | Used for |
|---|---|
| `--color-bg` | Light section/page backgrounds |
| `--color-text` | Body text on light backgrounds |
| `--color-bg-inverse` | Dark section backgrounds (Statement, Footer, button hovers) |
| `--color-text-inverse` | Text on dark backgrounds |
| `--color-bg-accent` | Testimonials section background |
| `--color-accent` | Eyebrow labels, focus rings, hover accents (light backgrounds only) |
| `--color-border` | Hairline dividers, subtle borders |

**Accessibility note:** if you swap in new colors, re-check contrast —
`--color-accent` only meets WCAG AA (4.5:1) against `--color-bg`, not against
`--color-bg-inverse` (that's why the focus ring switches to
`--color-text-inverse` inside dark sections; see the rule below the `:root`
block in `index.css`). `--color-bg-accent` needs at least a 4.5:1 ratio
against `--color-text-inverse` since real body copy (the testimonial quotes)
sits on top of it — a colorpicker's raw swatch may need to be darkened or
lightened slightly to hit that, the same way the current Dusty Olive value
was.

Fonts are loaded via the Google Fonts `<link>` in `index.html`.

## Notes

- No external UI libraries — plain CSS per component, colocated with its component.
- Fully responsive (single-column breakpoints under 900px).
- Respects `prefers-reduced-motion`.
