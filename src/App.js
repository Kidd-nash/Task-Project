import { useState, useEffect } from "react";
import TaskList from "./Tasklist";
import CreateTask from "./CreateTask";

function App() {

  // GENERAL with Retrieve

  const defaultTasks = [
    { id: 1, text: "Talent is a pursued interest." },
    { id: 2, text: "Anything you are willing to practice you can do." },
    { id: 3, text: "I can't do this, I can't do it — that's balogna." },
    { id: 4, text: "- Bob Ross" }
  ];

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : defaultTasks
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const resetTasks = () => {
    setTasks(defaultTasks);
    localStorage.removeItem("tasks");
  };

  // FRONT END NICHE

  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [mode, setMode] = useState("create");

  const displayForm = () => {
    setEditingTask(null);
    setMode("create");
    setShowForm(prev => !prev);
  };

  //CREATE UPDATE DELETE

  function handleCreateTask(text) {
    const newTask = { id: Date.now(), text };
    setTasks([...tasks, newTask]);
  }

  function handleUpdateTask(id, newText) {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, text: newText } : t
    ));
  }

  const deleteTask = (taskId) => {

    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
    
  };

  return (
    <div className="container my-4 bg-light">
      <h1 className="mb-3">My Task List</h1>
      <button 
        onClick={displayForm} 
        className="btn btn-outline-primary" 
        aria-label="create"
      >
        +
      </button>
      {
        showForm && (
        <CreateTask
          onAdd={handleCreateTask}
          onUpdate={handleUpdateTask}
          initialValue={editingTask?.text}
          taskId={editingTask?.id}
          mode={mode}
          onClose={() => setShowForm(false)}
        />
      )}
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        onEdit={(task) => {
          setEditingTask(task);
          setMode("edit");
          setShowForm(true);
        }}
      />
      <button onClick={resetTasks} className="btn btn-danger">Reset</button>
    </div>
  );
}

export default App;