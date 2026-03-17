"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-zinc-800 bg-black/70 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-zinc-700">
            <Image
              src="/Reba Digital Solution Logo Cropped.png"
              alt="Reba Digital Solutions"
              fill
              className="object-cover"
              priority
            />
          </div>

          <span className="text-lg font-semibold tracking-wide">
            Reba Digital Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm text-zinc-400">
          <Link href="#services" className="hover:text-white transition">
            Services
          </Link>

          <Link href="#about" className="hover:text-white transition">
            About
          </Link>

          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-white block"
          />

          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-[2px] bg-white block my-1"
          />

          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-white block"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-zinc-800 bg-black"
          >
            <nav className="flex flex-col px-6 py-6 gap-5 text-zinc-400">
              <Link
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition"
              >
                Services
              </Link>

              <Link
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition"
              >
                About
              </Link>

              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
