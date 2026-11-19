import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries, industryFocus } from "@/lib/industries";
import { hellochamber } from "@/lib/hellochamber";
import { services } from "@/lib/services";
import { PageIntro, BackLink } from "@/components/Sections";
import { pageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site";
export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const i = industries.find((i) => i.slug === slug);
  if (!i) return { title: "Industry not found" };
  if (i.slug === "clinics")
    return pageMetadata({
      title: "AI receptionist and websites for doctors and clinics in Kolkata",
      description:
        "HelloChamber answers your chamber’s calls in Bengali, Hindi and English, books serials and sends WhatsApp confirmations. Clinic websites too.",
      path: `/industries/${slug}`,
    });
  const f = industryFocus[i.slug];
  return pageMetadata({
    title: f
      ? `${i.title}: software and AI agents`
      : `Digital services for ${i.title.toLowerCase()}`,
    description: f ? f.lead : i.need,
    path: `/industries/${slug}`,
  });
}
export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const i = industries.find((i) => i.slug === slug);
  if (!i) notFound();
  const focus = industryFocus[i.slug];
  const isClinic = i.slug === "clinics";
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
              {
                "@type": "ListItem",
                position: 2,
                name: "Industries",
                item: `${siteUrl}/industries`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: i.title,
                item: `${siteUrl}/industries/${i.slug}`,
              },
            ],
          }),
        }}
      />
      <div className="container">
        <BackLink href="/industries">All industries</BackLink>
      </div>
      <PageIntro
        eyebrow={
          focus ? `INDUSTRY · ${focus.proof.kind.toUpperCase()}` : "INDUSTRY SOLUTIONS"
        }
        title={i.title}
        description={focus ? focus.lead : i.need}
      />
      <div className="container inner-section detail-grid">
        <div className="detail-main">
          {focus && (
            <section className="focus-panel">
              <span className="focus-proof">{focus.proof.kind}</span>
              <h2>
                {isClinic
                  ? "Never miss a patient’s call again."
                  : "What we lead with"}
              </h2>
              <ul>
                {focus.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="small">{focus.proof.text}</p>
              {isClinic && (
                <p>
                  Call {hellochamber.demoDisplayPhone} and book a serial
                  yourself.
                </p>
              )}
              <div className="actions">
                {focus.cta && (
                  <Link className="button" href={focus.cta.href}>
                    {focus.cta.label} <ArrowUpRight size={17} />
                  </Link>
                )}
                {isClinic && (
                  <Link className="text-link" href="/hellochamber">
                    About HelloChamber <ArrowUpRight size={17} />
                  </Link>
                )}
              </div>
            </section>
          )}
          {isClinic && (
            <section>
              <p className="eyebrow">ALSO AVAILABLE</p>
              <h2>A clinic website</h2>
              <p>{i.need}</p>
            </section>
          )}
          <section>
            <h2>Design around the customer journey.</h2>
            <p>{i.journey}</p>
            <p>
              We keep this journey clear on mobile, with useful information
              before the enquiry and a defined next step for your team
              afterwards.
            </p>
          </section>
          <section>
            <h2>A useful starting scope</h2>
            <ul>
              {i.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Connect the enquiry to the next step.</h2>
            <p>
              We can route enquiries to an agreed inbox or CRM, identify who
              should respond and set up appropriate follow-up tasks.
              Integrations depend on your existing tools and subscription plans.
            </p>
          </section>
          <section>
            <h2>What we’ll need to understand</h2>
            <p>{i.inputs}</p>
            <p>
              We also discuss who maintains the information, how requests are
              confirmed and any approvals required before launch.
            </p>
          </section>
          <section>
            <h2>Start with the work that matters.</h2>
            <p>
              You do not need every service at once. We can scope an initial
              website, then plan search visibility or operational improvements
              around your priorities.
            </p>
            {focus?.proof.kind !== "Client work" &&
              focus?.proof.kind !== "Our product" && (
                <p className="small">
                  Use case: this page describes an approach for your industry.
                  It is not a client case study or a live concept demo.
                </p>
              )}
          </section>
        </div>
        <aside className="detail-aside">
          <p className="eyebrow">SERVICES THAT FIT</p>
          <h2>Make the pieces work together.</h2>
          {i.services.map((slug) => {
            const s = services.find((s) => s.slug === slug)!;
            if (!s) return null;
            return (
              <Link key={slug} href={`/services/${slug}`}>
                {s.title}
                <ArrowUpRight size={17} />
              </Link>
            );
          })}
          {isClinic && (
            <Link href="/hellochamber">
              HelloChamber: AI receptionist
              <ArrowUpRight size={17} />
            </Link>
          )}
          <Link className="button" href={`/contact?industry=${i.slug}`}>
            Discuss your project <ArrowUpRight size={17} />
          </Link>
        </aside>
      </div>
    </>
  );
}
