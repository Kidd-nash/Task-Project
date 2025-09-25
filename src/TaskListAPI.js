import { useEffect, useState } from "react";
import { getData } from "./TaskService";

function TaskListAPI() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData("task")
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

  // async function handleDelete(id) {
  //   const result = await deleteTask(id);
  //   if (result.success) {
  //     setTasks(tasks.filter(task => task.id !== id));
  //   } else {
  //     alert("Error: " + result.error);
  //   }
  // }

  return (
    <ul className="list-group mt-3">
      {tasks.map((task) => (
        <li key={task.id} className="list-group-item">
          {task.task}
          {/* <button onClick={() => handleDelete(task.id)}>Delete</button> */}
        </li>
      ))}
    </ul>
  );
}
export default TaskListAPI;
