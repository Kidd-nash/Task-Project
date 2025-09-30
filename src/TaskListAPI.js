function TaskListAPI({ tasks, onDelete }) {
  if (!Array.isArray(tasks)) {
    return <p>Unexpected tasks response — check console.</p>;
  }

  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <ul className="list-group mt-3">
      {tasks.map((task) => (
        <li key={task.id} className="list-group-item d-flex justify-content-between">
          <span>{task.task}</span>
          <button className="btn btn-sm btn-danger" onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
export default TaskListAPI;
