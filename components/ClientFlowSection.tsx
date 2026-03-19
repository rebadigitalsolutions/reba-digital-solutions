"use client";

import FadeIn from "./FadeIn";

export default function ClientFlowSection() {
  return (
    <section className="relative py-24 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold">
              Why Businesses <strong className="text-red-400">Miss</strong>{" "}
              Potential <strong className="text-green-400">Customers</strong>
            </h2>

            <p className="text-zinc-400 mt-3 max-w-2xl mx-auto">
              Many businesses lose valuable opportunities because their online
              presence, visibility, and lead management systems are not properly
              optimized.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT CARD - PROBLEMS */}
          <FadeIn>
            <div className="p-10 rounded-xl border border-zinc-800 bg-zinc-950">
              <div className="text-sm text-zinc-400 mb-4 underline">
                Common Challenges
              </div>

              <h3 className="text-2xl font-semibold mb-6">
                Reasons Businesses{" "}
                <strong className="text-red-400">Lose</strong> Clients
              </h3>

              <ul className="space-y-5 text-zinc-400 text-sm leading-relaxed">
                <li>
                  <strong className="text-orange-400">
                    Customers can't find your business online
                  </strong>{" "}
                  – When your website or listings are not visible in search
                  results, potential customers may choose competitors instead.
                </li>

                <li>
                  <strong className="text-red-400">
                    Low Online Visibility
                  </strong>{" "}
                  – An outdated website, weak SEO, or poor digital presence
                  prevents people from discovering your business.
                </li>

                <li>
                  <strong className="text-orange-400">
                    Negative or Few Reviews
                  </strong>{" "}
                  – Lack of reviews or poor feedback reduces trust and
                  discourages customers from contacting you.
                </li>

                <li>
                  <strong className="text-red-400">
                    Customers are unaware of your services
                  </strong>{" "}
                  – Many potential clients simply do not know what solutions
                  your business offers.
                </li>

                <li>
                  <strong className="text-orange-400">
                    No proper system to manage leads
                  </strong>{" "}
                  – Without tracking inquiries and follow-ups, many
                  opportunities are missed.
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* RIGHT CARD - SOLUTIONS */}
          <FadeIn>
            <div className="p-10 rounded-xl border border-zinc-800 bg-zinc-950">
              <div className="text-sm text-zinc-400 mb-4 underline">
                Our Solution
              </div>

              <h3 className="text-2xl font-semibold mb-6">
                How We <strong className="text-green-400">Help</strong>{" "}
                Businesses Grow
              </h3>

              <ul className="space-y-5 text-zinc-400 text-sm leading-relaxed">
                <li>
                  <strong className="text-indigo-400">
                    Improve Online Visibility
                  </strong>{" "}
                  – We optimize your digital presence so customers can easily
                  discover your business.
                </li>

                <li>
                  <strong className="text-indigo-400">
                    Build Strong Online Reputation
                  </strong>{" "}
                  – Our strategies help generate positive reviews and strengthen
                  customer trust.
                </li>

                <li>
                  <strong className="text-indigo-400">
                    Run Targeted Digital Campaigns
                  </strong>{" "}
                  – Reach the right audience using strategic marketing and paid
                  advertising.
                </li>

                <li>
                  <strong className="text-indigo-400">
                    Implement Lead Tracking Systems
                  </strong>{" "}
                  – Capture inquiries, organize leads, and manage follow-ups
                  efficiently.
                </li>

                <li>
                  <strong className="text-indigo-400">
                    Convert Leads Into Real Clients
                  </strong>{" "}
                  – Our systems help businesses turn potential inquiries into
                  consistent customers.
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
