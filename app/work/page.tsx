import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, WorkCards, EnquiryBanner } from "@/components/Sections";
export const metadata = {
  title: "Client Work",
  description:
    "Explore Reba Digital Solutions’ existing client work, including websites, backend systems, mobile app work and admin panels.",
  alternates: { canonical: "/work" },
};
export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="CLIENT WORK"
        title="Work you can see for yourself."
        description="A selection from our existing client work. Real projects, with their context and our contribution clearly explained."
      />
      <div className="container inner-section">
        <WorkCards details />
        <div className="portfolio-extra">
          <div>
            <p className="eyebrow">PERSONAL PORTFOLIO PROJECT</p>
            <h2>Pritam — Personal Portfolio</h2>
            <p>
              A personal website showcasing projects, technical blogs and
              developer experience. Included in our existing portfolio;
              presented separately from client work.
            </p>
          </div>
          <a
            className="text-link"
            href="https://www.impritam.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Portfolio <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="portfolio-extra">
          <div>
            <h2>Looking for industry website demos?</h2>
            <p>
              Our demo directory is a separate home for future concept websites.
              Concepts will always be labelled as fictional businesses.
            </p>
          </div>
          <Link className="text-link" href="/demos">
            Website Demos <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
      <EnquiryBanner />
    </>
  );
}
