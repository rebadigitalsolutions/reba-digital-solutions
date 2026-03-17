"use client";

import FadeIn from "./FadeIn";

const industries = [
  "Dental Clinics",
  "Salons",
  "Schools",
  "Hospitals",
  "Restaurants",
  "Local Businesses",
];

export default function Industries() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold">Industries We Work With</h2>

          <p className="text-zinc-400 mt-3">
            Automation solutions tailored for different industries
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {industries.map((industry) => (
          <FadeIn key={industry}>
            <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-950 text-center hover:border-zinc-600 transition">
              {industry}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
