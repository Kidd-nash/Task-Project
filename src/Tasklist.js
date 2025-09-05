function TaskList({ tasks }) {
    return (
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item">
            {task.text}
          </li>
        ))}
      </ul>
    );
  }
  
export default TaskList;