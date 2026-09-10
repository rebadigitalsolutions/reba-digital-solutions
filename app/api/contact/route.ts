import { NextResponse } from "next/server";
import { Resend } from "resend";
import { services } from "@/lib/services";
import { validateContact, type ContactFields } from "@/lib/contact";
import { business } from "@/lib/business";
export const runtime = "nodejs";
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  // Next may normalise request.url to localhost; preserve the actual HTTP host.
  const requestUrl = new URL(request.url);
  const browserOrigin = `${requestUrl.protocol}//${request.headers.get("host") || requestUrl.host}`;
  if (origin && origin !== browserOrigin)
    return NextResponse.json(
      { message: "Please send your enquiry from this website." },
      { status: 403 },
    );
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json(
      { message: "Unsupported form format." },
      { status: 415 },
    );
  const raw = await request.text();
  if (raw.length > 14000)
    return NextResponse.json(
      { message: "Your enquiry is too long. Please shorten it and try again." },
      { status: 413 },
    );
  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      throw new Error();
  } catch {
    return NextResponse.json(
      { message: "Please check your form and try again." },
      { status: 400 },
    );
  }
  const fields = [
    "name",
    "email",
    "service",
    "description",
    "phone",
    "budget",
    "website",
  ] as const;
  if (
    fields.some((k) => parsed[k] !== undefined && typeof parsed[k] !== "string")
  )
    return NextResponse.json(
      { message: "Please check your form and try again." },
      { status: 400 },
    );
  const data = Object.fromEntries(
    fields.map((k) => [
      k,
      typeof parsed[k] === "string" ? parsed[k].trim() : "",
    ]),
  ) as ContactFields;
  if (data.website)
    return NextResponse.json(
      {
        message:
          "This enquiry could not be accepted. Please contact us directly.",
      },
      { status: 400 },
    );
  const errors = validateContact(data, [
    ...services.map((s) => s.slug),
    "not-sure",
  ]);
  if (Object.keys(errors).length)
    return NextResponse.json(
      { errors, message: "Please check the highlighted fields." },
      { status: 422 },
    );
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from)
    return NextResponse.json(
      {
        message: `Online enquiries are not configured yet. Your details have not been sent. Please email ${business.enquiryInbox} or message us on WhatsApp.`,
      },
      { status: 503 },
    );
  const service =
    services.find((s) => s.slug === data.service)?.title ?? "Not sure yet";
  try {
    const result = await new Resend(apiKey).emails.send({
      from,
      to: process.env.CONTACT_TO_EMAIL || business.enquiryInbox,
      replyTo: data.email,
      subject: `Website enquiry: ${service}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nService: ${service}\nPhone: ${data.phone || "Not provided"}\nBudget: ${data.budget || "Not provided"}\n\nProject:\n${data.description}`,
    });
    if (result.error || !result.data?.id)
      return NextResponse.json(
        {
          message:
            "The email service couldn’t accept your enquiry. Please try again or contact us directly.",
        },
        { status: 502 },
      );
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      {
        message:
          "Your enquiry could not be sent. Please try again or contact us directly.",
      },
      { status: 502 },
    );
  }
}
