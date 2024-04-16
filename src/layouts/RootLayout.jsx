import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import Sidebar from "../components/Sidebar";
import useAlan from "../hooks/useAlan";

const RootLayout = () => {
  useAlan();
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
