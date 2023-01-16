import React from "react";
import "./Hangman.css";

import state1 from "../images/state1.GIF";
import state2 from "../images/state2.GIF";
import state3 from "../images/state3.GIF";
import state4 from "../images/state4.GIF";
import state5 from "../images/state5.GIF";
import state6 from "../images/state6.GIF";
import state7 from "../images/state7.GIF";
import state8 from "../images/state8.GIF";
import state9 from "../images/state9.GIF";
import state10 from "../images/state10.GIF";
import state11 from "../images/state11.GIF";

export default function Hangman({ incorrectGuess }) {
  let state = "state";

  return (
    <div className="hangman-image">
      {incorrectGuess === 1 && <img src={state1} />}
      {incorrectGuess === 2 && <img src={state2} />}
      {incorrectGuess === 3 && <img src={state3} />}
      {incorrectGuess === 4 && <img src={state4} />}
      {incorrectGuess === 5 && <img src={state5} />}
      {incorrectGuess === 6 && <img src={state6} />}
      {incorrectGuess === 7 && <img src={state7} />}
      {incorrectGuess === 8 && <img src={state8} />}
      {incorrectGuess === 9 && <img src={state9} />}
      {incorrectGuess === 10 && <img src={state10} />}
      {incorrectGuess === 11 && <img src={state11} />}
    </div>
  );
}
