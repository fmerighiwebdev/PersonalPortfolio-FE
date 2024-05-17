import React from "react";
import { Container } from "react-bootstrap";

import keeperLogo from "../images/keeper-logo.svg";
import trePiniLogo from "../images/3-pini-logo.svg";
import alTeatroLogo from "../images/al-teatro-logo.svg";
import weatherLogo from "../images/weather-icon.svg";
import translateLogo from "../images/translate-icon.svg";
import currencyLogo from "../images/currency-icon.svg";
import escLogo from "../images/esc-logo.svg";
import escLogoWhite from "../images/esc-logo-white.svg";

function Projects({ isLightMode }) {
  return (
    <section
      className={!isLightMode ? "projects-dark projects" : "projects"}
      id="projects"
    >
      <Container className="projects-container">
        <h3 className="projects-title">I miei progetti</h3>
        <div className="projects-content">
          <div className="projects-grid">
            <div className="projects-item" data-aos="fade-up">
              <div className="logo-container">
                <img src={isLightMode ? escLogo : escLogoWhite} alt="ESC Logo"></img>
              </div>
              <div className="project-name">
                <h4>ESC CORPORATION</h4>
                <p>E-Commerce</p>
              </div>
              <div className="project-description">
                <p>
                  Sviluppo design, sviluppo e-commerce shop, hosting, SEO e marketing per
                  il brand "ESC CORPORATION" di Trento (TN)
                </p>
              </div>
              <div className="project-technologies">
                <p>Tecnologie utilizzate:</p>
                <ul>
                  <li>WordPress</li>
                  <li>WooCommerce</li>
                  <li>PHP</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>Marketing Tools</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="https://esccorp.it" target="_blank" rel="noreferrer">
                  Visita il sito web &rarr;
                </a>
              </div>
            </div>
            <div className="projects-item" data-aos="fade-up">
              <div className="logo-container">
                <img src={currencyLogo} alt="GlobalCurrency App Logo"></img>
              </div>
              <div className="project-name">
                <h4>GlobalCurrency App</h4>
                <p>Applicazione Web</p>
              </div>
              <div className="project-description">
                <p>
                  GlobalCurrency App è un'applicazione web che consente agli
                  utenti di visualizzare e convertire i prezzi delle valute in
                  tempo reale e controllare la validità degli indirizzi dei
                  wallet crypto.
                </p>
              </div>
              <div className="project-technologies">
                <p>Tecnologie utilizzate:</p>
                <ul>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>Bootstrap</li>
                  <li>Express.js</li>
                  <li>CurrencyBeacon API</li>
                  <li>Swapzone API</li>
                  <li>CoinMarketCap API</li>
                </ul>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/francescomerighi1202/GlobalCurrency-App-FE"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub - FE &rarr;
                </a>
                <a
                  href="https://github.com/francescomerighi1202/GlobalCurrency-App-BE"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginTop: "1rem" }}
                >
                  GitHub - BE &rarr;
                </a>
              </div>
            </div>
            <div className="projects-item" data-aos="fade-up">
              <div className="logo-container">
                <img src={translateLogo} alt="Translator App Logo"></img>
              </div>
              <div className="project-name">
                <h4>Translator App</h4>
                <p>Applicazione Web</p>
              </div>
              <div className="project-description">
                <p>
                  Translator App è un'applicazione web che consente agli utenti
                  di tradurre testi in tempo reale in più di 100 lingue diverse
                  e rilevare la lingua partendo da un testo.
                </p>
              </div>
              <div className="project-technologies">
                <p>Tecnologie utilizzate:</p>
                <ul>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>Bootstrap</li>
                  <li>Google Translate API</li>
                </ul>
              </div>
              <div className="project-links">
                <a
                  href="https://translator-app-sand.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visita l'app &rarr;
                </a>
                <a
                  href="https://github.com/francescomerighi1202/Translator-App-FE"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginTop: "1rem" }}
                >
                  GitHub - FE &rarr;
                </a>
              </div>
            </div>
            <div className="projects-item" data-aos="fade-up">
              <div className="logo-container">
                <img src={weatherLogo} alt="Open Weather App Logo"></img>
              </div>
              <div className="project-name">
                <h4>OpenWeather App</h4>
                <p>Applicazione Web</p>
              </div>
              <div className="project-description">
                <p>
                  OpenWeather App è un'applicazione web che consente agli utenti
                  di visualizzare le previsioni meteo orarie, giornaliere e
                  settimanali di qualsiasi città del mondo. <br></br>
                </p>
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
                  <li>OpenWeather API</li>
                </ul>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/francescomerighi1202/OpenWeather-App-FE"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub - FE &rarr;
                </a>
                <a
                  href="https://github.com/francescomerighi1202/OpenWeather-App-BE"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginTop: "1rem" }}
                >
                  GitHub - BE &rarr;
                </a>
              </div>
            </div>
            <div className="projects-item" data-aos="fade-up">
              <div className="logo-container">
                <img src={keeperLogo} alt="Keeper Logo"></img>
              </div>
              <div className="project-name">
                <h4>Keeper App</h4>
                <p>Applicazione Web</p>
              </div>
              <div className="project-description">
                <p>
                  Keeper App è un'applicazione web intuitiva e user-friendly,
                  progettata per consentire agli utenti, dopo essersi
                  registrati, di gestire le proprie note personali in modo
                  efficiente.
                </p>
              </div>
              <div className="project-technologies">
                <p>Tecnologie utilizzate:</p>
                <ul>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>Bootstrap</li>
                  <li>Express.js</li>
                  <li>PostgreSQL</li>
                  <li>Passport.js</li>
                  <li>JSON Web Token</li>
                </ul>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/francescomerighi1202/Keeper-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub &rarr;
                </a>
              </div>
            </div>
            <div className="projects-item" data-aos="fade-up">
              <div className="logo-container">
                <img src={trePiniLogo} alt="Tre Pini Logo"></img>
              </div>
              <div className="project-name">
                <h4>Ristorante 3 Pini</h4>
                <p>Sito Web informativo</p>
              </div>
              <div className="project-description">
                <p>
                  Sviluppo design, sviluppo sito web, hosting e SEO per
                  "Ristorante Pizzeria 3 Pini" di Rovereto (TN)
                </p>
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
                <a
                  href="https://www.ristorante3pini.it"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visita il sito web &rarr;
                </a>
              </div>
            </div>
            <div className="projects-item" data-aos="fade-up">
              <div className="logo-container">
                <img src={alTeatroLogo} alt="Al Teatro Logo"></img>
              </div>
              <div className="project-name">
                <h4>Ristorante Al Teatro</h4>
                <p>Sito Web informativo</p>
              </div>
              <div className="project-description">
                <p>
                  Sviluppo design, sviluppo sito web, hosting e SEO per
                  "Ristorante Pizzeria Al Teatro" di Desenzano del Garda (BS)
                </p>
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
                <a
                  href="https://www.ristorantealteatro.it"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visita il sito web &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
