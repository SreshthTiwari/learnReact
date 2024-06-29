import React, { useState, useSyncExternalStore } from "react";
import "./Game.css"
import Rules from "../Rules/Rules";

export default function Game(props){

    const [score, setScore] = useState(0)
    const [guess, setGuess] = useState()
    const [answer, setAnswer] = useState()

    const max = 6
    const min = 1

    const numbersArray = [1, 2, 3, 4, 5, 6]

    const [rulesAreShowing, toggleRules] = useState(true)

    const generateAnswer = () => {

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

        console.log("answer function called", randomNumber)

        setAnswer(randomNumber)
    }

    const handleGuess = (number) => {
        generateAnswer()
        setGuess(g => g = number.Number)


        if(guess == answer){
            setScore(s => s + 1)
        }
        else if(guess != answer){
            setScore(s => s - 1)
        }
    }

    const resetScore = () =>{
        setScore(0)
    }

    const showRules = () => {
        console.log("Hello", rulesAreShowing)
        toggleRules(s => !s)
    }

    return (
        <>        
        <div className="gameContainer">
            <div className="score">
                <p className="scoreCount">{score}</p>
                <p className="scoreLabel">Total Score</p>
            </div>

            <div className="numbersContainer">
            <ul className="guesses">
                {numbersArray.map((Number, Index) => 
                    <button onClick={() => handleGuess({Number})}>{Number}</button>
                )}
            </ul>
            <p>Choose A Number To Make A Guess</p>
            </div>

            <div className="playerControls">
                <button onClick={resetScore}>Reset Score</button>
                <button onClick={showRules}>Show Rules</button>
            </div>

            {rulesAreShowing && <Rules/>}
        </div>
        </>
    )
}