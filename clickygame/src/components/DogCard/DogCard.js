import React from "react";
import "./DogCard.css";

const DogCard = props => {
  return (
    <div className="card">
      <div className="img-container">
      <img alt={props.name} src={props.image}/>
      </div>
      <span onClick={() => props.moveImage(props.id)} className="moveDog"></span> 
    </div>
    )
};

export default DogCard;