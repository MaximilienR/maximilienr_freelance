 
import mongoImg from "../../assets/mongod.png";
import expressImg from "../../assets/express.png";
import reactImg from "../../assets/react.png";
import nodeImg from "../../assets/nodejs.png";
import cssImg from "../../assets/css.jpg";
import tsImg from "../../assets/ts.svg";
import electronImg from "../../assets/electron.png";
import twImg from "../../assets/tw.png";
import dockerImg from "../../assets/docker.png";

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
  Vous recherchez un collaborateur capable de transformer vos idées en solutions digitales concrètes et performantes ?
Que ce soit pour accompagner un petit commerce local ou pour intégrer une équipe dans une entreprise, je m’adapte à vos besoins : CDD, CDI, mission freelance.
Je réalise des sites web, des applications web et mobiles, ainsi que des outils métier — du prototype au produit final.
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
              <a className="inline-block px-4 py-2 font-medium text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700" href="/contacefezfzezeet">Me contacter</a>
              <a className="inline-block px-4 py-2 border rounded-md border-slate-200 text-slate-800 hover:bg-slate-50" href="https://drive.google.com/file/d/1B8VPzF-nYrmPbAO0bsunsT52083JZLKm/view?usp=sharing" target="_blank">Voir CV</a>
            </div>
          </article>

          {/* Card "Mes outils" */}
          <aside className="p-6 border shadow-sm rounded-2xl bg-gradient-to-br from-white/60 to-white/30 border-slate-100">
            <h3 className="mb-3 text-xl font-semibold">Mes outils </h3>
            <p className="leading-relaxed text-slate-700">
      A chaque projet son outil. J'utilise principalement le stack MERN (MongoDB, Express, React, Node.js) avec TypeScript pour
      garantir robustesse et maintenabilité. Pour des applications desktop, j'intègre Electron. Pour le design et le
      prototypage, j'utilise Figma et Tailwind CSS pour des interfaces modernes et réactives.
            </p>

            {/* --- Roue tournante MERN avec images --- */}
 <div className="relative flex items-center justify-center w-56 h-56 mx-auto mt-6">
  <img src={mongoImg} className="absolute w-12 h-12 animate-blink-1" style={{ transform: "rotate(0deg) translate(90px) rotate(-0deg)" }} />
  <img src={mongoImg} className="absolute w-12 h-12 animate-blink-2" style={{ transform: "rotate(40deg) translate(90px) rotate(-40deg)" }} />
  <img src={expressImg} className="absolute w-12 h-12 animate-blink-3" style={{ transform: "rotate(80deg) translate(90px) rotate(-80deg)" }} />
  <img src={reactImg} className="absolute w-12 h-12 animate-blink-4" style={{ transform: "rotate(120deg) translate(90px) rotate(-120deg)" }} />
  <img src={nodeImg} className="absolute w-12 h-12 animate-blink-5" style={{ transform: "rotate(160deg) translate(90px) rotate(-160deg)" }} />
  <img src={cssImg} className="absolute w-12 h-12 animate-blink-6" style={{ transform: "rotate(200deg) translate(90px) rotate(-200deg)" }} />
  <img src={tsImg} className="absolute w-12 h-12 animate-blink-7" style={{ transform: "rotate(240deg) translate(90px) rotate(-240deg)" }} />
  <img src={electronImg} className="absolute w-12 h-12 animate-blink-8" style={{ transform: "rotate(280deg) translate(90px) rotate(-280deg)" }} />
  <img src={twImg} className="absolute w-12 h-12 animate-blink-9" style={{ transform: "rotate(320deg) translate(90px) rotate(-320deg)" }} />
  <img src={dockerImg} className="absolute w-12 h-12 animate-blink-10" style={{ transform: "rotate(360deg) translate(90px) rotate(-360deg)" }} />
</div>

          </aside>
        </section>
      </main>
    </div>
  );
}