import { PageIntro, IndustryLinks, EnquiryBanner } from "@/components/Sections";
export const metadata = {
  title: "Industries",
  description:
    "Digital services for 15 business sectors, from property and healthcare to hospitality, retail and B2B suppliers.",
  alternates: { canonical: "/industries" },
};
export default function IndustriesPage() {
  return (
    <>
      <PageIntro
        eyebrow="YOUR BUSINESS, IN CONTEXT"
        title="Different journeys. Thoughtful solutions."
        description="Start with the questions your customers ask and the tasks your team handles. Explore how a website, marketing and connected systems can support your industry."
      />
      <div className="container inner-section">
        <IndustryLinks />
        <p className="small spaced-link">
          These are service approaches for each industry, not claims of
          completed projects in every sector.
        </p>
      </div>
      <EnquiryBanner />
    </>
  );
}
