export default function Mention() {
  return (
    <div className="max-w-3xl px-4 py-8 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Mentions légales</h1>

      <p className="mb-4">
        <strong>Dernière mise à jour :</strong> mardi 11 février 2025
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold">Éditeur du site</h2>

      <p className="mb-4">
        Le présent site est édité par <strong>ROUSSEL Maximilien</strong>,
        entrepreneur individuel exerçant sous le nom commercial{" "}
        <strong>« Maximilienr.Freelance »</strong>, immatriculé au Registre
        national des entreprises (RNE).
      </p>

      <p className="mb-4">
        <strong>SIRET :</strong> 995 025 087 00017
        <br />
        <strong>Code APE :</strong> 6201Z – Programmation informatique
        <br />
        <strong>Adresse de domiciliation :</strong>
        <br />
        491 rue du Faubourg d&apos;Arras
        <br />
        62400 Béthune – France
      </p>

      <p className="mb-4">
        L’activité exercée est une activité libérale non réglementée de création
        de sites web, d’applications mobiles et de logiciels.
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold">
        Directeur de la publication
      </h2>

      <p className="mb-4">Monsieur Maximilien Roussel</p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold">Hébergement du site</h2>

      <p className="mb-4">
        Le site est hébergé par <strong>Render</strong>
        <br />
        Adresse : 525 Brannan Street, Suite 300, San Francisco, CA 94107,
        États-Unis
        <br />
        Site web :{" "}
        <a
          href="https://render.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://render.com/
        </a>
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold">Contact</h2>

      <p className="mb-4">
        Par email :{" "}
        <a
          href="mailto:maxilienr.freelance@gmail.com"
          className="text-blue-600 underline"
        >
          maxilienr.freelance@gmail.com
        </a>
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold">Données personnelles</h2>

      <p className="mb-4">
        Les informations personnelles collectées sur ce site sont traitées
        conformément au Règlement Général sur la Protection des Données (RGPD).
      </p>

      <p className="mb-4">
        Vous disposez d’un droit d’accès, de rectification, d’effacement et
        d’opposition au traitement des données vous concernant. Vous pouvez
        exercer ces droits :
      </p>

      <p className="mb-4">
        • par email à :{" "}
        <a
          href="mailto:maxilienr.freelance@gmail.com"
          className="text-blue-600 underline"
        >
          maxilienr.freelance@gmail.com
        </a>
        <br />
        • par courrier à l’adresse suivante :
        <br />
        <strong>ROUSSEL Maximilien – Protection des données</strong>
        <br />
        491 rue du Faubourg d&apos;Arras
        <br />
        62400 Béthune – France
      </p>

      <p>
        Pour plus d’informations, vous pouvez consulter la{" "}
        <a
          href="/politique-de-confidentialite"
          className="text-blue-600 underline"
        >
          Politique de protection des données personnelles
        </a>
        .
      </p>
    </div>
  );
}
