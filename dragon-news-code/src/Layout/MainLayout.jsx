// In the name of Allah
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/homelayout/LeftAside";
import RightAside from "../Components/homelayout/RightAside";

const MainLayout = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <Header />
        <section className="w-11/12 mx-auto my-3">
          <LatestNews />
        </section>
        <Navbar />
      </header>

      {/* Main Content Area */}
      <main className="w-11/12 mx-auto my-5 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <aside className="md:col-span-3">
          <LeftAside />
        </aside>

        {/* Main Content */}
        <section className="md:col-span-6">
          <Outlet />
        </section>

        {/* Right Sidebar */}
        <aside className="md:col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default MainLayout;
