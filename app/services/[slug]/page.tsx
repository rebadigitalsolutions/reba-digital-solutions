import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { PageIntro, BackLink, FAQ } from "@/components/Sections";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return {
    title: s?.title ?? "Service not found",
    description: s?.summary,
    alternates: { canonical: `/services/${slug}` },
  };
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  return (
    <>
      <div className="container">
        <BackLink href="/services">All services</BackLink>
      </div>
      <PageIntro
        eyebrow={`${s.group.toUpperCase()} / SERVICES`}
        title={s.title}
        description={s.summary}
      />
      <div className="container inner-section detail-grid">
        <div className="detail-main">
          <section>
            <h2>Who it’s for</h2>
            <p>{s.audience}</p>
          </section>
          <section>
            <h2>The problem we help solve</h2>
            <p>{s.problem}</p>
          </section>
          <section>
            <h2>What the work can include</h2>
            <ul>
              {s.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <p className="small">
              Your proposal sets the final deliverables and responsibilities.
            </p>
          </section>
          <section>
            <h2>What this looks like in practice</h2>
            <p>{s.example}</p>
          </section>
          <section>
            <h2>How we get started</h2>
            <p>
              We review the current situation, agree a scope and plan, then
              design and implement the solution with scheduled review points.
              Testing and handover are included in the agreed delivery plan.
            </p>
            <h3>What we need from you</h3>
            <p style={{ marginTop: 14 }}>{s.inputs}</p>
          </section>
          <section>
            <h2>Common questions</h2>
            <FAQ items={s.faq} />
          </section>
        </div>
        <aside className="detail-aside">
          <p className="eyebrow">LET’S FIND THE RIGHT START</p>
          <h2>Tell us what needs to work better.</h2>
          <p>
            Share your current situation and what you’d like to achieve. We’ll
            discuss a useful next step.
          </p>
          <Link className="button" href={`/contact?service=${s.slug}`}>
            Discuss This Service <ArrowUpRight size={17} />
          </Link>
        </aside>
      </div>
    </>
  );
}
