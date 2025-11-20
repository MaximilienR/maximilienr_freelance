// src/pages/Home.tsx
import React from "react";

type Bubble = {
  left: string;       // position left en %
  size: number;       // taille en px
  delay: string;      // animation-delay
  duration: string;   // animation-duration
  opacity?: number;   // opacity
};

const BUBBLES: Bubble[] = [
  { left: "5%",  size: 140, delay: "0s",   duration: "18s", opacity: 0.85 },
  { left: "18%", size: 90,  delay: "2s",   duration: "12s", opacity: 0.8 },
  { left: "33%", size: 220, delay: "1s",   duration: "22s", opacity: 0.75 },
  { left: "48%", size: 120, delay: "4s",   duration: "16s", opacity: 0.9 },
  { left: "62%", size: 160, delay: "0.5s", duration: "20s", opacity: 0.7 },
  { left: "76%", size: 100, delay: "3s",   duration: "14s", opacity: 0.8 },
  { left: "88%", size: 180, delay: "1.5s", duration: "24s", opacity: 0.78 },
];

export default function Home(): JSX.Element {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden">

      {/* --- Animated bubbles background --- */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            aria-hidden
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDelay: b.delay,
              animationDuration: b.duration,
              opacity: b.opacity,
            }}
            className="bubble absolute rounded-full blur-xl mix-blend-screen translate-y-[120%] animate-bubbleColor"
          />
        ))}

        {/* Decorative soft radial glows */}
        <div className="absolute -left-32 -top-20 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-200 to-pink-200 opacity-30 blur-3xl" />
        <div className="absolute right-[-6rem] bottom-[-6rem] w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-yellow-200 to-emerald-200 opacity-20 blur-2xl" />
      </div>

      {/* --- Main content --- */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Développeur web & mobile — <span className="text-indigo-600">transformons vos idées</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            Vous recherchez un collaborateur capable de transformer vos idées en solutions digitales concrètes
            et performantes ? Je réalise des sites, applications web et mobiles, outils métier — du prototype au produit.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2 items-start">
          {/* Card "Qui suis-je" */}
          <article className="bg-white/60 backdrop-blur-md border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Qui suis-je ?</h2>
            <p className="text-slate-700 leading-relaxed">
              Titulaire d’un Bac+2 en développement web et mobile et d’un Bac+3/4 en conception et développement
              d'applications. Expérience en freelance et en entreprise (ex. Capgemini). Passionné par l’UI/UX,
              la performance et des apps fiables.
            </p>
                        <h2 className="text-2xl font-semibold mb-3">Mon savoir faire</h2>

            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Concevoir architecture & gérer déploiement / DevOps </li>
              <li>• Analyser et maquetter une application</li>
              <li>• Concevoir bases de données</li>
              <li>• Développer composants d'accès SQL/NoSQL</li>
              <li>• Développer composants métier back-end</li>
              <li>• Installer et configurer l'environnement</li>
              <li>• Maquetter des interfaces</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                className="inline-block px-4 py-2 rounded-md bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700"
                href="#contact"
              >
                Me contacter
              </a>
              <a
                className="inline-block px-4 py-2 rounded-md border border-slate-200 text-slate-800 hover:bg-slate-50"
                href="#cv"
              >
                Voir CV
              </a>
            </div>
          </article>

          {/* Card "Mes réalisations" */}
          <aside className="rounded-2xl p-6 bg-gradient-to-br from-white/60 to-white/30 border border-slate-100 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Mes outils </h3>
            <p className="text-slate-700 leading-relaxed">
              Découvrez des projets sur-mesure : vitrines, marketplaces, outils internes, APIs et apps mobiles.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="p-4 rounded-lg bg-white/50 border border-slate-100">
                <h4 className="font-medium">Projet A</h4>
                <p className="text-sm text-slate-600">Site e-commerce performant — React + Node.js</p>
              </div>
              <div className="p-4 rounded-lg bg-white/50 border border-slate-100">
                <h4 className="font-medium">Projet B</h4>
                <p className="text-sm text-slate-600">Application mobile — React Native / Expo</p>
              </div>
            </div>
          </aside>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-sm text-slate-500">
          <p>Disponible pour missions freelance & postes CDI/CDD — discutons de votre projet.</p>
        </footer>
      </main>

      {/* --- Inline CSS for bubble animations --- */}
      <style>{`
        .bubble {
          position: absolute;
          border-radius: 9999px;
          transform: translateY(120%);
          will-change: transform, opacity, background-color;
          animation-name: rise;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes rise {
          0% {
            transform: translateY(120%) scale(0.85);
            opacity: 0;
          }
          10% { opacity: 0.85; }
          50% {
            transform: translateY(20%) scale(1.05);
            opacity: 0.9;
          }
          100% {
            transform: translateY(-40%) scale(1.02);
            opacity: 0;
          }
        }

        @keyframes bubbleColor {
          0%   { background-color: theme('colors.indigo.500'); }
          25%  { background-color: theme('colors.pink.500'); }
          50%  { background-color: theme('colors.green.500'); }
          75%  { background-color: theme('colors.blue.500'); }
          100% { background-color: theme('colors.indigo.500'); }
        }

        .animate-bubbleColor {
          animation: bubbleColor 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
