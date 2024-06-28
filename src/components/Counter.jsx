import React from "react";
import { useState } from "react";
import "../App.css"

export default function Counter(props){
    const [counter, changeCounter] = useState(0)

    const Increment = () => {
        // use update function instead of directly adding so that current state of counter isn't used
        changeCounter(c => c + 1)
    }
    
    const Decrement = () => {
        changeCounter(c => c - 1)
    }

    const Reset = () => {
        //not necessary here
        changeCounter(0)
    }

    return(

        <>
            <p className="Number">Count: {counter}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </>
    )
}