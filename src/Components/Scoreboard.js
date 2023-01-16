import React from "react";
import "./Scoreboard.css";

export default function Scoreboard({ score, won, totalPlayed }) {
  return (
    <div className="score">
      <span>Score : {score}</span>
      <br />
      <span className="right">{won}</span>/<span>{totalPlayed}</span>
    </div>
  );
}
