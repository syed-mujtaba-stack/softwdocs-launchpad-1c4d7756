import LegalPageLayout from "@/components/LegalPageLayout";

const Terms = () => {
  return (
    <LegalPageLayout
      tag="Legal"
      title="Terms of"
      titleHighlight="Service"
      lastUpdated="April 6, 2026"
      intro="Welcome to SoftwDocs. These Terms of Service govern your use of our website, products, and services. By accessing or using our platform, you agree to be bound by these terms. Please read them carefully before engaging with our services."
      sections={[
        {
          title: "Acceptance of Terms",
          content:
            "By accessing and using the SoftwDocs website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use our services. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of any modifications.",
        },
        {
          title: "Services Offered",
          content: [
            "Full-stack Web Development — Custom applications built with React, Next.js, and modern frameworks for high performance and scalability.",
            "AI & Machine Learning Solutions — Agentic AI chatbots, automation workflows, ML pipelines, and intelligent integrations using OpenAI and other leading platforms.",
            "UI/UX Design — Premium 'Clean Luxury' design systems, responsive interfaces, and brand-first visual experiences crafted in Figma.",
            "WordPress & E-Commerce — Custom themes, WooCommerce stores, and enterprise content management solutions.",
            "DevOps & Cloud Infrastructure — Docker, Kubernetes, CI/CD pipelines, and cloud-native deployment strategies.",
          ],
        },
        {
          title: "Client Responsibilities",
          content: [
            "Providing accurate and complete project requirements, assets, and feedback in a timely manner as outlined in the project agreement.",
            "Ensuring that all content, imagery, and intellectual property provided to SoftwDocs for use in the project is legally owned or properly licensed by the client.",
            "Designating a single point of contact for project communications to ensure efficient collaboration and decision-making.",
            "Reviewing deliverables and providing constructive feedback within the agreed-upon review periods to avoid project delays.",
            "Making payments according to the agreed payment schedule outlined in the project proposal or contract.",
          ],
        },
        {
          title: "Intellectual Property",
          content:
            "Upon full payment for services rendered, the client receives ownership of the final deliverables specifically created for their project. SoftwDocs retains the right to use general methodologies, tools, frameworks, and reusable components developed during the project. SoftwDocs also reserves the right to showcase completed work in our portfolio unless a Non-Disclosure Agreement (NDA) has been executed. Any pre-existing intellectual property, open-source components, or third-party libraries remain subject to their respective licenses.",
        },
        {
          title: "Payment Terms",
          content: [
            "A non-refundable deposit of 30–50% of the total project cost is required before work commences, unless otherwise agreed upon in writing.",
            "Remaining payments are due according to the milestone schedule outlined in the project proposal. Invoices are payable within 14 days of issuance.",
            "Late payments may incur a late fee of 2% per month on the outstanding balance and may result in temporary suspension of work until the account is settled.",
            "All prices are quoted in USD unless explicitly stated otherwise. The client is responsible for any applicable taxes, bank charges, or currency conversion fees.",
          ],
        },
        {
          title: "Project Timeline & Delivery",
          content:
            "SoftwDocs is committed to delivering projects within the agreed-upon timelines. However, project timelines are estimates and may be affected by factors outside our control, including but not limited to: delays in client feedback, scope changes, third-party API issues, or force majeure events. Any significant changes in scope (scope creep) may result in revised timelines and additional costs, which will be communicated and agreed upon in writing before implementation.",
        },
        {
          title: "Confidentiality",
          content:
            "Both parties agree to maintain the confidentiality of all proprietary information exchanged during the course of the project. This includes, but is not limited to, business strategies, technical specifications, user data, API keys, and access credentials. SoftwDocs will not disclose, share, or sell any client information to third parties without explicit written consent, except where required by law.",
        },
        {
          title: "Limitation of Liability",
          content:
            "SoftwDocs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill arising out of or in connection with the use of our services. Our total aggregate liability for any claims arising under these terms shall not exceed the total amount paid by the client to SoftwDocs under the applicable project agreement in the twelve (12) months preceding the claim.",
        },
        {
          title: "Termination",
          content: [
            "Either party may terminate a project agreement with 14 days' written notice. Upon termination, the client is responsible for payment of all work completed up to the date of termination.",
            "SoftwDocs reserves the right to terminate or suspend services immediately if the client breaches these Terms of Service, engages in fraudulent activity, or fails to make payment for more than 30 days.",
            "Upon termination, SoftwDocs will deliver all completed work and assets to the client, subject to full payment of all outstanding invoices.",
          ],
        },
        {
          title: "Governing Law",
          content:
            "These Terms of Service shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising out of or in connection with these terms shall be resolved first through good-faith negotiation, and if necessary, through binding arbitration in Karachi, Pakistan.",
        },
        {
          title: "Contact Information",
          content:
            "For any questions, clarifications, or concerns regarding these Terms of Service, please contact us at contact@softwdocs.com or through our website's contact page. We aim to respond to all inquiries within 24 hours during business days.",
        },
      ]}
    />
  );
};

export default Terms;
