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

function App() {
  const [isLightMode, setIsLightMode] = React.useState(true);
  const [rightClick, setRightClick] = React.useState(false);
  
  const isMaintenanceMode = true;

  React.useEffect(() => {
    const disableRightClick = (event) => {
      event.preventDefault();
      setRightClick(true);
    };

    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      setRightClick(false);
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  React.useEffect(() => {
    if (rightClick) {
      setTimeout(() => {
        setRightClick(false);
      }, 2000);
    }

    return () => {
      clearTimeout();
    };
  }, [rightClick]);

  return (
    <>
      {rightClick && (
        <div className="right-click">Click destro disattivato</div>
      )}
      {isMaintenanceMode ? (
        <Router>
          <Routes>
            <Route path="/" element={<Maintenance />} />
            <Route path="/book-a-call" element={<BookCall />} />
          </Routes>
        </Router>
      ) : (
        <>
          {rightClick && (
            <div className="right-click">Click destro disattivato</div>
          )}
          <Header isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
          <Home isLightMode={isLightMode} />
          <Footer isLightMode={isLightMode} />
        </>
      )}
    </>
  );
}

export default App;