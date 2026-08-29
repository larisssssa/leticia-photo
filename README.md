# Photography Website Template

An editorial-style photography portfolio template built with React + Vite.
All copy has been replaced with lorem ipsum placeholder text and `[bracketed
field labels]` so it's obvious what to swap out and where — image alt text,
buttons, headings, and footer fields are all marked as placeholders too.

## Structure

```
marlowe-rae-react/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
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

## Filling in the template

Every section uses one of two placeholder styles:

- **`[Bracketed Field]`** — a short label telling you what belongs there
  (e.g. `[Studio Name]`, `[Button Text]`, `[Client Name]`).
- **Lorem ipsum paragraphs** — filler body copy showing the intended length
  and tone of that block; replace with your real copy.

Search each component file for these markers and swap in your content:

| What to change | Where |
|---|---|
| Studio/brand name | `Header.jsx`, `Footer.jsx` |
| Hero heading + subhead | `Hero.jsx` |
| About section copy + portrait | `About.jsx` |
| Pull-quote / philosophy line | `Statement.jsx` |
| Gallery title, images, button | `Portfolio.jsx` (`FRAMES` array) |
| Client quotes | `Testimonials.jsx` (`QUOTES` array) |
| Process/experience steps | `Experience.jsx` (`STEPS` array) |
| Call-to-action heading + email | `Inquire.jsx` |
| Nav links, contact info, legal line | `Footer.jsx` |

- **Colors & fonts** — edit the CSS custom properties at the top of
  `src/index.css` (`--bone`, `--ink`, `--clay`, `--sage`, `--line`, `--paper`)
  and the Google Fonts link in `index.html`.
- **Images** — placeholder photos are pulled from `picsum.photos`. Replace the
  `src` URLs with your own images (and update the `alt` text placeholders too).

## Notes

- No external UI libraries — plain CSS per component, colocated with its component.
- Fully responsive (single-column breakpoints under 900px).
- Respects `prefers-reduced-motion`.
