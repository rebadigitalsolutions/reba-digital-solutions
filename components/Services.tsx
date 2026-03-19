"use client";

import FadeIn from "./FadeIn";
import {
  Star,
  Globe,
  TrendingUp,
  ShieldCheck,
  FileText,
  Users,
  MousePointerClick,
  Search,
} from "lucide-react";

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
  const services = [
    {
      title: "Website Design",
      icon: Globe,
      desc: "Responsive, SEO-friendly websites designed to attract visitors and convert them into real customers with integrated booking systems.",
    },
    {
      title: "Conversion Management",
      icon: TrendingUp,
      desc: "Turn leads into paying customers through structured follow-ups, automation, and optimized conversion strategies.",
    },
    {
      title: "Online Reputation Management",
      icon: ShieldCheck,
      desc: "Build trust and credibility by managing customer reviews and strengthening your brand reputation online.",
    },
    {
      title: "Data Analytics",
      icon: FileText,
      desc: "Transform business data into clear insights with powerful and easy-to-understand Power BI dashboards and Excel Documents.",
    },
    {
      title: "Social Media Marketing",
      icon: Users,
      desc: "Engaging, educational, and platform-specific posts designed to grow your audience and brand presence.",
    },
    {
      title: "PPC Advertising",
      icon: MousePointerClick,
      desc: "Data-driven pay-per-click campaigns that help businesses reach high-intent customers and generate leads.",
    },
    {
      title: "SEO Optimization",
      icon: Search,
      desc: "Customized SEO strategies that increase rankings, improve visibility, and drive consistent organic traffic.",
    },
    {
      title: "Meta Ads",
      icon: TrendingUp,
      desc: "Targeted Meta advertising campaigns designed to reach the right audience and generate leads consistently.",
    },
  ];

  return (
    <section id="services" className="relative py-24 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold">
              What We Do{" "}
              <span className="text-indigo-400 font-semibold">Best</span>
            </h2>
            <p className="text-zinc-400 mt-3">
              Digital solutions designed to grow your business, attract
              customers, and build a strong online presence.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeIn key={index}>
                <div className="h-[300px] p-8 rounded-xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 flex flex-col">
                  <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-lg bg-zinc-900">
                    <Icon size={28} className="text-indigo-400" />
                  </div>

                  <h3 className="text-lg font-semibold">{service.title}</h3>

                  <Stars />

                  <p className="text-zinc-400 text-sm flex-1">{service.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
