import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  const [result, setResult] = useState("");

  const handleLinkedInClick = () => {
    const url = import.meta.env.VITE_LINKEDIN_URL;
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("Lien LinkedIn non défini !");
    }
  };

  const handleRdvClick = () => {
    window.open(
      "https://calendar.app.google/JHW1owNwSPLoQoNv9",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append(
      "access_key",
      "ad09a13c-36fd-43be-b147-12eb2ced975c"
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Message envoyé avec succès !" : "Une erreur est survenue.");
    event.currentTarget.reset();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-12">
      <div className="w-full max-w-md p-8 space-y-6 text-center shadow bg-slate-100 rounded-2xl">
        <h1 className="text-3xl font-bold text-sky-900">
          Contactez-moi
        </h1>

        <p className="text-gray-600">
          Vous souhaitez prendre rendez-vous ou m’envoyer un message ?
        </p>

        {/* Formulaire de contact */}
        <form onSubmit={onSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            className="w-full px-4 py-2 border rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Votre message"
            required
            rows={4}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full px-6 py-3 font-semibold text-white transition rounded-lg bg-sky-600 hover:bg-sky-700"
          >
            Envoyer
          </button>

          {result && (
            <p className="text-sm text-center text-gray-700">
              {result}
            </p>
          )}
        </form>

        {/* Bouton RDV */}
        <button
          onClick={handleRdvClick}
          className="w-full px-6 py-3 text-lg font-semibold text-white transition rounded-lg bg-emerald-600 hover:bg-emerald-700"
        >
          Prendre rendez-vous
        </button>

        {/* LinkedIn */}
        <p className="text-gray-700">
          Ou me contacter sur LinkedIn :
        </p>

        <div className="flex justify-center text-3xl text-sky-600">
          <button
            aria-label="LinkedIn"
            onClick={handleLinkedInClick}
            className="transition hover:text-sky-800"
          >
            <FaLinkedin />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;