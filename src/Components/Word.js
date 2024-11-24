import React from "react";
import "./Word.css";
import Letter from "./Letter";

export default function Word({ randomWord, won, lost, wordCopy }) {
  //let randomWordCopy = randomWord;
  //word copy is a copy of the original word which will be used to reveal the word when a player fails to guess the word

  return (
    <div>
      <div className="word">
        {randomWord !== "" &&
          randomWord.split("").map((letter, index) => {
            return <Letter key={index} letter={letter} />;
          })}
      </div>
      {lost && (
        <div className="lost-message">
          {wordCopy.toUpperCase()}
          <br />
          Nice Try! Better Luck Next time
          <br />
          <span className="loading-new-word">loading next word...</span>
        </div>
      )}
      {won && (
        <div className="win-message">
          YOU ARE A GENIUS!
          <br />
          <span className="loading-new-word">loading next word...</span>
        </div>
      )}
    </div>
  );
}
