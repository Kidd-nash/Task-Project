import { useState, useEffect } from "react";
import Tasklist from "./Tasklist";
import TaskManagerForm from "./TaskManagerForm";
import { Link } from "react-router-dom";

function App() {
  const defaultTasks = [
    { id: 1, text: "Talent is a pursued interest." },
    { id: 2, text: "Anything you are willing to practice you can do." },
    { id: 3, text: "I can't do this, I can't do it — that's balogna." },
    { id: 4, text: "- Bob Ross" }
  ];

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : defaultTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const resetTasks = () => {
    setTasks(defaultTasks);
    localStorage.removeItem("tasks");
  };

  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [mode, setMode] = useState("create");

  const displayForm = () => {
    setEditingTask(null);
    setMode("create");
    setShowForm(prev => !prev);
  };

  const toggleDone = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const handleCreateTask = (text) => {
    const newTask = { id: Date.now(), text, done: false };
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = (id, newText) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, text: newText } : t
    ));
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <div>
      <div>
        <Link to="/" className="btn btn-primary m-2">Back</Link>
      </div>
      <div className="container my-4 bg-light">
        <h1 className="mb-3">My Task List</h1>
        <button onClick={displayForm} className="btn btn-outline-primary" aria-label="create">+</button>

        {showForm && (
          <TaskManagerForm
            onAdd={handleCreateTask}
            onUpdate={handleUpdateTask}
            initialValue={editingTask?.text}
            taskId={editingTask?.id}
            mode={mode}
            onClose={() => setShowForm(false)}
          />
        )}

        {/* Local Storage Task List */}
        <Tasklist
          tasks={tasks}
          toggleDone={toggleDone}
          deleteTask={handleDeleteTask}
          onEdit={(task) => {
            setEditingTask(task);
            setMode("edit");
            setShowForm(true);
          }}
        />

        <button onClick={resetTasks} className="btn btn-danger mt-3">Reset</button>
      </div>
    </div>
  );
}

export default App;
