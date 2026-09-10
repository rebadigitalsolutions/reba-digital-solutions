import { PageIntro } from "@/components/Sections";
export const metadata = {
  title: "Website Terms of Use",
  description:
    "Website information, project scope and third-party services for Reba Digital Solutions.",
  alternates: { canonical: "/terms" },
};
export default function Terms() {
  return (
    <>
      <PageIntro
        eyebrow="WEBSITE INFORMATION"
        title="Terms of use"
        description="The website introduces our services. Project-specific terms are set out in a separate written proposal or agreement."
      />
      <article className="container inner-section legal-content">
        <h2>Service information</h2>
        <p>
          Service descriptions illustrate what a project may include.
          Deliverables, pricing, timing, ownership, support and responsibilities
          are agreed for each project. Sending an enquiry does not create a
          service agreement.
        </p>
        <h2>Work and concept websites</h2>
        <p>
          Client work is identified separately from personal portfolio projects
          and website demos. Future demos will be labelled as concept websites
          for fictional businesses and should not be treated as real operating
          businesses.
        </p>
        <h2>Results and third-party costs</h2>
        <p>
          Search rankings, AI citations, advertising results and enquiry volumes
          are not guaranteed. Hosting, domains, CRM licences, messaging,
          advertising and other platform costs may be separate from service
          fees.
        </p>
        <h2>External websites</h2>
        <p>
          Linked websites are operated separately and may change. Their
          availability and content are not controlled by this website.
        </p>
        <h2>Questions</h2>
        <p>
          For clarification, contact{" "}
          <a href="mailto:rebadigitalsolutions@gmail.com">
            rebadigitalsolutions@gmail.com
          </a>{" "}
          before proceeding with a project.
        </p>
      </article>
    </>
  );
}
