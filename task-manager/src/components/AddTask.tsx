import { createPortal } from "react-dom";

import Modal from "./Modal";
import TaskForm from "./TaskForm";

type AddTaskProps = {
  close: () => void;
  onSubmit: () => void;
};

const AddTask = ({ close, onSubmit }: AddTaskProps) => {
  function handleFormSubmit() {
    console.log("Form submission received -- Add Task Component");
    onSubmit();
  }

  return createPortal(
    <Modal
      titleText="Add New Task"
      buttonText="Save"
      showSave={false}
      onCancel={() => close()}
      onClose={() => close()}
    >
      <TaskForm onSubmit={handleFormSubmit} />
    </Modal>,
    document.body,
  );
};

export default AddTask;
