"use client";

import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Soft glow background */}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex justify-center"
      >
        <div className="w-[900px] h-[500px] bg-indigo-600/10 blur-[160px] rounded-full" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 text-sm text-zinc-400">
              Business Automation • Web Development • Data Analytics
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Automation & Digital Solutions
              <br />
              for Modern Businesses
            </h1>

            {/* Description */}
            <p className="mt-6 text-zinc-400 text-lg">
              Reba Digital Solutions helps businesses automate operations using
              WhatsApp automation, data automation, Excel & Power BI dashboards,
              and custom business websites. Based in Kolkata, serving businesses
              in Newtown, Salt Lake, and across India.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/918282859551"
                target="_blank"
                className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition"
              >
                Chat on WhatsApp
              </a>

              <a
                href="#services"
                className="px-6 py-3 border border-zinc-700 rounded-lg hover:bg-zinc-900 transition"
              >
                Explore Services
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 text-sm text-zinc-500">
              WhatsApp Automation • Business Automation • Power BI Dashboards •
              Custom Websites
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
