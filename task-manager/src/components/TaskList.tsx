import Task from "./Task";
import { Tasks } from "../types/common";

import "../styles/TaskList.css";

const TaskList = ({
  tasks,
  completionHandler,
  deleteHandler,
  editHandler,
  viewHandler,
}: Tasks) => {
  return (
    <ul className="task-list">
      {tasks.length === 0 && (
        <p className="no-tasks">No Tasks available! Go ahead and add one :)</p>
      )}
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          viewHandler={viewHandler}
          editHandler={editHandler}
          completionHandler={completionHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </ul>
  );
};

export default TaskList;
