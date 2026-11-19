import { PageIntro, IndustryLinks, EnquiryBanner } from "@/components/Sections";
import { industries } from "@/lib/industries";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Industries",
  description:
    "AI agents, custom software and apps for healthcare, real estate, retail and jewellery, education, banking and finance, and more.",
  path: "/industries",
});
export default function IndustriesPage() {
  return (
    <>
      <PageIntro
        eyebrow="YOUR BUSINESS, IN CONTEXT"
        title="Different journeys. Thoughtful solutions."
        description="Start with the calls your customers make and the tasks your team handles. See how software, apps and AI agents can support your industry."
      />
      <div className="container inner-section">
        <h2 className="industry-group-title">Where we focus</h2>
        <IndustryLinks focus />
        <h2 className="industry-group-title">All industries</h2>
        <IndustryLinks rest />
        <p className="small spaced-link">
          Pages marked “Use case” describe an approach, not completed client
          projects. Of the {industries.length} industries here, only those that
          name a client or product have one.
        </p>
      </div>
      <EnquiryBanner />
    </>
  );
}
