import React from "react";
import { Container } from "react-bootstrap";

import fmLogo from "../images/fm-logo.svg";
import "../styles/Privacy.css";

function PrivacyPolicy() {
  return (
    <Container className="privacy-policy-container">
      <header className="privacy-policy-header">
        <img src={fmLogo} alt="FM Logo" />
        <h1>Privacy Policy</h1>
      </header>
      <article className="privacy-policy-content">
        <div className="privacy-policy-intro">
          <h2>INFORMATIVA SULLA PRIVACY</h2>
          <p>
            La presente Informativa sulla privacy descrive le modalità con cui i
            tuoi dati personali vengono raccolti, utilizzati e diffusi quando
            visiti <a href="https://www.fmerighi.it">https://www.fmerighi.it</a>{" "}
            (il “Sito Web”).
          </p>
        </div>
        <div className="privacy-policy-part">
          <h3>RACCOLTA DATI PERSONALI</h3>
          <p>
            Quando visiti il Sito Web, raccogliamo automaticamente determinate
            informazioni presenti sul tuo dispositivo, tra cui dati del browser,
            indirizzo IP, fuso orario e dati di alcuni cookie installati sul tuo
            dispositivo. <br></br>
            Inoltre, mentre navighi sul Sito Web, raccogliamo informazioni
            specifiche sulle pagine web e i prodotti che visualizzi, sui siti
            web o i termini di ricerca che ti hanno indirizzato al Sito Web e
            sul modo in cui interagisci con il Sito Web. Definiremo queste
            informazioni raccolte automaticamente come “Informazioni sul
            dispositivo”. <br></br>
            <br></br>
            Raccogliamo le Informazioni sul dispositivo con le seguenti
            tecnologie: <br></br>
            <br></br>- I “cookie” sono file di dati che vengono inseriti sul tuo
            dispositivo o computer, e spesso includono un codice identificativo
            univoco anonimo. Per maggiori informazioni sui cookie e su come
            disattivarli visita{" "}
            <a href="http://www.allaboutcookies.org">
              http://www.allaboutcookies.org
            </a>
            . <br></br>- I “File di log” tengono traccia delle azioni che hanno
            luogo sul Sito Web, e raccolgono dati tra cui indirizzo IP, tipo di
            browser, provider di servizi internet, pagine di riferimento/uscita
            e marcatura temporale con data/ora. <br></br>- “Web beacon”, “tag” e
            “pixel” sono file elettronici utilizzati per registrare dati sulle
            tue modalità di navigazione nel Sito Web. <br></br>
            <br></br>
            AL MOMENTO NON VENGONO SALVATI COOKIES DI ALCUN TIPO SUL TUO DISPOSITIVO.
            <br></br>
            <br></br>
            Quando effettui una richiesta di contatto telefonico tramite
            il Sito Web, raccogliamo determinate informazioni che ti riguardano,
            tra cui nome, cognome e numero di telefono. Definiremo questi dati
            “Informazioni sull'utente”. <br></br>
            <br></br>
            Quando parliamo di “Dati personali” in questa Informativa sulla
            privacy, facciamo riferimento sia alle Informazioni sul dispositivo
            che alle Informazioni sull'utente.
          </p>
        </div>
        <div className="privacy-policy-part">
          <h3>COME UTILIZZIAMO I TUOI DATI PERSONALI?</h3>
          <p>
            Generalmente utilizziamo le Informazioni sull'utente per comunicare
            con te; fornirti informazioni o promozioni sui nostri prodotti o
            servizi, se in linea con le preferenze che ci hai espresso.{" "}
            <br></br>
            {/* Inoltre ci avvaliamo di Google Analytics per analizzare le modalità
            di utilizzo del Sito Web da parte dei clienti. Trovi maggiori
            informazioni su come Google utilizza i tuoi Dati personali qui:
            https://www.google.com/intl/it/policies/privacy/. Volendo puoi
            disattivare Google Analytics da qui:
            https://tools.google.com/dlpage/gaoptout. */}{" "}
            <br></br>
            Infine, possiamo anche comunicare a terzi i tuoi Dati personali per
            conformarci a leggi e regolamenti applicabili, rispondere a
            citazioni in giudizio, mandati di perquisizione o altre richieste
            legali di dati ricevute, o comunque per tutelare i nostri diritti.
          </p>
        </div>
        <div className="privacy-policy-part">
          <h3>DO NOT TRACK</h3>
          <p>
            Tieni presente che non alteriamo le modalità di raccolta dati del
            nostro Sito Web e le pratiche di utilizzo dei dati in presenza del
            segnale Do Not Track del tuo browser.
          </p>
        </div>
        <div className="privacy-policy-part">
          <h3>I TUOI DIRITTI</h3>
          <p>
            Se risiedi in Europa, hai il diritto di accedere ai dati personali
            che ti riguardano in nostro possesso e di richiederne
            l'aggiornamento, la correzione o la rimozione. Se desideri
            esercitare questo diritto, contattaci attraverso i recapiti
            sottostanti. <br></br>
            <br></br>
            In più, se risiedi in Europa, tieni presente che trattiamo i tuoi
            dati anche per adempiere agli eventuali obblighi contrattuali nei
            tuoi confronti o comunque per perseguire i nostri legittimi
            interessi aziendali sopra indicati.
          </p>
        </div>
        <div className="privacy-policy-part">
          <h3>CONSERVAZIONE DEI DATI</h3>
          <p>
            Quando effettui una richiesta di contatto telefonico tramite il Sito
            Web, conserviamo le Informazioni sull'utente nei nostri archivi,
            tranne se e fino a quando non ci chiedi di eliminare tali
            informazioni.
          </p>
        </div>
        <div className="privacy-policy-part">
          <h3>SICUREZZA DEI DATI</h3>
          <p>
            Adottiamo misure di sicurezza tecniche e organizzative adeguate per
            proteggere i tuoi dati personali contro la perdita, l'uso improprio
            e l'accesso non autorizzato.
          </p>
        </div>
        <div className="privacy-policy-part">
          <h3>MINORI</h3>
          <p>
            Il Sito Web non è destinato a persone di età inferiore a 18 anni.
          </p>
        </div>
        <div className="privacy-policy-part">
          <h3>MODIFICHE</h3>
          <p>
            Di volta in volta potremo aggiornare la presente Informativa sulla
            privacy, ad esempio in modo che rifletta le modifiche alle nostre
            procedure, oppure per altre ragioni operative, legali o normative.
          </p>
        </div>
        <div className="privacy-policy-part">
          <h3>CONTATTACI</h3>
          <p>
            Per maggiori informazioni sulle nostre procedure in materia di
            privacy, se hai domande o se vuoi presentare un reclamo, invia
            un'email a{" "}
            <a href="mailto:francescomerighi61@gmail.com">
              francescomerighi61@gmail.com
            </a>{" "}
            o contattaci tramite posta ai seguenti recapiti: <br></br>
            Via III Novembre 6,
            38060, Nogaredo (TN), Italia
          </p>
        </div>
      </article>
    </Container>
  );
}

export default PrivacyPolicy;
