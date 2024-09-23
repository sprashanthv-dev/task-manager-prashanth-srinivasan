import { TaskModel } from "../models/TaskModel";

import Task from "./Task";

import "../styles/TaskList.css";

type TaskList = {
  tasks: TaskModel[];
  completionHandler: (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

const TaskList = ({ tasks, completionHandler }: TaskList) => {
  return (
    <ul className="task-list">
      {tasks.length === 0 && (
        <p className="no-tasks">No Tasks available! Go ahead and add one :)</p>
      )}
      {tasks.map((task) => (
        <Task key={task.id} task={task} completionHandler={completionHandler} />
      ))}
    </ul>
  );
};

export default TaskList;
