import React, { useEffect, useState } from "react";

export default function Clock(props){

    const [date, setDate] = useState(new Date()) 

    const updateClock = () => {
        
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        } 
        
    }

    useEffect(updateClock, [date])

    return (
        <h1>{date.getHours()} : {date.getMinutes()} : {date.getSeconds()}</h1>
    )
}