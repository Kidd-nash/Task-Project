import { useState, useEffect } from "react";
import { getReminders } from "./ReminderClass";

function ReminderListAPI() {
    const [reminders, setReminders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getReminders()
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

    return (
        <ul className="list-group mt-3">
            {reminders.map((reminder) => (
                <li key={reminder.id} className="list-group-item d-flex flex-row justify-content-between">
                    <span>{reminder.reminders}</span>
                    <span>
                        {new Date(reminder.due_date).toLocaleDateString()}{" "}
                        {new Date(reminder.date).toLocaleTimeString()}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default ReminderListAPI;