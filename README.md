
# Daniel Jegbefumhen Profile Website

A responsive React + Vite profile website for Daniel Jegbefumhen, built to present his services, experience, gallery, and contact options in a polished single-page experience.

## Overview

This project is a frontend portfolio and service showcase for a multi-disciplinary professional working across:

- Web development
- Electrical installation
- General printing

The site is designed as a modern landing page with internal page switching for `Home`, `About`, and `Gallery`, along with service browsing, a lightweight cart flow, theme switching, and direct contact actions.

## Features

- Responsive landing page built with React and Vite
- Home, About, and Gallery views without a router
- Animated hero, sections, cards, and transitions using `motion`
- Light and dark theme toggle
- Product/service showcase for web, electrical, and printing offers
- Simple cart flow for collecting service requests
- Direct WhatsApp, SMS, phone, mail, and map links
- Contact modal for lead capture UI

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- `motion`
- `lucide-react`

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Type-check

```bash
npx tsc --noEmit
```

## Project Structure

```text
src/
  app/
    App.tsx
    components/
      cart/
      merged/
      navigation/
      products/
      shared/
    contexts/
    pages/
  main.tsx
  styles/
```

## Important Notes

- This is a frontend-only project. There is no backend or database.
- The cart sends requests through WhatsApp or email links.
- The contact modal is currently a UI flow and does not submit to a backend service.
- Build output is generated into `dist/`.

## Contact Details Used In The App

- WhatsApp: `+2348109368514`
- Email: `jegbefumhendaniel@gmail.com`

If you want to change those later, start with:

- `src/app/components/cart/CartModal.tsx`
- `src/app/components/merged/EnhancedContactInfo.tsx`
- `src/app/components/merged/ContactSectionNoSocial.tsx`
- `src/app/App.tsx`

## Status

The project currently builds successfully with:

- `npm run build`
- `npx tsc --noEmit`
