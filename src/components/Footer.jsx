import React from "react";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;