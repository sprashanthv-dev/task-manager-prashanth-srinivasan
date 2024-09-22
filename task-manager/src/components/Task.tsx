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
      </li>
    </div>
  );
};

export default Task;
