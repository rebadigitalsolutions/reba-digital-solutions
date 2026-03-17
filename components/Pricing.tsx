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
            Transparent pricing for websites, automation, and analytics
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {/* WhatsApp Automation */}
        <FadeIn>
          <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-zinc-600 transition">
            <h3 className="text-lg font-semibold mb-2">WhatsApp Automation</h3>

            <p className="text-zinc-400 text-sm mb-6">
              Automate customer communication, appointment booking, and lead
              capture using WhatsApp.
            </p>

            <div className="mb-6">
              <div className="text-xl font-semibold">
                Setup: ₹3,000 – ₹5,000
              </div>

              <div className="text-zinc-400 text-sm">One-time setup</div>
            </div>

            <div className="mb-6">
              <div className="text-xl font-semibold">
                Monthly: ₹1,500 – ₹3,000
              </div>

              <div className="text-zinc-400 text-sm">
                Maintenance and workflow support
              </div>
            </div>

            <ul className="space-y-2 text-sm text-zinc-400 mb-8">
              <li>✔ WhatsApp chatbot setup</li>
              <li>✔ Lead capture automation</li>
              <li>✔ Appointment booking workflows</li>
              <li>✔ Google Sheets / CRM integration</li>
              <li>✔ Automation monitoring</li>
            </ul>

            <a
              href="#contact"
              className="block text-center py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition"
            >
              Get Started
            </a>
          </div>
        </FadeIn>

        {/* Website Development */}
        <FadeIn>
          <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-zinc-600 transition">
            <h3 className="text-lg font-semibold mb-2">Website Development</h3>

            <p className="text-zinc-400 text-sm mb-6">
              Custom business websites designed for performance, mobile
              experience, and conversions.
            </p>

            <div className="text-3xl font-bold mb-6">Starting ₹8,000</div>

            <ul className="space-y-2 text-sm text-zinc-400 mb-6">
              <li>✔ Custom responsive website</li>
              <li>✔ SEO-friendly structure</li>
              <li>✔ WhatsApp integration</li>
              <li>✔ Contact forms and lead capture</li>
              <li>✔ Fast hosting-ready deployment</li>
            </ul>

            <div className="text-xs text-zinc-500 mb-6 space-y-2">
              <p>• Small content updates are included for the first year.</p>

              <p>
                • Major feature additions or redesign requests may require
                additional charges.
              </p>

              <p>• Maintenance plans and AMC are available separately.</p>
            </div>

            <a
              href="#contact"
              className="block text-center py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition"
            >
              Get Started
            </a>
          </div>
        </FadeIn>

        {/* Data Analytics */}
        <FadeIn>
          <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-zinc-600 transition">
            <h3 className="text-lg font-semibold mb-2">Data Analytics</h3>

            <p className="text-zinc-400 text-sm mb-6">
              Transform business data into insights with dashboards and
              reporting systems.
            </p>

            <div className="text-3xl font-bold mb-6">₹5,000 – ₹15,000</div>

            <ul className="space-y-2 text-sm text-zinc-400 mb-6">
              <li>✔ Custom dashboards</li>
              <li>✔ Data visualization</li>
              <li>✔ Automated reports</li>
              <li>✔ Business insights</li>
              <li>✔ Google Sheets / database integration</li>
            </ul>

            <div className="text-xs text-zinc-500 mb-6">
              Pricing depends on data complexity, number of dashboards, and
              integrations required.
            </div>

            <a
              href="#contact"
              className="block text-center py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition"
            >
              Contact Us
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Custom Solutions */}
      <FadeIn>
        <div className="mt-16 text-center text-zinc-400 text-sm">
          Need something different?
          <span className="text-white">
            {" "}
            Custom automation, software, and integrations{" "}
          </span>
          are available based on your business requirements.
        </div>
      </FadeIn>
    </section>
  );
}
