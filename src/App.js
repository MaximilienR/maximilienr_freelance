import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Projet from "./pages/Home/Projet";
import Contact from "./pages/Home/Contact";
import Tarif from "./pages/Home/Tarif";
const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(MainLayout, {}), // 👈 Navbar + Outlet
        children: [
            { index: true, element: _jsx(Home, {}) },
            { path: "projet", element: _jsx(Projet, {}) },
            { path: "contact", element: _jsx(Contact, {}) },
            { path: "tarif", element: _jsx(Tarif, {}) },
        ],
    },
]);
export default function App() {
    return _jsx(RouterProvider, { router: router });
}
