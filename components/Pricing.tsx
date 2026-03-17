"use client";

import FadeIn from "./FadeIn";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800"
    >
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold">Pricing</h2>
          <p className="text-zinc-400 mt-3">
            Simple transparent pricing for growing businesses
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Starter */}
        <FadeIn>
          <div className="group relative p-8 rounded-xl border border-zinc-800 bg-zinc-950 transition hover:-translate-y-1 hover:border-zinc-600">
            <h3 className="text-lg font-semibold mb-2">Starter</h3>

            <p className="text-zinc-400 text-sm mb-6">
              Perfect for small businesses starting online
            </p>

            <div className="text-3xl font-bold mb-6">₹9,999</div>

            <ul className="space-y-3 text-sm text-zinc-400 mb-8">
              <li>✔ Business Website</li>
              <li>✔ Mobile Responsive</li>
              <li>✔ Basic SEO Setup</li>
              <li>✔ WhatsApp Integration</li>
            </ul>

            <a
              href="#contact"
              className="block text-center py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition"
            >
              Get Started
            </a>
          </div>
        </FadeIn>

        {/* Growth (Featured) */}
        <FadeIn>
          <div className="group relative p-8 rounded-xl border border-purple-600 bg-zinc-950 transition hover:-translate-y-1">
            <div className="absolute top-4 right-4 text-xs bg-purple-600 px-2 py-1 rounded">
              Popular
            </div>

            <h3 className="text-lg font-semibold mb-2">Growth</h3>

            <p className="text-zinc-400 text-sm mb-6">
              Best for businesses ready to scale
            </p>

            <div className="text-3xl font-bold mb-6">₹29,999</div>

            <ul className="space-y-3 text-sm text-zinc-400 mb-8">
              <li>✔ Custom Website</li>
              <li>✔ Business Automation</li>
              <li>✔ CRM Integration</li>
              <li>✔ Analytics Dashboard</li>
              <li>✔ SEO Optimization</li>
            </ul>

            <a
              href="#contact"
              className="block text-center py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 transition"
            >
              Get Started
            </a>
          </div>
        </FadeIn>

        {/* Enterprise */}
        <FadeIn>
          <div className="group relative p-8 rounded-xl border border-zinc-800 bg-zinc-950 transition hover:-translate-y-1 hover:border-zinc-600">
            <h3 className="text-lg font-semibold mb-2">Enterprise</h3>

            <p className="text-zinc-400 text-sm mb-6">
              Advanced solutions for large businesses
            </p>

            <div className="text-3xl font-bold mb-6">Custom</div>

            <ul className="space-y-3 text-sm text-zinc-400 mb-8">
              <li>✔ Custom Software</li>
              <li>✔ Full Business Automation</li>
              <li>✔ Data Analytics Systems</li>
              <li>✔ AI Integrations</li>
              <li>✔ Dedicated Support</li>
            </ul>

            <a
              href="#contact"
              className="block text-center py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition"
            >
              Contact Us
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
