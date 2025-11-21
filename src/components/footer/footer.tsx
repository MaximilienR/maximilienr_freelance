import logoImg from "../../assets/logo.png";

// Définition du type pour les liens du footer
export type FooterLink = {
  name: string;
  href: string;
  external?: boolean;
};

// Props du footer
type FooterProps = {
  logoSrc?: string;
  links?: FooterLink[];
  className?: string;
};

const Footer: React.FC<FooterProps> = ({
  logoSrc = logoImg,
  links,
  className = "",
}) => {
  // Liens par défaut
  const footerLinks: FooterLink[] =
    links ?? [
      { name: "Accueil", href: "#" },
      { name: "Projet", href: "#projet" },
      { name: "Tarif", href: "#pricing" },
      { name: "Contact", href: "#contact" },
    ];

  return (
    <footer className={`bg-slate-50 border-t border-slate-200 ${className}`}>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logoSrc} alt="logo" className="object-contain w-10 h-10" />
            <span className="text-xl font-semibold select-none text-slate-900">
              Freelance
            </span>
          </div>

          {/* Liens */}
          <ul className="flex flex-wrap justify-center gap-6 md:justify-end">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="transition-colors text-slate-700 hover:text-slate-900"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Séparateur */}
        <div className="my-8 border-t border-slate-200" />

        {/* Copyright */}
        <p className="text-sm text-center text-slate-500">
          &copy; {new Date().getFullYear()} Freelance. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
