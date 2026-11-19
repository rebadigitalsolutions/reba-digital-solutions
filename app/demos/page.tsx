import { PhoneCall } from "lucide-react";
import { PageIntro } from "@/components/Sections";
import DemoDirectory from "@/components/DemoDirectory";
import { publishedDemos } from "@/lib/demos";
import { clinicvoice } from "@/lib/clinicvoice";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Live demos",
  description:
    "Call our AI receptionist on a live demo line, and explore concept industry websites from Reba Digital Solutions, labelled as fictional businesses.",
  path: "/demos",
});
export default function DemosPage() {
  return (
    <>
      <PageIntro
        eyebrow="LIVE DEMOS"
        title="Hear our AI agents for yourself."
        description="Call our AI receptionist and book a serial yourself. Below, concept websites show what a useful online experience can look like."
      />
      <section className="container" aria-labelledby="ai-demos">
        <h2 id="ai-demos" className="industry-group-title">
          AI demos
        </h2>
        <div className="hc-try">
          <div>
            <p className="eyebrow">CALL OUR AI RECEPTIONIST</p>
            <h2>
              Call{" "}
              <a href={`tel:${clinicvoice.demoPhone}`}>
                {clinicvoice.demoDisplayPhone}
              </a>
            </h2>
            <p className="small">
              {clinicvoice.name}, our AI receptionist for doctors, answers in
              Bengali, Hindi or English for a demo clinic. Try booking a
              serial.
            </p>
          </div>
          <a
            className="button button-light"
            href={`tel:${clinicvoice.demoPhone}`}
          >
            <PhoneCall size={18} /> Call the demo line
          </a>
        </div>
        {/* FILL: "Try our WhatsApp agent" once the WhatsApp demo is public,
            and short call recordings in Bengali and Hindi. */}
      </section>
      <section
        className="container inner-section"
        aria-label="Website demo directory"
      >
        <h2 className="industry-group-title">Website concepts</h2>
        <DemoDirectory entries={publishedDemos} />
      </section>
    </>
  );
}
