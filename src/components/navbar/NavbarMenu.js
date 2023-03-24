import { Link, Outlet } from "react-router-dom";
import "./navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import Menu from "../menu/Menu";

function NavbarMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="navbar">
      <Navbar
        className="navWrapper"
        collapseOnSelect
        expand="md"
        variant="dark"
      >
        <Container className="navContainer">
          <Link to="/" className="logo-container">
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

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navlist">
              <Link to="/">HOME</Link>
              <Link to="/jobs">JOBS</Link>
              <Link to="/employer">EMPLOYER</Link>
              {/* <Link to="/join-us">JOIN US</Link> */}
              {/* <Link to="/contact">CONTACT</Link> */}
            </Nav>
          </Navbar.Collapse>
          <Nav className="menu">
            <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
          </Nav>
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
