import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import downArrow from "../images/down-arrow.svg";
import downArrowDark from "../images/down-arrow-dark.svg";
import shapesUp from "../images/shapes-up.svg";
import shapesDown from "../images/shapes-down.svg";
import shapesUpDesk from "../images/shapes-up-desktop.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Hero({ isLightMode }) {
    return (
        <main className={isLightMode ? "hero-section" : "hero-section hero-dark"} id="hero">
            <Container className="hero-container">
                <Row>
                    <Col className="hero-content" lg={6}>
                        <h1 className={!isLightMode ? "hero-title text-dark" : "hero-title"}>Ciao, <br></br> sono <span>Francesco Merighi</span></h1>
                        <div className="hero-links" style={!isLightMode ? { borderTop: '2px solid rgb(70, 70, 70)' } : null}>
                            <div class="hero-social">
                                <a className={!isLightMode ? "text-dark-link": null} href="https://www.linkedin.com/in/francesco-merighi-373939217/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a className={!isLightMode ? "text-dark-link": null} href="https://github.com/francescomerighi1202" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a className={!isLightMode ? "text-dark-link": null} href="https://www.instagram.com/emmeelite/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                            <div className="hero-contact">
                                <a className="contact-me-link" href="#contacts">Contattami</a>
                            </div>
                        </div>
                    </Col>
                    <Col className="hero-content" lg={6}>
                        <div class="hero-subtitles" style={!isLightMode ? { borderBottom: '2px solid rgb(70, 70, 70)' } : null}>
                            <h2 className={!isLightMode ? "text-dark": null}>Web Developer</h2>
                            <h2 className={!isLightMode ? "text-dark": null}>UI/UX Designer</h2>
                        </div>
                        <div className="hero-projects">
                            <a className="projects-link" href="#projects">I miei progetti</a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="down-arrow-container">
                <a href="#about-me">
                    <img className="down-arrow-icon" src={!isLightMode ? downArrowDark : downArrow} alt="Down arrow" />
                </a>
            </div>

            <div className="shapes-container">
                <img className="shapes-up" src={shapesUp} alt="Shapes up" />
            </div>
            <div className="shapes-container">
                <img className="shapes-down" src={shapesDown} alt="Shapes up" />
            </div>
            <div className="shapes-container">
                <img className="shapes-up-desk" src={shapesUpDesk} alt="Shapes up" />
            </div>
        </main>
    );
}

export default Hero;