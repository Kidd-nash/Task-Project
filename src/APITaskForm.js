import { useState } from "react";
import { createData } from "./TaskService";

function APITaskForm({ onCreate }) {
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!task.trim()) return;

    setLoading(true);
    try {
      const result = await createData("task", { task });
      console.log("POST /tasks result:", result);

      if (result.success) {
        onCreate(result.data);
        setTask("");
      } else {
        alert("Error creating task: " + (result.error || "unknown"));
      }
    } catch (err) {
      console.error("POST /tasks error:", err);
      alert("Error creating task: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="my-3 d-flex gap-2">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        disabled={loading}
      />
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "Creating..." : "Create"}
      </button>
    </form>
  );
}

export default APITaskForm;
