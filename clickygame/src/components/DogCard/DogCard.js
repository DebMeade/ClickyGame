import React from "react";
import "./DogCard.css";

// const DogCard = props => {
//   return (
//     <div className="card">
//       <div className="img-container">
//       <img alt={props.name} src={props.image}/>
//       </div>
//       <span onClick={() => props.moveImage(props.id)} className="moveDog"></span> 
//     </div>
//     )
// };

const DogCard = props => {
  return (
    <div className="card" value={props.id} onClick={() => props.handleClick(props.id)}>
    <div className="img-container img-thumbnail"> <img alt={props.name} src={props.image} />
      </div>
    </div>
  )
}

export default DogCard;