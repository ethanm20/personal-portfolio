import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

export function Experience() {
    interface ExperienceElement {
        name: string;
        level?: number; // 0-100 percent
        location?: string;
        description?: string;
        company?: string;
        logo?: string;
    }

    const experiences: ExperienceElement[] = [
        { name: 'Honours Research Student', location: 'Sydney, Australia', company: 'University of New South Wales', logo: 'unsw-logo.jpg' },
        { name: 'Full-Stack Web Developer', location: 'Sydney, Australia', company: 'The Big Smoke Media Group', logo: 'the-big-smoke-logo.jpg' },
        { name: 'Junior Web Developer', location: 'Sydney, Australia', company: 'The Big Smoke Media Group', logo: 'the-big-smoke-logo.jpg' },
    ];
    
    return (
        <>
            <section className="py-5 bg-dark" style={{width: '100%'}} id="experience">
                <Container>
                    <h2 className="mb-4 text-center fw-bold">Experience</h2>
                    <Container className="justify-content-center" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        {experiences.map(({ name, location, company, logo }, idx) => (
                            <Col key={idx} md={6} className="mb-4">
                                <Row className="align-items-start">
                                    {/* Left: Logo */}
                                    <Col xs="auto">
                                    <img
                                        src={`/icons/${logo}`}
                                        alt={company}
                                        width="48"
                                        height="48"
                                        style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                                    />
                                    </Col>

                                    {/* Right: Text Content */}
                                    <Col>
                                        <div className="text-start">
                                            <h3 className="mb-1">{company}</h3>
                                            <h6 className="mb-1">{name}</h6>
                                            <h6 className="mb-2">
                                                <i className="bi bi-geo-alt-fill"></i> {location}
                                            </h6>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        ))}
                    </Container>

                </Container>
            </section>
        </>

    )
}