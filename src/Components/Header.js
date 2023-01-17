import React from "react";
import "./Header.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  function handleClick(e) {
    //HIDE THE HELP BOX WHEN USER CLICKS THE X SVG ICON
    if (e.target.nodeName === "svg") {
      e.currentTarget.style.display = "none";
    }
    //DISPLAY THE HELP BOX WHEN USER CLICKS THE HELP MENU
    if (e.target.id === "help-button") {
      e.target.nextSibling.style.display = "block";
    }
    //REFRESH THE BROWSER IF THE USER CLICKS ON SKIP/RESTART BUTTON
    if (e.target.id === "skip-restart") {
      window.location.reload();
    }
  }
  return (
    <div className="header">
      <span id="skip-restart" onClick={handleClick} className="menu-button">
        Skip Word/Restart
      </span>
      <span id="help-button" onClick={handleClick} className="menu-button">
        Help Menu
      </span>

      <div onClick={handleClick} className="help-box">
        <AiOutlineClose className="menu-close" />
        <h1>Game Rules:</h1>
        <ul>
          <li>Click on any letter to start guessing the word</li>
          <li>A right guess will unveal a letter(s) </li>
          <li>
            If you manage to guess the word correctly you will receive 5 points
            upon the revelation of the last letter and the game will continue
            with the next word
          </li>
          <li>A wrong guess will start the hanging process</li>
          <li>
            With each wrong guess a part of the hangman will be drawn to the
            drawing board on the left
          </li>
          <li>
            When the hangman is fully drawn you will no loger be able to guess
            for that round and the next word will appear
          </li>
          <li>
            You will not receive any points if your hangman if fully drawn and
            you still have missing letters in the word
          </li>
          <li>If you skip/reset a word you will not get any points</li>
        </ul>
      </div>
    </div>
  );
}
