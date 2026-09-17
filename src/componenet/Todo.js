import React, { useState } from "react";
import Item from "./Item";
import style from "./Todo.module.css";

const Todo = () => {
  //task list
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("task")) || [],
  );
  //input value
  const [inputValue, setInputValue] = useState("");
  //input change handler
  const handleinputchange = (e) => {
    setInputValue(e.target.value);
  };
  //add task handler
  const addTaskHandler = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 1000),
      name: inputValue,
      Status: "Pending",
    };
    const prevTask = list;
    setList([...prevTask, task]);
    setInputValue("");
    localStorage.setItem("task", JSON.stringify([...prevTask, task]));
  };
  const clearAllHandler = () => {
    setList([]);
  };
  const doneTaskHandler = (id) => {
    const updatedList = list.map((element) => {
      if (element.id === id) {
        return { ...element, Status: "Completed" };
      }
      return element;
    });
    setList(updatedList);
  };

  const deleteTaskHandler = (id) => {
    const updatedList = list.filter((element) => element.id !== id);
    setList(updatedList);
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.inputBox}>
        <h1>Make Your to do List</h1>
        <div>
          <p>Add Your items here✏️</p>
          <form>
            <input
              type="text"
              placeholder="Your Items"
              value={inputValue}
              onChange={handleinputchange}
            />
            <button onClick={addTaskHandler}>Submit</button>
          </form>
        </div>
      </div>
      <h3>Your Tasks:</h3>
      <ul>
        {list.map((element) => (
          <Item
            task={element}
            onDone={doneTaskHandler}
            onDelete={deleteTaskHandler}
          />
        ))}
      </ul>

      <div className={style.clearAll}>
        <button onClick={clearAllHandler}>Clear All</button>
      </div>
    </div>
  );
};

export default Todo;
