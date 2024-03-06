import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import downArrow from "../images/down-arrow.svg";
import shapesUp from "../images/shapes-up.svg";
import shapesDown from "../images/shapes-down.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Hero() {
    return (
        <main className="hero-section" id="hero">
            <Container className="hero-container">
                <Row className="test">
                    <Col className="hero-content" lg={6}>
                        <h1 className="hero-title">Hello, <br></br> I'm <span>Francesco Merighi</span></h1>
                        <div className="hero-links">
                            <div class="hero-social">
                                <a href="https://www.linkedin.com/in/francesco-merighi-373939217/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/francescomerighi1202" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://www.instagram.com/emmeelite/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                            <div className="hero-contact">
                                <a className="contact-me-link" href="#contacts">Contact me!</a>
                            </div>
                        </div>
                    </Col>
                    <Col className="hero-content" lg={6}>
                        <div class="hero-subtitles">
                            <h2>Web Developer</h2>
                            <h2>UI/UX Designer</h2>
                        </div>
                        <div className="hero-projects">
                            <a className="projects-link" href="#projects">See my projects!</a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="down-arrow-container">
                <a href="#about-me">
                    <img className="down-arrow-icon" src={downArrow} alt="Down arrow" />
                </a>
            </div>

            <div className="shapes-container">
                <img className="shapes-up" src={shapesUp} alt="Shapes up" />
            </div>
            <div className="shapes-container">
                <img className="shapes-down" src={shapesDown} alt="Shapes up" />
            </div>
        </main>
    );
}

export default Hero;