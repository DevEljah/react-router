import { Link, Outlet } from "react-router-dom";

// import Navbar from "../final/components/Navbar";
import Navbar from "../final/components/StyledNavbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer className="section">Footer in SharedLayout</footer>
    </>
  );
};
export default SharedLayout;
