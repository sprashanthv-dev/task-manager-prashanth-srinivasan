import { createPortal } from "react-dom";

import Modal from "./Modal";
import TaskForm from "./TaskForm";

import { TaskModel } from "../models/TaskModel";

type AddTaskProps = {
  close: () => void;
  onSubmit: (task: TaskModel) => void;
};

const AddTask = ({ close, onSubmit }: AddTaskProps) => {
  function handleFormSubmit(task: TaskModel) {
    console.log("Form submission received -- Add Task Component");
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
