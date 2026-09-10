# Reba Digital Solutions

Agency website built with the existing Next.js App Router, React and Tailwind stack. Includes 12 service pages, 15 industry service pages, client work, a scalable demo directory, and a server-side contact handler.

## Run locally

```sh
npm ci
npm run dev
```

## Contact delivery

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` plus `CONTACT_FROM_EMAIL` using a sender on a Resend-verified domain. `CONTACT_TO_EMAIL` is set to the owner-selected inbox `pritam.das@rebadigitalsolutions.com`. The recipient and verified sender may be different addresses. Never commit the real key.

Without complete configuration, the form explicitly reports that it cannot send. Direct email, phone and WhatsApp links remain available.

## Content

- `lib/business.ts`: public contact details and the default receiving inbox.
- `lib/services.ts`: service content grouped into Build, Grow and Automate.
- `lib/industries.ts`: the 15 industry categories and their distinct service approaches.
- `lib/demos.ts`: central demo catalogue; currently empty by design.
- `components/Sections.tsx`: shared sections and existing project records.
- `app/globals.css`: design tokens and responsive styles.

Individual industry demo websites are separate future tasks. Add only a completed demo’s assets and content entry, then mark it published. Unpublished entries never appear. See [the handover](docs/REDESIGN.md) for the publishing checklist and current limitations.

## Validation

```sh
npm test
npm run lint
npm run build
npm start
node scripts/check-routes.mjs
```

Route checks use `http://127.0.0.1:3000` by default; set `CHECK_BASE_URL` to test another local server. Tests use a mocked email provider and do not send real messages.

## Deployment

Deploy using a Node-compatible Next.js host and configure the contact variables there. The app has not been deployed to the live business domain. The production build is server-backed and cannot be hosted as a static export without changing the enquiry implementation.
