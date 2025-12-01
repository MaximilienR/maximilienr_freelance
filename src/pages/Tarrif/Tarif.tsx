import { useState } from "react";

type ProjectType = "site" | "software" | "mobile";

type Option = {
  label: string;
  price: number;
  dynamic?: boolean;
};

const optionsData: Record<ProjectType, Option[]> = {
  site: [
    { label: "Site statique", price: 200, dynamic: true },
    { label: "Site dynamique (CMS)", price: 1500 },
    { label: "Charte graphique", price: 500 },
    { label: "Développement", price: 1000 },
    { label: "Mise en production", price: 300 },
  ],
  software: [
    { label: "Logiciel complet", price: 2000 },
    { label: "Développement", price: 2500 },
    { label: "Déploiement", price: 800 },
  ],
  mobile: [
    { label: "App complète", price: 1500 },
    { label: "Développement", price: 2000 },
    { label: "Publication sur stores", price: 500 },
  ],
};

const DynamicForm: React.FC = () => {
  const [projectType, setProjectType] = useState<ProjectType | "">("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [pages, setPages] = useState<number>(1);

  // Modal
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProjectType(e.target.value as ProjectType);
    setSelectedOptions([]);
    setPages(1);
  };

  const handleOptionChange = (optionLabel: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionLabel)
        ? prev.filter((o) => o !== optionLabel)
        : [...prev, optionLabel]
    );
  };

  const calculatePrice = () => {
    if (!projectType) return 0;
    return selectedOptions.reduce((total, label) => {
      const option = optionsData[projectType].find((o) => o.label === label);
      if (!option) return total;
      if (option.dynamic) return total + option.price * pages;
      return total + option.price;
    }, 0);
  };

  // Modal logic
  const handleInfoClick = () => {
    if (!projectType) {
      setModalText("Veuillez sélectionner un type de projet pour afficher les informations.");
      setShowModal(true);
      return;
    }

    const chosenOpts =
      selectedOptions.length > 0
        ? selectedOptions.join(", ")
        : "aucune option spécifique";

    const dynamicInfo = selectedOptions.some((opt) =>
      optionsData[projectType].find((o) => o.label === opt)?.dynamic
    )
      ? `\nNombre de pages : ${pages}`
      : "";

    const text =
      `📌 Rappel : les tarifs affichés sont fournis à titre **informatif**.\n\n` +
      `📄 Si nous comprenons bien, vous souhaitez :\n` +
      `• Type de projet : ${projectType}\n` +
      `• Options choisies : ${chosenOpts}${dynamicInfo}\n\n` +
      `💬 N'hésitez pas à nous contacter pour obtenir un devis personnalisé et adapté à votre projet.`;

    setModalText(text);
    setShowModal(true);
  };

  return (
    <div className="flex justify-center min-h-screen py-12 bg-slate-50">
      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-semibold text-sky-700 mb-4">Informations</h2>

            <pre className="whitespace-pre-wrap text-gray-800 mb-4">
              {modalText}
            </pre>

            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FORM */}
      <form className="w-full max-w-3xl p-8 space-y-6 bg-white shadow-xl rounded-2xl">
        <h1 className="mb-6 text-2xl font-bold text-center text-sky-900">
          Estimation de projet
        </h1>
        <p>
          Complétez le formulaire pour obtenir une estimation indicative de votre projet.
          Les tarifs affichés sont fournis à titre informatif uniquement.
        </p>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Type de projet</label>
          <select
            value={projectType}
            onChange={handleTypeChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Sélectionnez un type</option>
            <option value="site">Site Web</option>
            <option value="software">Logiciel</option>
            <option value="mobile">Application Mobile</option>
          </select>
        </div>

        {projectType && (
          <div className="space-y-3">
            <h2 className="font-semibold text-gray-800">Options disponibles :</h2>

            {optionsData[projectType].map((opt) => (
              <div key={opt.label}>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(opt.label)}
                    onChange={() => handleOptionChange(opt.label)}
                    className="w-4 h-4 border-gray-300 rounded text-sky-600"
                  />
                  <span>
                    {opt.label}{" "}
                    {opt.dynamic
                      ? `(+${opt.price}€/page)`
                      : `(+${opt.price}€)`}
                  </span>
                </label>

                {opt.dynamic && selectedOptions.includes(opt.label) && (
                  <div className="flex items-center gap-2 mt-2 ml-6">
                    <label className="text-gray-700">Nombre de pages :</label>
                    <input
                      type="number"
                      min={1}
                      value={pages}
                      onChange={(e) => setPages(Number(e.target.value))}
                      className="w-20 px-2 py-1 border rounded-md"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="text-lg font-semibold text-gray-900">
          Prix estimé : <span className="text-sky-600">{calculatePrice()} €</span>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleInfoClick}
            className="px-6 py-2 text-white transition rounded-lg bg-sky-600 hover:bg-sky-700"
          >
            Plus d'informations
          </button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
