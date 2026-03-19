"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Cherry n Bean",
    url: "https://www.cherrynbean.com/",
    description:
      "Homestay blending traditional and modern architecture nestled amidst lush coffee plantations.",
  },
  {
    name: "Sansthita",
    url: "https://www.sansthita.org/",
    description:
      "Non-profit organization website designed with clarity, accessibility, and user-friendly navigation.",
  },
  {
    name: "Pritam - Personal Portfolio",
    url: "https://www.impritam.com/",
    description:
      "Personal portfolio website showcasing projects, technical blogs, and developer experience.",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800"
    >
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold">
            Our <span className="text-indigo-400">Work</span>
          </h2>
          <p className="text-zinc-400 mt-3">
            Websites we’ve designed and developed
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <FadeIn key={project.name}>
            <motion.div
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group h-[380px] border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950 hover:border-zinc-600 transition flex flex-col"
            >
              {/* Browser Bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>

                <span className="text-xs text-zinc-400 ml-3 truncate">
                  {project.url.replace("https://", "")}
                </span>
              </div>

              {/* Website Screenshot */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={`https://image.thum.io/get/width/900/${project.url}`}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>

                <p className="text-zinc-400 text-sm mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  className="inline-block text-sm font-medium text-zinc-300 hover:text-white transition"
                >
                  Visit Website →
                </a>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      {/* CTA */}
      <FadeIn>
        <div className="mt-16 flex flex-col items-center">
          <a
            href="https://demo.rebadigitalsolutions.com"
            target="_blank"
            className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:opacity-90 transition"
          >
            View More Works
          </a>

          <p className="text-zinc-400 text-sm text-center mt-6 max-w-xl">
            We are currently working on several new projects. More case studies
            and client work will be added here soon.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
