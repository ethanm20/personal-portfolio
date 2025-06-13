import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';


//import { Navbar, Container, Nav, Button} from 'react-bootstrap';


//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//import { Outlet } from 'react-router-dom';

import { Container, Row, Col, Button} from 'react-bootstrap';




export function NavigationBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Navbar variant="dark" sticky="top" expand="lg" style={{width: '100%', top: '0px', zIndex: '30', marginTop:' -49px', height: '50px', backgroundColor: scrolled ? '#111111' : 'transparent', transition: 'background-color 0.3s ease', borderBottom: scrolled ? 'none': '1px solid #FFF'}}>
                <Container style={{height: '50px', display: 'flex', flexDirection: 'row'}}>
                    <Navbar.Brand href="/" style={{display: 'flex', width: '105px'}}><div style={{border: '1px solid #FFF', padding: '3px'}}>E.M.</div></Navbar.Brand>
                    <Nav className="me-auto" style={{justifyContent: 'end', flexDirection: 'row', display: 'flex', width: 'calc(100% - 150px)'}}>
                        <Nav.Item>
                            <Nav.Link href="#skills">
                                Skills
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#experience">
                                Experience
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#projects">
                                Projects
                            </Nav.Link>
                        </Nav.Item>
                         <Nav.Item>
                            <Nav.Link href="#education">
                                Education
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="https://github.com/ethanm20/personal-portfolio" target="_blank">
                                <Button variant="outline-light" style={{borderRadius: '25px'}} className="github-header-outer">
                                    <i className="bi bi-github"></i> <span className="github-text">Source Code</span>
                                </Button>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>


            <Outlet/>

        </>
    )


}