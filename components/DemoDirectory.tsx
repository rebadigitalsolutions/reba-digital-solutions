"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, PanelsTopLeft } from "lucide-react";
import { industries } from "@/lib/industries";
import { getPublishedDemos, type Demo } from "@/lib/demos";
export function DemoCard({ demo }: { demo: Demo }) {
  return (
    <article className="demo-card">
      <Image
        src={demo.thumbnail}
        alt={`${demo.title} concept website preview`}
        width={1000}
        height={700}
        sizes="(max-width: 700px) 90vw, 30vw"
      />
      <div>
        <span className="tag">
          {industries.find((i) => i.slug === demo.industry)?.title}
        </span>
        <p className="tag">Concept website · Fictional business</p>
        <h3>{demo.title}</h3>
        <p>{demo.description}</p>
        <a
          className="text-link"
          href={demo.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Demo <ArrowUpRight size={18} />
        </a>
      </div>
    </article>
  );
}
export default function DemoDirectory({
  entries,
  compact = false,
}: {
  entries: Demo[];
  compact?: boolean;
}) {
  const [selected, setSelected] = useState("all");
  const live = getPublishedDemos(entries);
  const filters = industries.filter((i) =>
    live.some((d) => d.industry === i.slug),
  );
  const visible = live.filter(
    (d) => selected === "all" || d.industry === selected,
  );
  if (!live.length)
    return (
      <div className="demo-empty">
        <span className="empty-icon">
          <PanelsTopLeft size={34} strokeWidth={1.4} />
        </span>
        <p className="eyebrow">A LITTLE PREVIEW OF WHAT’S NEXT</p>
        <h2>Industry website demos are on the way.</h2>
        <p>
          Explore our client work in the meantime, or tell us what you have in
          mind for your own website.
        </p>
        <Link className="button" href="/contact?service=websites">
          Discuss Your Website <ArrowUpRight size={18} />
        </Link>
        <Link className="text-link" href="/work">
          Explore Client Work <ArrowUpRight size={16} />
        </Link>
      </div>
    );
  return (
    <div>
      {!compact && (
        <div className="filters" aria-label="Filter demos by industry">
          <button
            aria-pressed={selected === "all"}
            onClick={() => setSelected("all")}
          >
            All industries
          </button>
          {filters.map((i) => (
            <button
              key={i.slug}
              aria-pressed={selected === i.slug}
              onClick={() => setSelected(i.slug)}
            >
              {i.title}
            </button>
          ))}
        </div>
      )}
      <p className="small" role="status">
        {visible.length} {visible.length === 1 ? "demo" : "demos"}
      </p>
      <div className="demo-grid">
        {(compact ? visible.slice(0, 3) : visible).map((d) => (
          <DemoCard key={d.url} demo={d} />
        ))}
      </div>
      {compact && (
        <Link className="text-link spaced-link" href="/demos">
          Explore Website Demos <ArrowUpRight size={18} />
        </Link>
      )}
    </div>
  );
}
