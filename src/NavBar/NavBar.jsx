import React from "react";
import "./NavBar.css"

export default function NavBar(props){
    return(

        <div className="navbarcontainer">
            <nav>
                <div className="logo">
                    <img src="data:image/png;base64,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" alt="" srcset="" />
                </div>
                <div className="menu">
                    <ul>
                        <li className="menuLink"><a href="#">Home</a></li>
                        <li className="menuLink"><a href="#">About</a></li>
                        <li className="menuLink"><a href="#">Services</a></li>
                        <li className="menuLink"><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="callToAction">
                    <button>
                        Get started
                    </button>
                </div>
            </nav>
        </div>

    )
}