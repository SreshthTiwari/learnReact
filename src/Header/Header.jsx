import React, { useState } from "react";
import "./Header.css"

export default function Header(props){

    return(
        <>
            <div className="headerContainer">
                <div className="text">
                    <h1>{props.title}</h1>
                    <div className="buttons">
                        <button onClick={props.clickFunction}>{props.CTAPrimary}</button>
                    </div>
                </div>

            </div>
        </>
    )
}