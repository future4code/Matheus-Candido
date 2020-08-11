import React from "react"
import './CardIntruso.css'

function CardIntruso(props) {
    return (
        <div className="intruso-button-container">
            <img src={ props.intruso }/>
            <p>{ props.texto }</p>
        </div>
    )
}

export default CardIntruso;