import React from "react";
import "./Word.css";
import Letter from "./Letter";

export default function Word(props) {
  let randomWord = props.randomWord;

  return (
    <div className="word">
      {randomWord !== "" &&
        randomWord.split("").map((letter) => {
          return <Letter letter={letter} />;
        })}
    </div>
  );
}
