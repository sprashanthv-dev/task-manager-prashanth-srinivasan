import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";

import { TaskModel } from "./models/TaskModel";
import { getMockTaskData } from "./utils/utils";

import "./App.css";

function App() {
  const mockData = getMockTaskData();
  const [tasks, setTasks] = useState<TaskModel[]>(mockData);

  function toggleTaskCompletion(
    id: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    setTasks((currTasks: TaskModel[]) => {
      return currTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: event.target.checked };
        }

        return task;
      });
    });
  }

  function deleteTask(id: string) {
    setTasks((currTasks: TaskModel[]) => {
      return currTasks.filter((task) => {
        return task.id !== id;
      });
    });
  }

  return (
    <>
      <BrowserRouter>
        <h2 className="header">Task Manager</h2>
        <button className="new-task-button">New Task</button>
        <Routes>
          <Route path="/detail/:id" element={<TaskDetail />} />
          <Route
            path="/"
            element={
              <TaskList
                tasks={tasks}
                completionHandler={toggleTaskCompletion}
                deleteHandler={deleteTask}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
