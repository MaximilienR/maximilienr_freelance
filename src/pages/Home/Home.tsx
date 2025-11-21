// src/pages/Home.tsx
import React from "react";

export default function Home(): JSX.Element {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      {/* --- Main content --- */}
      <main className="relative z-10 max-w-6xl px-6 py-20 mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Développeur web & mobile — <span className="text-amber-500"><br/> transformons vos idées</span>
          </h1>
          <p className="max-w-3xl mt-4 text-lg text-slate-600">
            Vous recherchez un collaborateur capable de transformer vos idées en solutions digitales concrètes
            et performantes ? Je réalise des sites, applications web et mobiles, outils métier — du prototype au produit.
          </p>
        </header>

        <section className="grid items-start gap-8 md:grid-cols-2">
          {/* Card "Qui suis-je" */}
          <article className="p-6 border shadow-sm bg-white/60 backdrop-blur-md border-slate-100 rounded-2xl">
            <h2 className="mb-3 text-2xl font-semibold">Qui suis-je ?</h2>
            <p className="leading-relaxed text-slate-700">
              Titulaire d’un Bac+2 en développement web et mobile et d’un Bac+3/4 en conception et développement
              d'applications. Expérience en freelance et en entreprise (ex. Capgemini). Passionné par l’UI/UX,
              la performance et des apps fiables.
            </p>

            <h2 className="mb-3 text-2xl font-semibold">Mon savoir faire</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Concevoir architecture & gérer déploiement / DevOps </li>
              <li>• Analyser et maquetter une application</li>
              <li>• Concevoir bases de données</li>
              <li>• Développer composants d'accès SQL/NoSQL</li>
              <li>• Développer composants métier back-end</li>
              <li>• Installer et configurer l'environnement</li>
              <li>• Maquetter des interfaces</li>
            </ul>

            <div className="flex gap-3 mt-6">
              <a className="inline-block px-4 py-2 font-medium text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700" href="#contact">Me contacter</a>
              <a className="inline-block px-4 py-2 border rounded-md border-slate-200 text-slate-800 hover:bg-slate-50" href="#cv">Voir CV</a>
            </div>
          </article>

          {/* Card "Mes outils" */}
          <aside className="p-6 border shadow-sm rounded-2xl bg-gradient-to-br from-white/60 to-white/30 border-slate-100">
            <h3 className="mb-3 text-xl font-semibold">Mes outils </h3>
            <p className="leading-relaxed text-slate-700">
              Découvrez des projets sur-mesure : vitrines, marketplaces, outils internes, APIs et apps mobiles.
            </p>

            {/* --- Roue tournante MERN avec images --- */}
            <div className="relative flex items-center justify-center w-56 h-56 mx-auto mt-6 animate-spin-slow">
              <img src="/src/assets/mongod.png" className="absolute w-12 h-12" style={{ transform: "rotate(0deg) translate(90px) rotate(0deg)" }} />
              <img src="/src/assets/express.png" className="absolute w-12 h-12" style={{ transform: "rotate(60deg) translate(90px) rotate(-60deg)" }} />
              <img src="/src/assets/react.png" className="absolute w-12 h-12" style={{ transform: "rotate(120deg) translate(90px) rotate(-120deg)" }} />
              <img src="/src/assets/nodejs.png" className="absolute w-12 h-12" style={{ transform: "rotate(180deg) translate(90px) rotate(-180deg)" }} />
              <img src="/src/assets/css.jpg" className="absolute w-12 h-12" style={{ transform: "rotate(240deg) translate(90px) rotate(-240deg)" }} />
              <img src="/src/assets/electron.png" className="absolute w-12 h-12" style={{ transform: "rotate(300deg) translate(90px) rotate(-300deg)" }} />
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}