import React from "react";
import { Container } from "react-bootstrap";

function Skills({ isLightMode }) {
    return (
        <section className={!isLightMode ? "skills skills-dark" : "skills"} id="skills">
            <Container className="skills-container">
                <h3 className="skills-title">Le mie skills</h3>
                <div className="skills-content">
                    <div className="skills-grid">
                        <div className="skills-item" data-aos="fade-up">
                            <p className={!isLightMode ? "text-dark" : null}><strong>FRONT-END</strong>: Sono in grado di sviluppare interfacce utente dinamiche e interattive</p>
                            <ul>
                                <li className={!isLightMode ? "text-dark" : null}>HTML5, CSS3, JavaScript e DOM manipulation</li>
                                <li className={!isLightMode ? "text-dark" : null}>React e Angular</li>
                                <li className={!isLightMode ? "text-dark" : null}>Sviluppo mobile con React Native</li>
                                <li className={!isLightMode ? "text-dark" : null}>Bootstrap e Tailwind</li>
                                <li className={!isLightMode ? "text-dark" : null}>Gestione dei dati recuperati dal back-end</li>
                                <li className={!isLightMode ? "text-dark" : null}>Sviluppo FULL-Responsive</li>
                            </ul>
                        </div>
                        <div class="skills-item" data-aos="fade-up">
                            <p className={!isLightMode ? "text-dark" : null}><strong>BACK-END</strong>: Sono in grado di realizzare server high-performance per gestire l'accesso e la logica di gestione dei dati</p>
                            <ul>
                                <li className={!isLightMode ? "text-dark" : null}>Node.js e NPM</li>
                                <li className={!isLightMode ? "text-dark" : null}>Express.js</li>
                                <li className={!isLightMode ? "text-dark" : null}>Gestione richieste HTTP e relative risposte</li>
                                <li className={!isLightMode ? "text-dark" : null}>Implementazione di RESTful APIs</li>
                                <li className={!isLightMode ? "text-dark" : null}>Integrazione di database</li>
                                <ul>
                                    <li className={!isLightMode ? "text-dark" : null}>PostgreSQL</li>
                                    <li className={!isLightMode ? "text-dark" : null}>MongoDB</li>
                                    <li className={!isLightMode ? "text-dark" : null}>Autenticazione e sicurezza</li>
                                </ul>
                                <li className={!isLightMode ? "text-dark" : null}>Endpoints testing con Postman</li>
                            </ul>
                        </div>
                        <div class="skills-item" data-aos="fade-up">
                            <p className={!isLightMode ? "text-dark" : null}><strong>UI/UX e WEB DESIGN</strong>: Sono in grado di creare design systems coerenti e intuitivi</p>
                            <ul>
                                <li className={!isLightMode ? "text-dark" : null}>Design systems con Figma</li>
                                <ul>
                                    <li className={!isLightMode ? "text-dark" : null}>Sitemap</li>
                                    <li className={!isLightMode ? "text-dark" : null}>Sketching</li>
                                    <li className={!isLightMode ? "text-dark" : null}>Wireframing</li>
                                    <li className={!isLightMode ? "text-dark" : null}>User flows</li>
                                    <li className={!isLightMode ? "text-dark" : null}>Prototyping</li>
                                </ul>
                                <li className={!isLightMode ? "text-dark" : null}>Teoria del Design</li>
                                <ul>
                                    <li className={!isLightMode ? "text-dark" : null}>Principi di design grafico e UI/UX</li>
                                    <li className={!isLightMode ? "text-dark" : null}>Design patterns</li>
                                </ul>
                            </ul>
                        </div>
                        <div class="skills-item" data-aos="fade-up">
                            <ul>
                                <li className={!isLightMode ? "text-dark" : null}>GIT e version control</li>
                                <li className={!isLightMode ? "text-dark" : null}>SEO (Search Engine Optimization)</li>
                                <li className={!isLightMode ? "text-dark" : null}>WEB3, ICP e Blockchain</li>
                                <li className={!isLightMode ? "text-dark" : null}>WordPress e WooCommerce</li>
                                <li className={!isLightMode ? "text-dark" : null}>Full-Stack Deploy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Skills;