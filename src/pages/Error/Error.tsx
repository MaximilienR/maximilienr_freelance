import { FC } from "react";
import { Link } from "react-router-dom";

const Page404: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-md text-center">
        {/* Code 404 animé */}
        <h1 className="font-extrabold tracking-widest text-gray-200 text-9xl animate-bounce">404</h1>
        
        {/* Message principal */}
        <p className="mt-6 text-2xl font-semibold text-gray-700">
          Oups ! Page introuvable
        </p>
        <p className="mt-2 text-gray-500">
          La page que vous cherchez n'existe pas, a été déplacée ou est temporairement indisponible.
        </p>
        
        {/* Bouton de retour */}
        <Link
          to="/"
          className="inline-block px-6 py-3 mt-6 font-medium text-white transition-colors duration-300 bg-blue-600 rounded-md shadow-md hover:bg-blue-700"
        >
          Retour à l'accueil
        </Link>
      </div>

      {/* Illustration SVG */}
      <div className="mt-10">
        <svg
          className="w-64 h-64 mx-auto text-gray-300 animate-pulse"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v2m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Page404;
