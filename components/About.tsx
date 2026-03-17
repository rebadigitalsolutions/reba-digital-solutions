"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <FadeIn>
          <div className="relative w-full h-[320px] rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/about-business.jpg"
              alt="Business automation"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn>
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              About Reba Digital Solutions
            </h2>

            <p className="text-zinc-400 mb-4">
              Reba Digital Solutions helps businesses modernize their operations
              using automation, modern web applications, and data-driven
              insights.
            </p>

            <p className="text-zinc-400 mb-6">
              We specialize in building intelligent systems such as WhatsApp
              automation, appointment management tools, customer engagement
              workflows, and high-performance business websites.
            </p>

            <p className="text-zinc-400">
              Our goal is simple: help businesses save time, reduce manual work,
              and grow faster using technology.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
