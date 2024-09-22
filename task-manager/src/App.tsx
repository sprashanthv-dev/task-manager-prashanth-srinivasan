import { useState } from "react";

import { Task } from "./models/Task";
import { getMockTaskData } from "./utils/utils";

import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const mockData = getMockTaskData();
  const [tasks, setTasks] = useState<Task[]>(mockData);

  return (
    <>
      <h2 className="header">Task Manager</h2>
      <button className="new-task-button">New Task</button>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
