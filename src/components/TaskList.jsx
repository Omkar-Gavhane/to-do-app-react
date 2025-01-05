import React from "react";
import TaskItem from "./TaskItem";

const TaskList = (props) => {

  const taskDeleteHandler = (id) => {
    props.onTaskDelete(id);
  };

  const isTaskComplete = (isChecked,id) =>{
    props.onCompletedTask(isChecked,id);
  }

  return (
    <ul className="divide-y divide-gray bg-midblack px-3 rounded-3xl">
      {props.tasks.map((task) => (
        <TaskItem item={task} key={task.id} onChecked={isTaskComplete} onItemDelete={taskDeleteHandler} />
      ))}
    </ul>
  );
};

export default TaskList;
