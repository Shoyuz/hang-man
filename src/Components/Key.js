import React from "react";
import "./Key.css";

export default function Key(props) {
  return (
    <div onClick={props.clickHandler} className="key">
      <span className="letter">{props.keyboardKey}</span>
    </div>
  );
}
