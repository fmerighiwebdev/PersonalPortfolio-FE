import React from "react";
import { Container } from "react-bootstrap";

import keeperLogo from "../images/keeper-logo.svg";
import trePiniLogo from "../images/3-pini-logo.svg";
import alTeatroLogo from "../images/al-teatro-logo.svg";

function Projects({ isLightMode }) {
    return (
        <section className={!isLightMode ? "projects projects-dark" : "projects"} id="projects">
            <Container className="projects-container">
                <h3 className="projects-title">I miei progetti</h3>
                <div className="projects-content">
                    <div class="projects-grid">
                        <div class="projects-item" data-aos="fade-up">
                            <div class="logo-container">
                                <img src={keeperLogo} alt="Keeper Logo"></img>
                            </div>
                            <div class="project-name">
                                <h4 className={!isLightMode ? "text-dark" : null}>Keeper App</h4>
                                <p className={!isLightMode ? "text-dark" : null}>Applicazione Web</p>
                            </div>
                            <div className="project-description">
                                <p className={!isLightMode ? "text-dark" : null}>Keeper App è un'applicazione web intuitiva e user-friendly, progettata per consentire agli utenti, dopo essersi registrati, di gestire le proprie note personali in modo efficiente.</p>
                            </div>
                            <div className="project-technologies">
                                <p className={!isLightMode ? "text-dark" : null}>Tecnologie utilizzate:</p>
                                <ul>
                                    <li className={!isLightMode ? "project-list-item-dark" : null}>React.js</li>
                                    <li className={!isLightMode ? "project-list-item-dark" : null}>Node.js</li>
                                    <li className={!isLightMode ? "project-list-item-dark" : null}>Express.js</li>
                                    <li className={!isLightMode ? "project-list-item-dark" : null}>PostgreSQL</li>
                                    <li className={!isLightMode ? "project-list-item-dark" : null}>Passport.js</li>
                                    <li className={!isLightMode ? "project-list-item-dark" : null}>JSON Web Token</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/francescomerighi1202/Keeper-App" target="_blank" rel="noreferrer">GitHub &rarr;</a>
                            </div>
                        </div>
                        <div class="projects-item" data-aos="fade-up">
                            <div class="logo-container">
                                <img src={trePiniLogo} alt="Keeper Logo"></img>
                            </div>
                            <div class="project-name">
                                <h4 className={!isLightMode ? "text-dark" : null}>Ristorante 3 Pini</h4>
                                <p className={!isLightMode ? "text-dark" : null}>Sito Web informativo</p>
                            </div>
                            <div className="project-description">
                                <p className={!isLightMode ? "text-dark" : null}>Sviluppo design, sviluppo sito web, hosting e SEO per "Ristorante Pizzeria 3 Pini" di Rovereto (TN)</p>
                            </div>
                            <div className="project-technologies">
                                <p className={!isLightMode ? "text-dark" : null}>Tecnologie utilizzate:</p>
                                <ul>
                                    <li className={!isLightMode ? "project-list-item-dark" : null}>HTML5</li>
                                    <li className={!isLightMode ? "project-list-item-dark" : null}>CSS3</li>
                                    <li className={!isLightMode ? "project-list-item-dark" : null}>JavaScript</li>
                                    <li className={!isLightMode ? "project-list-item-dark" : null}>Node.js</li>
                                    <li className={!isLightMode ? "project-list-item-dark" : null}>Express.js</li>
                                    <li className={!isLightMode ? "project-list-item-dark" : null}>EJS</li>
                                </ul>
                            </div>
                            <div className="project-links">
                                <a href="https://www.ristorante3pini.it" target="_blank" rel="noreferrer">Visita il sito &rarr;</a>
                            </div>
                        </div>
                        <div class="projects-item" data-aos="fade-up">
                        <div class="logo-container">
                                <img src={alTeatroLogo} alt="Keeper Logo"></img>
                            </div>
                            <div class="project-name">
                                <h4 className={!isLightMode ? "text-dark" : null}>Ristorante Al Teatro</h4>
                                <p className={!isLightMode ? "text-dark" : null}>Sito Web informativo</p>
                            </div>
                            <div className="project-description">
                                <p className={!isLightMode ? "text-dark" : null}>Sviluppo design, sviluppo sito web, hosting e SEO per "Ristorante Pizzeria Al Teatro" di Desenzano del Garda (BS)</p>
                            </div>
                            <div className="project-technologies">
                                <p className={!isLightMode ? "text-dark" : null}>Tecnologie utilizzate:</p>
                                <ul>
                                <li className={!isLightMode ? "project-list-item-dark" : null}>HTML5</li>
                                    <li className={!isLightMode ? "project-list-item-dark" : null}>CSS3</li>
                                    <li className={!isLightMode ? "project-list-item-dark" : null}>JavaScript</li>
                                    <li className={!isLightMode ? "project-list-item-dark" : null}>Flask Python</li>
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