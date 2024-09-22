import { useState } from "react";

import { TaskModel } from "./models/TaskModel";
import { getMockTaskData } from "./utils/utils";

import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const mockData = getMockTaskData();
  const [tasks, setTasks] = useState<TaskModel[]>(mockData);

  return (
    <>
      <h2 className="header">Task Manager</h2>
      <button className="new-task-button">New Task</button>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
