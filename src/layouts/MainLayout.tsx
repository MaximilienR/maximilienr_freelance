import { Outlet } from "react-router-dom";
import Navbar from "../components/header/nav";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar logo="MonSite" />

      <main className="flex-1 pt-6 px-4 max-w-6xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
