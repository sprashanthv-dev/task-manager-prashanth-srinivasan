import { Task } from "../models/Task";

const TaskItem = ({ id, title, completed }: Task) => {
  return (
    <div className="task-item">
      <li>
        <label>
          <input type="checkbox" checked={completed} />
          <p>{title}</p>
        </label>
      </li>
    </div>
  );
};

export default TaskItem;
