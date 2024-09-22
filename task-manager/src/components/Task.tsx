import { TaskModel } from "../models/TaskModel";

import "../styles/Task.css";

const Task = ({ id, title, completed }: TaskModel) => {
  return (
    <div className="task-container">
      <li className="task">
        <label>
          <input type="checkbox" checked={completed} />
          <p>{title}</p>
        </label>
        <div className="task-icons">
          <img src="/info.svg" alt="Info Icon" />
          <img src="/edit.svg" alt="Edit Icon" />
          <img src="/trash.svg" alt="Delete Icon" />
        </div>
      </li>
    </div>
  );
};

export default Task;
