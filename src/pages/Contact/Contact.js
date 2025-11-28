import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { sendContactForm } from "../../api/contact.api";
const Contact = () => {
    // --- Validation Yup ---
    const validationSchema = Yup.object({
        email: Yup.string().email("Email invalide").required("Email requis"),
        sujet: Yup.string().required("Sujet requis"),
        message: Yup.string().required("Message requis").min(10, "Message trop court"),
    });
    // --- Submit ---
    const handleSubmit = async (values) => {
        const res = await sendContactForm(values);
        if (res.success) {
            alert("Message envoyé !");
        }
        else {
            alert("Erreur lors de l’envoi.");
        }
    };
    return (_jsxs("div", { className: "pb-12", children: [_jsx(Formik, { initialValues: { email: "", sujet: "", message: "" }, validationSchema: validationSchema, onSubmit: handleSubmit, children: () => (_jsxs(Form, { className: "\r\n              bg-white shadow rounded-2xl p-6 sm:p-8 mt-12 mx-auto space-y-6\r\n              w-full max-w-4xl\r\n              md:w-[48rem]\r\n            ", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-center md:text-3xl text-sky-900", children: "Contactez-moi" }), _jsx("p", { className: "mt-2 text-center text-gray-600", children: "Remplissez le formulaire ci-dessous pour me contacter." })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block mb-2 font-medium text-gray-700", children: "Email" }), _jsx(Field, { type: "email", id: "email", name: "email", placeholder: "votre.email@example.com", className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600" }), _jsx(ErrorMessage, { name: "email", component: "p", className: "mt-1 text-sm text-red-600" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "sujet", className: "block mb-2 font-medium text-gray-700", children: "Sujet" }), _jsxs(Field, { as: "select", id: "sujet", name: "sujet", className: "w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600", children: [_jsx("option", { value: "", children: "S\u00E9lectionnez un sujet" }), _jsx("option", { value: "formation", children: "Formation" }), _jsx("option", { value: "creation", children: "Cr\u00E9ation" }), _jsx("option", { value: "autre", children: "Autre" })] }), _jsx(ErrorMessage, { name: "sujet", component: "p", className: "mt-1 text-sm text-red-600" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block mb-2 font-medium text-gray-700", children: "Message" }), _jsx(Field, { as: "textarea", id: "message", name: "message", rows: 8, placeholder: "\u00C9crivez votre message ici...", className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600" }), _jsx(ErrorMessage, { name: "message", component: "p", className: "mt-1 text-sm text-red-600" })] }), _jsx("div", { className: "flex justify-center", children: _jsx("button", { type: "submit", className: "w-full px-6 py-3 text-lg font-semibold text-white transition rounded-lg bg-sky-600 hover:bg-sky-700 focus:ring-2 focus:ring-offset-2 focus:ring-sky-600 sm:w-auto", children: "Envoyer" }) })] })) }), _jsx("div", { className: "mt-6 text-center", children: _jsxs("p", { className: "mb-2 text-gray-700", children: ["Vous pr\u00E9f\u00E9rez me joindre sur les r\u00E9seaux sociaux ?", " ", _jsx("button", { type: "button", className: "ml-1 font-semibold underline text-sky-600", onClick: () => {
                                const url = import.meta.env.VITE_LINKEDIN_URL;
                                if (url) {
                                    window.open(url, "_blank", "noopener,noreferrer");
                                }
                                else {
                                    alert("Lien LinkedIn non défini !");
                                }
                            }, children: "Cliquez ici" })] }) })] }));
};
export default Contact;
