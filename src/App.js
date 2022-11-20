import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  const [add, setAdd] = useState()
  const [items, setItems] = useState([])

  const inputEvent = (event) =>{
    setAdd(event.target.value);
  }

  const addItems = () =>{
        setItems((olditems) =>{
          return [...olditems, add]
        })
        setAdd('');
  }
  
  const deleteItem = (id) =>{
    console.log("deleted");

    setItems((olditems) =>{
      return olditems.filter((arrElem, index) =>{
        return index !== id;
      })
    })
  }
  

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>TODO List</h1>
          <br />
          <input type="text" placeholder="Add Items" onChange={inputEvent} value={add}/>
          <button onClick={addItems}> + </button>
          <br />
          <ol>
            {/* <li>{items}</li> */}
          
            {items.map((val, index) => {
              return <ToDoList 
                text = {val}
                key = {index}
                id = {index}
                onSelect = {deleteItem}
              />
              })}
            
          </ol>

        </div>
      </div>
    </>
  )
   
}

export default App;
