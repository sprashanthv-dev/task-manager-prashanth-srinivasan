import { useState } from "react";

import { TaskFormProps } from "../types/common";
import { TaskModel } from "../models/TaskModel";
import { getUUIDv4 } from "../utils/utils";

import "../styles/TaskForm.css";

const isFormValid = (title: string, description: string) => {
  const formattedTitle = title.trim();
  const formattedDescription = description.trim();

  const isDescriptionPresent = formattedDescription.length > 0;

  if (formattedTitle.length === 0 || formattedTitle.length > 30) return false;

  return isDescriptionPresent
    ? formattedDescription.length < 500
      ? true
      : false
    : true;
};

// The onSubmit prop is passed from the parent component
const TaskForm = ({ onSubmit }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const task: TaskModel = {
      id: getUUIDv4(),
      title,
      description,
      completed: false,
    };

    // Invoke the submit handler that handles form data in the parent component
    onSubmit(task);

    // Reset form fields
    setTitle("");
    setDescription("");
  }

  return (
    /* The onSubmit here refers to the form's onSubmit capability */
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="title">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {title.trim().length > 30 && (
          <span className="error-msg">
            * Title cannot be greater than 30 characters
          </span>
        )}
      </div>
      <div className="form-row">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols={30}
          rows={10}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {description.trim().length > 500 && (
          <span className="error-msg">
            * Description cannot be greater than 500 characters
          </span>
        )}
      </div>
      <button disabled={!isFormValid(title, description)}>Save</button>
    </form>
  );
};

export default TaskForm;
