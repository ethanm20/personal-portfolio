import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

export function Experience() {
    interface ExperienceElement {
        name: string;
        level?: number; // 0-100 percent
        location?: string;
        description?: string;
    }

    const experiences: ExperienceElement[] = [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'CSS / Bootstrap', level: 80 },
        { name: 'Node.js', level: 70 },
        { name: 'Python', level: 75 },
    ];
    
    return (
        <>
            <section className="py-5 bg-dark" style={{width: '100%'}}>
                <Container>
                    <h2 className="mb-4 text-center fw-bold">Experience</h2>
                    <Row>
                    {experiences.map(({ name, level }, idx) => (
                        <Col key={idx} md={6} className="mb-4">
                        <h5>{name}</h5>
                        <ProgressBar now={level} label={`${level}%`} />
                        </Col>
                    ))}
                    </Row>
                </Container>
            </section>
        </>

    )
}