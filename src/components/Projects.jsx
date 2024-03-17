import React from "react";
import { Container } from "react-bootstrap";

import keeperLogo from "../images/keeper-logo.svg";
import trePiniLogo from "../images/3-pini-logo.svg";
import alTeatroLogo from "../images/al-teatro-logo.svg";

function Projects({ isLightMode }) {
    return (
        <section className={!isLightMode ? "projects-dark projects" : "projects"} id="projects">
            <Container className="projects-container">
                <h3 className="projects-title">I miei progetti</h3>
                <div className="projects-content">
                    <div className="projects-grid">
                        <div className="projects-item" data-aos="fade-up">
                            <div className="logo-container">
                                <img src={keeperLogo} alt="Keeper Logo"></img>
                            </div>
                            <div className="project-name">
                                <h4>Keeper App</h4>
                                <p>Applicazione Web</p>
                            </div>
                            <div className="project-description">
                                <p>Keeper App è un'applicazione web intuitiva e user-friendly, progettata per consentire agli utenti, dopo essersi registrati, di gestire le proprie note personali in modo efficiente.</p>
                            </div>
                            <div className="project-technologies">
                                <p>Tecnologie utilizzate:</p>
                                <ul>
                                    <li>React.js</li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>PostgreSQL</li>
                                    <li>Passport.js</li>
                                    <li>JSON Web Token</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/francescomerighi1202/Keeper-App" target="_blank" rel="noreferrer">GitHub &rarr;</a>
                            </div>
                        </div>
                        <div className="projects-item" data-aos="fade-up">
                            <div className="logo-container">
                                <img src={trePiniLogo} alt="Keeper Logo"></img>
                            </div>
                            <div className="project-name">
                                <h4>Ristorante 3 Pini</h4>
                                <p>Sito Web informativo</p>
                            </div>
                            <div className="project-description">
                                <p>Sviluppo design, sviluppo sito web, hosting e SEO per "Ristorante Pizzeria 3 Pini" di Rovereto (TN)</p>
                            </div>
                            <div className="project-technologies">
                                <p>Tecnologie utilizzate:</p>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>EJS</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <a href="https://www.ristorante3pini.it" target="_blank" rel="noreferrer">Visita il sito &rarr;</a>
                            </div>
                        </div>
                        <div className="projects-item" data-aos="fade-up">
                        <div className="logo-container">
                                <img src={alTeatroLogo} alt="Keeper Logo"></img>
                            </div>
                            <div className="project-name">
                                <h4>Ristorante Al Teatro</h4>
                                <p>Sito Web informativo</p>
                            </div>
                            <div className="project-description">
                                <p>Sviluppo design, sviluppo sito web, hosting e SEO per "Ristorante Pizzeria Al Teatro" di Desenzano del Garda (BS)</p>
                            </div>
                            <div className="project-technologies">
                                <p>Tecnologie utilizzate:</p>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                    <li>Flask Python</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <a href="https://www.ristorantealteatro.it" target="_blank" rel="noreferrer">Visita il sito &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Projects;