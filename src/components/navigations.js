import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsBriefcaseFill } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { Container, Nav, Navbar } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import SocialIcons from './SocialIcons';

function Navigations() {

    const [show, setShow] = useState(false);
    const [key, setKey] = useState('home');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header>
            <Navbar expand="lg" className="mb-3 pe-sm-4 pe-3 navbar fixed-top">
                <Container fluid className="pb-3 justify-content-lg-center">
                    <Navbar.Brand href="#" className="py-0 my-0"><Link className="links display-3 animate-character my-0 py-0 ms-sm-4 ms-2" to="/">Ego</Link></Navbar.Brand>
                    <span className="hamburger-icon px-2 py-1 rounded d-lg-none d-inline" onClick={handleShow}>
                        <FiMenu className='fs-3 text-black' />
                    </span>
                    <Navbar.Collapse>
                        <Nav className="justify-content-center flex-grow-1 pe-3">
                            <Link id="nav1" onClick={(event) => { setKey('home') }} className={`links navs me-lg-5 mb-lg-0 mb-3 ${key === 'home' ? 'active' : 'not-active'}`} to="/">Home</Link>
                            <Link id="nav2" onClick={() => { setKey('about') }} className={`links navs me-lg-5 mb-lg-0 mb-3 ${key === 'about' ? 'active' : 'not-active'}`} to="/about">About me</Link>
                            <Link id="nav3" onClick={() => { setKey('project') }} className={`links navs me-lg-5 mb-lg-0 mb-3 ${key === 'project' ? 'active' : 'not-active'}`} to="/projects">My projects</Link>
                            <Link id="nav4" onClick={() => { setKey('contact') }} className={`links navs mb-lg-0 mb-5 ${key === 'contact' ? 'active' : 'not-active'}`} to="/contact">Contact me</Link>
                        </Nav>
                        <a href="https://www.fiverr.com/share/L0DNY0" target={"_blank"} rel="noreferrer" variant="primary" className="hireMeButton btn px-3 py-2 text-uppercase">Hire Me <BsBriefcaseFill className="ms-3 mb-1" /> </a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Offcanvas show={show} onHide={handleClose} placement='end' className='offCanvas'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="align-items-center">
                    <SocialIcons SocialIconContainerClass={"home-social-icons-container d-sm-none d-flex"} SocialIconClass={'socialIconsHome'} />
                    <Nav className="justify-content-center flex-grow-1 pe-3 flex flex-column">
                        <Link id="nav1" onClick={() => { setKey('home') }} className={`links navs me-lg-5 mb-lg-0 mb-3 ${key === 'home' ? 'active' : 'not-active'}`} to="/">Home</Link>
                        <Link id="nav2" onClick={() => { setKey('about') }} className={`links navs me-lg-5 mb-lg-0 mb-3 ${key === 'about' ? 'active' : 'not-active'}`} to="/about">About me</Link>
                        <Link id="nav3" onClick={() => { setKey('project') }} className={`links navs me-lg-5 mb-lg-0 mb-3 ${key === 'project' ? 'active' : 'not-active'}`} to="/projects">My projects</Link>
                        <Link id="nav4" onClick={() => { setKey('contact') }} className={`links navs mb-lg-0 mb-5 ${key === 'contact' ? 'active' : 'not-active'}`} to="/contact">Contact me</Link>
                    </Nav>
                    <a href="https://www.fiverr.com/share/L0DNY0" target={"_blank"} rel="noreferrer" variant="primary" className="hireMeButton btn px-3 py-2 text-uppercase">Hire Me <BsBriefcaseFill className="ms-3 mb-1" /> </a>
                </Offcanvas.Body>
            </Offcanvas>
        </header>
    )
}

export default Navigations