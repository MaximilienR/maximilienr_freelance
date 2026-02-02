import React from "react";

const MentionsLegales: React.FC = () => {
  return (
    <div className="min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-4xl p-8 mx-auto bg-white shadow-md rounded-xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Mentions Légales</h1>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Éditeur du site</h2>
          <p className="leading-relaxed text-gray-700">
            Le site <strong>Maximilienr.Freelance</strong> est édité par <strong>Maximilien Roussel</strong>,  
            micro-entrepreneur, immatriculé au Répertoire SIRET sous le numéro <strong>995 025 087 00017</strong>,  
            domicilié à <strong>491 rue du Faubourg d’Arras, 62400 Béthune, France</strong>.  
            Contact : <a href="mailto:maxilienr.freelance@gmail.com" className="text-blue-600 underline">maxilienr.freelance@gmail.com</a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Directeur de la publication</h2>
          <p className="leading-relaxed text-gray-700">
            Le directeur de la publication du site est <strong>Maximilien Roussel</strong>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Hébergement</h2>
          <p className="leading-relaxed text-gray-700">
            Le site est hébergé par <strong>Netlify</strong>.  
            Site web : <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.netlify.com</a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Propriété intellectuelle</h2>
          <p className="leading-relaxed text-gray-700">
            Tous les contenus présents sur ce site (textes, images, logos, vidéos)  
            sont protégés par le droit d’auteur et restent la propriété exclusive de <strong>Maximilien Roussel</strong>.  
            Toute reproduction ou utilisation sans autorisation est strictement interdite.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Responsabilité</h2>
          <p className="leading-relaxed text-gray-700">
            <strong>Maximilienr.Freelance</strong> s’efforce de fournir des informations fiables et actualisées,  
            mais ne peut garantir l’exactitude ou l’exhaustivité des contenus.  
            L’utilisation du site se fait sous la responsabilité de l’utilisateur.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Protection des données personnelles</h2>
          <p className="leading-relaxed text-gray-700">
            Le site collecte uniquement <strong>le nom, le prénom et l’email</strong> via le formulaire de contact.  
            Ces informations sont utilisées uniquement pour répondre aux messages envoyés.  
            Vous disposez d’un droit d’accès, de modification, de rectification et de suppression de vos données personnelles.  
            Pour exercer ce droit, contactez-nous à <a href="mailto:maxilienr.freelance@gmail.com" className="text-blue-600 underline">maxilienr.freelance@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Cookies</h2>
          <p className="leading-relaxed text-gray-700">
            Le site utilise uniquement des cookies strictement nécessaires au fonctionnement du site (navigation).  
            Vous pouvez gérer vos préférences de cookies directement dans votre navigateur.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MentionsLegales;
