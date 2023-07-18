import React from "react";

const TodoList = (props) => {

  return (
    <>
      <div className="todo_style">
        <img src="./img/close.png" alt="" onClick={()=>{
          props.onSelect(props.id)
        } } />
        <li>{props.name}</li>
      </div>
    </>
  );
};

export default TodoList;
