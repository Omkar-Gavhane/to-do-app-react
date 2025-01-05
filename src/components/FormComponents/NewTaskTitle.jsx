import React, { useState } from "react";

const NewTaskTitle = (props) => {
  const TaskTitleHandler = (event) => {
    props.setUserInput((prevstate) => {
      return {
        ...prevstate,
        title: event.target.value,
        id: Math.random().toString(),
      };
    });
  };

return(
    <div className="w-1/2">
      <label
        htmlFor="taskTitle"
        className="block text-sm font-medium text-2xl text-gray-700 mb-2 text-left"
      >
        Task
      </label>
      <input
        type="text"
        name="taskTitle"
        id="taskTitle"
        value={props.value}
        placeholder="Enter Task Title"
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
        onChange={TaskTitleHandler}
      />
    </div>
  );
};

export default NewTaskTitle;
