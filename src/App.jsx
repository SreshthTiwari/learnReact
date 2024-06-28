import React from "react"
import Counter from "./components/Counter"
import ColorPicker from "./components/ColorPicker"
import FavouritePlayer from "./components/FavouritePlayer"
import ToDoList from "./components/ToDoList"

export default function App(){
    return(
      <>
        <ToDoList></ToDoList>
        <FavouritePlayer></FavouritePlayer>
        <Counter></Counter>
        <ColorPicker></ColorPicker>
      </>
    )
}