import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';

import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [isLightMode, setIsLightMode] = React.useState(true);

  React.useEffect(() => {
    AOS.init();
  });

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
            <>
              <Header isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
              <Home isLightMode={isLightMode} />
              <Footer isLightMode={isLightMode} />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;