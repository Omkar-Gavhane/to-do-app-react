import React, { useState } from "react";

import "./App.css";
import TaskList from "./components/TaskList";
import Card from "./components/common/Card";
import TaskForm from "./components/TaskForm";

function App() {
  let [tasks, setTasks] = useState([]);

  const TaskAddHandler = (data) => {
    setTasks((prevTasks) => [...prevTasks, data]);
  };
  console.log(tasks);

  const TaskDeleteHandler = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };
  return (
    <div className="App my-10">
      <div className="AppHeader mx-auto text-3xl font-bold text-white bg-emerald_green my- py-5">
        To-Do List
      </div>
      <div className="md:container mx-auto">
        <TaskForm onTaskAdd={TaskAddHandler} />
        <Card className="p-5 m-5">
          <TaskList tasks={tasks} onTaskDelete={TaskDeleteHandler} />
        </Card>
      </div>
    </div>
  );
}

export default App;
