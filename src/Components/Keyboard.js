import React from "react";
import Key from "./Key";
import "./Keyboard.css";

export default function Keyboard(props) {
  let keys = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <div className="keyBoard">
      {keys.map((key, index) => {
        return (
          <Key
            key={index}
            keyboardKey={key}
            clickHandler={props.clickHandler}
          />
        );
      })}
    </div>
  );
}
