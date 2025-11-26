import React from "react";
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
  const footerLinks: FooterLink[] =
    links ?? [
      { name: "Accueil", href: "/" },
      { name: "Projet", href: "/projet" },
      { name: "Tarif", href: "/tarif" },
      { name: "Contact", href: "/contact" },
      { name: "Mentions légales", href: "/mention" },
    ];

  return (
    <footer
      className={`bg-slate-50 backdrop-blur-md shadow-sm ${className}`}
    >
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logoSrc}
              alt="logo"
              className="object-contain w-10 h-10"
            />
            <span className="text-xl font-semibold text-black select-none">
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
                  className="text-black transition-colors hover:text-blue-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Séparateur */}
        <div className="my-8 border-t border-gray-800" />

        {/* Copyright */}
        <p className="text-sm text-center transition-colors text-black-900 hover:text-gray-300">
          &copy; {new Date().getFullYear()} Freelance. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
