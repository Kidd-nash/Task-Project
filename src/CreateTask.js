import { useState } from "react";

function CreateTask({ onAdd }) {
  const [newTask, setNewTask] = useState("");

  function handleCreation(e) {
    e.preventDefault();

    if (newTask.trim() === "") return;

    onAdd(newTask);
    setNewTask("");
  }

  return (
    <form onSubmit={handleCreation} className="d-flex gap-2 mb-3">
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        className="form-control" 
        placeholder="Enter a task..." 
      />
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
}

export default CreateTask;