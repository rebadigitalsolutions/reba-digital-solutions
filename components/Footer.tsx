"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-16">
        {/* LEFT - BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 relative rounded-md overflow-hidden border border-zinc-700">
              <Image
                src="/Reba Digital Solution Logo Cropped.png"
                alt="Reba Digital Solutions"
                fill
                className="object-cover"
              />
            </div>

            <span className="text-lg font-semibold">
              Reba Digital Solutions
            </span>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed mb-6">
            Reba Digital Solutions helps businesses grow by combining
            automation, modern websites, and data-driven insights to improve
            visibility, capture leads, and convert them into real customers.
          </p>

          {/* Contact */}
          <div className="space-y-2 text-sm text-zinc-400 mb-6">
            <a
              href="tel:+918282859551"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Phone size={14} /> +91 82828 59551
            </a>

            <a
              href="mailto:rebadigitalsolutions@gmail.com"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Mail size={14} /> rebadigitalsolutions@gmail.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61579534472049"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 transition"
            >
              <Facebook size={16} />
            </a>

            <a
              href="https://www.instagram.com/rebadigitalsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 transition"
            >
              <Instagram size={16} />
            </a>

            <a
              href="https://wa.me/918282859551"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 transition"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>

        {/* WHAT WE DO */}
        <div>
          <h4 className="font-semibold text-lg mb-4">What We Do</h4>

          <div className="w-12 h-[2px] bg-white mb-6"></div>

          <p className="text-sm text-zinc-400 leading-relaxed">
            Website Development | Business Automation | WhatsApp Automation |
            Lead Generation Systems | Data Analytics Dashboards | SEO | Digital
            Marketing | Custom Business Software
          </p>
        </div>

        {/* WHO WE SERVE */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Who We Serve</h4>

          <div className="w-12 h-[2px] bg-white mb-6"></div>

          <p className="text-sm text-zinc-400 leading-relaxed">
            Clinics | Hospitals | Schools | Coaching Institutes | Salons |
            Restaurants | Local Businesses | Startups | Consultants | Agencies |
            Service Businesses
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <span>
            © {new Date().getFullYear()} Reba Digital Solutions. All Rights
            Reserved
          </span>

          <div className="flex gap-6 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
