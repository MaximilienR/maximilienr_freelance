import { Outlet } from "react-router-dom";
import Navbar from "../components/header/nav";
import Footer from  "../components/footer/footer";
 export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar logo="MonSite" />

<main className="flex-1 w-full px-4 pt-6">
        <Outlet />
      </main>
      <Footer />
     </div>
  );
}
