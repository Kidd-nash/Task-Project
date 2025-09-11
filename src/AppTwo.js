import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReminderList from './ReminderList';

function AppTwo() {

    const defaultReminders = [
        { id: 1, text: "First reminder, lorem ipsum dolor", date: new Date("2025-09-12T10:00:00")},
        { id: 2, text: "Second reminder, lorem ipsum dolor", date: new Date("2025-09-15T15:30:00") },
        { id: 3, text: "Third reminder, lorem ipsum dolor", date: new Date("2025-09-16T16:30:00") },
    ];

    const [reminders, setReminders] = useState(() => {
        const savedReminders = localStorage.getItem("reminders");
        return savedReminders ? JSON.parse(savedReminders) : defaultReminders;
    });

    useEffect(() => {
        localStorage.setItem("reminders", JSON.stringify(reminders));
    }, [reminders]);

    return (
        <div>
            <div>
                <Link to="/" className="btn btn-primary m-2">Back</Link>
            </div>
            <div className="container my-4 bg-light">
                <div>Reminder App</div>
                <div>
                    <ReminderList reminders={reminders} />
                </div>
            </div>
        </div>
    )
};

export default AppTwo;