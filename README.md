# AGRINECS BIOCHEMICALS

Premium frontend website for **AGRINECS BIOCHEMICALS** — organic-focused crop nutrition products from Malegaon MIDC, Sinnar, Nashik, Maharashtra.

Built with React (JavaScript), Vite, Tailwind CSS, React Router, Lucide React, Framer Motion, and React Helmet Async.

## Quick start

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Business content

Edit these files to update the site:

- `src/data/company.js` — name, address, phone, email, mission, vision
- `src/data/products.js` — Apical Maxx, High Rich, Vertex and future products
- `src/data/gallery.js` — gallery captions and image paths
- `public/images/` — product and gallery assets

## Products

| Product | Focus | Key composition |
|---|---|---|
| Apical Maxx | Growth promoter / biostimulant | Sargassum wightii extract, Glycine, Potassium fulvic humate, Vitamin C |
| High Rich | Growth promoter / quality | Alginic acid, Amino acid, Total organic carbon |
| Vertex | Anti stress | Humic acid, amino acids, vitamins, biochemicals |

## Contact form (frontend only)

The enquiry form sends messages to `agrinecsbiochemicals@gmail.com` through [FormSubmit](https://formsubmit.co) — no custom backend.

**Important:** The first time a form is submitted to FormSubmit, open Gmail for `agrinecsbiochemicals@gmail.com` and confirm the activation email. After activation, enquiries arrive in the inbox automatically.

WhatsApp backup link uses `+91 72190 01812`.

## Deploy

Upload the contents of `dist/` after `npm run build` to Hostinger, Netlify, Vercel, or similar static hosting. SPA fallbacks are included (`_redirects`, `vercel.json`, `404.html`).
