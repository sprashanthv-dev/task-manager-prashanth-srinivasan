import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import "../styles/TaskDetail.css";

import { get } from "../utils/storage";
import { TASK_STATUS } from "../utils/constants";
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
      {!taskDetail && (
        <p className="view-task-error">
          Failed to view task information :( Try again later!
        </p>
      )}
      <div className="back-button-container">
        <Link to={"/"}>
          <button className="back-button">Go Back</button>
        </Link>
      </div>
    </>
  );
};

export default TaskDetail;
