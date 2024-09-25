type TaskFormProps = {
  onSubmit: () => void;
};

// The onSubmit prop is passed from the parent component
const TaskForm = ({ onSubmit }: TaskFormProps) => {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("Form submission received -- TaskForm Component");

    // Invoke the submit handler that handles form data in the parent component
    onSubmit();
  }

  return (
    /* The onSubmit here refers to the form's onSubmit capability */
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>
      <div className="form-row">
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols={30} rows={10} />
      </div>
      <button>Save</button>
    </form>
  );
};

export default TaskForm;
