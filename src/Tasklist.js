function TaskList({ tasks, deleteTask, onEdit, toggleDone }) {
    return (
      <ul className="list-group">
        {tasks.map(task => (
          <li 
            key={task.id}
            className={`list-group-item d-flex flex-row justify-content-between ${task.done ? "bg-success text-white" : ""
              }`}
          >
            <span>{task.text}</span>

            <div className="dropdown dropstart">
              <button 
                type="button" 
                className="btn btn-outline-secondary dropdown-toggle bg-white" 
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ...
              </button>
              <ul className="dropdown-menu">
                <li>
                <button
                    type="button"
                    className="dropdown-item text-success"
                    onClick={() => toggleDone(task.id)}
                  >
                    {task.done ? "Undo" : "Mark as Done"}
                  </button>
                </li>
                <li>
                <button
                  type="button"
                  onClick={() => onEdit(task)}
                  className="dropdown-item text-primary"
                >
                  Edit
                </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => deleteTask(task.id)}
                    className="dropdown-item text-danger"
                  >
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  
export default TaskList;