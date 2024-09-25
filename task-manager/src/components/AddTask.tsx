import { createPortal } from "react-dom";

import Modal from "./Modal";
import TaskForm from "./TaskForm";

import { AddTaskProps } from "../types/common";
import { TaskModel } from "../models/TaskModel";

const AddTask = ({ close, onSubmit }: AddTaskProps) => {
  function handleFormSubmit(task: TaskModel) {
    onSubmit(task);
  }

  return createPortal(
    <Modal
      titleText="Add New Task"
      buttonText="Save"
      showSave={false}
      onClose={() => close()}
    >
      <TaskForm onSubmit={(task) => handleFormSubmit(task)} />
    </Modal>,
    document.body,
  );
};

export default AddTask;
