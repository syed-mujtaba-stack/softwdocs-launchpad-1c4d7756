import LegalPageLayout from "@/components/LegalPageLayout";

const Refund = () => {
  return (
    <LegalPageLayout
      tag="Policy"
      title="Refund"
      titleHighlight="Policy"
      lastUpdated="April 6, 2026"
      intro="At SoftwDocs, client satisfaction is at the core of everything we do. This Refund Policy outlines the conditions under which refunds may be issued for our digital services. We believe in transparent, fair practices that protect both our clients and our team."
      sections={[
        {
          title: "Service-Based Refunds",
          content:
            "Our services are custom digital solutions tailored to each client's unique requirements. Due to the nature of custom software development, design, and AI integration work, refunds are handled on a case-by-case basis. We invest significant time, resources, and expertise from the very beginning of each engagement, making blanket refund policies impractical for bespoke digital services.",
        },
        {
          title: "Deposit & Upfront Payments",
          content: [
            "The initial project deposit (typically 30–50% of the total project cost) is non-refundable. This deposit secures your project slot in our development pipeline and covers initial discovery, research, architecture planning, and project setup.",
            "The deposit is applied toward the total project cost and is not an additional fee. It represents compensation for the preliminary work that begins immediately upon project kickoff.",
            "In exceptional circumstances, partial deposit refunds may be considered at SoftwDocs' sole discretion if the project has not moved beyond the initial discovery phase.",
          ],
        },
        {
          title: "Milestone-Based Refunds",
          content: [
            "Our projects follow a milestone-based payment structure. Payment is due upon successful delivery and client approval of each milestone.",
            "If SoftwDocs fails to deliver a milestone according to the agreed-upon specifications, the client may request a full refund for that specific undelivered milestone.",
            "Once a milestone has been delivered, reviewed, and approved by the client, the payment for that milestone becomes non-refundable.",
            "If the client requests changes beyond the agreed scope after milestone approval, these will be treated as new work and billed separately.",
          ],
        },
        {
          title: "Project Cancellation",
          content: [
            "Either party may cancel a project with 14 days' written notice as outlined in our Terms of Service.",
            "Upon cancellation, the client is responsible for payment of all work completed up to the date of cancellation, calculated on a prorated basis against the total project agreement.",
            "SoftwDocs will deliver all completed work, source code, design files, and documentation up to the cancellation date, subject to full payment of outstanding invoices.",
            "Any unused portion of pre-paid milestone payments (for milestones not yet started) will be refunded within 14 business days.",
          ],
        },
        {
          title: "Quality Disputes",
          content:
            "If you believe the delivered work does not meet the agreed specifications outlined in the project proposal, you must notify us in writing within 7 business days of delivery. We will review the concern and, if the work is found to be deficient against the agreed specifications, we will either correct the work at no additional cost or issue an appropriate refund. Quality disputes must reference specific deliverables and how they deviate from the documented specifications — subjective dissatisfaction without reference to agreed requirements may not qualify for a refund.",
        },
        {
          title: "Non-Refundable Items",
          content: [
            "Third-party services — Domain registrations, hosting subscriptions, API tokens, premium plugins, stock imagery, or any third-party services purchased on the client's behalf.",
            "Completed & approved work — Any deliverables that have been formally accepted and approved by the client during the review process.",
            "Consultation & discovery — Time spent on initial consultations, discovery sessions, requirement analysis, and project planning prior to development.",
            "Rush & priority fees — Additional charges for expedited delivery timelines or priority project scheduling.",
          ],
        },
        {
          title: "Refund Process",
          content: [
            "To initiate a refund request, contact us at contact@softwdocs.com with your project reference number, a detailed explanation of your request, and any supporting documentation.",
            "Our team will review your request within 5 business days and respond with our assessment.",
            "If a refund is approved, it will be processed within 14 business days via the original payment method or an agreed alternative.",
            "Refunds are issued in USD unless the original payment was made in another currency, in which case the refund will be issued in the original currency at the prevailing exchange rate.",
          ],
        },
        {
          title: "Dispute Resolution",
          content:
            "We encourage open and honest communication to resolve any concerns before they escalate. If a refund dispute cannot be resolved through direct negotiation, both parties agree to pursue mediation before any formal legal proceedings. Our goal is always to reach a fair resolution that respects the work invested by both parties.",
        },
        {
          title: "Contact Us",
          content:
            "For refund inquiries, billing questions, or any concerns about our services, please reach out to our team at contact@softwdocs.com. We are committed to resolving all financial matters promptly and fairly, typically within 48 hours during business days.",
        },
      ]}
    />
  );
};

export default Refund;
