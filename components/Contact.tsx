"use client";

import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800"
    >
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold">Contact Us</h2>

          <p className="text-zinc-400 mt-3">
            Let's discuss how automation can improve your business
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <FadeIn>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Address</h4>

              <p className="text-zinc-400">
                City of Joy Apartments
                <br />
                Rajarhat Chowmatha
                <br />
                Kolkata, West Bengal
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">WhatsApp Business</h4>

              <a
                href="https://wa.me/918282859551"
                target="_blank"
                className="block text-zinc-400 hover:text-white"
              >
                +91 82828 59551
              </a>

              <p className="text-xs text-zinc-500 mt-2">
                Message us directly on WhatsApp for faster response.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Contact Form */}
        <FadeIn>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-600"
            />

            <input
              type="text"
              placeholder="Phone / WhatsApp Number"
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-600"
            />

            <textarea
              placeholder="Tell us about your project"
              rows={4}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-600"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition"
            >
              Send Message
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
