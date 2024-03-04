import React from "react";

import "../styles/Home.css";

import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";

function Home() {
  return (
    <>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
    </>
  );
}

export default Home;