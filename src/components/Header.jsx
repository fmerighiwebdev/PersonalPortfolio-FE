import React from "react";
import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import "../styles/Header.css";
import "../styles/Dark.css";

function Header({ isLightMode, setIsLightMode }) {
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

  function handleSwitchMode() {
    setIsLightMode(!isLightMode);
  }

  return (
    <header className={(isScrolled || isMenuOpen) && isLightMode ? "header-scroll" 
                        : (isScrolled || isMenuOpen) && !isLightMode ? "header-scroll header-scroll-dark"
                        : "header"}>
      <Container className="header-container">
        <div className="header-logo">
            <h2><a className={!isLightMode ? "text-dark" : null} href="#hero">FM</a></h2>
        </div>
        
        <nav className="header-nav">
            <ul className={!isLightMode ? "header-menu-dark header-menu" : "header-menu"}>
                <li className="menu-item"><a href="#about-me">About me</a></li>
                <li className="menu-item"><a href="#skills">Skills</a></li>
                <li className="menu-item"><a href="#projects">Progetti</a></li>
                <li className="menu-item"><a href="#contacts">Contatti</a></li>
                <li onClick={handleSwitchMode} className="switch-mode">
                  {!isLightMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
                </li>
            </ul>

            <div onClick={handleMenuClick} className={isMenuOpen ? "header-hamburger active" : "header-hamburger"}>
                <div className={!isLightMode ? "hamburger-line-dark hamburger-line" : "hamburger-line"}></div>
                <div className={!isLightMode ? "hamburger-line-dark hamburger-line" : "hamburger-line"}></div>
                <div className={!isLightMode ? "hamburger-line-dark hamburger-line" : "hamburger-line"}></div>
            </div>
        </nav>

        {isMenuOpen ? 
          <nav className={!isLightMode ? "header-nav-mobile-dark header-nav-mobile" : "header-nav-mobile"}>
            <ul className="header-menu-mobile">
              <li className="menu-item-mobile"><a onClick={handleMenuClick} href="#about-me">About me</a></li>
              <li className="menu-item-mobile"><a onClick={handleMenuClick} href="#skills">My Skills</a></li>
              <li className="menu-item-mobile"><a onClick={handleMenuClick} href="#projects">My Projects</a></li>
              <li className="menu-item-mobile"><a onClick={handleMenuClick} href="#contacts">Contacts</a></li>
              <li onClick={handleSwitchMode} className="switch-mode">
                {!isLightMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
              </li>
            </ul>
          </nav> : null}
      </Container>
    </header>
  );
}

export default Header;