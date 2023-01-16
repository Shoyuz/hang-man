import React from "react";
import "./Word.css";
import Letter from "./Letter";

export default function Word({ randomWord, won, lost }) {
  // let randomWord = randomWord;

  return (
    <div>
      <div className="word">
        {randomWord !== "" &&
          randomWord.split("").map((letter) => {
            return <Letter letter={letter} />;
          })}
      </div>
      {lost && (
        <div style={{ color: "red", fontWeight: "600" }}>
          Oooops. Sorry you lost!
          <br />
          <span className="loading-new-word">loading new word...</span>
        </div>
      )}
      {won && (
        <div style={{ color: "green", fontWeight: "600" }}>
          Hurray!! You won!!
          <br />
          <span className="loading-new-word">loading new word...</span>
        </div>
      )}
    </div>
  );
}
