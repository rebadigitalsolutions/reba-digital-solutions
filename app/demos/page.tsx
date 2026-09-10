import { PageIntro } from "@/components/Sections";
import DemoDirectory from "@/components/DemoDirectory";
import { publishedDemos } from "@/lib/demos";
export const metadata = {
  title: "Website Demos",
  description:
    "Explore concept industry website demos from Reba Digital Solutions, clearly labelled as fictional business examples.",
  alternates: { canonical: "/demos" },
};
export default function DemosPage() {
  return (
    <>
      <PageIntro
        eyebrow="WEBSITE DEMOS"
        title="A place to explore what’s possible."
        description="Industry-focused concept websites to help you picture a useful online experience for your business. Every demo represents a fictional business."
      />
      <section
        className="container inner-section"
        aria-label="Website demo directory"
      >
        <DemoDirectory entries={publishedDemos} />
      </section>
    </>
  );
}
