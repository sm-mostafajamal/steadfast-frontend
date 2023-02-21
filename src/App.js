import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar className="navbar">
          <Container className="container">
            <Navbar.Brand className="brand">
              <Link to={"/"}>
                <img
                  src={`${process.env.PUBLIC_URL}/steadfast_images/Steadfast-logo_withTxt.png`}
                  alt=""
                  className="logo"
                />
              </Link>
            </Navbar.Brand>
            <Nav className="nav">
              <Link to={"/"}>HOME</Link>
              <Link to={"/jobs"}>JOBS</Link>
              <Link to={"/join-us"}>JOIN US</Link>
              <Link to={"/employer"}>EMPLOYER</Link>
              <Link to={"/contact"}>CONTACT</Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
