import React from "react";

import "../styles/Home.css";
import "../styles/Dark.css";

import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";

function Home({ isLightMode }) {
  return (
    <>
        <Hero isLightMode={isLightMode} />
        <About isLightMode={isLightMode} />
        <Skills isLightMode={isLightMode} />
        <Projects isLightMode={isLightMode} />
        <Contacts isLightMode={isLightMode} />
    </>
  );
}

export default Home;