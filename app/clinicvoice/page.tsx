import Link from "next/link";
import { Noto_Sans_Bengali } from "next/font/google";
import { ArrowUpRight, MessageCircle, PhoneCall } from "lucide-react";
import { FAQ, EnquiryBanner } from "@/components/Sections";
import { business } from "@/lib/business";
import { clinicvoice } from "@/lib/clinicvoice";
import { pageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

const bengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "600"],
  display: "swap",
});

const title = "ClinicVoice | AI receptionist for doctors in Kolkata";
const description =
  "An AI receptionist that answers your chamber’s calls in Bengali, Hindi and English, books serials and sends WhatsApp confirmations.";
export const metadata = {
  ...pageMetadata({ title, description, path: "/clinicvoice" }),
  title: { absolute: title },
};

const steps: [string, string][] = [
  [
    "You keep your number",
    "Calls forward to ClinicVoice, or only the calls your staff miss.",
  ],
  [
    "The AI talks to the patient",
    "It books from your real schedule, so it never offers a slot you don’t have.",
  ],
  [
    "You see everything on your phone",
    "Every booking and every call, with a short summary.",
  ],
];

const features = [
  "Books, reschedules and cancels, for serial chambers and time-slot clinics.",
  "Tells callers your timings, fees and address, and says when you’re on leave or running late.",
  "Sends a WhatsApp confirmation after every booking.",
  "Never gives medical advice. In an emergency it tells the caller to go to the nearest emergency department or call 112 or 108.",
  "Hands a call to your staff, or takes a callback request, when a patient asks for a person.",
  "Your dashboard: today’s patients, call summaries, messages to patients, days off.",
];

const faqs: [string, string][] = [
  [
    "Does it speak Bengali?",
    "Yes: Bengali, Hindi and English, and it follows the patient when they switch.",
  ],
  [
    "Do I need a new number?",
    "No. Your number stays; calls forward to ClinicVoice.",
  ],
  [
    "What if a patient wants to talk to a person?",
    "It transfers the call to your staff or takes a callback request.",
  ],
  [
    "Is patient data safe?",
    "It follows India’s DPDP Act. The database is in Mumbai, and the data belongs to your clinic. Read the ClinicVoice privacy notice for details.",
  ],
  [
    // FILL: confirm the usual start time.
    "How fast can I start?",
    "Usually within 2–3 days of your yes.",
  ],
];

export default function ClinicVoicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: clinicvoice.name,
              applicationCategory: "BusinessApplication",
              description,
              url: `${siteUrl}${clinicvoice.path}`,
              inLanguage: ["bn", "hi", "en"],
              provider: { "@type": "Organization", name: business.name },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map(([q, a]) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
          ]),
        }}
      />
      <section className="page-intro container hc-intro">
        <p className="eyebrow">CLINICVOICE, OUR AI RECEPTIONIST FOR DOCTORS</p>
        <h1>Never miss a patient’s call again.</h1>
        <p lang="bn" className={`hc-bn hc-bn-headline ${bengali.className}`}>
          রোগীর একটাও ফোন আর মিস হবে না।
        </p>
        <p className="hc-sub">
          ClinicVoice answers your chamber’s phone in Bengali, Hindi or
          English, books serials or time slots, and sends the patient a
          WhatsApp confirmation, day and night.
        </p>
        <p lang="bn" className={`hc-bn ${bengali.className}`}>
          ClinicVoice আপনার চেম্বারের ফোন ধরে, বাংলা, হিন্দি বা ইংরেজিতে কথা
          বলে, সিরিয়াল বা সময় বুক করে, আর রোগীকে হোয়াটসঅ্যাপে কনফার্মেশন পাঠায়,
          দিনরাত।
        </p>
      </section>

      <div className="container">
        <section id="try" className="hc-try">
          <div>
            <p className="eyebrow">TRY IT</p>
            <h2>
              Call{" "}
              <a href={`tel:${clinicvoice.demoPhone}`}>
                {clinicvoice.demoDisplayPhone}
              </a>{" "}
              and book a serial yourself.
            </h2>
            <p lang="bn" className={`hc-bn ${bengali.className}`}>
              নিজে ফোন করে দেখুন: {clinicvoice.demoDisplayPhone}
            </p>
            <p className="small">
              This is our demo line, for a demo clinic. WhatsApp confirmations
              from the demo line are not sent to website visitors yet.
            </p>
          </div>
          <a className="button button-light" href={`tel:${clinicvoice.demoPhone}`}>
            <PhoneCall size={18} /> Call the demo line
          </a>
        </section>
      </div>

      <section className="section process-section">
        <div className="container">
        <p className="eyebrow">HOW IT WORKS</p>
        <h2>Three steps, and your phone is covered.</h2>
        <ol className="process-grid hc-steps">
          {steps.map(([t, copy], n) => (
            <li key={t}>
              <span className="step-number">0{n + 1}</span>
              <h3>{t}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
        </div>
      </section>

      <div className="container inner-section detail-grid">
        <div className="detail-main">
          <section>
            <h2>What it does</h2>
            <ul>
              {features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Who it’s for</h2>
            <ul>
              <li>Doctors with their own chambers.</li>
              <li>
                Diagnostic centres and pharmacy chambers that book serials for
                many doctors. It can answer only the calls the reception
                misses.
              </li>
            </ul>
          </section>
          <section>
            <h2>Pricing</h2>
            {/* FILL: founding-doctor offer. Proposed, not final: Rs 2,999 a
                month for 600 call minutes, Rs 4,999 for 1,200; setup free for
                the first 10–15 doctors. Publish only once confirmed. */}
            <p>
              A founding-doctor offer is open for our first doctors. Message us
              on WhatsApp and we’ll share the plans.
            </p>
          </section>
          <section>
            <h2>Common questions</h2>
            <FAQ items={faqs} />
            <p className="small">
              <a
                className="text-link"
                href={clinicvoice.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                ClinicVoice privacy notice <ArrowUpRight size={15} />
              </a>
            </p>
          </section>
        </div>
        <aside className="detail-aside">
          <p className="eyebrow">TALK TO US</p>
          <h2>Want ClinicVoice for your chamber?</h2>
          <p>Message us on WhatsApp, or book a visit and we’ll come to you.</p>
          <a
            className="button"
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={17} /> WhatsApp {business.displayPhone}
          </a>
          <Link
            className="button button-outline"
            href="/contact?service=ai-voice-agents&industry=clinics"
          >
            Book a visit <ArrowUpRight size={17} />
          </Link>
          <p className="eyebrow related-label">RELATED</p>
          <Link href="/industries/clinics">
            For doctors, clinics & diagnostic centres
            <ArrowUpRight size={17} />
          </Link>
          <Link href="/services/ai-voice-agents">
            AI voice agents
            <ArrowUpRight size={17} />
          </Link>
          <Link href="/services/whatsapp-ai-agents">
            WhatsApp AI agents
            <ArrowUpRight size={17} />
          </Link>
        </aside>
      </div>
      <EnquiryBanner />
    </>
  );
}
