function TaskList({ tasks, deleteTask }) {
    return (
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item">
            {task.text}
            <button onClick={() => { deleteTask(task.id) }}>X</button>
          </li>
        ))}
      </ul>
    );
  }
  
export default TaskList;