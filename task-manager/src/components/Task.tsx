import "../styles/Task.css";
import { EachTask } from "../types/common.ts";

const Task = ({ task, completionHandler }: EachTask) => {
  const { id, title, completed } = task;

  return (
    <div className="task-container">
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
          <img src="/info.svg" alt="Info Icon" />
          <img src="/edit.svg" alt="Edit Icon" />
          <img src="/trash.svg" alt="Delete Icon" />
        </div>
      </li>
    </div>
  );
};

export default Task;
