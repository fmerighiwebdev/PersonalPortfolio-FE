import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ballLight from "../images/ball-light.svg";
import ballDark from "../images/ball-dark.svg";

function About() {
    const [isChoiceShowed, setIsChoiceShowed] = React.useState(false);

    function handleChoiceClick() {
        setIsChoiceShowed(!isChoiceShowed);
    }

    return (
        <section className="about-me" id="about-me">
            <Container className="about-me-container">
                <Row>
                    <Col className="about-me-content" lg={6}>
                        <h3 className="about-me-title">About Me</h3>
                        <p>Hi, I'm Francesco Merighi, a <strong>WEB DEVELOPER</strong> and <strong>UI/UX DESIGNER</strong> based in Italy! <br></br> 
                            I'm passionate about creating beautiful and functional websites and 
                            applications. <br></br><br></br> 
                            Among the skills I have acquired over the years, i have become 
                            very passionate about the world of WEB DEVELOPMENT, 
                            leading me to learn to use both <strong>FRONT-END</strong> and <strong>BACK-END</strong> technologies. <br></br><br></br>
                            My passion for PROGRAMMING and MODERN DESIGN (UI/UX) has led me
                            to develop multiple projects, starting from projects of my interest, up to the creation and management 
                            of solutions for some local companies. <br></br><br></br>

                            I am convinced that technology is constantly evolving and 
                            this motivates me to constantly update my knowledge and 
                            skills and I am sure that the path I have undertaken 
                            will allow me to continue to grow and achieve my goals. <br></br> <br></br>

                            I'm always looking for new challenges 
                            and opportunities to grow, so feel free to contact me 
                            if you have any questions or if you want to work 
                            with me!</p>
                        <div class="cv-download-container">
                            <button onClick={handleChoiceClick} className="cv-download">Download my CV</button>
                            {isChoiceShowed ? 
                                <div className="choice-container">
                                    <a download href="/docs/cv.pdf" className="choice-item">Italian</a>
                                    <a download href="/docs/cv-eng.pdf" className="choice-item">English</a>
                                </div> : null}
                        </div>

                    </Col>
                    <Col className="about-me-content" lg={6}>
                        <img src={ballDark} alt=""></img>
                        <img src={ballLight} alt=""></img>
                        <img src={ballLight} alt=""></img>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;