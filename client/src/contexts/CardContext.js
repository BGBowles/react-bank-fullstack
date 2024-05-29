import React, { createContext } from "react";

export const CardContext = createContext();

function Card(props){

    return (
        <div className="Card">
            <div className="Card-header">{ props.header }</div>
                <p>Bootstrap Card generated through useContext</p>
            <div className="Card-body">
                {props.text && (<div className="Card-text">{props.text}</div>)}
                {props.image && (<div className="Card-image">{props.image}</div>)}
                
                {props.body}
                {props.form}
                {props.input && (<div className="Card-input">{props.input}</div>)}
                
                {props.label}
                {props.button}
                {props.balance}
                {props.timestamp}
                {props.status && (<div id="createStatus">{props.status}</div>)}
            </div>
        </div>
    );
}

export default Card;