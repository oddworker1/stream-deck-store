# Adapted Stream Deck Marketplace

Standalone marketplace and product-support site for Adapted Stream Deck plugins.

## Stack

- Vue 3
- Vite
- Tailwind CSS v4
- Vue Router

## Structure

- `frontend/` - the deployable website
- `STYLE_GUIDE.md` - visual and UX brief for the site

## Local development

```powershell
cd frontend
npm install
npm run dev
```

## Production build

```powershell
cd frontend
npm run build
```

## Deployment

The site is deployed to Cloudflare Pages and mapped to:

- `https://stream-deck.adapted.no`

The current Cloudflare Pages project slug is `stream-deck-store`.
