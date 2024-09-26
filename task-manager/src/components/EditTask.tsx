import { createPortal } from "react-dom";

import Modal from "./Modal";
import TaskForm from "./TaskForm";

import { OPERATIONS } from "../utils/utils";
import { EditTaskProps } from "../types/common";
import { TaskModel } from "../models/TaskModel";

const EditTask = ({ task, close, onSubmit }: EditTaskProps) => {
  function handleFormSubmit(task: TaskModel) {
    onSubmit(task);
  }

  return createPortal(
    <Modal titleText="Edit task" showSave={false} onClose={() => close()}>
      <TaskForm
        task={task}
        operation={OPERATIONS.EDIT}
        onSubmit={(task) => handleFormSubmit(task)}
      />
    </Modal>,
    document.body,
  );
};

export default EditTask;
