import { PageIntro, Process, EnquiryBanner } from "@/components/Sections";
import { badges } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "About Reba",
  description:
    "Reba Digital Solutions is a Kolkata software company building custom software, mobile apps and AI agents for businesses across India. Founded by Pritam Das.",
  path: "/about",
});
export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT REBA DIGITAL SOLUTIONS"
        title="Software and AI with a business purpose."
        description="We build custom software, mobile apps, websites and AI agents that answer calls and messages, so businesses can serve customers better and cut the admin."
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
              Your software, your AI agents and your website should support the
              same goals: help customers reach you and help your team take the
              next step.
            </p>
            <p>
              We work with businesses in India and internationally. A project
              starts by understanding how you work today, what your customers
              need and which improvements are worth making first.
            </p>
          </div>
        </div>
        <section className="founder" aria-labelledby="founder-heading">
          {/* FILL: founder photo (public/about/pritam-das.webp) and two lines
              on background, from Pritam. */}
          <div>
            <p className="eyebrow">FOUNDER</p>
            <h2 id="founder-heading">Pritam Das</h2>
          </div>
          <div>
            <p>
              Pritam founded Reba Digital Solutions. Today Reba builds custom
              software and ERP, mobile apps and AI agents, including
              HelloChamber, our AI receptionist for doctors.
            </p>
            <ul className="badge-list" aria-label="Business credentials">
              {badges.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </section>
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
              "We document what you need to run your software, agents and website, and agree any ongoing support separately.",
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
