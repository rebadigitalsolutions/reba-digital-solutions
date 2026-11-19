"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
const links = [
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Our Work", "/work"],
  ["Demos", "/demos"],
  ["About", "/about"],
  ["Contact", "/contact"],
];
// Shown as a "Products" menu after Services.
const products = [
  ["ClinicVoice", "/clinicvoice", "AI receptionist for doctors"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const path = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          setProductsOpen(false);
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
          {links.map(([name, url], n) => (
            <Fragment key={url}>
              <Link
                href={url}
                aria-current={path.startsWith(url) ? "page" : undefined}
              >
                {name}
              </Link>
              {n === 0 && (
                <div
                  className="nav-menu"
                  onMouseLeave={() => setProductsOpen(false)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget))
                      setProductsOpen(false);
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={productsOpen}
                    aria-controls="products-menu"
                    data-current={
                      products.some(([, u]) => path.startsWith(u))
                        ? "true"
                        : undefined
                    }
                    onClick={() => setProductsOpen(!productsOpen)}
                    onMouseEnter={() => setProductsOpen(true)}
                  >
                    Products <ChevronDown size={14} />
                  </button>
                  <div
                    id="products-menu"
                    className="nav-menu-panel"
                    hidden={!productsOpen}
                  >
                    {products.map(([name, url, note]) => (
                      <Link
                        key={url}
                        href={url}
                        aria-current={path.startsWith(url) ? "page" : undefined}
                        onClick={() => setProductsOpen(false)}
                      >
                        <strong>{name}</strong>
                        <span>{note}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </Fragment>
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
        {links.map(([name, url], n) => (
          <Fragment key={url}>
            <Link
              href={url}
              aria-current={path.startsWith(url) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {name}
              <ArrowUpRight size={17} />
            </Link>
            {n === 0 && (
              <div className="mobile-nav-group">
                <span className="small-label">PRODUCTS</span>
                {products.map(([name, url, note]) => (
                  <Link
                    key={url}
                    href={url}
                    aria-current={path.startsWith(url) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span>
                      {name} <span className="small">· {note}</span>
                    </span>
                    <ArrowUpRight size={17} />
                  </Link>
                ))}
              </div>
            )}
          </Fragment>
        ))}
        <Link href="/contact" className="button" onClick={() => setOpen(false)}>
          Discuss Your Project <ArrowUpRight size={18} />
        </Link>
      </nav>
    </header>
  );
}
