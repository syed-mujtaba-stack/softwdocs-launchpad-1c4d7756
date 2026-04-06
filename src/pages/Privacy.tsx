import LegalPageLayout from "@/components/LegalPageLayout";

const Privacy = () => {
  return (
    <LegalPageLayout
      tag="Privacy"
      title="Privacy"
      titleHighlight="Policy"
      lastUpdated="April 6, 2026"
      intro="At SoftwDocs, your privacy is of paramount importance. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you interact with our website and services. We are committed to transparency and ensuring compliance with applicable data protection regulations."
      sections={[
        {
          title: "Information We Collect",
          content: [
            "Personal Information — Name, email address, phone number, and company name provided through our contact forms, chatbot, or direct communications.",
            "Project Information — Service requirements, budget ranges, project descriptions, and technical specifications shared during the consultation and onboarding process.",
            "Usage Data — Browser type, device information, IP address, pages visited, time spent on pages, and referral sources collected automatically through analytics.",
            "Communication Data — Chat transcripts, email correspondence, and support ticket histories generated during your interaction with our team and AI assistant.",
            "Cookie & Tracking Data — Information collected through cookies, web beacons, and similar technologies as described in our Cookie Policy.",
          ],
        },
        {
          title: "How We Use Your Information",
          content: [
            "To respond to your inquiries, process project requests, and deliver the services you have engaged us for.",
            "To personalize your experience on our website and provide relevant content, recommendations, and service offerings.",
            "To improve our website performance, user interface, and overall user experience through aggregated analytics.",
            "To send important project updates, invoice notifications, and service-related communications that are essential to our business relationship.",
            "To comply with legal obligations, resolve disputes, and enforce our Terms of Service.",
          ],
        },
        {
          title: "Data Storage & Security",
          content:
            "Your data is stored on secure, encrypted Neon PostgreSQL database servers with industry-standard security measures including TLS/SSL encryption in transit, AES-256 encryption at rest, and role-based access controls. We implement regular security audits, vulnerability assessments, and backup procedures to protect your information. Access to personal data is restricted to authorized team members on a need-to-know basis. While we take every reasonable precaution, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.",
        },
        {
          title: "Third-Party Services",
          content: [
            "OpenRouter / OpenAI — Our AI chatbot assistant processes conversations through third-party LLM providers. Conversations may be temporarily processed on their servers but are not stored by them for training purposes.",
            "Neon Database — Project and lead data is securely stored on Neon's fully managed PostgreSQL infrastructure with SOC 2 Type II compliance.",
            "Vercel — Our website hosting provider processes server-side requests and may collect minimal technical data for performance monitoring.",
            "Google Fonts — Typography assets are loaded from Google's content delivery network, which may involve minimal data transfer as outlined in Google's privacy policy.",
            "We do not sell, trade, or rent your personal information to any third parties for marketing or advertising purposes under any circumstances.",
          ],
        },
        {
          title: "Cookies & Tracking",
          content:
            "We use essential cookies to ensure the basic functionality of our website, including session management and security features. We may also use analytics cookies to understand how visitors interact with our website, which helps us improve our services. You can manage your cookie preferences through your browser settings. Disabling certain cookies may affect the functionality and user experience of our website. For more details, please refer to our Cookie Policy.",
        },
        {
          title: "Your Rights",
          content: [
            "Right of Access — You may request a copy of the personal data we hold about you at any time.",
            "Right to Rectification — You may request correction of any inaccurate or incomplete personal data.",
            "Right to Erasure — You may request deletion of your personal data, subject to any legal retention obligations.",
            "Right to Data Portability — You may request your data in a structured, machine-readable format for transfer to another service.",
            "Right to Object — You may object to the processing of your personal data for certain purposes, including direct marketing.",
            "Right to Withdraw Consent — Where processing is based on consent, you may withdraw your consent at any time without affecting the lawfulness of prior processing.",
          ],
        },
        {
          title: "Data Retention",
          content:
            "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Project-related data is retained for the duration of the business relationship and for a reasonable period thereafter for legal and accounting purposes (typically 3–5 years). Inactive lead data is automatically purged after 24 months unless you have an active business relationship with SoftwDocs.",
        },
        {
          title: "Children's Privacy",
          content:
            "Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected data from a child under 16, we will take immediate steps to delete that information from our servers.",
        },
        {
          title: "International Data Transfers",
          content:
            "Your information may be transferred to and processed in countries other than your country of residence, where data protection laws may differ. We ensure appropriate safeguards are in place for such transfers, including standard contractual clauses and equivalent protections to ensure your data remains secure regardless of where it is processed.",
        },
        {
          title: "Changes to This Policy",
          content:
            "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by updating the 'Last Updated' date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your information.",
        },
        {
          title: "Contact Us",
          content:
            "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our team at contact@softwdocs.com. We will respond to all data protection inquiries within 48 hours during business days.",
        },
      ]}
    />
  );
};

export default Privacy;
