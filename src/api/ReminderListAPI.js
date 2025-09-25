import { useState, useEffect } from "react";
import { getReminders, deleteReminder } from "./ReminderClass";
import { getData } from "../TaskService";

function ReminderListAPI() {
    const [reminders, setReminders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getData("reminder")
            .then((data) => {
                if (data.success) {
                    setReminders(data.data);
                } else {
                    throw new Error(data.error || "Unknown API Error");
                }
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading reminders...</p>;
    if (error) return <p>Error: {error}</p>;

    async function handleDelete(id) {
        const result = await deleteReminder(id);
        if (result.success) {
          setReminders(reminders.filter(reminder => reminder.id !== id));
        } else {
          alert("Error: " + result.error);
        }
      }

    return (
        <ul className="list-group mt-3">
            {reminders.map((reminder) => (
                <li key={reminder.id} className="list-group-item d-flex flex-row justify-content-between">
                    <span>{reminder.reminders}</span>
                    <span>
                        {new Date(reminder.due_date).toLocaleDateString()}{" "}
                        {new Date(reminder.due_date).toLocaleTimeString()}
                    </span>
                    <button onClick={() => handleDelete(reminder.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default ReminderListAPI;