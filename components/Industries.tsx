"use client";

import FadeIn from "./FadeIn";
import {
  Stethoscope,
  Scissors,
  GraduationCap,
  Building2,
  Utensils,
  Store,
} from "lucide-react";

const industries = [
  {
    name: "Dental Clinics",
    icon: Stethoscope,
    desc: "Automated appointment booking, reminders, and WhatsApp patient support.",
  },
  {
    name: "Salons",
    icon: Scissors,
    desc: "Online booking systems and automated customer engagement workflows.",
  },
  {
    name: "Schools",
    icon: GraduationCap,
    desc: "Admission inquiries, automated notifications, and parent communication systems.",
  },
  {
    name: "Hospitals",
    icon: Building2,
    desc: "Smart patient scheduling, WhatsApp notifications, and workflow automation.",
  },
  {
    name: "Restaurants",
    icon: Utensils,
    desc: "Online menu, table reservations, and automated customer communication.",
  },
  {
    name: "Local Businesses",
    icon: Store,
    desc: "Business websites, lead automation, and customer engagement systems.",
  },
];

export default function Industries() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold">
            Solutions for Every Industry
          </h2>

          <p className="text-zinc-400 mt-3">
            Automation, websites, and digital systems designed for modern
            businesses
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {industries.map((industry) => {
          const Icon = industry.icon;

          return (
            <FadeIn key={industry.name}>
              <div className="p-8 border border-zinc-800 rounded-xl bg-zinc-950 hover:border-zinc-600 transition h-full">
                <Icon size={28} className="mb-4 text-zinc-300" />

                <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>

                <p className="text-sm text-zinc-400">{industry.desc}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
