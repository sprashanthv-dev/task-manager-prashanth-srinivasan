import "../styles/Modal.css";

import { ModalProps } from "../types/common";

const Modal = ({
  children,
  buttonText,
  onCancel,
  onClose,
  onComplete,
}: ModalProps) => {
  return (
    /*Wraps the entire modal */
    <div className="modal-container">
      {/*Wraps the header, footer and main content */}
      <div className="modal">
        <div className="modal-header">
          <p className="close" onClick={() => onClose()}>
            &times;
          </p>
        </div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          <button className="btn btn-submit" onClick={() => onComplete()}>
            {buttonText}
          </button>
          <button className="btn btn-cancel" onClick={() => onCancel()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
