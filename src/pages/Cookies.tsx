import LegalPageLayout from "@/components/LegalPageLayout";

const Cookies = () => {
  return (
    <LegalPageLayout
      tag="Cookies"
      title="Cookie"
      titleHighlight="Policy"
      lastUpdated="April 6, 2026"
      intro="This Cookie Policy explains what cookies are, how SoftwDocs uses them on our website, and your choices regarding cookies. By continuing to browse our site, you consent to our use of cookies as described in this policy."
      sections={[
        {
          title: "What Are Cookies?",
          content:
            "Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give site owners useful information about how their site is being used. Cookies can be 'persistent' (stored until they expire or are deleted) or 'session' (deleted when you close your browser).",
        },
        {
          title: "Types of Cookies We Use",
          content: [
            "Essential Cookies — These cookies are strictly necessary for the operation of our website. They enable core functionality such as navigation, security features, and session management. The website cannot function properly without these cookies.",
            "Performance & Analytics Cookies — These cookies collect anonymized information about how visitors use our website, including pages visited, time spent, and any error messages encountered. This data helps us improve our website's performance and user experience.",
            "Functionality Cookies — These cookies allow our website to remember choices you make, such as your preferred language, region, or theme settings, to provide a more personalized experience.",
            "AI Chatbot Cookies — Our SoftwDocs AI assistant may use session cookies to maintain conversation context and provide a seamless chat experience across page navigations.",
          ],
        },
        {
          title: "How We Use Cookies",
          content: [
            "To keep our website functioning correctly and ensure a smooth navigation experience across all pages and sections.",
            "To remember your preferences and settings, such as chat history within a single browsing session, to avoid repetitive interactions.",
            "To understand website traffic patterns and user behavior through aggregated, anonymous analytics data to continuously improve our services.",
            "To ensure the security and integrity of your session, preventing unauthorized access and protecting against cross-site request forgery.",
          ],
        },
        {
          title: "Third-Party Cookies",
          content: [
            "Google Fonts — Loading custom typography (Syne, Space Grotesk, Inter) from Google's CDN may involve minimal cookies for content delivery optimization.",
            "Analytics Providers — We may use privacy-focused analytics tools that set cookies to track anonymous usage metrics without collecting personally identifiable information.",
            "We do not allow any third-party advertising cookies on our website. Your browsing behavior on SoftwDocs is never shared with advertisers.",
          ],
        },
        {
          title: "Managing Your Cookie Preferences",
          content: [
            "Browser Settings — Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies, accept only certain cookies, or delete cookies when you close your browser. Note that disabling essential cookies may impair website functionality.",
            "Chrome: Settings → Privacy and Security → Cookies and other site data",
            "Firefox: Settings → Privacy & Security → Cookies and Site Data",
            "Safari: Preferences → Privacy → Cookies and website data",
            "Edge: Settings → Cookies and site permissions → Manage and delete cookies",
          ],
        },
        {
          title: "Cookie Lifespan",
          content: [
            "Session Cookies — These are temporary and are automatically deleted when you close your browser. They are used for essential session management and chatbot context.",
            "Persistent Cookies — These remain on your device for a set period (typically 30 days to 1 year) or until you manually delete them. They are used for remembering your preferences.",
            "We regularly review our cookie usage and minimize the number and duration of cookies to protect your privacy.",
          ],
        },
        {
          title: "Do Not Track Signals",
          content:
            "Our website currently does not respond to 'Do Not Track' (DNT) browser signals, as there is no universally accepted standard for how websites should respond to DNT signals. However, we are committed to respecting your privacy choices and provide the cookie management options described in this policy.",
        },
        {
          title: "Updates to This Policy",
          content:
            "We may update this Cookie Policy periodically to reflect changes in our cookie practices, technology, or regulatory requirements. Any changes will be reflected by updating the 'Last Updated' date at the top of this page. We encourage you to review this policy regularly.",
        },
        {
          title: "Contact Us",
          content:
            "If you have any questions about our use of cookies or this Cookie Policy, please contact us at contact@softwdocs.com. We are happy to provide any additional information you may need.",
        },
      ]}
    />
  );
};

export default Cookies;
