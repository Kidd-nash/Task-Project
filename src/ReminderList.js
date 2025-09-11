function ReminderList({ reminders }) {
    return (
        <ul className="list-group">
            {reminders.map(reminder => (
                <li className="list-group-item d-flex flex-row justify-content-between">
                    <span>{reminder.text}</span>
                    <span>{reminder.date}</span>
                </li>
                ))
            };
        </ul>
    )
}

export default ReminderList;

