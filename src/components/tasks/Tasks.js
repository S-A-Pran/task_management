import React, { useEffect, useState } from "react";
import "./Tasks.css";

const Tasks = ({ list, task, draggedItem, dragEnd, dragOver }) => {
  return (
    <>
      <div className="task">
        <h1>
          {task === "todo"
            ? "TO DO"
            : task === "progress"
            ? "In Progress"
            : "Done"}
        </h1>
        {list.length > 0 ? (
          list.map((item) => (
            <div
              id="dragItems"
              onDrag={() => draggedItem()}
              onDragEnd={() => dragEnd(item)}
              onDragOver={() => dragOver()}
              className="task_names"
              key={item}
              draggable
            >
              {item}
            </div>
          ))
        ) : (
          <div>
            <p style={{ textAlign: "center" }}>Empty</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Tasks;
