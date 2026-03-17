"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 relative rounded-full overflow-hidden border border-zinc-700">
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

          <p className="text-sm text-zinc-400 leading-relaxed">
            Reba Digital Solutions helps businesses automate operations, build
            modern web applications, and unlock insights through data-driven
            systems.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>

          <ul className="space-y-3 text-sm text-zinc-400">
            <li>
              <Link href="#automation" className="hover:text-white transition">
                Business Automation
              </Link>
            </li>

            <li>
              <Link href="#services" className="hover:text-white transition">
                Web Development
              </Link>
            </li>

            <li>
              <Link href="#services" className="hover:text-white transition">
                Data Analytics
              </Link>
            </li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h4 className="font-semibold mb-4">Industries</h4>

          <ul className="space-y-3 text-sm text-zinc-400">
            <li>Dental Clinics</li>
            <li>Salons</li>
            <li>Schools</li>
            <li>Hospitals</li>
            <li>Local Businesses</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>

          <div className="space-y-4 text-sm text-zinc-400">
            <div>
              <p className="text-zinc-300 font-medium">Address</p>
              <p>
                City of Joy Apartments,
                <br />
                Rajarhat Chowmatha,
                <br />
                Kolkata, West Bengal
              </p>
            </div>

            <div>
              <p className="text-zinc-300 font-medium">Phone</p>

              <a
                href="https://wa.me/918282859551"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                +91 82828 59551 (Company)
              </a>

              <a
                href="https://wa.me/916291616198"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                +91 62916 16198 (Owner)
              </a>
            </div>

            <div>
              <p className="text-zinc-300 font-medium">Email</p>

              <a
                href="mailto:rebadigitalsolutions@gmail.com"
                className="block hover:text-white"
              >
                rebadigitalsolutions@gmail.com (Company)
              </a>

              <a
                href="mailto:pritam.aber@gmail.com"
                className="block hover:text-white"
              >
                pritam.aber@gmail.com (Owner)
              </a>
            </div>

            <div>
              <p className="text-zinc-300 font-medium">Udyam Registration</p>
              <p>UDYAM-WB-14-0117164</p>
            </div>

            <a
              href="https://wa.me/918282859551"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-5 py-3 rounded-lg bg-green-500 text-black text-sm font-medium hover:bg-green-400 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <span>
            © {new Date().getFullYear()} Reba Digital Solutions. All rights
            reserved.
          </span>

          <div className="flex gap-6 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
