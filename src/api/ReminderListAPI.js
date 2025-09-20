import { useState, useEffect } from "react";

function ReminderListAPI() {
    const [reminders, setReminders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        fetch("http://localhost:8080/api-data/reminders")
        .then((res)=> {
            if (!res.ok) {
                throw new Error("Failed to fetch reminders");
            }
            return res.json();
        })
        .then((data)=> {
            if (data.success) {
                setReminders(data.data);
            } else {
                throw new Error(data.error || "Unknown API Error");
                
            }
        })
        .catch((err) => setError(err.message))
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