/* eslint-disable @typescript-eslint/no-require-imports -- This .cjs test harness intentionally compiles and loads CommonJS modules. */
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");

// Compile the real TypeScript modules without adding a test runtime dependency.
const root = path.resolve(__dirname, "..");
require.extensions[".ts"] = (mod, filename) => {
  const source = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  mod._compile(source, filename);
};
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function (request, parent, ...rest) {
  return originalResolve.call(
    this,
    request.startsWith("@/") ? path.join(root, request.slice(2)) : request,
    parent,
    ...rest,
  );
};
const { getPublishedDemos, demos } = require("../lib/demos.ts");
const { industries } = require("../lib/industries.ts");
const { services } = require("../lib/services.ts");
const { validateContact } = require("../lib/contact.ts");

test("published demo catalogue includes the dental concept demo; all 15 industries are supported", () => {
  assert.equal(demos.length, 1);
  assert.deepEqual(getPublishedDemos(demos), demos);
  assert.equal(demos[0].industry, "dentists");
  assert.equal(demos[0].status, "published");
  assert.ok(fs.existsSync(path.join(root, "public", demos[0].thumbnail)));
  assert.equal(industries.length, 15);
  assert.equal(new Set(industries.map((i) => i.slug)).size, 15);
  for (const i of industries)
    for (const slug of i.services)
      assert.ok(services.some((s) => s.slug === slug));
});
test("publication gate excludes drafts, incomplete entries, unknown industries and unsafe links", () => {
  const fixture = {
    title: "Test fixture only",
    industry: "clinics",
    thumbnail: "/demos/test.webp",
    description: "Test fixture, never published in the site.",
    url: "https://example.com/concept",
    status: "published",
  };
  assert.deepEqual(getPublishedDemos([fixture]), [fixture]);
  for (const change of [
    { status: "draft" },
    { title: "" },
    { description: "" },
    { thumbnail: "" },
    { industry: "unknown" },
    { url: "javascript:alert(1)" },
    { url: "//example.com" },
    { url: "https://" },
    { url: "https://user:password@example.com" },
    { url: "/\\example.com" },
  ]) {
    assert.deepEqual(getPublishedDemos([{ ...fixture, ...change }]), []);
  }
});
test("contact validation accepts optional phone and budget and rejects invalid input", () => {
  const fields = {
    name: "Test person",
    email: "test@example.com",
    service: "websites",
    description: "A website enquiry for testing.",
    phone: "",
    budget: "",
    website: "",
  };
  assert.deepEqual(validateContact(fields, ["websites"]), {});
  assert.ok(validateContact({ ...fields, email: "bad" }, ["websites"]).email);
  assert.ok(
    validateContact({ ...fields, description: "short" }, ["websites"])
      .description,
  );
  assert.ok(
    validateContact({ ...fields, service: "unknown" }, ["websites"]).service,
  );
  assert.ok(
    validateContact({ ...fields, name: "a".repeat(101) }, ["websites"]).name,
  );
});
test("contact endpoint reports success only after provider acceptance; rejects bad requests", async () => {
  const originalLoad = Module._load;
  let providerCalls = 0;
  let providerOutcome = { data: { id: "mock-accepted" }, error: null };
  Module._load = function (request, ...args) {
    if (request === "resend")
      return {
        Resend: class {
          emails = {
            send: async () => {
              providerCalls++;
              return providerOutcome;
            },
          };
        },
      };
    return originalLoad.call(this, request, ...args);
  };
  const { POST } = require("../app/api/contact/route.ts");
  Module._load = originalLoad;
  const savedKey = process.env.RESEND_API_KEY;
  const savedFrom = process.env.CONTACT_FROM_EMAIL;
  const values = {
    name: "Test person",
    email: "test@example.com",
    service: "websites",
    description: "This is an isolated test, not a real submission.",
    phone: "",
    budget: "",
    website: "",
  };
  const request = (data = values, origin = "http://localhost:3000") =>
    new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json", origin },
      body: JSON.stringify(data),
    });
  try {
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_FROM_EMAIL;
    const missing = await POST(request());
    assert.equal(missing.status, 503);
    assert.notEqual((await missing.json()).success, true);
    assert.equal(providerCalls, 0);
    const normalisedHost = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        origin: "http://127.0.0.1:3000",
        host: "127.0.0.1:3000",
      },
      body: JSON.stringify(values),
    });
    assert.equal(
      (await POST(normalisedHost)).status,
      503,
      "same-origin form still works when Next normalises its internal hostname",
    );
    assert.equal(
      (await POST(request({ ...values, email: "wrong" }))).status,
      422,
    );
    assert.equal((await POST(request({ ...values, name: 12 }))).status, 400);
    assert.equal(
      (await POST(request({ ...values, website: "spam" }))).status,
      400,
    );
    assert.equal(
      (await POST(request(values, "https://unrelated.example"))).status,
      403,
    );
    assert.equal(
      (
        await POST(
          new Request("http://localhost:3000/api/contact", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: "{broken",
          }),
        )
      ).status,
      400,
    );
    assert.equal(
      (await POST(request({ ...values, description: "x".repeat(15000) })))
        .status,
      413,
    );
    assert.equal(providerCalls, 0);
    process.env.RESEND_API_KEY = "mock-key";
    process.env.CONTACT_FROM_EMAIL = "mock@example.com";
    const accepted = await POST(request());
    assert.equal(accepted.status, 200);
    assert.equal((await accepted.json()).success, true);
    providerOutcome = {
      data: null,
      error: { message: "private provider error" },
    };
    const rejected = await POST(request());
    assert.equal(rejected.status, 502);
    const response = await rejected.json();
    assert.notEqual(response.success, true);
    assert.ok(!response.message.includes("private provider error"));
    providerOutcome = { data: {}, error: null };
    assert.equal((await POST(request())).status, 502);
    assert.equal(providerCalls, 3);
  } finally {
    if (savedKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = savedKey;
    if (savedFrom === undefined) delete process.env.CONTACT_FROM_EMAIL;
    else process.env.CONTACT_FROM_EMAIL = savedFrom;
  }
});
