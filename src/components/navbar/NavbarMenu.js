import "./navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import Menu from "../menu/Menu";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";

function NavbarMenu() {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="navbarContainer">
      <Navbar
        className="navWrapper"
        collapseOnSelect
        expand="md"
        variant="dark"
      >
        <Container className="navContainer">
          <Link
            to="/"
            className="logo-container"
            onClick={() => setOpen(false)}
          >
            <Navbar.Brand className="logo-wrapper">
              <div className="logo">
                <img
                  src="./steadfast_images/Steadfast-logo_withTxt.png"
                  alt="Steadfast Communication Logo"
                />
              </div>
              <h1 className="logoName">
                <span>STEADFAST</span>
                <br /> COMMUNICATIONS
              </h1>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            onClick={() => setOpen(false)}
          >
            <Nav className="me-auto navlist">
              <Link to="/">HOME</Link>
              <Link to="/jobs">JOBS</Link>
              <Link to="/employer">EMPLOYER</Link>
            </Nav>
          </Navbar.Collapse>
          <Link to="/login" onClick={() => setOpen(false)}>
            <button className="login-btn">LOG IN</button>
          </Link>

          <div className="menu">
            <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
          </div>
        </Container>
        <div className="menu-options" onClick={() => setOpen(!isOpen)}>
          {isOpen && <Menu />}
        </div>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default NavbarMenu;
