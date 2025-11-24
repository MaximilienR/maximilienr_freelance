import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const optionsData = {
    site: [
        { label: "Site statique", price: 200, dynamic: true }, // prix par page
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
const DynamicForm = () => {
    const [projectType, setProjectType] = useState("");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [pages, setPages] = useState(1);
    const handleTypeChange = (e) => {
        setProjectType(e.target.value);
        setSelectedOptions([]);
        setPages(1);
    };
    const handleOptionChange = (optionLabel) => {
        setSelectedOptions((prev) => prev.includes(optionLabel)
            ? prev.filter((o) => o !== optionLabel)
            : [...prev, optionLabel]);
    };
    const calculatePrice = () => {
        if (!projectType)
            return 0;
        return selectedOptions.reduce((total, label) => {
            const option = optionsData[projectType].find((o) => o.label === label);
            if (!option)
                return total;
            if (option.dynamic)
                return total + option.price * pages; // site statique
            return total + option.price;
        }, 0);
    };
    return (_jsx("div", { className: "flex justify-center min-h-screen py-12 bg-slate-50", children: _jsxs("form", { className: "w-full max-w-3xl p-8 space-y-6 bg-white shadow-xl rounded-2xl", children: [_jsx("h1", { className: "mb-6 text-2xl font-bold text-center text-sky-900", children: "Estimation de projet" }), _jsx("p", { children: "Compl\u00E9tez le formulaire pour obtenir une estimation de votre projet. Vous pouvez combiner les options comme vous le souhaitez." }), _jsxs("div", { children: [_jsx("label", { htmlFor: "projectType", className: "block mb-2 font-medium text-gray-700", children: "Type de projet" }), _jsxs("select", { id: "projectType", value: projectType, onChange: handleTypeChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md", children: [_jsx("option", { value: "", children: "S\u00E9lectionnez un type" }), _jsx("option", { value: "site", children: "Site Web" }), _jsx("option", { value: "software", children: "Logiciel" }), _jsx("option", { value: "mobile", children: "Application Mobile" })] })] }), projectType && (_jsxs("div", { className: "space-y-3", children: [_jsx("h2", { className: "font-semibold text-gray-800", children: "Options disponibles :" }), optionsData[projectType].map((opt) => (_jsxs("div", { children: [_jsxs("label", { className: "flex items-center gap-2", children: [_jsx("input", { type: "checkbox", checked: selectedOptions.includes(opt.label), onChange: () => handleOptionChange(opt.label), className: "w-4 h-4 border-gray-300 rounded text-sky-600" }), _jsxs("span", { children: [opt.label, " ", opt.dynamic ? `(+${opt.price}€/page)` : `(+${opt.price}€)`] })] }), opt.dynamic && selectedOptions.includes(opt.label) && (_jsxs("div", { className: "flex items-center gap-2 mt-2 ml-6", children: [_jsx("label", { className: "text-gray-700", children: "Nombre de pages :" }), _jsx("input", { type: "number", min: 1, value: pages, onChange: (e) => setPages(Number(e.target.value)), className: "w-20 px-2 py-1 border rounded-md" })] }))] }, opt.label)))] })), _jsxs("div", { className: "text-lg font-semibold text-gray-900", children: ["Prix estim\u00E9 : ", _jsxs("span", { className: "text-sky-600", children: [calculatePrice(), " \u20AC"] })] }), _jsx("div", { className: "flex justify-center", children: _jsx("button", { type: "submit", className: "px-6 py-2 text-white transition rounded-lg bg-sky-600 hover:bg-sky-700", children: "Envoyer la demande" }) })] }) }));
};
export default DynamicForm;
