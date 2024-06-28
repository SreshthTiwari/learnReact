import React from "react";
import { useState } from "react";

export default function ColorPicker(props){
    const [color, setColor] = useState("#FFFFFF")

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    return(
        <div>
            <div className="colordiv" style={{background: color}}>
                <h1>Color</h1>
            </div>
            <p>Selected Color: {color}</p>
            <input type="color" onChange={handleColorChange} />
        </div>
    )
}