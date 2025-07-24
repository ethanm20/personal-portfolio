import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

export function Qualifications() {
    interface Credential {
        name: string;
        institution?: string; 
        description?: string;
        location?: string;
        url?: string;
        icon?: string;

    }

    const credentials: Credential[] = [
        { name: 'Bachelor of Science (Computer Science) (2:1 Honours)', institution: 'University of New South Wales', location: 'Sydney, Australia', icon:'unsw-logo.jpg'},
        { name: 'The Right to Repair Course', institution: 'The Engineering & Design Institute', location: 'London, United Kingdom', icon:'tedi-london-logo.jpg'},
        { name: 'Bachelor of Science (Computer Science)', institution: 'University of New South Wales', location: 'Sydney, Australia', icon:'unsw-logo.jpg'}
    ];
    
    return (
        <>
            <section className="py-5 bg-dark" style={{width: '100%'}} id="education">
                <Container>
                    <h2 className="mb-4 text-center fw-bold">Education</h2>
                    <Container className="justify-content-center" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        {credentials.map(({ name, institution, description, location, icon }, idx) => (
                            <Col key={idx} md={6} className="mb-4">
                                <Row className="align-items-start">
                                    {/* Left: Logo */}
                                    <Col xs="auto">
                                    <img
                                        src={`/icons/${icon}`}
                                        alt={institution}
                                        width="48"
                                        height="48"
                                        style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                                    />
                                    </Col>

                                    {/* Right: Text Content */}
                                    <Col>
                                        <div className="text-start">
                                            <h3 className="mb-1">{institution}</h3>
                                            <h6 className="mb-1">{name}</h6>
                                            <h6 className="mb-2">
                                                <i className="bi bi-geo-alt-fill"></i> {location}
                                            </h6>
                                            <p className="mb-0">{description}</p>
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