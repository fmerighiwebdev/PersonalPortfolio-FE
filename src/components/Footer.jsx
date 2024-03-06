import React from "react";

import "../styles/Footer.css";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container className="footer-container">
        <Row>
          <Col className="footer-content" lg={4}>
            <div className="footer-logo">
              <h2><a href="#hero">FM</a></h2>
            </div>
          </Col>
          <Col className="footer-content" lg={4}>
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} <span>Francesco Merighi</span>
            </p>
          </Col>
          <Col className="footer-content" lg={4}>
            <p className="footer-legal">P.IVA 02721170229</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;