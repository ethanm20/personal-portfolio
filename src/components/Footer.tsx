import { Container, Row, Col, Button} from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Footer() {
    return (
        <>
            <div id="footer-container" style={{color: '#FFF', backgroundColor: '#111111', maxWidth: '100%'}}>
                <Container style={{maxWidth: '100%'}}>
                    <Row style={{height: '10vh'}}>
                        <Col md={6} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', fontSize: '24px'}}>
                            <Row>
                                <span>Ethan Marlow</span>
                            </Row>
                            
                        </Col>
                        <Col md={6} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Row>
                                <Col md={12} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '5px', fontSize: '20px'}}>
                                    <a href="https://linkedin.com/in/ethan-marlow" target='_blank' style={{color: '#FFF'}}>
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                    <a href="https://github.com/ethanm20" target='_blank' style={{color: '#FFF'}}>
                                        <i className="bi bi-github"></i>
                                    </a>
                                    <Nav.Item>
                                        <Nav.Link href="https://github.com/ethanm20/AuthFuture" target="_blank">
                                            <Button variant="outline-light" style={{borderRadius: '25px'}} className="github-header-outer">
                                                <i className="bi bi-github"></i> <span className="github-text">Source Code</span>
                                            </Button>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{borderTop: '1px solid #f9f9f9'}}>
                        <Col md={12} style={{textAlign: 'center'}}>
                            <span>&copy; 2025 <b>Ethan Marlow</b>     All rights reserved.</span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}