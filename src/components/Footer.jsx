import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../styles/Footer.css";

import fmLogo from "../images/fm-logo.svg";

function Footer({ isLightMode }) {
  return (
    <footer className={!isLightMode ? "footer-dark" : null}>
      <Container className="footer-container">
        <Row>
          <Col className="footer-content" lg={4}>
            <div className="footer-logo">
              <h2>
                <img src={fmLogo} alt="FM Logo" width="50px" />
              </h2>
            </div>
          </Col>
          <Col className="footer-content" lg={4}>
            <p
              className={!isLightMode ? "footer-copy text-dark" : "footer-copy"}
            >
              &copy; {new Date().getFullYear()} <span>Francesco Merighi</span>
            </p>
          </Col>
          <Col className="footer-content" lg={4}>
            <p
              className={
                !isLightMode ? "footer-legal text-dark" : "footer-legal"
              }
            >
              P.IVA 02721170229
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;