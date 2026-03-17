"use client";

import FadeIn from "./FadeIn";

const automations = [
  {
    title: "Dental Clinic Automation",
    description:
      "WhatsApp AI receptionist that answers patient queries, books appointments, and syncs with Google Calendar.",
  },
  {
    title: "Salon Booking Automation",
    description:
      "Customers book appointments through WhatsApp while the system manages scheduling and reminders.",
  },
  {
    title: "School Inquiry Automation",
    description:
      "AI chatbot answers admission questions, collects parent details, and stores leads automatically.",
  },
  {
    title: "Hospital Appointment System",
    description:
      "Automated patient appointment scheduling with reminders and doctor availability tracking.",
  },
];

export default function AutomationShowcase() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold">Automation Solutions</h2>

          <p className="text-zinc-400 mt-3">
            Example automation systems we can build for businesses
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8">
        {automations.map((item) => (
          <FadeIn key={item.title}>
            <div className="p-8 border border-zinc-800 rounded-xl bg-zinc-950 hover:border-zinc-600 transition flex flex-col">
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

              <p className="text-zinc-400 text-sm flex-grow">
                {item.description}
              </p>

              <a
                href={`https://wa.me/918282859551?text=Hi%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                  item.title,
                )}%20demo`}
                target="_blank"
                className="mt-6 inline-block text-center py-3 px-4 rounded-lg bg-green-500 text-black font-medium hover:bg-green-400 transition"
              >
                Get Demo on WhatsApp
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
