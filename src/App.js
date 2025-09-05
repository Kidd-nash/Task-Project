import { useState } from "react";
import TaskList from "./Tasklist";
import CreateTask from "./CreateTask";

function App() {
  const [tasks, setTasks] = useState([    
    { id: 1, text: "\"I can't do this\", \"I can't do it\" that's balogna." },
    { id: 2, text: "Talent is a pursued interest." },
    { id: 3, text: "Anything that you are willing to practice you can do." },
    { id: 4, text: "- Bob Ross" }
  ]);

  return (
    <div>
      <h1>My Task List</h1>
      <CreateTask />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;