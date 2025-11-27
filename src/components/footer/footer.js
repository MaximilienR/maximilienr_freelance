import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import logoImg from "../../assets/logo.png";
const Footer = ({ logoSrc = logoImg, links, className = "", }) => {
    const footerLinks = links ?? [
        { name: "Accueil", href: "/" },
        { name: "Projet", href: "/projet" },
        { name: "Tarif", href: "/tarif" },
        { name: "Contact", href: "/contact" },
        { name: "Mentions", href: "/mention" },
    ];
    return (_jsx("footer", { className: `bg-slate-50 backdrop-blur-md shadow-sm ${className}`, children: _jsxs("div", { className: "px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex flex-col gap-8 md:flex-row md:justify-between md:items-center", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("img", { src: logoSrc, alt: "logo", className: "object-contain w-10 h-10" }), _jsx("span", { className: "text-xl font-semibold text-black select-none", children: "Freelance" })] }), _jsx("ul", { className: "flex flex-wrap justify-center gap-6 md:justify-end", children: footerLinks.map((link) => (_jsx("li", { children: _jsx("a", { href: link.href, target: link.external ? "_blank" : undefined, rel: link.external ? "noopener noreferrer" : undefined, className: "text-black transition-colors hover:text-blue-300", children: link.name }) }, link.name))) })] }), _jsx("div", { className: "my-8 border-t border-gray-800" }), _jsxs("p", { className: "text-sm text-center transition-colors text-black-900 hover:text-gray-300", children: ["\u00A9 ", new Date().getFullYear(), " Freelance. Tous droits r\u00E9serv\u00E9s."] })] }) }));
};
export default Footer;
