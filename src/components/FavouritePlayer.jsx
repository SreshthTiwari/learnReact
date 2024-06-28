import React from "react";
import { useState } from "react";

export default function FavouritePlayer(props){
    const [player, setPlayer] = useState({
        playerName: "LeBron James",
        playerTeam: "LA Lakers",
        playerAge: 39
    })

    const handleNameChange = (event) => {
        setPlayer(p => ({...p, playerName: event.target.value}))
    }

    const handleTeamChange = (event) => {
        setPlayer(p => ({...p, playerTeam: event.target.value}))
    }

    const handleAgeChange = (event) => {
        setPlayer(p => ({...p, playerAge: event.target.value}))
    }

    return(
    <>    
        <h1>Your favorite player is: {player.playerName}, from the {player.playerTeam}, who is {player.playerAge} years old.</h1>
        <input type="text" placeholder="Enter Player Name" onChange={handleNameChange}></input>
        <input type="text" placeholder="Enter Player Age" onChange={handleAgeChange}></input>
        <input type="text" placeholder="Enter Player Team" onChange={handleTeamChange}></input>
    </>
    )
}