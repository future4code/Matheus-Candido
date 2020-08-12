import React from "react";
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={props.imagem} />
            <div><h4>{props.texto}</h4><p>{props.texto2}</p></div>
        </div>
    )
}

export default CardPequeno;