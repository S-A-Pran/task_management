import React, { useEffect, useState } from "react";
import TaskLists from "../../components/tasklists/TaskLists.js";
import { useLocalStorage } from "../../hooks/useLocalStorage.js";
import "./Home.css";

const Home = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useLocalStorage("todo", []);
  const [progress, setProgress] = useLocalStorage("progress", []);
  const [done, setDone] = useLocalStorage("done", []);

  const submit = (e) => {
    e.preventDefault();
    console.log(value);
    if (todo.length > 0) {
      setTodo(() => [...todo, value]);
    } else {
      setTodo(() => [value]);
    }
  };

  const draggedItem = (e) => {
    console.log("dragged");
  };

  const dragEnd = (value) => {
    console.log(value);
    console.log("dragEnd");
    if (progress.length > 0) {
      setProgress(() => [...progress, value]);
    } else {
      setProgress(() => [value]);
    }
  };

  const dragOver = (e) => {
    console.log("dragOver");
  };

  return (
    <>
      <div>
        <form action="" onSubmit={submit}>
          <div className="search_bar">
            <input
              onBlur={(e) => setValue(() => e.target.value)}
              placeholder="Write your task ..."
              className="text"
              type="text"
            />
            <button type="submit" className="btn" readOnly>
              Add
            </button>
          </div>
        </form>
        <div className="taskList">
          <TaskLists
            draggedItem={draggedItem}
            dragEnd={dragEnd}
            dragOver={dragOver}
            task={"todo"}
            list={todo}
          ></TaskLists>
          <TaskLists
            draggedItem={draggedItem}
            dragEnd={dragEnd}
            dragOver={dragOver}
            task={"progress"}
            list={progress}
          ></TaskLists>
          <TaskLists
            draggedItem={draggedItem}
            dragEnd={dragEnd}
            dragOver={dragOver}
            task={"done"}
            list={done}
          ></TaskLists>
        </div>
      </div>
    </>
  );
};

export default Home;
