import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function BookCall() {
  const [userContact, setUserContact] = useState({
    name: "",
    surname: "",
    job: "",
    date: "",
    hour: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleChanges(e) {
    setUserContact({ ...userContact, [e.target.name]: e.target.value });
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://personalportfolio-be.onrender.com/api/send-contact",
        userContact
      );
      navigate("/successfully-send");
    } catch (error) {
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="book-a-call-container">
      <div className="book-a-call-header">
        <h1 className="book-a-call-title">Fissa una chiamata con me!</h1>
        <p>
          Compila il form sottostante con i dati richiesti, sarà mia premura
          contattarti!
        </p>
      </div>
      <form className="book-a-call-form" onSubmit={handleSubmit}>
        {error && <p className="maintenance-error-message">{error}</p>}
        <div className="form-row-double">
          <div className="input-block">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" onChange={handleChanges} />
          </div>
          <div className="input-block">
            <label htmlFor="surname">Cognome</label>
            <input type="text" name="surname" onChange={handleChanges} />
          </div>
        </div>
        <div className="form-row-single">
          <label htmlFor="job">Di cosa ti occupi?</label>
          <input type="text" name="job" onChange={handleChanges} />
        </div>
        <div className="book-a-call-overline-text">
          <h2>Quando vorresti essere contattato?</h2>
        </div>
        <div className="form-row-double">
          <div className="input-block">
            <label htmlFor="date">Data</label>
            <input type="date" name="date" onChange={handleChanges} />
          </div>
          <div className="input-block">
            <label htmlFor="hour">Ora</label>
            <input type="time" name="hour" onChange={handleChanges} />
          </div>
        </div>
        <div className="form-row-single">
          <label htmlFor="phone">Telefono</label>
          <input type="tel" name="phone" onChange={handleChanges} />
        </div>
        <p className="book-a-call-privacy">
          Cliccando su "Invia" acconsenti al trattamento dei tuoi dati personali
          come indicato nella <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>
        <button type="submit" className="book-a-call-submit">
          {loading ? "Invio in corso..." : "Invia"}
        </button>
      </form>
    </section>
  );
}

export default BookCall;
