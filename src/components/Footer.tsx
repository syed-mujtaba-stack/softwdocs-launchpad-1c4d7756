import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SoftwDocs" className="h-8 w-auto" />
          </div>
          <div className="flex items-center gap-8">
            {["Home", "About", "Services", "Team", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 SoftwDocs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
