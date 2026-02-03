import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Projet from "./pages/Project/Projet";
import Contact from "./pages/Contact/Contact";
import Tarif from "./pages/Tarrif/Tarif";
import Mention from "./pages/Mention/Mention";
import Page404 from "./pages/Error/Error"; // <- vérifie bien la casse.
const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(MainLayout, {}),
        children: [
            { index: true, element: _jsx(Home, {}) },
            { path: "projet", element: _jsx(Projet, {}) },
            { path: "contact", element: _jsx(Contact, {}) },
            { path: "tarif", element: _jsx(Tarif, {}) },
            { path: "mention", element: _jsx(Mention, {}) },
            // Catch-all pour toutes les URLs non définies
            { path: "*", element: _jsx(Page404, {}) },
        ],
    },
]);
export default function App() {
    return _jsx(RouterProvider, { router: router });
}
