# LumenRoom Website

Marketing website for LumenRoom, a free and open-source, Linux-first RAW photo editor.

## Tech Stack
- React + Vite
- Tailwind CSS v4
- React Router (Static SPA routing)
- React Helmet Async (SEO)

## Project Structure
- `/src/config.ts` - Central configuration for URLs and app strings.
- `/src/index.css` - Design system (CSS variables).
- `/public/screenshots/` - Placeholders for application screenshots. Replace the `.png` files here with real app screenshots.

## Adding Screenshots
To add real screenshots, place them in `/public/screenshots/`.
In `src/pages/Home.tsx`, replace the `<div className="aspect-[16/10] bg-panel-light...` blocks with actual `<img>` tags pointing to your screenshots:

```html
<img src="/screenshots/my-screenshot.png" alt="Feature" className="w-full h-full object-cover" />
```

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production (pure static SPA):
   ```bash
   npm run build
   ```
   The static output will be available in the `dist` directory, ready to be deployed to GitHub Pages, Netlify, or Cloudflare Pages.
