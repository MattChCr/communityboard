import React from "react";
import '../index.css';

const Card = (props) => {
    return (
        <div className= "Card">
            <img src={props.image}/>
            <h2> {props.name}</h2>
            <h3> {props.style}</h3> 
            <br></br>
            <div class="Button">
                <a href={props.link}> View Sites </a>
            </div>
        
        </div>
      
    )
}

export default Card;
