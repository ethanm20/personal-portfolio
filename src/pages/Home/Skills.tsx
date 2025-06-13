import { Container, Row, Col, ProgressBar, Tabs, Tab } from 'react-bootstrap';

export function Skills() {
    interface Skill {
        name: string;
        level?: number; // 0-100 percent
        icon?: string;
        type?: string;
    }

    const skills: Skill[] = [
        { name: 'PHP', level: 75, icon: 'fab fa-php', type: 'language'  },
        { name: 'Python', level: 75, icon: 'fab fa-python', type: 'language'  },
        { name: 'JavaScript', level: 90, icon: 'fab fa-js', type: 'language'  },
        { name: 'React', level: 85, icon: 'fab fa-react', type: 'language' },
        { name: 'HTML5', level: 80, icon: 'fab fa-html5', type: 'language'  },
        { name: 'Node.js', level: 70, icon: 'fab fa-node-js', type: 'language'  },
        { name: 'Typescript', level: 70, icon: 'bi bi-typescript', type: 'language'  },
        { name: 'Bootstrap', type: 'language', icon: 'fab fa-bootstrap'},
        { name: 'CSS', type: 'language', icon: 'fab fa-css3'},
        { name: 'jQuery', type: 'language'},
        { name: 'Networking', type: 'general', icon: 'fa-solid fa-globe'},
        { name: 'Cyber Security', type: 'general', icon: 'fa-solid fa-shield-halved'},
        {name: 'Full-Stack Development', type: 'general', icon: 'fa-solid fa-code'},
        { name: 'Linux CLI', type: 'tools', icon: 'fa-solid fa-terminal'},
        { name: 'SQL Databases', type: 'tools', icon: 'fa-solid fa-database'},
        { name: 'Arduinos', type: 'tools', icon: 'fa-solid fa-microchip'},
        { name: 'Git', type: 'tools', icon: 'fab fa-git'},
        { name: 'Jira', type: 'tools', icon: 'fab fa-jira'},
        { name: 'Stripe API', type: 'tools', icon: 'fab fa-stripe-s'},
        { name: 'AWS', type: 'tools', icon: 'fab fa-aws'},
        { name: 'LLM Integration', type: 'tools', icon: 'fa-solid fa-brain'},

    ];
    
    return (
        <>
            <section className="py-4 mb-12 bg-dark" style={{width: '100%'}} id="skills">
                <Container>
                    <h2 className="mb-4 text-center fw-bold">Skills</h2>
                    <Row style={{justifyContent: 'center'}}>
                    
                        <Tabs defaultActiveKey="general" id="uncontrolled-tab-example" className="mb-3" style={{alignItems: 'center'}}>
                            <Tab eventKey="general" title="General">
                                <Row md={12}>
                                    {skills.filter(skill => (skill.type === 'general')).map(({ name, level, icon }, idx) => (
                                        <Col key={idx} xs={12} sm={6} md={4} className="mb-4">
                                            <h5><i className={icon}></i> {name}</h5>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab>
                            <Tab eventKey="languages" title="Languages & Frameworks">
                                <Row md={12}>
                                    {skills.filter(skill => (skill.type === 'language')).map(({ name, level, icon }, idx) => (
                                            <Col key={idx} xs={12} sm={6} md={4} className="mb-4">
                                                <h5><i className={icon}></i> {name}</h5>
                                            </Col>
                                    ))}
                                </Row>
                            </Tab>
                            <Tab eventKey="tools" title="Tools & Platforms">
                                <Row md={12}>
                                    {skills.filter(skill => (skill.type === 'tools')).map(({ name, level, icon }, idx) => (
                                        <Col key={idx} xs={12} sm={6} md={4} className="mb-4">
                                            <h5><i className={icon}></i> {name}</h5>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab>
                        </Tabs>

                    </Row>
                </Container>
            </section>
        </>

    )
}