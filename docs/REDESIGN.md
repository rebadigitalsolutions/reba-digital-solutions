# Redesign audit and handover

## Verified before implementation

- Next.js App Router with React and Tailwind; no hosting manifest or configured submission endpoint was present.
- The original contact form had no action or submit handler, no field labels and no required-field validation.
- Navigation linked to #about, but the About component was not rendered on the homepage.
- Footer /privacy and /terms links had no corresponding routes.
- Both app/layout.js and app/layout.tsx existed, with conflicting metadata; the rendered preview used the generic title.
- The original desktop preview had a long text-only hero, muted navigation and a prominent floating WhatsApp control. The mobile menu button had no accessible label or expanded state in source.
- Live-site retrieval failed. The local original desktop preview was inspected; original mobile usability and real-world conversion performance were not measured.
- Existing portfolio source lists Sansthita, Cherry n Bean, Canvasbrick, Spacevyu and Pritam's personal portfolio. No quantified outcomes, client testimonials, awards or team claims were supplied.
- Existing contact source verifies the published business email, phone, WhatsApp, Kolkata address, Facebook and Instagram URLs. Their account ownership has not been independently reverified.
- Real website screenshots were captured on 10 September 2026, checked visually and converted to local WebP assets. Capturing a live website does not independently verify attribution; attribution comes from the existing project and owner-supplied project details.

## Architecture

Home; /services with Build, Grow and Automate groups; 12 substantive service pages; /industries with 15 service-oriented industry pages; /work; /demos; /about; /contact; /privacy; /terms.

Service and industry pages are driven by lib/services.ts and lib/industries.ts. Industry pages describe proposed service approaches, not fictional businesses or completed demos. Home anchors #services, #portfolio, #industries, #about, #pricing and #contact are retained. The old external demo subdomain was not changed; its unverified link was replaced with the internal directory. No existing application page routes were removed.

## Demo publishing

Individual industry demo websites were initially outside this phase. The directory infrastructure now includes the supplied published dental clinic concept demo at https://demo-dental-clinic-one.vercel.app/. It is labelled as a concept website for a fictional business. Filters and the homepage showcase render only because a published demo now exists.

To add a completed demo later:

1. Finish the separate concept website and verify its destination URL.
2. Place an optimised thumbnail under public/demos (use a filename without spaces).
3. Add one entry to the demos array with title, industry (one of the 15 slugs in lib/industries.ts), thumbnail (for example /demos/example.webp), description, url and status.
4. Keep status as draft while reviewing. Use published only when the link and image work and the destination clearly identifies a fictional concept business.
5. Every card automatically displays the concept/fictional business label. Filters derive only from published industries. The homepage automatically gains a showcase once a valid published entry exists.

The directory does not implement future demo websites. It accepts an existing same-site route or an HTTPS website URL. Invalid or incomplete entries are hidden, but content owners still need to verify that the destination and thumbnail exist before publishing.

## Contact integration

No working integration was present. The existing Resend dependency is now used through a server-only POST /api/contact handler. Set these deployment environment variables (never NEXT_PUBLIC variables):

- RESEND_API_KEY: your Resend API key.
- CONTACT_FROM_EMAIL: Reba Digital Solutions <website@rebadigitalsolutions.com>, using the verified rebadigitalsolutions.com domain.
- CONTACT_TO_EMAIL: optional recipient override; defaults to the owner-selected inbox hello@rebadigitalsolutions.com.

The supplied Resend screenshot shows the rebadigitalsolutions.com domain as verified, and .env.local is configured to send from that domain to the owner-selected inbox. The form explains when online enquiries are unavailable and offers direct email/WhatsApp contact. Attempts never report success without provider acceptance. A provider error, network error, missing configuration or validation error preserves entered values. Successful provider acceptance does not prove delivery to the recipient inbox unless a live submission is accepted by Resend and appears in the mailbox.

The endpoint validates field types, lengths, service values and email format, rejects honeypot submissions and cross-origin browser submissions, caps request content and exposes no provider errors or credentials. Configure hosting-level request rate limiting before public launch; the app does not include a distributed anti-abuse service.

## Owner content still useful

- Confirm each project’s full scope and approved client attribution before expanding case studies. Current descriptions stay within the existing portfolio evidence and owner-supplied additions.
- Review the operational privacy notice against actual hosting/email retention and business practices; this is not a jurisdiction-specific legal policy.
- Confirm ongoing support arrangements, contractual ownership and third-party licence costs in proposals. No new blanket guarantees or fixed prices were introduced.
- Add real testimonials or credentials only with permission and evidence.
- Add more individual industry demos in future tasks.

## Hosting

The existing application uses a Node.js Next.js server for enquiry delivery. No existing deployment credentials or Sites manifest were supplied. Sites hosting requires a compatible Worker build or static export; this server-backed Next.js output is neither. The app has not been migrated to another framework or silently deployed to the live domain. Use the existing Node-compatible hosting workflow, with the contact environment variables set. npm run build and npm start are the production commands.


## Validation completed

- Production build: Next.js 16.3.4, all generated pages compiled successfully.
- ESLint: passed. Focused Node tests: 4 passed, covering demo publication gating, industry/service references, contact validation, and the real contact endpoint with a mocked Resend provider.
- Route check: all 36 content routes returned HTTP 200 with titles, descriptions, canonical URLs and one main heading. Internal page links, legacy homepage anchors, sitemap, robots, local image assets and unknown-route 404 responses were checked.
- Browser: nine representative routes inspected at 390px mobile, 768px tablet and 1440px desktop widths. No horizontal overflow was found. This was a Chromium/in-app browser check, not a full cross-browser or physical-device certification.
- Mobile menu opened and navigated to Demos; Escape closed it and returned focus to the trigger. The original empty-state demo behavior was verified before the supplied dental demo was published.
- The demo CTA selected Website design & development on the contact page.
- Empty form errors identified missing fields and focused the first invalid input. A valid test form received HTTP 503 for absent email configuration, without a success message. Name, email and project text remained in the form; email retention was verified visually because browser text extraction masks email input values.
- A hostname normalisation mismatch found in browser testing was fixed and covered by a regression assertion.
- FAQ disclosure opened by click and closed by Enter. Visible focus outline was inspected. Both client screenshots loaded in the browser.
- Reduced-motion support is implemented through the CSS media query; OS-level reduced-motion switching and 200% text enlargement were not tested.
- npm audit reports zero vulnerabilities after updating Next.js, its matching lint configuration, Resend and affected transitive dependencies.
- A live contact endpoint test was accepted by Resend after the verified sender was configured. Inbox receipt still depends on the recipient mailbox accepting and surfacing the message.

## Latest owner updates

Added hello@rebadigitalsolutions.com as the single public contact email. The requested 8282859551 number was already present; it remains consistently formatted as +91 82828 59551 rather than duplicated. Added Instagram & social media automation as a dedicated service. The contact form recipient is hello@rebadigitalsolutions.com. The verified sender is configured as Reba Digital Solutions <website@rebadigitalsolutions.com>. .env.local is ignored by Git; .env.example documents the required settings without secrets. Added Canvasbrick and Spacevyu to Client Work based on owner-supplied project details. Added the supplied dental clinic demo as a published fictional concept website under Website Demos. The homepage demo showcase has been removed; demos remain available from the Demos navigation item and /demos page.
