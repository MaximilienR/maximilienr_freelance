import React from "react";

const MentionsLegales: React.FC = () => {
  return (
    <div className="min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-4xl p-8 mx-auto bg-white shadow-md rounded-xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Mentions Légales</h1>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Éditeur du site</h2>
          <p className="leading-relaxed text-gray-700">
            Le site <strong>Maximilienrfreelance </strong> est édité par <strong>Maximilien Roussel</strong>,  
            micro-entrepreneur, immatriculé au Répertoire SIRET sous le numéro <strong>[*]</strong>,  
            domicilié à <strong>[France metropolitaine]</strong>.  
            Contact : <a href="mailto:maximilienrfreelance.com" className="text-blue-600 underline">mfreelance@contact.com</a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Directeur de la publication</h2>
          <p className="leading-relaxed text-gray-700">
            Le directeur de la publication du site est <strong>[Maximilien Roussel]</strong>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Hébergement</h2>
          <p className="leading-relaxed text-gray-700">
            Le site est hébergé par <strong>Netlify </strong>,  
            situé à [Adresse complète de l'hébergeur].  
            Téléphone : [Numéro de téléphone].
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Propriété intellectuelle</h2>
          <p className="leading-relaxed text-gray-700">
            Tous les contenus présents sur ce site (textes, images, logos, vidéos, applications)  
            sont protégés par le droit d’auteur et restent la propriété exclusive de <strong>[Prénom Nom]</strong>.  
            Toute reproduction ou utilisation sans autorisation est strictement interdite.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Responsabilité</h2>
          <p className="leading-relaxed text-gray-700">
            <strong>Maximilienrfreelance </strong> s’efforce de fournir des informations fiables et actualisées,  
            mais ne peut garantir l’exactitude ou l’exhaustivité des contenus.  
            L’utilisation des applications et services proposés se fait sous la responsabilité de l’utilisateur.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Protection des données personnelles</h2>
          <p className="leading-relaxed text-gray-700">
            Conformément à la réglementation en vigueur, vous disposez d’un droit d’accès, de modification,  
            de rectification et de suppression des données vous concernant.  
            Pour exercer ce droit, contactez-nous à <a href="mailto:contact@votresite.com" className="text-blue-600 underline">contact@votresite.com</a>.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Cookies</h2>
          <p className="leading-relaxed text-gray-700">
            Le site utilise des cookies pour améliorer votre expérience de navigation.  
            Vous pouvez gérer vos préférences de cookies directement dans votre navigateur.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MentionsLegales;
