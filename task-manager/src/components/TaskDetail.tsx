import { useParams } from "react-router-dom";

import { get } from "../utils/storage";
import { TASK_STATUS } from "../utils/utils";
import { TaskModel } from "../models/TaskModel";
import { useState } from "react";

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
              <strong>Description: </strong>
              <p>{taskDetail?.description}</p>
            </div>
          )}
          <div className="status">
            <strong>Status: </strong>
            <p>
              {taskDetail.completed
                ? TASK_STATUS.COMPLETED
                : TASK_STATUS.INCOMPLETE}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskDetail;
