import Link from "next/link";
export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow" style={{ justifyContent: "center" }}>
        PAGE NOT FOUND
      </p>
      <h1>Let’s get you back on track.</h1>
      <p>
        This page isn’t available. Explore our services or tell us what you’re
        looking for.
      </p>
      <Link href="/services" className="button">
        Explore Our Services
      </Link>
    </section>
  );
}
