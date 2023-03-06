import { Link, Outlet } from "react-router-dom";
import "./navbar.css";
import Image from "../image/Image";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavbarMenu() {
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
              <Image imgName={"Steadfast-logo_withTxt.png"} className="logo" />
              <h1 className="logoName">
                STEADFAST <br /> COMMUNICATIONS
              </h1>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navlist">
              <Link to="/">HOME</Link>
              <Link to="/jobs">JOBS</Link>
              <Link to="/employer">EMPLOYER</Link>
              <Link to="/join-us">JOIN US</Link>
              <Link to="/contact">CONTACT</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default NavbarMenu;
