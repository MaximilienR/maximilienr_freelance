// Navbar.tsx
// React + Tailwind responsive navbar (TypeScript)
// Default export a React component

import React, { useState } from "react";

export type NavLink = {
  name: string;
  href: string;
  external?: boolean;
};

type NavbarProps = {
  logo?: string;
  links?: NavLink[];
  className?: string;
};

export default function Navbar({
  logo = "MonLogo",
  links,
  className = "",
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  const navLinks: NavLink[] =
    links ?? [
      { name: "Accueil", href: "#" },
      { name: "Fonctionnalités", href: "#features" },
      { name: "Prix", href: "#pricing" },
      { name: "À propos", href: "#about" },
    ];

  return (
    <header className={`bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 ${className}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 text-white font-bold">
                {logo.charAt(0)}
              </span>
              <span className="font-semibold text-lg text-slate-800">{logo}</span>
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
                    className="text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href="#login"
                className="px-3 py-1.5 rounded-md text-sm text-slate-600 hover:bg-slate-100"
              >
                Connexion
              </a>
              <a
                href="#signup"
                className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium shadow-sm hover:bg-indigo-700"
              >
                S'inscrire
              </a>
            </div>
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
                className="h-6 w-6"
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
          <div className="md:hidden mt-2 pb-4">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-3 flex items-center gap-3 px-3">
              <a href="#login" className="px-3 py-2 rounded-md text-sm text-slate-600 hover:bg-slate-100">
                Connexion
              </a>
              <a href="#signup" className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700">
                S'inscrire
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

/*
Usage (TypeScript):
- Place this file in your project: src/components/Navbar.tsx
- Ensure Tailwind CSS is configured (via Vite/CRA/Next.js)
- Import and use: `import Navbar from "@/components/Navbar";` then <Navbar logo="Nom" />
- Pass typed links: `links={[{ name: 'Blog', href: '/blog' }, { name: 'Docs', href: 'https://...', external: true }]}`

Options I can do next (je peux appliquer directement):
- Adapter pour Next.js en remplaçant `<a>` par `next/link` et typer `href` avec UrlObject si tu veux.
- Ajouter un dropdown multi-niveaux (avec types TS).
- Remplacer le logo texte par un `logoSrc?: string` prop et <img>.
*/