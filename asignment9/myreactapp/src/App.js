import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [items, setItems] = useState("");
  const [sItem, setSitem] = useState([]);
  const InputEvent = (event) => {
    setItems(event.target.value);
  };
  const listOfItems = () => {
    setSitem((oldData)=>{
            return[...oldData,items]
        })
        setItems("")
  };
  const deleteItems = (id) => {
    // console.log("deleted");
    setSitem((oldData)=>{
      return oldData.filter((arrElem , index) =>{
        return index !== id;
      })
    })
  };

  return (
    <div className="container">
      <div className="center_div">
        <h1>ToDo List</h1>
        <div className="main">
          <input type="text" placeholder="Add Items" value={items} onChange={InputEvent} />
          <button onClick={listOfItems}> + </button>
        </div>

        <ol>
          {sItem.map((value,index)=>{
           return <TodoList key={index} id={index} name={value} onSelect={deleteItems} />
          })}
        </ol>
      </div>
    </div>
  );
};
export default App;
