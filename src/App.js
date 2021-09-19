import React from "react";
import "./App.css";
import Input from "./app/components/input";
import TodoItem from "./app/components/TodoItem";

const todoList = [
  {
    item: "todo",
    done: false,
    id: 123123123,
  },
  {
    item: "todo2",
    done: true,
    id: 9999,
  },
];

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
