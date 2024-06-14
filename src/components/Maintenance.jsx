import React from "react";

import fmLogo from "../images/fm-logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

import "../styles/Maintenance.css";
import "../styles/Animations.css";
import { Link } from "react-router-dom";

function Maintenance() {
  function rotateLogo() {
    setTimeout(() => {
      const logo = document.querySelector(".maintenance-logo-container img");
      logo.classList.add("rotate");
    }, 2000);
  }

  React.useEffect(() => {
    rotateLogo();
  }, []);

  return (
    <main className="maintenance-mode-container">
      <section className="maintenance-mode-section">
        <div className="maintenance-logo-container">
          <img src={fmLogo} alt="FM Logo" />
        </div>
        <h1 className="maintenance-mode-title">In aggiornamento...</h1>
        <div className="overline-text">
          <h2>Per qualsiasi informazione o richiesta contattami qui</h2>
        </div>
        <div className="maintenance-mode-contacts">
          <ul>
            <li>
              <a href="https://wa.me/+393426476626">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li>
              <a href="mailto:francescomerighi61@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/fmerighi.dev"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/fmerighiwebdev"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </li>
          </ul>
        </div>
        <div className="maintenance-mode-call">
          <h3>Oppure</h3>
          <Link to="/book-a-call">Fissiamo una chiamata</Link>
        </div>
      </section>
    </main>
  );
}

export default Maintenance;
