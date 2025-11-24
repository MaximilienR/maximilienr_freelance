import { Outlet } from "react-router-dom";
import Navbar from "../components/header/nav";
import logoImg from "../assets/logo.png"; // Assure-toi que le chemin est correct

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Utilise logoSrc pour ton image */}
      <Navbar logoSrc={logoImg} />

      <main className="flex-1 max-w-6xl px-4 pt-6 mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
