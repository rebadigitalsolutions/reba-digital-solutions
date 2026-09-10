import { PageIntro } from "@/components/Sections";
export const metadata = {
  title: "Privacy Notice",
  description:
    "How this website handles project enquiries and links to external services.",
  alternates: { canonical: "/privacy" },
};
export default function Privacy() {
  return (
    <>
      <PageIntro
        eyebrow="WEBSITE INFORMATION"
        title="Privacy notice"
        description="This notice explains the information requested through this website and how to contact us about it."
      />
      <article className="container inner-section legal-content">
        <h2>Project enquiries</h2>
        <p>
          The project form asks for your name, email address, service of
          interest and project description. Phone and budget are optional. These
          details are used to respond to your enquiry and discuss your project.
        </p>
        <h2>Sending your information</h2>
        <p>
          When online enquiries are enabled, submissions are sent through Resend
          to our business inbox. If the form reports that delivery is
          unavailable, your enquiry has not been sent. Form values are kept in
          the current page while you correct errors; this website does not save
          unfinished forms to browser storage.
        </p>
        <h2>External services</h2>
        <p>
          Email, WhatsApp, social media and portfolio links take you to external
          services with their own privacy practices. Please check those services
          before sharing sensitive information. This website does not add
          advertising trackers or analytics scripts.
        </p>
        <h2>Information to avoid sharing</h2>
        <p>
          Please do not include passwords, identity documents, medical records,
          financial account information or other sensitive personal data in a
          project enquiry.
        </p>
        <h2>Questions about your information</h2>
        <p>
          Contact{" "}
          <a href="mailto:pritam.das@rebadigitalsolutions.com">
            pritam.das@rebadigitalsolutions.com
          </a>{" "}
          to ask about an enquiry or request correction or deletion of
          information you have sent. Hosting and email providers may maintain
          operational logs under their own retention practices.
        </p>
      </article>
    </>
  );
}
