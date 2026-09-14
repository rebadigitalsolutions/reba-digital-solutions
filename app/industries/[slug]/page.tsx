import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/industries";
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
  return pageMetadata({
    title: `Digital services for ${i.title.toLowerCase()}`,
    description: i.need,
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
        eyebrow="INDUSTRY SOLUTIONS"
        title={i.title}
        description={i.need}
      />
      <div className="container inner-section detail-grid">
        <div className="detail-main">
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
            <p className="small">
              This page describes an approach for your industry. It is not a
              client case study or a live concept demo.
            </p>
          </section>
        </div>
        <aside className="detail-aside">
          <p className="eyebrow">SERVICES THAT FIT</p>
          <h2>Make the pieces work together.</h2>
          {i.services.map((slug) => {
            const s = services.find((s) => s.slug === slug)!;
            return (
              <Link key={slug} href={`/services/${slug}`}>
                {s.title}
                <ArrowUpRight size={17} />
              </Link>
            );
          })}
          <Link className="button" href={`/contact?industry=${i.slug}`}>
            Discuss Your Project <ArrowUpRight size={17} />
          </Link>
        </aside>
      </div>
    </>
  );
}
