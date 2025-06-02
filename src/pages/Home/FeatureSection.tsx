import { Container, Row, Col, Button } from 'react-bootstrap';

export function FeatureSection() {
    return (
        <>
            <section className="bg-primary text-white py-5" style={{width: '100%'}}>
                <Container>
                    <Row className="align-items-center">
                    <Col md={6}>
                        <h1 className="display-4 fw-bold">Ethan Marlow</h1>
                        <p className="lead my-4">
                        Software Developer
                        </p>
                        <p className="lead my-4">
                            <a href="https://www.linkedin.com/in/ethan-marlow/" style={{color: '#FFF'}}><i className="bi bi-linkedin"></i></a><a href="https://github.com/ethanm20" style={{color: '#FFF'}}><i className="bi bi-github"></i></a>
                        </p>
                        <Button variant="light" size="lg" href="#features">
                        Get Started
                        </Button>
                    </Col>
                    <Col md={6} className="text-center">
                        {/* Example image: replace with your own or SVG */}
                        <img
                        src="https://via.placeholder.com/500x300"
                        alt="Feature Illustration"
                        className="img-fluid rounded"
                        />
                    </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}