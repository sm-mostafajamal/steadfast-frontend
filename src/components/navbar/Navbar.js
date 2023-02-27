import { Link, Outlet } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navWrapper">
        <div className="navContainer">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/steadfast_images/Steadfast-logo_withTxt.png`}
              className="logo"
              alt="steadfast logo"
            />
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
