"use client";

import FadeIn from "./FadeIn";

export default function Services() {
  return (
    <section
      id="services"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800"
    >
      <FadeIn>
        <h2 className="text-2xl font-semibold mb-12">Services</h2>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        <FadeIn>
          <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-950 hover:border-zinc-700 transition">
            <h3 className="text-lg font-semibold mb-2">Business Automation</h3>

            <p className="text-zinc-400 text-sm">
              Automate workflows and customer communication using WhatsApp
              integrations and AI assistants.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-950 hover:border-zinc-700 transition">
            <h3 className="text-lg font-semibold mb-2">Web Development</h3>

            <p className="text-zinc-400 text-sm">
              High-performance websites and applications built with modern
              technologies.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-950 hover:border-zinc-700 transition">
            <h3 className="text-lg font-semibold mb-2">Data Analytics</h3>

            <p className="text-zinc-400 text-sm">
              Turn raw data into insights using dashboards and analytics tools.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
