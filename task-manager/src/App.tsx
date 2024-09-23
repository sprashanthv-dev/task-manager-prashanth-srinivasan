import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";

import { TaskModel } from "./models/TaskModel";
import { getMockTaskData, OPERATIONS } from "./utils/utils";
import { save } from "./utils/storage";

import "./App.css";

function App() {
  const mockData = getMockTaskData();
  const navigate = useNavigate();

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

  function getTaskDetail(id: string) {
    const task = tasks.filter((task) => task.id === id);

    // TODO: Need to remove the object from local storage later ?
    save(id, { operation: OPERATIONS.VIEW, content: task });

    navigate(`/detail/${id}`);
  }

  return (
    <>
      <h2 className="header">Task Manager</h2>
      <Routes>
        <Route path="/detail/:id" element={<TaskDetail />} />
        <Route
          path="/"
          element={
            <>
              <button className="new-task-button">New Task</button>
              <TaskList
                tasks={tasks}
                completionHandler={toggleTaskCompletion}
                viewHandler={getTaskDetail}
                deleteHandler={deleteTask}
              />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
