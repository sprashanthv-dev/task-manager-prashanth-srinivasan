import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";

import { TaskModel } from "./models/TaskModel";
import { OPERATIONS, STORAGE_KEY } from "./utils/utils";
import { get, save } from "./utils/storage";

import "./App.css";
import AddTask from "./components/AddTask";

function App() {
  const navigate = useNavigate();

  // Load tasks initially from local storage if available
  const [tasks, setTasks] = useState<TaskModel[]>(() => {
    const storedTasks = get(STORAGE_KEY);

    if (storedTasks === null) return [];

    return storedTasks.content as TaskModel[];
  });

  const [wasNewTaskClicked, setWasNewTaskClicked] = useState(false);

  // Run the effect whenever a task is added, edited,
  // deleted or toggled completion status
  useEffect(() => {
    save(STORAGE_KEY, { operation: OPERATIONS.STORE, content: tasks });
  }, [tasks]);

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

    save(id, { operation: OPERATIONS.VIEW, content: task[0] });

    navigate(`/detail/${id}`);
  }

  function addTask(task: TaskModel) {
    setTasks((currTasks: TaskModel[]) => {
      return [...currTasks, { ...task }];
    });

    closeAddTaskModal();
  }

  function closeAddTaskModal() {
    setWasNewTaskClicked(false);
  }

  return (
    <>
      <h2 className="header">Task Manager</h2>
      {wasNewTaskClicked && (
        <AddTask close={closeAddTaskModal} onSubmit={addTask} />
      )}
      <Routes>
        <Route path="/detail/:id" element={<TaskDetail />} />
        <Route
          path="/"
          element={
            <>
              <button
                className="new-task-button"
                onClick={() => setWasNewTaskClicked(true)}
              >
                New Task
              </button>
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
