import { Outlet } from "react-router-dom";
import Navbar from "../components/header/nav";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar logo="MonSite" />

      <main className="flex-1 max-w-6xl px-4 pt-6 mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
