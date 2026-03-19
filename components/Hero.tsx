"use client";

import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Soft glow background */}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div
          className="
          w-[500px] h-[300px] 
          md:w-[900px] md:h-[500px]
          bg-indigo-600/20 
          blur-[120px] md:blur-[160px]
          rounded-full
        "
        />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-3xl">
            <div className="mb-6 text-sm text-zinc-400">
              Business Automation • Lead Generation • Custom Software
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              We Help Businesses Get More{" "}
              <span className="text-indigo-400 font-semibold">Clients</span>{" "}
              Consistently
            </h1>

            <p className="mt-6 text-zinc-400 text-lg">
              <span className="text-indigo-400 font-semibold">
                Reba Digital Solutions
              </span>{" "}
              helps businesses automate customer inquiries, capture leads
              automatically, and convert them into real clients using WhatsApp
              automation, smart workflows, and modern websites. We help
              businesses collect, organize, and deliver qualified leads directly
              to you — so you never miss a potential customer.
            </p>

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
