import React, { useEffect, useState } from "react";

import checkIcon from "../images/check.svg";
import { useNavigate } from "react-router-dom";

import "../styles/Home.css";

function SuccessfullySend() {
  const [remainingTime, setRemainingTime] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setRemainingTime(remainingTime - 1);
    }, 1000);
  }, [remainingTime]);

  useEffect(() => {
    if (remainingTime === 0) {
      navigate("/");
    }
  }, [remainingTime, navigate]);

  return (
    <main className="successfully-send-container">
      <img src={checkIcon} alt="Check Icon" />
      <h1>Invio dati completato</h1>
      <p>Ritornerai alla home tra {remainingTime} {remainingTime === 1 ? "secondo" : "secondi"}...</p>
    </main>
  );
}

export default SuccessfullySend;
