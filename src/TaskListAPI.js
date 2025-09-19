import { useEffect, useState } from "react";

function TaskListAPI() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/tasks")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tasks");
        return res.json();
      })
      .then((data) => {
        if (data.success) setTasks(data.data);
        else throw new Error(data.error || "Unknown API error");
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className="list-group mt-3">
      {tasks.map((task) => (
        <li key={task.id} className="list-group-item">
          {task.task}
        </li>
      ))}
    </ul>
  );
}
export default TaskListAPI;
