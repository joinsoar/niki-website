# Photogenik Website (Frontend)

This repo contains the **frontend website for Photogenik**.

It includes:

- Landing page layout and styling
- Image gallery experience
- Waitlist/email capture UI
- Header branding + Instagram link

## What this project is

- **Frontend only** (React + Vite)
- Static assets live in `public/`
- UI components live in `src/components/`

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Important note on email capture

The waitlist form is currently wired as a frontend placeholder.

Backend hookup is still needed in `src/components/WaitlistForm.jsx` (there are clear `TODO(backend)` comments in that file for the next developer).

## Main files you will likely edit

- `src/components/Header.jsx`
- `src/components/Header.css`
- `src/components/Gallery.jsx`
- `src/components/Gallery.css`
- `src/components/WaitlistForm.jsx`
- `src/components/WaitlistForm.css`
- `src/index.css`
