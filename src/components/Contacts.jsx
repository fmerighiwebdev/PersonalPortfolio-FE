import React from "react";
import { Container } from "react-bootstrap";

function Contacts() {
    return (
        <section className="contacts" id="contacts">
            <Container className="contacts-container">
                <h1>Contacts</h1>
                <p>
                    Hi, I'm Francesco Merighi, a web developer and UI/UX designer based in Italy. I'm passionate about creating beautiful and functional websites and applications. I'm always looking for new challenges and opportunities to grow, so feel free to contact me if you have any questions or if you want to work with me!
                </p>
            </Container>
        </section>
    );
}

export default Contacts;