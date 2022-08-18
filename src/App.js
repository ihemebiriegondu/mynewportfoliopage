import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SocialIcons from './components/SocialIcons';

import { BsBriefcaseFill } from 'react-icons/bs'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



function App() {
  return (
    <Router>
      <header>
        <Navbar expand="lg" className="mb-3 pe-sm-4 pe-3 navbar fixed-top">
          <Container fluid className="pb-3 justify-content-lg-center">
            <Navbar.Brand href="#" className="py-0 my-0"><Link className="links display-3 animate-character my-0 py-0 ms-sm-4 ms-2" to="/">Ego</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} className="hamburger-icon" />
            <Navbar.Offcanvas className="offCanvas"
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="align-items-center">
                <SocialIcons SocialIconContainerClass={"home-social-icons-container d-sm-none d-flex"} SocialIconClass={'socialIconsHome'} />
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link className="p-0"><Link className="links navs me-lg-5 mb-lg-0 mb-3" to="/">Home</Link></Nav.Link>
                  <Nav.Link className="p-0"><Link className="links navs me-lg-5 mb-lg-0 mb-3" to="/about">About me</Link></Nav.Link>
                  <Nav.Link className="p-0"><Link className="links navs me-lg-5 mb-lg-0 mb-3" to="/projects">My projects</Link></Nav.Link>
                  <Nav.Link className="p-0"><Link className="links navs mb-lg-0 mb-5" to="/contact">Contact me</Link></Nav.Link>
                </Nav>
                <a href="https://www.fiverr.com/share/L0DNY0" target={"_blank"} rel="noreferrer" variant="primary" className="hireMeButton btn px-3 py-2 text-uppercase">Hire Me <BsBriefcaseFill className="ms-3 mb-1" /> </a>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router >
  );
}

export default App;
