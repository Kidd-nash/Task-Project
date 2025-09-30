import { useState, useEffect } from "react";
import { getData, deleteData } from "./TaskService";
import TaskListAPI from "./TaskListAPI";

function AppTaskAPI() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const result = await getData("task");
                console.log("GET /tasks result:", result);

                if (result.success) {
                    setTasks(Array.isArray(result.data) ? result.data : []);
                } else {
                    setError(result.error || "Unknown API error");
                }
            } catch (err) {
                console.error("GET /tasks error:", err);
                setError("Failed to fetch tasks");
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    async function handleDelete(id) {
        try {
            const result = await deleteData("task", id);
            console.log("DELETE /tasks?id=", id, "result:", result);
            
            if (result.success) {
                setTasks(prev => prev.filter(task => task.id !== id));
            } else {
                alert("Error deleting: " + (result.error || "unknown"));
            }
        } catch (err) {
            console.error("DELETE /tasks error:", err);
            alert("Error deleting: " + err.message);
        }
    }

    return (
        <div className="container my-4 bg-light">
            <h2>API Tasks</h2>
            {loading && <p>Loading tasks...</p>}
            {error && <p className="text-danger">Error: {error}</p>}
            {!loading && !error && <TaskListAPI tasks={tasks} onDelete={handleDelete} />}
        </div>
    );
}

export default AppTaskAPI;
