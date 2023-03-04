import { Link, Outlet } from "react-router-dom";
import "./navbar.css";
import Image from "../image/Image";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navWrapper">
        <div className="navContainer">
          <Link to="/">
            <div className="logo-wrapper">
              <Image imgName={"Steadfast-logo_withTxt.png"} className="logo" />
              <h1 className="logoName">
                STEADFAST <br /> COMMUNICATIONS
              </h1>
            </div>
          </Link>
          <div className="navlist">
            <Link to="/">HOME</Link>
            <Link to="/jobs">JOBS</Link>
            <Link to="/employer">EMPLOYER</Link>
            <Link to="/joinUs">JOIN US</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
