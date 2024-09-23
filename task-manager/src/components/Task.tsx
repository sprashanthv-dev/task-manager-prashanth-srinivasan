import { Link } from "react-router-dom";

import { EachTask } from "../types/common.ts";

import "../styles/Task.css";

const Task = ({
  task,
  completionHandler,
  deleteHandler,
  viewHandler,
}: EachTask) => {
  const { id, title, completed } = task;

  return (
    <div className={`task-container ${completed ? "task-checked" : ""}`}>
      <li className="task">
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => completionHandler(id, e)}
          />
          <p>{title}</p>
        </label>
        <div className="task-icons">
          <img
            src="/info.svg"
            alt="Info Icon"
            onClick={() => viewHandler(id)}
          />
          <img src="/edit.svg" alt="Edit Icon" />
          <img
            src="/trash.svg"
            alt="Delete Icon"
            onClick={() => deleteHandler(id)}
          />
        </div>
      </li>
    </div>
  );
};

export default Task;
