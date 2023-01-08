import React from "react";
import Tasks from "../tasks/Tasks";
import "./TaskLists.css";

const TaskLists = ({ list, task, draggedItem, dragEnd, dragOver }) => {
  return (
    <>
      <Tasks
        draggedItem={draggedItem}
        dragEnd={dragEnd}
        dragOver={dragOver}
        task={task}
        list={list}
      ></Tasks>
    </>
  );
};

export default TaskLists;
