import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Projet from "./pages/Project/Projet";
import Contact from "./pages/Contact/Contact";
import Tarif from "./pages/Tarrif/Tarif";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,   // 👈 Navbar + Outlet
    children: [
      { index: true, element: <Home /> },
      { path: "projet", element: <Projet /> },
      {path: "contact", element: <Contact /> },
      {path: "tarif", element: <Tarif /> },
      

 
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
