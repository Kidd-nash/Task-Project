import { useState, useEffect } from "react";

function CreateTask({ onAdd, initialValue = "", mode, onClose }) {
  const [text, setText] = useState(initialValue);

  useEffect(() => {
    setText(initialValue || "");
  }, [initialValue]);

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") return;

    if (mode === "create") {
      onAdd(text);
    }

    setText("");
    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="form-control"
        placeholder="Enter a task..."
      />
      <button type="submit" className="btn btn-primary">
        {mode === "create" ? "Add Task" : "Save"}
      </button>
    </form>
  );
}

export default CreateTask;