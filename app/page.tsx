import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* NAVBAR */}
      <header className="w-full border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold tracking-wide">
            Reba Digital Solutions
          </h1>

          <nav className="hidden md:flex gap-6 text-sm text-zinc-400">
            <Link href="#services">Services</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Automate Your Business.
            <br />
            Build Your Digital Presence.
          </h2>

          <p className="mt-6 text-zinc-400 text-lg">
            We help businesses automate operations, build powerful web
            applications, and unlock insights through data analytics.
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
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800"
      >
        <h3 className="text-2xl font-semibold mb-12">Services</h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-950">
            <h4 className="text-lg font-semibold mb-2">Business Automation</h4>
            <p className="text-zinc-400 text-sm">
              Automate customer interactions and workflows using WhatsApp, AI
              assistants, and smart integrations.
            </p>
          </div>

          <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-950">
            <h4 className="text-lg font-semibold mb-2">Web Development</h4>
            <p className="text-zinc-400 text-sm">
              High-performance modern websites and web applications built with
              the latest technologies.
            </p>
          </div>

          <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-950">
            <h4 className="text-lg font-semibold mb-2">Data Analytics</h4>
            <p className="text-zinc-400 text-sm">
              Transform raw data into insights with dashboards, reports, and
              advanced analytics solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800"
      >
        <div className="max-w-2xl">
          <h3 className="text-3xl font-semibold">
            Let’s build something great.
          </h3>

          <p className="mt-4 text-zinc-400">
            If you're looking to automate your business, build a modern website,
            or leverage your data, let's talk.
          </p>

          <a
            href="mailto:contact@rebadigital.com"
            className="inline-block mt-8 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} Reba Digital Solutions
        </div>
      </footer>
    </div>
  );
}
