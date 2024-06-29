import React, { useState } from "react"
import Header from "./Header/Header"
import Game from "./Game/Game"

export default function App(){

  const [gameStarted, setGameStarted] = useState(false)

  const toggleGameStarted = () => {
    console.log("changed status of game")
    setGameStarted(gameStarted == false ? true : false)
  }
  
  return(
    gameStarted ? <Game/> : <Header title = "Dice Game" CTAPrimary = "Start" clickFunction = {toggleGameStarted}/>
  )
}