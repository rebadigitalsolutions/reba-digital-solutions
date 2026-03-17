"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Cherry n Bean",
    url: "https://www.cherrynbean.com/",
    description:
      "Modern café website with elegant UI and fully responsive layout.",
  },
  {
    name: "Sansthita",
    url: "https://www.sansthita.org/",
    description:
      "Non-profit organization website designed for clarity and accessibility.",
  },
  {
    name: "Pritam - personal portfolio",
    url: "https://www.impritam.com/",
    description: "Personal website portfolio ",
  },
  {
    name: "Arjun Digital Solutions",
    url: "https://arjun-digital-solutions.vercel.app/",
    description:
      "Digital agency website built with a modern responsive design.",
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
          <h2 className="text-3xl font-semibold">Portfolio</h2>
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
              className="group border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950 hover:border-zinc-600 transition"
            >
              {/* Browser Top Bar */}
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
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>

                <p className="text-zinc-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  className="inline-block text-sm font-medium text-purple-400 hover:text-purple-300 transition"
                >
                  Visit Website →
                </a>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
