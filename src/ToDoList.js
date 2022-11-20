import React from "react";
 import App from "./App";
import './App.css'

const ToDoList = (props) =>{
    return (<>
    <div className="delete_style">
        <li>{props.text}</li>
        <i className="fa-solid fa-trash" onClick={() =>{
            props.onSelect(props.id)
        }}></i>
    </div>
        </>)
}
export default ToDoList;