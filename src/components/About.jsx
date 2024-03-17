import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ballLight from "../images/ball-light.svg";
import ballDark from "../images/ball-dark.svg";

function About({ isLightMode }) {
    const [isChoiceShowed, setIsChoiceShowed] = React.useState(false);

    function handleChoiceClick() {
        setIsChoiceShowed(!isChoiceShowed);
    }

    return (
        <section className={!isLightMode ? "about-me about-me-dark" : "about-me"} id="about-me">
            <Container className="about-me-container">
                <Row>
                    <Col className="about-me-content" lg={6} data-aos="fade-right" data-aos-duration="1000">
                        <h3 className="about-me-title">About Me</h3>
                        <p className={!isLightMode ? "text-dark" : null}>Ciao, sono Francesco Merighi, un <strong>WEB DEVELOPER</strong> e <strong>UI/UX DESIGNER</strong>! <br></br>
                             La mia passione è creare siti web e applicazioni coerenti e funzionali. <br></br><br></br>
                             Tra le competenze che ho acquisito negli anni, mi ha fatto molto appassionare il mondo dello SVILUPPO WEB,
                             portandomi ad imparare ad utilizzare sia tecnologie <strong>FRONT-END</strong> che <strong>BACK-END</strong>. <br></br><br></br>
                             La mia passione per la <strong>PROGRAMMAZIONE</strong> e il <strong>DESIGN MODERNO (UI/UX)</strong> mi ha portato a
                             sviluppare molteplici progetti, partendo da progetti di mio interesse, fino alla creazione e gestione
                             di <u>soluzioni</u> per alcune aziende locali. <br></br><br></br>

                             Sono convinto che la tecnologia sia in continua evoluzione e
                             questo mi motiva ad aggiornare costantemente le mie conoscenze e
                             competenze e sono sicuro che il percorso che ho intrapreso
                             mi permetterà di continuare a crescere e raggiungere i miei obiettivi. <br></br> <br></br>

                             Sono sempre alla ricerca di nuove sfide
                             e opportunità di crescita, quindi sentiti libero di <u>contattarmi</u> se hai domande o se vuoi lavorare
                             con me!</p>
                        <div className="cv-download-container">
                            <button onClick={handleChoiceClick} className="cv-download">Download CV</button>
                            {isChoiceShowed ? 
                                <div className={!isLightMode ? "choice-container choice-container-dark" : "choice-container"}>
                                    <a download href="/docs/cv.pdf" className="choice-item">Italiano</a>
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