import React, { useState } from "react";
import Card from "./common/Card";
import NewTaskTitle from "./FormComponents/NewTaskTitle";

const TaskForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    id: "",
  });

  const addNewTask = (event) => {
    event.preventDefault();
    const taskData = {
      title: userInput.title,
      id: userInput.id,
    };
    props.onTaskAdd(taskData);
    
    setUserInput({
      title: "",
      id: "",
    });
  };

  return (
    <Card>
      <form
        className="flex flex-col gap-5 p-6 h-52 my-6 items-center"
        onSubmit={addNewTask}
      >
        <NewTaskTitle
          userInput={userInput}
          setUserInput={setUserInput}
          value={userInput.title}
        />
        <button
          type="submit"
          className="px-10 py-2 text-lg bg-blue-600 text-white bg-emerald_green font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 "
        >
          Add
        </button>
      </form>
    </Card>
  );
};

export default TaskForm;
