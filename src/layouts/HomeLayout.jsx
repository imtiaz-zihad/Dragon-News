import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <NavBar />
      </nav>
      <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavbar />
        </aside>
        <section className="left col-span-6"><Outlet /></section>
        <aside className="left col-span-3"><RightNavbar /></aside>
      </main>
    </div>
  );
};

export default HomeLayout;
