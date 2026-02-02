import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Projet from "./pages/Project/Projet";
import Contact from "./pages/Contact/Contact";
import Tarif from "./pages/Tarrif/Tarif";
import Mention from './pages/Mention/Mention';
import Page404 from "./pages/Error/Error"; // <- vérifie bien la casse

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projet", element: <Projet /> },
      { path: "contact", element: <Contact /> },
      { path: "tarif", element: <Tarif /> },
      { path: "mention", element: <Mention /> },
      // Catch-all pour toutes les URLs non définies.....
      { path: "*", element: <Page404 /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
