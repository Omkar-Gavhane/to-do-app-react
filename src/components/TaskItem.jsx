import React, { useState } from "react";
import ListCheckbox from "./ListComponents/ListCheckbox";
import ListDeleteButton from "./ListComponents/ListDeleteButton";

const TaskItem = (props) => {
  const [titleClasses, setTitleClasses] = useState("text-xl font-bold ");

  const task = props.item;
  const checkHandler = (isChecked) => {
    isChecked
      ? setTitleClasses("text-xl font-bold line-through text-white")
      : setTitleClasses("text-xl font-bold ");
    };

  const deleteHandler = (taskId) => {
    props.onItemDelete(taskId);
  };

  return (
    <div className="px-8">
      <li key={task.id} className="flex justify-between gap-x-6 py-5 px-6 my-5">
        <ListCheckbox onCheckHandler={checkHandler} />
        <p className={titleClasses}>{task.title}</p>
        <ListDeleteButton onDeleteHandler={deleteHandler} id={task.id} />
      </li>
    </div>
  );
};

export default TaskItem;
