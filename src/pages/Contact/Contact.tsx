import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  const handleLinkedInClick = () => {
    const url = import.meta.env.VITE_LINKEDIN_URL;
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("Lien LinkedIn non défini !");
    }
  };

  const handleRdvClick = () => {
    // Ouvre directement le lien Google Calendar (ou autre)
    window.open("https://calendar.app.google/JHW1owNwSPLoQoNv9", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-12 ">
      <div className="w-full max-w-md p-8 space-y-6 text-center shadow bg-slate-100 rounded-2xl">
        <h1 className="text-3xl font-bold text-sky-900">Contactez-moi</h1>
        <p className="text-gray-600">
          Vous souhaitez prendre rendez-vous ou me joindre directement ?
        </p>

        {/* Bouton prise de rendez-vous */}
        <button
          onClick={handleRdvClick}
          className="w-full px-6 py-3 text-lg font-semibold text-white transition rounded-lg bg-sky-600 hover:bg-sky-700 focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
        >
          Prendre rendez-vous
        </button>

        {/* Bouton LinkedIn */}
        <p className="text-gray-700">
          Vous préférez me joindre sur les réseaux sociaux ?{" "}
          <button
            type="button"
            className="ml-1 font-semibold underline text-sky-600"
            onClick={handleLinkedInClick}
          >
            Cliquez ici
          </button>
        </p>

        <div className="flex justify-center gap-4 mt-4 text-2xl text-sky-600">
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
