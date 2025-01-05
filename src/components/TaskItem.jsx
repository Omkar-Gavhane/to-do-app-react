import React, { useState } from "react";
import ListCheckbox from "./ListComponents/ListCheckbox";
import ListDeleteButton from "./ListComponents/ListDeleteButton";

const TaskItem = (props) => {
  const task = props.item;

  // Set initial class based on the completed status
  const [titleClasses, setTitleClasses] = useState(
    task.completed
      ? "text-xl font-bold line-through text-white"
      : "text-xl font-bold"
  );

  const checkHandler = (isChecked, id) => {
    setTitleClasses(
      isChecked
        ? "text-xl font-bold line-through text-white"
        : "text-xl font-bold"
    );
    props.onChecked(isChecked, id);
  };

  const deleteHandler = (taskId) => {
    props.onItemDelete(taskId);
  };

  return (
    <div className="px-8">
      <li key={task.id} className="flex justify-between gap-x-6 py-5 px-6 my-5">
        <ListCheckbox
          onCheckHandler={checkHandler}
          id={task.id}
          isChecked={task.completed} // Pass the initial completed state
        />
        <p className={titleClasses}>{task.title}</p>
        <ListDeleteButton onDeleteHandler={deleteHandler} id={task.id} />
      </li>
    </div>
  );
};

export default TaskItem;
