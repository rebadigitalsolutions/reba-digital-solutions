import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-zinc-800 bg-black/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Reba Digital
        </Link>

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
      </div>
    </header>
  );
}
