// Navbar.tsx
// React + Tailwind responsive navbar (TypeScript)
// Default export a React component

import React, { useState } from "react";
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
      { name: "Accueil", href: "" },
      { name: "Projet", href: "projet" },
      { name: "Tarif", href: "#pricing" },
      { name: "Contact", href: "#about" },
    ];

  return (
    <header className={`bg-slate-50 backdrop-blur-md shadow-sm sticky top-0 z-50 ${className}`}>
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2">
              <img src={logoSrc} alt="logo" className="object-contain w-10 h-10 select-none" />
              <span className="text-xl font-semibold text-slate-900">'Freelance</span>
            </a>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
            >
              {/* hamburger / close icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="pb-4 mt-2 md:hidden">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="block px-3 py-2 text-base font-medium rounded-md text-slate-700 hover:bg-slate-100"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

           
          </div>
        )}
      </nav>
    </header>
  );
}
 
