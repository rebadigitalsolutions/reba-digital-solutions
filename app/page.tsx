import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Code2,
  PhoneCall,
  TrendingUp,
  Workflow,
} from "lucide-react";
import {
  ServiceGroups,
  WorkCards,
  Process,
  FAQ,
  EnquiryBanner,
  IndustryLinks,
  faqs,
  workFootnote,
} from "@/components/Sections";
import { industries } from "@/lib/industries";
import { pageMetadata } from "@/lib/seo";
import { defaultTitle, defaultDescription } from "@/lib/site";
export const metadata = {
  ...pageMetadata({
    title: defaultTitle,
    description: defaultDescription,
    path: "/",
  }),
  title: { absolute: defaultTitle },
};
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(([q, a]) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> SOFTWARE AND AI, BUILT IN KOLKATA
          </p>
          <h1>
            Custom software
            <br />
            and AI agents
            <br />
            <span>that do real work.</span>
          </h1>
          <p className="hero-description">
            Mobile apps, business software, websites and AI agents: voice agents
            that answer your calls, WhatsApp agents that reply and book, and
            automations that cut the admin.
          </p>
          <div className="actions">
            <Link className="button" href="/contact">
              Discuss your project <ArrowUpRight size={18} />
            </Link>
            <Link className="text-link" href="/hellochamber#try">
              <PhoneCall size={17} /> Hear our AI receptionist
            </Link>
          </div>
          <p className="hero-location">
            Based in Kolkata. Working with businesses across India.
          </p>
        </div>
        <div className="hero-visual">
          <div className="visual-top">
            <span>FROM IDEAS TO SOMETHING REAL</span>
            <ArrowUpRight size={24} />
          </div>
          <Link
            href="/work"
            className="browser-preview"
            aria-label="Explore our client work: Sansthita"
          >
            <div className="browser-bar">
              <span>● ● ●</span>
              <span>sansthita.org</span>
              <span>↗</span>
            </div>
            <Image
              src="/work/sansthita.webp"
              alt="Actual Sansthita website showing its mission and community programmes"
              width={1200}
              height={900}
              priority
              sizes="(max-width: 800px) 90vw, 46vw"
            />
          </Link>
          <div className="visual-caption">
            <span>
              <span className="small-label">SELECTED CLIENT WORK</span>
              <strong>Sansthita</strong>
            </span>
            <Link
              href="/work"
              aria-label="Read about Sansthita"
              className="round-link"
            >
              <ArrowUpRight size={22} />
            </Link>
          </div>
          <div className="visual-bottom">
            <span>
              <Code2 size={16} /> Thoughtful design
            </span>
            <span>
              <Check size={16} /> Practical delivery
            </span>
          </div>
        </div>
      </section>
      <div className="proof-strip">
        <div className="container">
          <span>
            Good work starts with <br />
            <strong>clear expectations.</strong>
          </span>
          <span>
            <Check /> A scope you understand
          </span>
          <span>
            <Check /> Built for mobile
          </span>
          <span>
            <Check /> A clear handover
          </span>
          <span>
            <Check /> Support agreed upfront
          </span>
        </div>
      </div>
      <section id="services" className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE CAN HELP WITH</p>
            <h2>
              Four ways to move
              <br />
              your business forward.
            </h2>
          </div>
          <p>
            Start with what you need today.
            <br />
            Build on it as your business grows.
          </p>
        </div>
        <ServiceGroups />
      </section>
      <section id="products" className="section container products-section">
        <p className="eyebrow">OUR PRODUCTS</p>
        <Link href="/hellochamber" className="product-card">
          <span className="service-icon">
            <PhoneCall size={24} />
          </span>
          <span className="product-card-copy">
            <span className="small-label">
              HEALTHCARE · AI RECEPTIONIST FOR DOCTORS
            </span>
            <strong>HelloChamber</strong>
            <span>
              Answers your chamber’s phone in Bengali, Hindi or English, books
              serials or time slots, and sends the patient a WhatsApp
              confirmation, day and night.
            </span>
          </span>
          <span className="text-link">
            See HelloChamber <ArrowUpRight size={18} />
          </span>
        </Link>
      </section>
      <section id="portfolio" className="section work-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CLIENT WORK</p>
              <h2>
                Real businesses.
                <br />
                Work you can explore.
              </h2>
            </div>
            <Link href="/work" className="text-link">
              View Our Work <ArrowUpRight size={18} />
            </Link>
          </div>
          <WorkCards limit={4} />
          <p className="small spaced-link">{workFootnote}</p>
        </div>
      </section>
      <section id="industries" className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">BUILT AROUND YOUR BUSINESS</p>
            <h2>
              Different industries.
              <br />
              The same attention to detail.
            </h2>
          </div>
          <p>
            A patient booking is different from a site visit or a payment
            reminder. Your software and agents should reflect that.
          </p>
        </div>
        <IndustryLinks focus />
        <Link className="text-link spaced-link" href="/industries">
          Explore all {industries.length} industries <ArrowRight size={18} />
        </Link>
      </section>
      <section className="section process-section">
        <div className="container">
          <p className="eyebrow">HOW WE WORK</p>
          <h2>
            A clear path from
            <br />
            first conversation to launch.
          </h2>
          <Process />
        </div>
      </section>
      <section id="about" className="section container why-section">
        <div>
          <p className="eyebrow">A PRACTICAL DIGITAL PARTNER</p>
          <h2>
            Good technology.
            <br />
            Straightforward people.
          </h2>
          <p>
            We build the software, apps and AI agents your business runs on,
            around how it actually works.
          </p>
          <Link href="/about" className="text-link">
            About Reba <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="commitments">
          <div>
            <Code2 />
            <div>
              <h3>Clear scope, fewer surprises</h3>
              <p>
                Deliverables, responsibilities, and costs discussed before work
                begins.
              </p>
            </div>
          </div>
          <div>
            <TrendingUp />
            <div>
              <h3>Useful before impressive</h3>
              <p>
                Design decisions grounded in what your customers need to find
                and do.
              </p>
            </div>
          </div>
          <div>
            <Workflow />
            <div>
              <h3>A handover you can use</h3>
              <p>
                Understandable guidance for running your software, agents and
                website.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="section faq-section">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">BEFORE WE GET STARTED</p>
            <h2>
              A few things you
              <br />
              might be wondering.
            </h2>
            <p>
              Have something else in mind?
              <br />
              <Link href="/contact" className="text-link">
                Let’s talk <ArrowUpRight size={16} />
              </Link>
            </p>
          </div>
          <FAQ />
        </div>
      </section>
      <EnquiryBanner />
    </>
  );
}
