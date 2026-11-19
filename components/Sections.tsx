import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  TrendingUp,
  Plus,
  Bot,
  Building2,
  Stethoscope,
  Utensils,
  Scale,
  BedDouble,
  Smartphone,
  Gem,
  GraduationCap,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import { groups, services } from "@/lib/services";
import { industries, focusIndustries } from "@/lib/industries";
const industryIcons: Record<string, LucideIcon> = {
  clinics: Stethoscope,
  dentists: Stethoscope,
  "real-estate-agents": Building2,
  "real-estate-developers": Building2,
  retail: Gem,
  education: GraduationCap,
  finance: Landmark,
  restaurants: Utensils,
  hotels: BedDouble,
  "law-firms": Scale,
};
export function ServiceGroups() {
  const icons = [Bot, Code2, Smartphone, TrendingUp];
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
              {g.more} <ArrowUpRight size={18} />
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
  /** Leave out until the client agrees to be linked. */
  url?: string;
  description: string;
  scope: string;
  context: string;
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

export const workFootnote =
  "We describe what we built; we don’t publish client numbers without permission.";

export const projects: Project[] = [
  {
    name: "Biswas Jewellers",
    category: "RETAIL",
    visual: "project",
    icon: Gem,
    description: "A custom jewellery ERP app.",
    // FILL: modules (stock, billing, orders, karigar work?), platforms,
    // who uses it daily and since when. Add a url only if the client agrees.
    scope:
      "Design and development of a custom ERP app, built around how a jewellery business runs day to day.",
    context:
      "A jewellery retailer that needed one system for its daily operations instead of registers and spreadsheets.",
  },
  {
    name: "Canvasbrick",
    category: "INTERIOR DESIGN",
    image: "/work/canvasbrick.webp",
    visual: "screenshot",
    url: "https://canvasbrick.com/",
    description:
      "A website for an interior design company, with backend and mobile app development.",
    scope:
      "Website development, backend development and a mobile app for the business workflow.",
    context:
      "Helping an interior design company present its work online and support operations beyond the public website.",
  },
  {
    name: "Spacevyu",
    category: "REAL ESTATE",
    image: "/work/spacevyu.webp",
    visual: "screenshot",
    url: "https://spacevyu.com/",
    description:
      "A real estate listings platform with an admin panel for managing properties.",
    scope:
      "Listings platform development, with an admin panel for managing listings, inventory and site content.",
    context:
      "A real estate platform where visitors browse listings and the team manages inventory through an admin interface.",
  },
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
  },
  {
    name: "Cherry n Bean",
    category: "HOSPITALITY",
    image: "/work/cherry-n-bean.webp",
    visual: "screenshot",
    url: "https://www.cherrynbean.com/",
    description: "A website for a homestay among coffee plantations.",
    scope: "Website design and development.",
    context:
      "Introducing a homestay that combines traditional and modern architecture.",
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
            <WorkVisual project={p} icon={ProjectIcon} />
            <div className="work-meta">
              <span className="small-label">{p.category} · CLIENT WORK</span>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              {details && (
                <dl className="project-detail">
                  <dt>Context</dt>
                  <dd>{p.context}</dd>
                  <dt>What we built</dt>
                  <dd>{p.scope}</dd>
                </dl>
              )}
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Visit website <ArrowUpRight size={17} />
                </a>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
function WorkVisual({
  project: p,
  icon: ProjectIcon,
}: {
  project: Project;
  icon: LucideIcon;
}) {
  const inner =
    p.visual === "screenshot" ? (
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
    );
  const className = `work-image${
    p.visual === "project" ? " work-project-panel" : ""
  }`;
  if (!p.url) return <div className={className}>{inner}</div>;
  return (
    <a
      className={className}
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${p.name} website (opens in new tab)`}
    >
      {inner}
      <span className="image-arrow">
        <ArrowUpRight />
      </span>
    </a>
  );
}
export function IndustryLinks({
  focus = false,
  rest = false,
}: {
  focus?: boolean;
  rest?: boolean;
}) {
  const chosen = focus
    ? focusIndustries
    : rest
      ? industries.filter((i) => !focusIndustries.includes(i))
      : industries;
  return (
    <div className="industry-grid">
      {chosen.map((i) => {
        const Icon = industryIcons[i.slug] ?? Building2;
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
    "Can your AI agents speak Bengali and Hindi?",
    "Yes, and English. They follow the caller when they switch languages.",
  ],
  [
    "What if the AI gets something wrong or doesn’t know?",
    "Facts like prices, availability and bookings come from your system, so it doesn’t make them up. When it can’t help, it hands over to your staff or takes a callback request.",
  ],
  [
    "Is our customers’ data safe?",
    "Our AI agents are built to India’s DPDP Act 2023. Your data stays yours.",
  ],
  [
    // FILL: confirm pricing wording with Pritam.
    "What does an AI agent cost per month?",
    "A monthly plan based on call minutes. We quote after a short call about your business.",
  ],
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
            A new app. An AI agent that answers your calls. A better way to
            work.
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
