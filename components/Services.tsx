"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";
import { Star } from "lucide-react";

function Stars() {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold">Services</h2>
            <p className="text-zinc-400 mt-3">
              Solutions designed to help your business grow faster
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <FadeIn>
            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600">
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-lg bg-zinc-900">
                <Image
                  src="/services/automation.png"
                  alt="Business Automation"
                  width={40}
                  height={40}
                />
              </div>

              <h3 className="text-lg font-semibold">Business Automation</h3>

              <Stars />

              <p className="text-zinc-400 text-sm">
                Automate workflows and customer communication using WhatsApp
                integrations, AI agents, and smart business systems.
              </p>
            </div>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn>
            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600">
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-lg bg-zinc-900">
                <Image
                  src="/services/webdev.png"
                  alt="Web Development"
                  width={40}
                  height={40}
                />
              </div>

              <h3 className="text-lg font-semibold">Web Development</h3>

              <Stars />

              <p className="text-zinc-400 text-sm">
                Modern high-performance websites and applications built with the
                latest technologies for speed and scalability.
              </p>
            </div>
          </FadeIn>

          {/* Card 3 */}
          <FadeIn>
            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600">
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-lg bg-zinc-900">
                <Image
                  src="/services/analytics.png"
                  alt="Data Analytics"
                  width={40}
                  height={40}
                />
              </div>

              <h3 className="text-lg font-semibold">Data Analytics</h3>

              <Stars />

              <p className="text-zinc-400 text-sm">
                Transform business data into insights with dashboards, reporting
                systems, and advanced analytics.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
