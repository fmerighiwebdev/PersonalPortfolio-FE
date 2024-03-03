import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;