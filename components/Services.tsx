"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";

export default function Services() {
  return (
    <section
      id="services"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800"
    >
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold">Services</h2>
          <p className="text-zinc-400 mt-3">
            Solutions designed to help your business grow faster
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card */}
        <FadeIn>
          <div className="group relative h-full p-8 rounded-xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600">
            {/* Glow */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-transparent blur-xl"></div>

            <div className="relative flex flex-col h-full">
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20">
                <Image
                  src="/services/automation.png"
                  alt="Business Automation"
                  width={40}
                  height={40}
                />
              </div>

              <h3 className="text-lg font-semibold mb-3">
                Business Automation
              </h3>

              <p className="text-zinc-400 text-sm flex-grow">
                Automate workflows and customer communication using WhatsApp
                integrations, AI agents, and smart business systems.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Card */}
        <FadeIn>
          <div className="group relative h-full p-8 rounded-xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600">
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-transparent blur-xl"></div>

            <div className="relative flex flex-col h-full">
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20">
                <Image
                  src="/services/webdev.png"
                  alt="Web Development"
                  width={40}
                  height={40}
                />
              </div>

              <h3 className="text-lg font-semibold mb-3">Web Development</h3>

              <p className="text-zinc-400 text-sm flex-grow">
                Modern high-performance websites and applications built with the
                latest technologies for speed and scalability.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Card */}
        <FadeIn>
          <div className="group relative h-full p-8 rounded-xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600">
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-transparent blur-xl"></div>

            <div className="relative flex flex-col h-full">
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20">
                <Image
                  src="/services/analytics.png"
                  alt="Data Analytics"
                  width={40}
                  height={40}
                />
              </div>

              <h3 className="text-lg font-semibold mb-3">Data Analytics</h3>

              <p className="text-zinc-400 text-sm flex-grow">
                Transform business data into insights with dashboards, reporting
                systems, and advanced analytics.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
