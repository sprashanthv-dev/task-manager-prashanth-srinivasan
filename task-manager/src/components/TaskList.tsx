import { TaskModel } from "../models/TaskModel";

import TaskItem from "./Task";

import "../styles/TaskList.css";

type TaskList = {
  tasks: TaskModel[];
};

const TaskList = ({ tasks }: TaskList) => {
  return (
    <ul className="task-list">
      {tasks.length === 0 && (
        <p className="no-tasks">No Tasks available! Go ahead and add one :)</p>
      )}
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
