# Banks BAAZAR

High-end flea market storefront — "Warm Patina" design (cream/navy/brass/teal, DM Serif Display + DM Sans).

Static React + Vite site. No backend required.

## Local development
```
npm install
npm run dev
```

## Build for production
```
npm run build
```
Output goes to `dist/`.

## Deploying (e.g. Vercel)
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Image assets
The collection card images currently use temporary placeholder photos (picsum.photos)
so the site renders correctly. Swap these out for real product/collection photos in
`src/pages/Home.tsx`, `Collections.tsx`, and `Gifts.tsx` before launch.

The hero/about background images use full CloudFront URLs from the original build and
may still work, but verify once live — see `asset_urls.md`.
