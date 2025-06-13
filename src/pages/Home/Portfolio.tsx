import { Container, Row, Col, ProgressBar, Carousel, Card, Button } from 'react-bootstrap';

export function Portfolio() {
    interface Project {
        name: string;
        level?: number; // 0-100 percent
        description?: string;
        url?: string;
        github?: string;
        icon?: string;

    }

    const projects: Project[] = [
        {
            name: 'AuthFuture',
            description:
            'Explains and provides live demo of FIDO2 WebAuthn protocol and Time-Based One Time Passwords.',
            url: 'https://authfuture.com',
            github: 'https://github.com/ethanm20/AuthFuture',
            icon: 'fa-solid fa-key'
        },
        {
            name: 'Leveraging AI to Enhance Vulnerability Descriptions',
            icon: 'bi bi-shield-fill-exclamation',
            description: 'Prompt Engineering and Chain of Thought techniques are employed to improve the clarity and detail of vulnerability descriptions within a comprehensive vulnerability detection tool project.'
        },
        {
            name: 'Room Temperature Detection',
            icon: 'fa-solid fa-temperature-high',
            description: 'Worked in a group project in COMP6733 Internet of Things (IoT) course to predict the temperature of a room using WiFi Channel State Information (CSI). Used technologies including Nexmon CSI utility operating on Raspberry Pi 4 devices, MQTT protocol for communication between devices and Amazon AWS IoT core.'
        },
        {
            name: 'Accommodation Booking System',
            icon: 'fa-solid fa-hotel',
            description: 'As part of the Web Front End Programming course, developed a sample Accommodation Booking System frontend (based off Airbnb) using ReactJS.'
        },
        {
            name: 'COVID Contact Tracing Protocol',
            icon: 'fa-solid fa-virus-covid',
            description: 'Worked in a pair to implement a secure & anonymous contact tracing protocol in Python with Encounter IDs stored in a main server using TCP and a k-of-n Shamir Shared Secret way to enable people to see if they are exposed to COVID. Created EncID with other devices over UDP on Bluetooth.'
        },
        {
            name: 'WiFi Geolocation Project',
            icon: 'fa-solid fa-wifi',
            description: 'Developed a Python Flask app which using RSS values of different routers attempted to geolocate your location in a building and display it on a live basic map.'
        }
    ];

    
    return (
        <>
            <section className="py-5 bg-dark" style={{width: '100%'}} id="projects">
                <Container>
                    <h2 className="mb-4 text-center fw-bold">Projects</h2>
                    <Container className="justify-content-center" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        {projects.map(({ name, level, description, url, icon, github }, idx) => (
                            <Col key={idx} md={6} className="mb-4">
                                <Row className="align-items-start">
                                    {/* Left: Logo */}
                                    <Col xs="auto">
                                        <i className={icon}></i>
                                    </Col>

                                    {/* Right: Text Content */}
                                    <Col>
                                        <div className="text-start">
                                            <h3 className="mb-1">{name}</h3>
                                            <div style={{display: 'flex', flexDirection: 'row', gap: '5px'}}>
                                            {url && <div style={{border: '1px solid #FFF', borderRadius: '20px', textDecoration: 'none', paddingLeft: '10px', paddingRight: '10px' }} className="d-inline-flex align-items-center justify-content-center text-white"><a href={url} style={{color: '#FFF', textDecoration: 'none', fontSize: '18px'}}><i className="bi bi-link"></i> {url}</a></div>}
                                            {github && <div style={{border: '1px solid #FFF', borderRadius: '20px', textDecoration: 'none', paddingLeft: '10px', paddingRight: '10px' }} className="d-inline-flex align-items-center justify-content-center text-white"><a href={github} style={{color: '#FFF', textDecoration: 'none', fontSize: '18px'}}><i className="fab fa-github"></i> Source Code</a></div>}
                                            </div>
                                            <p className="mb-0" style={{fontSize: '20px'}}>{description}</p>
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