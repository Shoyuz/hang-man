import React from "react";
import { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Word from "./Word";
import Keyboard from "./Keyboard";
import "./Game.css";
import Hangman from "./Hangman";
import Header from "./Header";
//NOTE TO MYSELF - ANY VARIABLE DECLARATIONS MUST BE BELOW ANY IMPORT STATEMENTS!

//RANDOM WORDS IN THIS APP ARE GENERATED USING THIS FREE NPM LIBRARY CALLED random-words
//https://www.npmjs.com/package/random-words
//https://github.com/apostrophecms/random-words/blob/main/LICENSE
let randomWords = require("random-words");

//I COULD HAVE ALTERNATIVELY ALSO IMPLEMENTED THE RANDOM WORD FUNCTIONALITY BY CREATING AN ARRAY CALLED DICTIONARY CONTAINING THE WORDS
//AND TO GENERATE A RANDOM WORD I WOULD HAVE USED THE BELOW FUNCTION TO GENERATE THE RANDOM WORD
/* function getRandomWord(max,dictionary) {
  //max - length of the array i.e pass dictionary.length as argument for max
  return dictionary[Math.floor(Math.random() * max)];
} */

export default function Game() {
  let [won, setWon] = useState(false);
  let [lost, setLost] = useState(false);
  let [randomWord, setRandomWord] = useState("");
  let [buildWord, setBuildWord] = useState(""); //THIS WILL BE THE WORD BEING REVEALED LETTER BY LETTET AS THE USES MAKES CORRECT LETTER CHOICES
  let [incorrectGuess, setIncorrectGuess] = useState(1);
  let [score, setScore] = useState("");
  let [totalPlayed, setTotalPlayed] = useState("");
  let [gamesWon, setGamesWon] = useState("");

  //HELPER FUNCTION TO GENERATE RANDOM WORD
  function getRandomWord() {
    let word = randomWords(1); //Return the array with the word
    return word[0]; //Return the word itself
  }

  useEffect(() => {
    //CHECK IF SESSION STIORAGE EXISTS
    if (sessionStorage.getItem("score") === null) {
      sessionStorage.setItem("score", "0");
    }
    if (sessionStorage.getItem("totalPlayed") === null) {
      sessionStorage.setItem("totalPlayed", "0");
    }
    if (sessionStorage.getItem("gamesWon") === null) {
      sessionStorage.setItem("gamesWon", "0");
    }

    //SET THE SCOREBOARD STATE WITH SESSION STORAGE VALUES
    setScore(Number(JSON.parse(sessionStorage.getItem("score"))));
    setTotalPlayed(Number(JSON.parse(sessionStorage.getItem("totalPlayed"))));
    setGamesWon(Number(JSON.parse(sessionStorage.getItem("gamesWon"))));

    setRandomWord(getRandomWord());
  }, []);

  useEffect(() => {
    //MAP THROUGH THE WORD AND FOR EACH LETTER AND DISPLAY A PLACEHOLDER UNDERSCORE CONTAINER FOR EACH LETTER
    //STORE THE RESULTS IN A NEW VARIABLE RATHER THAN WORK ON THE ORIGINAL WORD AS LATER ON WHEN REPLACE FUNCTIION IS USED ON THE STRING
    //WE WILL NEED TO PRESERVE THE ORIGINAL WORD FROM BEING CHANGED
    let tempWord = randomWord.split("").map((letter) => {
      return "_";
    });

    setBuildWord(tempWord.join(""));
  }, [randomWord]);

  //KEYOBOARD KEYS CLICK HANDLER
  function clickHandler(e) {
    //USE REGEX TO MATCH THE CLICKED LETTER WITH THE LETTERS IN THE WORD TO FIND A MATCH
    let letterMatchRegEx = new RegExp(
      `${e.currentTarget.innerText.toLowerCase()}`,
      "g"
    );
    //USE THE MATCHALL FUNCTION TO FIND ALL MATCHES AND USE THE SPREAD OPERATOR TO CONSTRUCT AN ARRAY OF THE RESULTS
    let matchArray = [...randomWord.matchAll(letterMatchRegEx)];
    //SPLIT THE WORD TO GET AN ARRAY WHICH WILL CONTAIN EACH LETTER OF THE WORD AND STORE IT IN A VARIABLE
    let tempWord = [...buildWord.split("")];

    //LOOP THROUGHT THE RESULTS OF THE MATCH WHICH WILL CONTAIN ALL THE INDEX(ES) WERE THE LETTER MATCHED
    for (const arr of matchArray) {
      //SET THE INDEXES OF THE TEMPORARY WORD WITH THE MTACHED LETTER
      tempWord[arr.index] = e.currentTarget.innerText;
    }

    //REPLACE THE WORD IN BUILDWORD (WHICH CONTAINS THE UNDERSCORE PLACEHOLDERS EQUAL TO THE LETTERS IN THE WORD) WITH THE TEMP WORD WHICH WILL NOW HAVE ANY CORRECT GUESSED LETTERS VISIBLE TO THE USER
    setBuildWord(tempWord.join(""));

    if (matchArray.length > 0) {
      e.currentTarget.style.backgroundColor = "green";
      //DISABLE ANY FURTHER CLICKS
      e.currentTarget.style.pointerEvents = "none";

      //GAME WON CONDITION CHECK
      if (tempWord.join("").toLowerCase() === randomWord) {
        //ADD 5 TO SCORE FOR EACH WIN
        setScore((previous) => {
          sessionStorage.setItem("score", JSON.stringify(previous + 5));
          return previous + 5;
        });

        //ADD 1 TO GAMES PLAYED
        setTotalPlayed((previous) => {
          sessionStorage.setItem("totalPlayed", JSON.stringify(previous + 1));
          return previous + 1;
        });

        //ADD 1 TO GAMES WON
        setGamesWon((previous) => {
          sessionStorage.setItem("gamesWon", JSON.stringify(previous + 1));
          return previous + 1;
        });

        //SET WON STATE VARIABLE TO TRUE TO SIGNAL THE GAME HAS BEEN WON
        setWon((previous) => {
          return !previous;
        });

        setTimeout(() => {
          //RESET THE GAME BY REFRESHING THE BROWSER
          window.location.reload();
        }, 3000);
      }
    } else {
      e.currentTarget.style.backgroundColor = "red";
      //DISABLE ANY FURTHER CLICKS
      e.currentTarget.style.pointerEvents = "none";
      setIncorrectGuess((previous) => {
        return previous + 1;
      });

      //CHECK IF MAX LIMIT OF GUESSES HAS BEEN REACHED
      if (incorrectGuess >= 10) {
        //ADD 1 TO GAMES PLAYED
        setTotalPlayed((previous) => {
          sessionStorage.setItem("totalPlayed", JSON.stringify(previous + 1));
          return previous + 1;
        });

        //SET LOST VARIABLE TO TRUE SIGNALLING GAME IS LOST
        setLost((previous) => {
          return !previous;
        });

        //RESET THE GAME BY REFRESHING THE BROWSER
        setTimeout(() => {
          setIncorrectGuess(0);
          window.location.reload();
        }, 3000);
      }
    }
  }

  return (
    <>
      <div className="ui-grid">
        {/* HEADER */}
        <Header />
        {/* HANGMAN DRAWING BOARD */}
        <Hangman incorrectGuess={incorrectGuess} />
        <div className="game-board">
          {/* SCOREBOARD */}
          <Scoreboard score={score} won={gamesWon} totalPlayed={totalPlayed} />
          {/* WORD */}
          <Word
            randomWord={buildWord}
            won={won}
            lost={lost}
            wordCopy={randomWord}
          />
          {/* KEYOBARD */}
          <Keyboard clickHandler={clickHandler} />
          {/* HANGMAN */}
        </div>
      </div>
    </>
  );
}
