import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Skills() {
    return (
        <section className="skills" id="skills">
            <Container className="skills-container">
                <Row>
                    <Col className="skills-content" lg={6}>
                        <img style={{ width: 'min(500px, 90%)' }} src="https://via.placeholder.com/500" alt="Francesco Merighi" />
                    </Col>
                    <Col className="skills-content" lg={6}>
                        <h3 className="about-me-title">My Skills</h3>
                        <p>Hi, I'm Francesco Merighi, a web developer and UI/UX designer based in Italy. I'm passionate about creating beautiful and functional websites and applications. I'm always looking for new challenges and opportunities to grow, so feel free to contact me if you have any questions or if you want to work with me!</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;