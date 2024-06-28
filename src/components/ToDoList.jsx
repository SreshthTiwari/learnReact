import React from "react";
import { useState } from "react";
import "../App.css"

export default function ToDoList(props){

    const [items, setItems] = useState(["Item 1", "Item 2"])
    
    //TODO Remove Function not working :( 
    const handleRemoveItem = (index) => {
        console.log(index)
        // setItems(i => i.splice(index, 1))
        const updatedItem = items.filter((element, i) => i !== index)
        setItems(updatedItem)
    }

    const handleAddItem = (event) => {
        var toAdd = document.getElementById("newItem").value
        document.getElementById("newItem").value = ""
        setItems(i => [...i, toAdd])
    }

    return(
        <>
            <h1>To do</h1>
            <ul>
                {items.map((item, idx) => 
                    <div className="listItem">
                        <li key={idx}>{item}</li>
                        <button onClick={() => handleRemoveItem(idx)}>Remove Item</button>
                    </div>)}
            </ul>
            <input id="newItem" type="text" placeholder="Enter new item"/>
            <button onClick={handleAddItem}>Add Item</button>
        </>
    )
}