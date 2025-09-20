import { useEffect, useState } from "react";
import { getTask } from "./TaskService";

function TaskListAPI() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTask()
         .then((data) => {
        if (data.success) {
          setTasks(data.data);
        } else {
          throw new Error(data.error || "Unknown API error");
        } 
      })
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
