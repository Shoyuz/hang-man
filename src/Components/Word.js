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
        <div className="lost-message">
          Oooops. Sorry you lost!
          <br />
          <span className="loading-new-word">loading next word...</span>
        </div>
      )}
      {won && (
        <div className="win-message">
          HURRRRRAYYYY!! YOU GOT IT!!
          <br />
          <span className="loading-new-word">loading next word...</span>
        </div>
      )}
    </div>
  );
}
