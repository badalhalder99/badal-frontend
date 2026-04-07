# PPA Landing Page

Live Link: https://badal-frontend.vercel.app/

A responsive course landing page for **The Deep Work Blueprint**, built from the provided design assets and section reference images. The page presents a productivity course with a hero preview, problem/solution sections, curriculum accordion, testimonial carousel, pricing cards, and footer call-to-action.

## Tech Stack

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State:** React Context API for theme state
- **Carousel:** Swiper
- **Icons:** React Icons
- **Notifications:** React Hot Toast
- **Package Manager:** Yarn

## Features

- Fully responsive landing page across the custom project breakpoints.
- Dark mode by default with a header toggle for full-page light/dark mode.
- Theme preference persistence via `localStorage`.
- Functional curriculum accordion with Module 1 open by default.
- Responsive results/testimonial carousel using Swiper.
- Reusable section and layout components.
- Local image and font assets served from `public/`.
- TypeScript and ESLint verification scripts included.

## Getting Started

Install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open the app in your browser:

```text
http://localhost:3000
```

## Available Scripts

```bash
yarn dev
```

Starts the Next.js development server.

```bash
yarn build
```

Creates an optimized production build.

```bash
yarn start
```

Starts the production server after running `yarn build`.

```bash
yarn lint
```

Runs ESLint across the project.

```bash
yarn typecheck
```

Runs TypeScript type checking without emitting files.

## Project Structure

```text
app/
  layout.tsx          Root layout, metadata, theme bootstrap script
  page.tsx            Landing page section composition
  globals.css         Tailwind layers, fonts, global styles

components/
  layout/             Header and footer
  sections/           Landing page sections
  ui/                 Reusable UI components

constants/
  content.ts          Shared navigation, pricing, and content data

context/
  theme-context.tsx   Light/dark theme context and persistence

public/
  image/              Optimized app image assets
  fonts/              Local SF Pro Display font files

tailwind.config.ts    Theme tokens and custom responsive breakpoints
```

## Responsive Breakpoints

The project uses custom Tailwind screen names:

```ts
screens: {
  "2xsmall": "320px",
  xsmall: "412px",
  small: "520px",
  medium: "680px",
  large: "980px",
  xlarge: "1200px",
  "2xlarge": "1400px",
}
```

Use these breakpoint names instead of Tailwind’s default `sm`, `md`, `lg`, `xl`, and `2xl` prefixes.

## Theme Behavior

- Dark mode is the default theme.
- The header toggle switches the root `<html>` class between `dark` and `light`.
- The selected theme is saved in `localStorage` under `ppa-theme`.
- Light-mode styles are implemented with the custom Tailwind `light:` variant.

## Notes

- Design source/reference folders such as `hero/`, `about/`, `worry/`, `system/`, `curriculum/`, `result/`, `price/`, and `footer/` are used as implementation references.
- Runtime assets used by the app should be placed under `public/image` or `public/fonts`.
- The results section depends on `swiper`; keep the Swiper CSS import in `app/layout.tsx`.
- The app is private and not configured for package publishing.
