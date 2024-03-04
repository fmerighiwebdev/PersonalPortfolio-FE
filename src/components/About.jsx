import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
    return (
        <section className="about-me" id="about-me">
            <Container className="about-me-container">
                <h1>About Me</h1>
                <p>
                    Hi, I'm Francesco Merighi, a web developer and UI/UX designer based in Italy. I'm passionate about creating beautiful and functional websites and applications. I'm always looking for new challenges and opportunities to grow, so feel free to contact me if you have any questions or if you want to work with me!
                </p>
            </Container>
        </section>
    );
}

export default About;