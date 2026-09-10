import assert from "node:assert/strict";
const base = process.env.CHECK_BASE_URL || "http://127.0.0.1:3000";
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (match) => new URL(match[1]).pathname,
);
const results = [];
for (const route of urls) {
  const response = await fetch(base + route);
  const html = await response.text();
  assert.equal(response.status, 200, route);
  assert.match(html, /<title>[^<]+<\/title>/, `${route}: title`);
  assert.match(
    html,
    /name="description" content="[^"]+"/,
    `${route}: description`,
  );
  assert.ok(
    html.includes(
      `rel="canonical" href="https://rebadigitalsolutions.com${route === "/" ? "" : route}"`,
    ) ||
      html.includes(
        `rel="canonical" href="https://rebadigitalsolutions.com${route}"`,
      ),
    `${route}: canonical`,
  );
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `${route}: one main heading`,
  );
  for (const match of html.matchAll(/href="(\/[^"?#]*)/g)) {
    const href = match[1];
    if (
      !href.startsWith("/_next/") &&
      !href.startsWith("/icon") &&
      !href.startsWith("/favicon") &&
      !href.startsWith("/work/") &&
      !urls.includes(href)
    )
      throw new Error(`${route}: unlisted internal link ${href}`);
  }
  if (route === "/demos") {
    assert.match(html, /Dental Clinic Website Demo/);
    assert.match(html, /Concept website/);
    assert.match(html, /Fictional business/);
    assert.match(html, /Dentists/);
    assert.ok(html.includes('class="demo-card"'));
    assert.ok(html.includes('aria-label="Filter demos by industry"'));
  }
  if (route === "/") {
    assert.match(html, /Explore Our Services/);
    assert.match(html, /Dental Clinic Website Demo/);
    assert.ok(html.includes('class="demo-grid"'));
    for (const id of [
      "services",
      "portfolio",
      "industries",
      "about",
      "pricing",
      "contact",
    ])
      assert.ok(html.includes(`id="${id}"`));
  }
  results.push({ route, status: response.status });
}
assert.equal((await fetch(base + "/services/not-a-service")).status, 404);
assert.equal((await fetch(base + "/industries/not-an-industry")).status, 404);
assert.equal((await fetch(base + "/demos/not-published")).status, 404);
for (const asset of [
  "/work/sansthita.webp",
  "/work/cherry-n-bean.webp",
  "/work/canvasbrick.webp",
  "/work/spacevyu.webp",
  "/demos/dental-clinic-concept.svg",
  "/icon.svg",
  "/robots.txt",
])
  assert.equal((await fetch(base + asset)).status, 200, asset);
console.log(
  JSON.stringify(
    {
      routesChecked: results.length,
      checks:
        "HTTP status, titles, descriptions, canonical URLs, one H1, internal links, legacy anchors, published demo rendering, unknown-route 404s and local assets",
      results,
    },
    null,
    2,
  ),
);
