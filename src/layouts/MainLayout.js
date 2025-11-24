import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Navbar from "../components/header/nav";
import logoImg from "../assets/logo.png"; // Assure-toi que le chemin est correct
export default function MainLayout() {
    return (_jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsx(Navbar, { logoSrc: logoImg }), _jsx("main", { className: "flex-1 max-w-6xl px-4 pt-6 mx-auto", children: _jsx(Outlet, {}) })] }));
}
