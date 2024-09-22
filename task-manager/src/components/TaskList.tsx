import { Task } from "../models/Task";

import TaskItem from "./TaskItem";

type TaskList = {
  tasks: Task[];
};

const TaskList = ({ tasks }: TaskList) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
