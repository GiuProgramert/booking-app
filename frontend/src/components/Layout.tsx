import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import "../assets/css/layout.css";
import { Toaster } from "react-hot-toast";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Toaster position="bottom-left" />
    </>
  );
}

export default Layout;
