"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Our Work", "/work"],
  ["Demos", "/demos"],
  ["About", "/about"],
  ["Contact", "/contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <div className="container nav-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Reba Digital Solutions home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">
            r<span>↗</span>
          </span>
          <span className="brand-name">
            reba<span>DIGITAL SOLUTIONS</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map(([name, url]) => (
            <Link
              key={url}
              href={url}
              aria-current={path.startsWith(url) ? "page" : undefined}
            >
              {name}
            </Link>
          ))}
        </nav>
        <Link className="button nav-cta" href="/contact">
          Discuss Your Project <ArrowUpRight size={16} />
        </Link>
        <button
          ref={trigger}
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="mobile-nav"
        hidden={!open}
      >
        {links.map(([name, url]) => (
          <Link
            key={url}
            href={url}
            aria-current={path.startsWith(url) ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {name}
            <ArrowUpRight size={17} />
          </Link>
        ))}
        <Link href="/contact" className="button" onClick={() => setOpen(false)}>
          Discuss Your Project <ArrowUpRight size={18} />
        </Link>
      </nav>
    </header>
  );
}
