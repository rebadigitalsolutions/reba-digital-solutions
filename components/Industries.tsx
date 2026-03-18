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
    name: "Real Estate",
    icon: Building2,
    desc: "Automated property inquiries, lead qualification, and WhatsApp follow-ups for buyers.",
  },
  {
    name: "Clinics",
    icon: Stethoscope,
    desc: "Automated appointment booking, patient reminders, and WhatsApp support.",
  },
  {
    name: "Hospitals",
    icon: Building2,
    desc: "Smart patient scheduling, department routing, and automated notifications.",
  },
  {
    name: "Salons & Spas",
    icon: Scissors,
    desc: "Online appointment booking, reminders, and automated customer engagement.",
  },
  {
    name: "Restaurants",
    icon: Utensils,
    desc: "Table reservations, order inquiries, and automated customer communication.",
  },
  {
    name: "Hotels & Guesthouses",
    icon: Building2,
    desc: "Room booking inquiries, guest support, and automated WhatsApp confirmations.",
  },
  {
    name: "Education Institutes",
    icon: GraduationCap,
    desc: "Admission inquiries, course information, and automated parent communication.",
  },
  {
    name: "Local Businesses",
    icon: Store,
    desc: "Lead generation, website automation, and customer support systems.",
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
