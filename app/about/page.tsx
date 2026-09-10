import { PageIntro, Process, EnquiryBanner } from "@/components/Sections";
export const metadata = {
  title: "About Reba",
  description:
    "A Kolkata-based digital services business helping companies in India and beyond with websites, marketing and practical business systems.",
  alternates: { canonical: "/about" },
};
export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT REBA DIGITAL SOLUTIONS"
        title="Digital work with a business purpose."
        description="We help businesses improve their digital presence, attract enquiries and streamline operations through websites, apps, software, marketing and automation."
      />
      <div className="container inner-section">
        <div className="about-statement">
          <h2>
            Based in Kolkata.
            <br />
            <span className="blue">Built around your business.</span>
          </h2>
          <div>
            <p>
              Your website and your internal systems should support the same
              goals: help customers understand you and help your team take the
              next step.
            </p>
            <p>
              We work with businesses in India and internationally. A project
              starts by understanding how you work today, what your customers
              need and which improvements are worth making first.
            </p>
          </div>
        </div>
        <div className="about-values">
          {[
            [
              "Clear expectations",
              "We discuss deliverables, inputs, costs and review points before implementation.",
            ],
            [
              "Useful decisions",
              "We choose design and technology around the task, the people using it and the maintenance it needs.",
            ],
            [
              "A practical handover",
              "We document what you need to run your website and agree any ongoing support separately.",
            ],
          ].map(([title, copy]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </div>
      <section className="section process-section">
        <div className="container">
          <p className="eyebrow">HOW WE WORK TOGETHER</p>
          <h2>Clarity at every stage.</h2>
          <Process />
        </div>
      </section>
      <EnquiryBanner />
    </>
  );
}
