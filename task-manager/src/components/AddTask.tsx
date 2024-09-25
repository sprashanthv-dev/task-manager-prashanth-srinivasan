import { createPortal } from "react-dom";

import Modal from "./Modal";

type AddTaskProps = {
  close: () => void;
};

const AddTask = ({ close }: AddTaskProps) => {
  return createPortal(
    <Modal
      buttonText="Save"
      onComplete={() => close()}
      onCancel={() => close()}
      onClose={() => close()}
    >
      <h1>Hello world</h1>
    </Modal>,
    document.body,
  );
};

export default AddTask;
