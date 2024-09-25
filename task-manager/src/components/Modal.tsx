import "../styles/Modal.css";

import { ModalProps } from "../types/common";

const Modal = ({
  children,
  titleText,
  buttonText,
  showSave,
  onClose,
  onComplete,
}: ModalProps) => {
  return (
    /*Wraps the entire modal */
    <div className="modal-container">
      {/*Wraps the header, footer and main content */}
      <div className="modal">
        <div className="modal-header">
          <h5>{titleText}</h5>
          <p className="close" onClick={() => onClose()}>
            &times;
          </p>
        </div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          {showSave && onComplete && (
            <button className="btn btn-submit" onClick={() => onComplete()}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
