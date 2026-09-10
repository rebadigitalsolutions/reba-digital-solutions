import { PageIntro } from "@/components/Sections";
import ContactForm from "@/components/ContactForm";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { business } from "@/lib/business";
export const metadata = {
  title: "Discuss Your Project",
  description:
    "Tell Reba Digital Solutions about your website, marketing, CRM or automation project. Contact our Kolkata-based business by form, email, phone or WhatsApp.",
  alternates: { canonical: "/contact" },
};
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; industry?: string }>;
}) {
  const query = await searchParams;
  const service = services.some((s) => s.slug === query.service)
    ? query.service
    : "";
  const industry = industries.find((i) => i.slug === query.industry)?.title;
  const configured = Boolean(
    process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL,
  );
  return (
    <>
      <PageIntro
        eyebrow="LET’S TALK ABOUT YOUR BUSINESS"
        title="Good work starts with a conversation."
        description="Tell us what you’re planning, what isn’t working, or where you’d like to go next. A few details are enough to begin."
      />
      <div className="container inner-section contact-grid">
        <div className="contact-info">
          <h2>What would you like to make better?</h2>
          <p>
            We’ll use your enquiry to understand your needs and discuss a
            suitable next step. No need to have a technical brief ready.
          </p>
          <div className="contact-channel">
            <span>EMAIL</span>
            {business.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                style={{ display: "block", paddingBlock: 3 }}
              >
                {email}
              </a>
            ))}
          </div>
          <div className="contact-channel">
            <span>PHONE</span>
            <a href="tel:+918282859551">+91 82828 59551</a>
          </div>
          <div className="contact-channel">
            <span>PREFER A MESSAGE?</span>
            <a
              className="text-link"
              href="https://wa.me/918282859551"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp ↗
            </a>
          </div>
          <address>
            City of Joy Apartments
            <br />
            Rajarhat Chowmatha
            <br />
            Kolkata, West Bengal, India
          </address>
        </div>
        <ContactForm
          key={service ?? "general"}
          initialService={service ?? ""}
          industry={industry}
          configured={configured}
        />
      </div>
    </>
  );
}
