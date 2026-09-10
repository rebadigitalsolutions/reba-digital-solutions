import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Code2,
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
} from "@/components/Sections";
import { publishedDemos } from "@/lib/demos";
import DemoDirectory from "@/components/DemoDirectory";
export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> YOUR NEXT CHAPTER, BUILT BETTER
          </p>
          <h1>
            Better websites.
            <br />
            Smarter systems.
            <br />
            <span>
              More room
              <br className="desktop-break" /> to grow.
            </span>
          </h1>
          <p className="hero-description">
            Websites, marketing, and business automation that help your business
            get noticed, attract enquiries, and work better.
          </p>
          <div className="actions">
            <Link className="button" href="/contact">
              Discuss Your Project <ArrowUpRight size={18} />
            </Link>
            <Link className="text-link" href="/services">
              Explore Our Services <ArrowRight size={17} />
            </Link>
          </div>
          <p className="hero-location">
            Based in Kolkata. Working with businesses in India & beyond.
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
              Three ways to move
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
            A property enquiry is different from a clinic appointment. Your
            website and systems should reflect that.
          </p>
        </div>
        <IndustryLinks limit={6} />
        <Link className="text-link spaced-link" href="/industries">
          Explore All 15 Industries <ArrowRight size={18} />
        </Link>
      </section>
      {publishedDemos.length > 0 && (
        <section className="section container">
          <p className="eyebrow">WEBSITE DEMOS</p>
          <h2>Explore the possibilities.</h2>
          <p>
            Concept websites for fictional businesses, separate from our client
            work.
          </p>
          <DemoDirectory entries={publishedDemos} compact />
        </section>
      )}
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
            We connect your website, marketing, and day-to-day systems around
            how your business actually works.
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
                Understandable guidance for managing your website and systems.
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
