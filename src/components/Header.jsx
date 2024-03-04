import React from "react";
import { Container } from "react-bootstrap";

import "../styles/Header.css";

function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    handleScroll();
  }, []);

  function handleScroll() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <header className={isScrolled ? "header-scroll" : "header"}>
      <Container className="header-container">
        <div className="header-logo">
            <h2>FM</h2>
        </div>
        
        <nav className="header-nav">
            <ul className="header-menu">
                <li className="menu-item"><a href="#about-me">About me</a></li>
                <li className="menu-item"><a href="#skills">My Skills</a></li>
                <li className="menu-item"><a href="#projects">My Projects</a></li>
                <li className="menu-item"><a href="#contacts">Contacts</a></li>
            </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;