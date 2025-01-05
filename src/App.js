import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

import "./App.css";
import TaskList from "./components/TaskList";
import Card from "./components/common/Card";
import TaskForm from "./components/TaskForm";

function App() {
  let [tasks, setTasks] = useState([]);

  useEffect(() => {
    Analytics.page();
  }, []);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const TaskAddHandler = (data) => {
    setTasks((prevTasks) => [...prevTasks, data]);
  };

  const taskCompletedHandler = (isChecked, id) => {
      setTasks((prevTasks) =>
        prevTasks.map((item) =>
          item.id === id ? { ...item, completed: isChecked } : item
        )
      );
  };

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
          <TaskList
            tasks={tasks}
            onCompletedTask={taskCompletedHandler}
            onTaskDelete={TaskDeleteHandler}
          />
        </Card>
      </div>
    </div>
  );
}

export default App;
