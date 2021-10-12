import React from "react";
import "./style.css";

function Footer(props) {
    return (
    <section class = "footer">
        <small><strong>Copyright {props.year}</strong> </small>
    </section>
    );
}

export default Footer;