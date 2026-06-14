# Portfolio Project — Claude Instructions

## Stack

Vanilla HTML, CSS, and JavaScript. No framework, no build process, no npm packages.

### Hard rules (never break these)

- **No frameworks**: Do not introduce React, Vue, or any JS framework. Keep everything vanilla.
- **No build tools**: No Webpack, Vite, or bundlers. Files are served directly.
- **No external CSS frameworks**: Do not use Tailwind, Bootstrap, or similar. Use the existing custom CSS.
- **Design tokens via CSS variables**: Use the existing `--` variables defined in `case-study.css`. Do not invent new ones.
- **Fonts**: Newsreader (serif, display/headlines) + Hanken Grotesk (sans-serif, body/UI) from Google Fonts.

### Design system

| Token | Value |
|---|---|
| Background | `#F6F3EC` |
| Ink/Text | `#15140F` |
| Accent | `#7E3A2E` |
| Responsive sizing | `clamp()` throughout — follow existing patterns |

---

## Project structure

- `01 - The Statement.html` — homepage/landing
- `Selected Work.html` — portfolio index
- `Curriculum Vitae.html` — CV/resume page
- `Case Study - *.html` — individual case study pages
- `case-study.css` — shared case study styles
- `image-slot.js` — custom image upload/crop web component (Figma Omelette runtime)
- `assets/` — shared images and assets
- `Images/` — case study thumbnails and media
- `klaio/` — Klaio sub-pages
