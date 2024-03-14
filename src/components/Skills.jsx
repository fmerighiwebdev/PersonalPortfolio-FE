import React from "react";
import { Container } from "react-bootstrap";

function Skills() {
    return (
        <section className="skills" id="skills">
            <Container className="skills-container">
                <h3 className="skills-title">My Skills</h3>
                <div className="skills-content">
                    <div class="skills-grid">
                        <div class="skills-item">
                            <p><strong>FRONT-END</strong>: I am able to develop dynamic and interactive user interfaces</p>
                            <ul>
                                <li>HTML5, CSS3, JavaScript and DOM manipulation</li>
                                <li>React and Angular</li>
                                <li>Sviluppo mobile con React Native</li>
                                <li>Bootstrap and Tailwind</li>
                                <li>Management of data retrieved from the back-end</li>
                                <li>Responsive development</li>
                            </ul>
                        </div>
                        <div class="skills-item">
                            <p><strong>BACK-END</strong>: I am able to create high-performance servers to manage data access and management logic</p>
                            <ul>
                                <li>Node.js and NPM</li>
                                <li>Express.js</li>
                                <li>HTTP requests and responses management</li>
                                <li>Implementation of RESTful APIs</li>
                                <li>Databases integration</li>
                                <ul>
                                    <li>PostgreSQL</li>
                                    <li>MongoDB</li>
                                    <li>Authentication and security</li>
                                </ul>
                                <li>Endpoints testing with Postman</li>
                            </ul>
                        </div>
                        <div class="skills-item">
                            <p><strong>UI/UX and WEB DESIGN</strong>: I am able to create coherent and intuitive design systems</p>
                            <ul>
                                <li>Design systems with Figma</li>
                                <ul>
                                    <li>Sitemap</li>
                                    <li>Sketching</li>
                                    <li>Wireframing</li>
                                    <li>User flows</li>
                                    <li>Prototyping</li>
                                </ul>
                                <li>Design theories</li>
                                <ul>
                                    <li>Graphic design principles</li>
                                    <li>Design patterns</li>
                                </ul>
                            </ul>
                        </div>
                        <div class="skills-item">
                            <ul>
                                <li>GIT and version control</li>
                                <li>SEO (Search Engine Optimization)</li>
                                <li>WEB3, ICP and Blockchain</li>
                                <li>WordPress and WooCommerce</li>
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