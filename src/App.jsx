import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Maintenance from "./components/Maintenance";
import BookCall from "./components/BookCall";
import SuccessfullySend from "./components/SuccessfullySend";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  const [isLightMode, setIsLightMode] = React.useState(true);
  const [rightClick, setRightClick] = React.useState(false);
  const [f12Pressed, setF12Pressed] = React.useState(false);
  const [crtlShiftIPressed, setCrtlShiftIPressed] = React.useState(false);

  const isMaintenanceMode = true;

  React.useEffect(() => {
    const disableRightClick = (event) => {
      event.preventDefault();
      setRightClick(true);
    };

    const disableF12 = (event) => {
      if (event.keyCode === 123) {
        event.preventDefault();
        setF12Pressed(true);
      }
    }

    const disableCrtlShiftI = (event) => {
      if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault();
        setCrtlShiftIPressed(true);
      }
    }

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableF12);
    document.addEventListener("keydown", disableCrtlShiftI);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableF12);
      document.removeEventListener("keydown", disableCrtlShiftI);
    }
  }, []);

  React.useEffect(() => {
    if (rightClick) {
      setTimeout(() => {
        setRightClick(false);
      }, 2000);
    }

    if (f12Pressed) {
      setTimeout(() => {
        setF12Pressed(false);
      }, 2000);
    }

    if (crtlShiftIPressed) {
      setTimeout(() => {
        setCrtlShiftIPressed(false);
      }, 2000);
    }

    return () => {
      clearTimeout();
    };
  }, [rightClick, f12Pressed, crtlShiftIPressed]);

  return (
    <>
      {rightClick && (
        <div className="right-click">Click destro disattivato</div>
      )}
      {(f12Pressed || crtlShiftIPressed) && (
        <div className="right-click">Ispezione disattivata</div>
      )}
      {isMaintenanceMode ? (
        <Router>
          <Routes>
            <Route path="/" element={<Maintenance />} />
            <Route path="/book-a-call" element={<BookCall />} />
            <Route path="/successfully-send" element={<SuccessfullySend />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Router>
      ) : (
        <>
          <Header isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
          <Home isLightMode={isLightMode} />
          <Footer isLightMode={isLightMode} />
        </>
      )}
    </>
  );
}

export default App;