import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";

export type NavLink = {
  name: string;
  href: string;
  external?: boolean;
};

type NavbarProps = {
  logoSrc?: string;
  links?: NavLink[];
  className?: string;
};

export default function Navbar({
  logoSrc = logoImg,
  links,
  className = "",
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  const navLinks: NavLink[] =
    links ?? [
      { name: "Accueil", href: "/" },
      { name: "Projet", href: "/projet" },
      { name: "Tarif", href: "/tarif" },
      { name: "Contact", href: "/contact" },
    ];

  return (
    <header className={`bg-slate-50 backdrop-blur-md shadow-sm sticky top-0 z-50 ${className}`}>
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoSrc} alt="logo" className="object-contain w-10 h-10 select-none" />
              <span className="text-xl font-semibold text-slate-900">Freelance</span>
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors text-slate-700 hover:text-blue-300"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="transition-colors text-slate-700 hover:text-blue-300"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="pb-4 mt-2 md:hidden">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 text-base font-medium rounded-md text-slate-700 hover:bg-slate-100"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="block px-3 py-2 text-base font-medium rounded-md text-slate-700 hover:bg-slate-100"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

      </nav>
    </header>
  );
}
