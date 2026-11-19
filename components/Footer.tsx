import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { business, badges } from "@/lib/business";
import { enabledSocialLinks } from "@/lib/social";
import { socialIconMap } from "@/components/SocialIcons";
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
            Custom software, apps
            <br />
            and AI agents that do real work.
          </p>
          <p className="small">
            Kolkata, India.
            <br />
            Working with businesses across India.
          </p>
          <ul className="badge-list" aria-label="Business credentials">
            {badges.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>What we do</h2>
          <Link href="/services#ai">AI agents</Link>
          <Link href="/services#software">Custom software & ERP</Link>
          <Link href="/services#apps">Apps & websites</Link>
          <Link href="/services#grow">Grow your visibility</Link>
          <Link href="/industries">Industries we serve</Link>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/hellochamber">HelloChamber</Link>
          <Link href="/work">Client work</Link>
          <Link href="/demos">Live demos</Link>
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
          {enabledSocialLinks.some((link) => link.id !== "whatsapp") && (
            <div className="social-links">
              {enabledSocialLinks
                .filter((link) => link.id !== "whatsapp")
                .map((link) => {
                  const Icon = socialIconMap[link.id];
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel={
                        link.id === "whatsapp"
                          ? "noopener noreferrer"
                          : "noopener noreferrer nofollow"
                      }
                      aria-label={`Reba Digital Solutions on ${link.label}`}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
            </div>
          )}
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
