import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { business } from "@/lib/business";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand">
            <span className="brand-mark">
              r<span>↗</span>
            </span>
            <span className="brand-name">
              reba<span>DIGITAL SOLUTIONS</span>
            </span>
          </Link>
          <p>
            Digital foundations.
            <br />
            Real business possibilities.
          </p>
          <p className="small">
            Kolkata, India.
            <br />
            Working with businesses near and far.
          </p>
        </div>
        <div>
          <h2>What we do</h2>
          <Link href="/services#build">Build your presence</Link>
          <Link href="/services#grow">Grow your visibility</Link>
          <Link href="/services#automate">Automate your operations</Link>
          <Link href="/industries">Industries we serve</Link>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/work">Client Work</Link>
          <Link href="/demos">Website Demos</Link>
          <Link href="/about">About Reba</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h2>Let’s connect</h2>
          {business.emails.map((email) => (
            <a key={email} href={`mailto:${email}`} className="footer-email">
              {email}
            </a>
          ))}
          <a href="tel:+918282859551">+91 82828 59551</a>
          <a
            href="https://wa.me/918282859551"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp <ArrowUpRight size={14} />
          </a>
          <div className="social-links">
            <a
              href="https://www.instagram.com/rebadigitalsolutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579534472049"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook ↗
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Reba Digital Solutions</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms of Use</Link>
        </div>
        <span>Thoughtfully built. Ready for what’s next.</span>
      </div>
    </footer>
  );
}
