import { useState } from "react";
import { useParams } from "react-router-dom";

import "../styles/TaskDetail.css";

import { get } from "../utils/storage";
import { TASK_STATUS } from "../utils/utils";
import { TaskModel } from "../models/TaskModel";

const TaskDetail = () => {
  const { id } = useParams();

  const [taskDetail] = useState<TaskModel | null>(() => {
    const task = get(id as string);

    if (task === null) return null;

    return task.content as TaskModel;
  });

  return (
    <>
      {taskDetail && (
        <div className="task-detail-container">
          <p className="title">Viewing {taskDetail.title}</p>
          {taskDetail.description && (
            <div className="description">
              <p>{taskDetail?.description}</p>
            </div>
          )}
          <div className="status">
            <label>Status: </label>
            <span className={taskDetail.completed ? "complete" : "incomplete"}>
              {taskDetail.completed
                ? TASK_STATUS.COMPLETED
                : TASK_STATUS.INCOMPLETE}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskDetail;
