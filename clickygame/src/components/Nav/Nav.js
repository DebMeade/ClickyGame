import React from "react";
import "./Nav.css";

const Nav = props => {
  return (
  <nav>
    <ul>
    <li>Score: {props.score}</li>
    <li>High Score: {props.highScore}</li>
    </ul>
    </nav>
    )
}

export default Nav;