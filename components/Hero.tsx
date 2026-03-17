"use client";

import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32 hero-grid">
      {/* Animated glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 flex justify-center"
      >
        <div className="w-[900px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full" />
      </motion.div>

      <motion.div
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 flex justify-center"
      >
        <div className="w-[900px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full" />
      </motion.div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Automate Your Business
              <br />
              Build Your Digital Presence
            </h1>

            <p className="mt-6 text-zinc-400 text-lg">
              We help businesses automate workflows, build modern websites, and
              leverage data analytics to grow faster.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition"
              >
                Get Started
              </a>

              <a
                href="#services"
                className="px-6 py-3 border border-zinc-700 rounded-lg hover:bg-zinc-900 transition"
              >
                View Services
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
