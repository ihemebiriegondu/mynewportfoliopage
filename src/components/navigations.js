import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SocialIcons from './SocialIcons';
import { usePortfolioSection } from '../hooks/usePortfolioSection';
import { hasValue } from '../services/portfolioService';

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About me' },
  { to: '/projects', label: 'My projects' },
  { to: '/contact', label: 'Contact me' },
];

const getNavLinkClass = (isActive, isLast) =>
  `links navs ${isLast ? 'mb-lg-0 mb-5' : 'me-lg-5 mb-lg-0 mb-3'} ${
    isActive ? 'active' : 'not-active'
  }`;

function NavLinks({ onNavigate }) {
  return NAV_LINKS.map(({ to, label, end }, index) => (
    <NavLink
      key={to}
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) =>
        getNavLinkClass(isActive, index === NAV_LINKS.length - 1)
      }
    >
      {label}
    </NavLink>
  ));
}

function Navigations() {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const { data: homeData } = usePortfolioSection('home');

  useEffect(() => {
    const desktopNav = window.matchMedia('(min-width: 992px)');

    const closeOnDesktop = (event) => {
      if (event.matches) {
        setShow(false);
      }
    };

    closeOnDesktop(desktopNav);
    desktopNav.addEventListener('change', closeOnDesktop);

    return () => desktopNav.removeEventListener('change', closeOnDesktop);
  }, []);

  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const socialLinks = homeData?.socialLinks;
  const hireMeLink = homeData?.hireMeLink;

  return (
    <header>
      <Navbar expand="lg" className="mb-3 pe-sm-4 pe-3 navbar fixed-top">
        <Container fluid className="pb-3 justify-content-lg-center">
          <Navbar.Brand className="py-0 my-0 navbar-brand-logo">
            <NavLink className="links nav-logo ms-sm-4 ms-2" to="/">
              Ego
            </NavLink>
          </Navbar.Brand>
          <span
            className="hamburger-icon px-2 py-1 rounded d-lg-none d-inline"
            onClick={handleShow}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handleShow();
              }
            }}
            aria-label="Open navigation menu"
          >
            <FiMenu className="fs-3 text-black" />
          </span>
          <Navbar.Collapse>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <NavLinks onNavigate={handleClose} />
            </Nav>
            {hasValue(hireMeLink) && (
              <a
                href={hireMeLink}
                target="_blank"
                rel="noreferrer"
                className="hireMeButton btn px-3 py-2 text-uppercase"
              >
                Hire Me <BsBriefcaseFill className="ms-3 mb-1" />
              </a>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {show && (
      <Offcanvas show={show} onHide={handleClose} placement="end" className="offCanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg" />
        </Offcanvas.Header>
        <Offcanvas.Body className="align-items-center">
          <SocialIcons
            links={socialLinks}
            SocialIconContainerClass="home-social-icons-container d-sm-none d-flex"
            SocialIconClass="socialIconsHome"
          />
          <Nav className="justify-content-center flex-grow-1 pe-3 flex flex-column">
            <NavLinks onNavigate={handleClose} />
          </Nav>
          {hasValue(hireMeLink) && (
            <a
              href={hireMeLink}
              target="_blank"
              rel="noreferrer"
              className="hireMeButton btn px-3 py-2 text-uppercase"
            >
              Hire Me <BsBriefcaseFill className="ms-3 mb-1" />
            </a>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      )}
    </header>
  );
}

export default Navigations;
