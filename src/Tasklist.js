function TaskList({ tasks, deleteTask }) {
    return (
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item d-flex flex-row justify-content-between">
            <span>{task.text}</span>
            <button onClick={() => { deleteTask(task.id) }} className="btn btn-outline-danger" aria-label="Close">X</button>
          </li>
        ))}
      </ul>
    );
  }
  
export default TaskList;