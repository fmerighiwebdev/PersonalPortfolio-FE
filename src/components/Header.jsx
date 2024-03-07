import React from "react";
import { Container } from "react-bootstrap";

import "../styles/Header.css";

function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={isScrolled || isMenuOpen ? "header-scroll" : "header"}>
      <Container className="header-container">
        <div className="header-logo">
            <h2><a href="#hero">FM</a></h2>
        </div>
        
        <nav className="header-nav">
            <ul className="header-menu">
                <li className="menu-item"><a href="#about-me">About me</a></li>
                <li className="menu-item"><a href="#skills">My Skills</a></li>
                <li className="menu-item"><a href="#projects">My Projects</a></li>
                <li className="menu-item"><a href="#contacts">Contacts</a></li>
            </ul>

            <div onClick={handleMenuClick} className={isMenuOpen ? "header-hamburger active" : "header-hamburger"}>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </div>
        </nav>

        {isMenuOpen ? 
          <nav className="header-nav-mobile">
            <ul className="header-menu-mobile">
              <li className="menu-item-mobile"><a href="#about-me">About me</a></li>
              <li className="menu-item-mobile"><a href="#skills">My Skills</a></li>
              <li className="menu-item-mobile"><a href="#projects">My Projects</a></li>
              <li className="menu-item-mobile"><a href="#contacts">Contacts</a></li>
            </ul>
          </nav> : null}
      </Container>
    </header>
  );
}

export default Header;