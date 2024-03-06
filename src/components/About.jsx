import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
    return (
        <section className="about-me" id="about-me">
            <Container className="about-me-container">
                <Row>
                    <Col className="about-me-content" lg={6}>
                        <h3 className="about-me-title">About Me</h3>
                        <p>Hi, I'm Francesco Merighi, a web developer and UI/UX designer based in Italy. I'm passionate about creating beautiful and functional websites and applications. I'm always looking for new challenges and opportunities to grow, so feel free to contact me if you have any questions or if you want to work with me!</p>
                    </Col>
                    <Col className="about-me-content" lg={6}>
                        <img style={{ width: 'min(500px, 90%)' }} src="https://via.placeholder.com/500" alt="Francesco Merighi" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;