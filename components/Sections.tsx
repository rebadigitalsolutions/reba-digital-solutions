import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  TrendingUp,
  Workflow,
  Plus,
  Building2,
  Stethoscope,
  Utensils,
  Scale,
  BedDouble,
  Store,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { groups, services } from "@/lib/services";
import { industries } from "@/lib/industries";
export function ServiceGroups() {
  const icons = [Code2, TrendingUp, Workflow];
  return (
    <div className="service-grid">
      {groups.map((g, n) => {
        const Icon = icons[n];
        return (
          <article className="service-card" key={g.slug}>
            <div className="service-top">
              <span className="service-icon">
                <Icon size={24} />
              </span>
              <span>0{n + 1}</span>
            </div>
            <h3>
              {g.title}
              <span className="blue">.</span>
            </h3>
            <p className="service-headline">{g.headline}</p>
            <p>{g.description}</p>
            <div className="service-tags">
              {services
                .filter((s) => s.group === g.slug)
                .slice(0, 4)
                .map((s) => (
                  <Link href={`/services/${s.slug}`} key={s.slug}>
                    {s.title}
                  </Link>
                ))}
            </div>
            <Link className="text-link" href={`/services#${g.slug}`}>
              Explore {g.title} Services <ArrowUpRight size={18} />
            </Link>
          </article>
        );
      })}
    </div>
  );
}
type Project = {
  name: string;
  category: string;
  url: string;
  description: string;
  scope: string;
  context: string;
  outcome: string;
} & (
  | {
      visual: "screenshot";
      image: string;
      icon?: never;
    }
  | {
      visual: "project";
      icon: LucideIcon;
      image?: never;
    }
);

export const projects: Project[] = [
  {
    name: "Sansthita",
    category: "NONPROFIT",
    image: "/work/sansthita.webp",
    visual: "screenshot",
    url: "https://www.sansthita.org/",
    description: "A clear digital presence for a nonprofit organisation.",
    scope:
      "Website design and development, with a focus on clarity, accessibility and navigation.",
    context:
      "Presenting the organisation and its work in an accessible website.",
    outcome:
      "A published website that visitors can explore. No performance results are claimed.",
  },
  {
    name: "Cherry n Bean",
    category: "HOSPITALITY",
    image: "/work/cherry-n-bean.webp",
    visual: "screenshot",
    url: "https://www.cherrynbean.com/",
    description: "A website for a homestay among coffee plantations.",
    scope:
      "Website design and development, as listed in our existing portfolio.",
    context:
      "Introducing a homestay that combines traditional and modern architecture.",
    outcome:
      "A published homestay website. Booking and conversion results are not documented.",
  },
  {
    name: "Canvasbrick",
    category: "INTERIOR DESIGN",
    image: "/work/canvasbrick.webp",
    visual: "screenshot",
    url: "https://canvasbrick.com/",
    description:
      "A website for an interior design company, supported by backend and mobile app development.",
    scope:
      "Website development, backend development and mobile app development for the business workflow.",
    context:
      "Helping an interior design company present its work online and support operations beyond the public website.",
    outcome:
      "A client website and supporting application work. No performance results are claimed.",
  },
  {
    name: "Spacevyu",
    category: "REAL ESTATE",
    image: "/work/spacevyu.webp",
    visual: "screenshot",
    url: "https://spacevyu.com/",
    description:
      "A real estate listing website with an admin panel for managing property content.",
    scope:
      "Website development for property listings, with admin panel functionality for managing listings and site content.",
    context:
      "Supporting a real estate platform where visitors can browse listings and the team can manage inventory through an admin interface.",
    outcome:
      "A client real estate listing platform. No traffic, lead or sales figures are claimed.",
  },
];
export function WorkCards({
  limit = projects.length,
  details = false,
}: {
  limit?: number;
  details?: boolean;
}) {
  return (
    <div className="work-grid">
      {projects.slice(0, limit).map((p) => {
        const ProjectIcon = p.icon ?? Smartphone;
        return (
          <article className="work-card" key={p.name}>
            <a
              className={`work-image${
                p.visual === "project" ? " work-project-panel" : ""
              }`}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${p.name} website (opens in new tab)`}
            >
              {p.visual === "screenshot" ? (
                <Image
                  src={p.image}
                  alt={`Screenshot of the ${p.name} website`}
                  width={1200}
                  height={900}
                  sizes="(max-width: 700px) 90vw, 44vw"
                />
              ) : (
                <span className="project-panel-inner">
                  <span className="project-panel-icon">
                    <ProjectIcon size={30} />
                  </span>
                  <span className="project-panel-copy">
                    <span className="small-label">{p.category}</span>
                    <strong>{p.name}</strong>
                    <span>{p.description}</span>
                  </span>
                </span>
              )}
              <span className="image-arrow">
                <ArrowUpRight />
              </span>
            </a>
            <div className="work-meta">
              <span className="small-label">{p.category} · CLIENT WORK</span>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              {details && (
                <dl className="project-detail">
                  <dt>Context</dt>
                  <dd>{p.context}</dd>
                  <dt>Our contribution</dt>
                  <dd>{p.scope}</dd>
                  <dt>Published outcome</dt>
                  <dd>{p.outcome}</dd>
                </dl>
              )}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Visit Website <ArrowUpRight size={17} />
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}
export function IndustryLinks({ limit = 15 }: { limit?: number }) {
  const chosen =
    limit === 6
      ? [
          industries[0],
          industries[3],
          industries[5],
          industries[2],
          industries[6],
          industries[13],
        ]
      : industries;
  const icons = [Building2, Stethoscope, Utensils, Scale, BedDouble, Store];
  return (
    <div className="industry-grid">
      {chosen.slice(0, limit).map((i, n) => {
        const Icon = icons[n % icons.length];
        return (
          <Link
            key={i.slug}
            href={`/industries/${i.slug}`}
            className="industry-link"
          >
            <Icon size={22} strokeWidth={1.5} />
            <span>{i.title}</span>
            <ArrowUpRight size={18} />
          </Link>
        );
      })}
    </div>
  );
}
export const steps = [
  [
    "Discovery",
    "We discuss your business, customers and the problem you want to solve.",
  ],
  [
    "Scope & proposal",
    "You receive clear deliverables, responsibilities, costs and an agreed plan.",
  ],
  [
    "Design & build",
    "We turn the agreed direction into designs and a working solution, with review points.",
  ],
  [
    "Testing & launch",
    "We check key journeys, resolve issues and prepare your launch.",
  ],
  [
    "Handover & support",
    "You receive practical guidance, with ongoing support agreed around your needs.",
  ],
];
export function Process() {
  return (
    <ol className="process-grid">
      {steps.map(([title, copy], n) => (
        <li key={title}>
          <span className="step-number">0{n + 1}</span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </li>
      ))}
    </ol>
  );
}
export const faqs: [string, string][] = [
  [
    "How long will my project take?",
    "Timing depends on the scope, content readiness, integrations and review rounds. After discovery, we propose milestones and identify what we need from you to keep things moving.",
  ],
  [
    "How much will it cost?",
    "We price around the deliverables: page count, design needs, functionality, content, integrations and support. We provide a scoped proposal before work starts, rather than a one-size-fits-all package.",
  ],
  [
    "Do I need to provide content and images?",
    "Existing brand assets, service information and approved images are a useful start. Copywriting and content preparation can be included in the agreed scope. You review factual claims before publication.",
  ],
  [
    "Can you maintain the website after launch?",
    "Yes, maintenance and updates can be scoped separately. We agree what support covers, how requests are handled and which third-party services need renewal.",
  ],
  [
    "Will I own my website and accounts?",
    "Ownership, source files, account access and handover are documented in the proposal. Third-party software, stock assets and platforms may carry their own licences. We discuss these before choosing them.",
  ],
  [
    "Are hosting and other subscriptions included?",
    "Domain names, hosting, CRM licences, advertising spend, messaging usage and paid platform subscriptions may be separate. Your proposal should clearly identify the expected third-party costs.",
  ],
];
export function FAQ({ items = faqs }: { items?: [string, string][] }) {
  return (
    <div className="faq-list">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <Plus size={18} />
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
export function EnquiryBanner() {
  return (
    <section id="contact" className="enquiry-banner">
      <div className="container">
        <div>
          <p className="eyebrow">LET’S MAKE THE NEXT STEP A USEFUL ONE</p>
          <h2>
            What’s next for
            <br />
            your business?
          </h2>
          <p>
            A new website. A clearer digital presence. A better way to work.
            <br />
            Tell us where you’d like to start.
          </p>
        </div>
        <Link href="/contact" className="button button-light">
          Discuss Your Project <ArrowUpRight size={20} />
        </Link>
      </div>
    </section>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro container">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
export function BackLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-link back-link">
      <ArrowRight size={16} style={{ transform: "rotate(180deg)" }} />
      {children}
    </Link>
  );
}
