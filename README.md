# Premium Scroll Wedding Invitation

A premium, minimal, scroll-based wedding invitation website inspired by traditional Indian wedding cards.

## Tech

- React (functional components)
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (scroll + reveal animations)

## Run locally

```bash
cd wedding-invite
npm install
npm run dev
```

## Customize content

Edit `src/content/invitation.js`.

- **Names / families**: `invitation.couple`
- **Event details**: `invitation.event`
- **Family invitation paragraph**: `invitation.familyText`
- **Extended details**: `invitation.fullDetails`
- **Footer contacts**: `invitation.contact`

## Add your photos (recommended: `.webp`)

Replace these placeholder assets:

- `src/assets/photos/couple-placeholder.svg` → hero couple background
- `src/assets/photos/bride-placeholder.svg` → bride photo
- `src/assets/photos/groom-placeholder.svg` → groom photo
- `src/assets/photos/highlight-*.svg` → optional 2–3 highlights

Then update imports in `src/content/invitation.js` to point to your new `.webp` files.

## Optional: background music

1. Put an audio file in `src/assets/` (for example `src/assets/music.mp3`)
2. Import it in `src/content/invitation.js` and set `invitation.media.audio` to that import.

Note: browsers require a user gesture before playback—so the toggle is intentional.

## Structure

- `src/sections/`: `Hero`, `CardReveal`, `CoupleSection`, `EventDetails`, `FamilyText`, `FullDetails`, `Gallery`, `Footer`
- `src/components/`: reusable UI (`Card`, `Container`, `Reveal`, `ScrollProgress`, `MusicToggle`)
