import React from "react";
import AOS from 'aos';

import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [isLightMode, setIsLightMode] = React.useState(true);

  React.useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Header isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
      <Home isLightMode={isLightMode} />
      <Footer isLightMode={isLightMode} />
    </>
  );
}

export default App;