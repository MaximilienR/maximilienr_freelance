import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Projet from "./pages/Home/Projet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,   // 👈 Navbar + Outlet
    children: [
      { index: true, element: <Home /> },
      { path: "projet", element: <Projet /> },

 
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
