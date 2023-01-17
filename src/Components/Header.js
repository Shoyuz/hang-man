import React from "react";
import "./Header.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  function handleClick(e) {
    //DISPLAY THE HELP BOX WHEN USER CLICKS THE HELP MENU
    if (e.target.id === "help-button") {
      //THE PARENT ELEMENT OF HELP MENU BUTTON IS THE HEADER DIV.THE HELP BOX TO DISPLAY IS THE LAST CHILD OF THIS PARENT HEADER DIV
      e.target.parentElement.lastChild.style.display = "block";
    }

    //HIDE THE HELP BOX WHEN USER CLICKS THE X SVG ICON
    if (e.target.id === "menu-close") {
      //THE CLOSE BUTTON IS INSIDE THE HELP BOX WHICH MAKES IT THE PARENT, CLICKING IT WILL SET THE PARENT DISPLAY TO NONE
      //WHICH MAKES THE MESSAGE BOX DISAPPEAR
      e.target.parentElement.style.display = "none";
    }

    //REFRESH THE BROWSER IF THE USER CLICKS ON SKIP/RESTART BUTTON
    if (e.target.id === "skip-restart") {
      window.location.reload();
    }
  }

  return (
    // THE PARENT HEADER DIV HANDLING ALL THE CLICK EVENTS
    <div id="header" onClick={handleClick} className="header">
      <span id="skip-restart" className="menu-button">
        Skip Word/Restart
      </span>
      <span id="help-button" className="menu-button">
        Help Menu
      </span>

      <div className="help-box">
        <span id="menu-close">
          <AiOutlineClose className="menu-close" pointerEvents="none" />
        </span>
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
            You will not receive any points if your hangman is fully drawn and
            you still have missing letters in the word
          </li>
          <li>If you skip/reset a word you will not get any points</li>
        </ul>
      </div>
    </div>
  );
}
