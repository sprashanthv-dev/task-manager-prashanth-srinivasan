import { useParams } from "react-router-dom";

import { get } from "../utils/storage";
import { TaskModel } from "../models/TaskModel";

const TaskDetail = () => {
  const { id } = useParams();

  let task: TaskModel | null = null;

  if (id) {
    task = get(id);
  }

  return <>{task && <h2>Welcome to TaskDetail Page</h2>}</>;
};

export default TaskDetail;
