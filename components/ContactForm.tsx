"use client";
import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { validateContact, type ContactFields } from "@/lib/contact";
export default function ContactForm({
  initialService,
  industry,
  configured,
}: {
  initialService: string;
  industry?: string;
  configured: boolean;
}) {
  const [values, setValues] = useState<ContactFields>({
    name: "",
    email: "",
    service: initialService,
    description: industry
      ? `I’d like to discuss a project for ${industry.toLowerCase()}. `
      : "",
    phone: "",
    budget: "",
    website: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  function field(name: keyof ContactFields) {
    return {
      id: name,
      name,
      value: values[name],
      onChange: (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
      ) => {
        setValues((v) => ({ ...v, [name]: e.target.value }));
        setSuccess(false);
        setStatus("");
      },
      "aria-invalid": !!errors[name],
      "aria-describedby": errors[name] ? `${name}-error` : undefined,
    };
  }
  async function submit(e: FormEvent) {
    e.preventDefault();
    if (pending) return;
    setStatus("");
    setSuccess(false);
    const next = validateContact(values, [
      ...services.map((s) => s.slug),
      "not-sure",
    ]);
    setErrors(next);
    if (Object.keys(next).length) {
      form.current
        ?.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)
        ?.focus();
      return;
    }
    setPending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        setErrors(result.errors ?? {});
        setStatus(
          result.message ??
            "Your enquiry could not be sent. Please try again or contact us directly.",
        );
        return;
      }
      setSuccess(true);
      setStatus(
        "Your enquiry has been sent. Thank you — we’ll use the details you shared to follow up.",
      );
    } catch {
      setStatus(
        "We couldn’t connect to send your enquiry. Your details are still here. Please try again or contact us directly.",
      );
    } finally {
      setPending(false);
    }
  }
  const error = (name: string) =>
    errors[name] && (
      <span id={`${name}-error`} className="field-error">
        {errors[name]}
      </span>
    );
  return (
    <form
      className="contact-form"
      ref={form}
      onSubmit={submit}
      noValidate
      aria-label="Project enquiry"
    >
      {!configured && (
        <p className="form-status" style={{ marginTop: 0, marginBottom: 24 }}>
          Online enquiries are not available yet. Please email or WhatsApp us
          directly.
        </p>
      )}
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input
            {...field("name")}
            autoComplete="name"
            required
            maxLength={100}
          />
          {error("name")}
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input
            {...field("email")}
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
          {error("email")}
        </div>
        <div className="field full">
          <label htmlFor="service">What can we help with?</label>
          <select {...field("service")} required>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="not-sure">Not sure yet — let’s discuss</option>
          </select>
          {error("service")}
        </div>
        <div className="field full">
          <label htmlFor="description">Tell us about your project</label>
          <textarea
            {...field("description")}
            rows={5}
            required
            minLength={10}
            maxLength={5000}
            placeholder="What does your business do, and what would you like to improve?"
          />
          {error("description")}
        </div>
        <div className="field">
          <label htmlFor="phone">
            Phone <span>(optional)</span>
          </label>
          <input
            {...field("phone")}
            type="tel"
            autoComplete="tel"
            maxLength={40}
          />
          {error("phone")}
        </div>
        <div className="field">
          <label htmlFor="budget">
            Budget range <span>(optional)</span>
          </label>
          <input
            {...field("budget")}
            maxLength={100}
            placeholder="Include your currency"
          />
          {error("budget")}
        </div>
        <div className="hidden-trap" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input {...field("website")} tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <p className="form-note">
        We use these details to respond to your enquiry. Please avoid sharing
        passwords or sensitive personal information. Read our{" "}
        <Link href="/privacy">privacy notice</Link>.
      </p>
      <button className="button" type="submit" disabled={pending || success}>
        {pending
          ? "Sending…"
          : success
            ? "Enquiry sent"
            : "Send Project Enquiry"}
        <ArrowUpRight size={18} />
      </button>
      <div role="status" aria-live="polite">
        {status && (
          <p className={`form-status${success ? " success" : ""}`}>{status}</p>
        )}
      </div>
      <noscript>
        <p>
          Please enable JavaScript to use this form, or email
          hello@rebadigitalsolutions.com.
        </p>
      </noscript>
    </form>
  );
}
