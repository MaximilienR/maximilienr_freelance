import React from "react";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form soumis !");
  };

  return (
    <div className="pb-12 ">  
      <form
        onSubmit={handleSubmit}
  className="p-8 mx-auto mt-12 space-y-6 bg-white shadow bg w-4xl -xl rounded-2xl"
      >
        {/* Titre */}
        <div>
          <h1 className="text-3xl font-bold text-center text-sky-900 ">
            Contactez-moi
          </h1>
          <p className="mt-2 text-center text-gray-600 ">
            Remplissez le formulaire ci-dessous pour me contacter.
          </p>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="votre.email@example.com"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
        </div>

        {/* Sujet */}
        <div>
          <label
            htmlFor="sujet"
            className="block mb-2 font-medium text-gray-700"
          >
            Sujet
          </label>
          <select
            id="sujet"
            name="sujet"
            required
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="formation">Formation</option>
            <option value="creation">Création</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block mb-2 font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            placeholder="Écrivez votre message ici..."
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
        </div>

        {/* Bouton */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 text-lg font-semibold text-white transition rounded-lg bg-sky-600 hover:bg-sky-700 focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
          >
            Envoyer
          </button>
        </div>

      </form>
    </div>
  );
};

export default Contact;
