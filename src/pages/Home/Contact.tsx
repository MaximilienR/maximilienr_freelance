
function Contact() {
  return (
    <form className="flex flex-col w-full max-w-[90%] min-h-screen gap-6 p-6 mx-auto bg-slate-50 rounded-lg shadow-md sm:px-8 lg:px-16">
      {/* Titre */}
      <div>
        <h1 className="text-3xl font-bold text-center text-white">Contactez-moi</h1>
      </div>

      {/* Email */}
      <div>  
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="votre.email@example.com"
          required
          className="block w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Sujet */}
      <div>
        <label htmlFor="sujet" className="block text-sm font-medium text-gray-700">
          Sujet
        </label>
        <select
          id="sujet"
          name="sujet"
          required
          className="block w-full px-4 py-3 mt-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Sélectionnez un sujet</option>
          <option value="formation">Formation</option>
          <option value="creation">Création</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={8}
          placeholder="Écrivez votre message ici..."
          required
          className="block w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Bouton */}
      <div>
        <button
          type="submit"
          className="w-full px-6 py-3 text-lg font-medium text-white rounded-lg shadow-md bg-amber-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}

export default Contact;
