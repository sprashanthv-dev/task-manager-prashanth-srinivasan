import { useState } from "react";

import { TaskModel } from "../models/TaskModel";
import { getUUIDv4 } from "../utils/utils";

type TaskFormProps = {
  onSubmit: (task: TaskModel) => void;
};

// The onSubmit prop is passed from the parent component
const TaskForm = ({ onSubmit }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    //TODO: Validate form fields
    //TODO: Show error messages when form fields are invalid

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
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
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
      </div>
      <button>Save</button>
    </form>
  );
};

export default TaskForm;
