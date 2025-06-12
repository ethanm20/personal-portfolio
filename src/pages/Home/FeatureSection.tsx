import { Container, Row, Col, Button } from 'react-bootstrap';

export function FeatureSection() {
    return (
        <>
            <section className="text-white py-5" style={{width: '100%', backgroundImage: "linear-gradient(90deg,rgba(61, 61, 110, 1) 0%, rgba(56, 51, 79, 1) 35%, rgba(1, 0, 10, 1) 100%)"}}>
                <Container>
                    <Row className="align-items-center">
                    <Col md={6}>
                        <h1 className="display-4 fw-bold">Ethan Marlow</h1>
                        <p className="lead my-4" style={{textTransform: 'uppercase'}}>
                        Software Developer
                        </p>
                        <p className="lead my-4 d-flex gap-3 justify-content-center">
                            <a
                                href="https://www.linkedin.com/in/ethan-marlow/"
                                className="d-inline-flex align-items-center justify-content-center rounded-circle text-white"
                                style={{ width: '40px', height: '40px', border: '1px solid #FFF' }}
                            >
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a
                                href="https://github.com/ethanm20"
                                className="d-inline-flex align-items-center justify-content-center rounded-circle text-white"
                                style={{ width: '40px', height: '40px', border: '1px solid #FFF' }}
                            >
                                <i className="bi bi-github"></i>
                            </a>
                        </p>
                        <p>

                        </p>

                        <Button variant="light" size="lg" href="#projects">
                        View Portfolio <i className="bi bi-arrow-right"></i>
                        </Button>
                    </Col>
                    <Col md={6} className="text-center" style={{fontSize: '42px'}}>
                        <i className="fa-solid fa-code"></i>
                    </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}