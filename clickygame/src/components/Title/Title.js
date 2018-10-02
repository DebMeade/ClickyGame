import React from "react";
import "./Title.css";

const Title = props => <h1 className="title">{props.children}</h1>;

// const Title = props => (
//   <div classame = "jumbotron">
//     <h1>Dog Clicky Game!</h1>
//     <p>Click on an image to earn points but don't click on an image more than once or you'll have to start all over!</p>
//   </div>
// );

export default Title;