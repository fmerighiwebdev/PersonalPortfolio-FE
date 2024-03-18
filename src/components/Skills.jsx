import React from "react";
import { Container } from "react-bootstrap";

function Skills({ isLightMode }) {
    return (
        <section className={!isLightMode ? "skills-dark skills" : "skills"} id="skills">
            <Container className="skills-container">
                <h3 className="skills-title">Le mie skills</h3>
                <div className="skills-content">
                    <div className="skills-grid">
                        <div className="skills-item" data-aos="fade-up">
                            <p><span>FRONT-END</span>: Sono in grado di sviluppare interfacce utente dinamiche e interattive</p>
                            <ul>
                                <li>HTML5, CSS3, JavaScript e DOM manipulation</li>
                                <li>React e Angular</li>
                                <li>Sviluppo mobile con React Native</li>
                                <li>Bootstrap e Tailwind</li>
                                <li>Gestione dati recuperati dal back-end</li>
                                <li>Sviluppo FULL-Responsive</li>
                            </ul>
                        </div>
                        <div className="skills-item" data-aos="fade-up">
                            <p><span>BACK-END</span>: Sono in grado di realizzare server high-performance per gestire l'accesso e la logica di gestione dei dati</p>
                            <ul>
                                <li>Node.js e NPM</li>
                                <li>Express.js</li>
                                <li>Gestione richieste HTTP e relative risposte</li>
                                <li>Implementazione di RESTful APIs</li>
                                <li>PostgreSQL</li>
                                <li>MongoDB</li>
                                <li>Autenticazione e sicurezza</li>
                                <li>Endpoints testing con Postman</li>
                            </ul>
                        </div>
                        <div className="skills-item" data-aos="fade-up">
                            <p><span>UI/UX e WEB DESIGN</span>: Sono in grado di creare design systems coerenti e intuitivi</p>
                            <ul>
                                <li>Design systems con Figma</li>
                                <li>Sitemap</li>
                                <li>Sketching</li>
                                <li>Wireframing</li>
                                <li>User flows</li>
                                <li>Prototyping</li>
                                <li>Teoria del Design</li>                                
                                <li>Principi di design grafico e UI/UX</li>
                                <li>Design patterns</li>                               
                            </ul>
                        </div>
                        <div className="skills-item" data-aos="fade-up">
                            <ul>
                                <li>GIT e version control</li>
                                <li>SEO (Search Engine Optimization)</li>
                                <li>WEB3, ICP e Blockchain</li>
                                <li>WordPress e WooCommerce</li>
                                <li>Full-Stack Deploy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Skills;