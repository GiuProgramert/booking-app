import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import "../assets/css/layout.css";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
