import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  PageIntro,
  WorkCards,
  EnquiryBanner,
  workFootnote,
} from "@/components/Sections";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Client Work",
  description:
    "Client work from Reba Digital Solutions: a custom jewellery ERP app, a listings platform with admin panel, mobile app and backend work, and websites.",
  path: "/work",
});
export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="CLIENT WORK"
        title="Work you can see for yourself."
        description="Real clients, real projects: ERP, apps, platforms and websites, with what we built for each."
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
            <p className="eyebrow">OUR PRODUCTS</p>
            <h2>HelloChamber, our AI receptionist for doctors</h2>
            <p>
              Our own product, not client work. It answers a chamber’s calls,
              books serials and sends WhatsApp confirmations.
            </p>
          </div>
          <Link className="text-link" href="/hellochamber">
            See HelloChamber <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="portfolio-extra">
          <div>
            <h2>Want to hear an AI agent, or see a concept website?</h2>
            <p>
              Our demos page has a live AI receptionist you can call, and
              concept websites labelled as fictional businesses.
            </p>
          </div>
          <Link className="text-link" href="/demos">
            Live demos <ArrowUpRight size={18} />
          </Link>
        </div>
        <p className="small spaced-link">{workFootnote}</p>
      </div>
      <EnquiryBanner />
    </>
  );
}
