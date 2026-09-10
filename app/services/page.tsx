import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, EnquiryBanner } from "@/components/Sections";
import { groups, services } from "@/lib/services";
export const metadata = {
  title: "Services",
  description:
    "Explore website development, marketing, CRM, reporting and automation services, organised around Build, Grow and Automate.",
  alternates: { canonical: "/services" },
};
export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="BUILD · GROW · AUTOMATE"
        title="The right tools for your next step."
        description="Start with a specific business need. We’ll help you define the work, choose suitable tools and connect the pieces."
      />
      <div className="container inner-section">
        {groups.map((g, n) => (
          <section key={g.slug} id={g.slug} className="service-directory-group">
            <div className="service-directory-title">
              <span>0{n + 1}</span>
              <h2>
                {g.title}
                <span className="blue">.</span>
              </h2>
              <p>{g.headline}</p>
            </div>
            <div className="service-list">
              {services
                .filter((s) => s.group === g.slug)
                .map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`}>
                    <h3>
                      {s.title}
                      <ArrowUpRight size={20} />
                    </h3>
                    <p>{s.summary}</p>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
      <EnquiryBanner />
    </>
  );
}
