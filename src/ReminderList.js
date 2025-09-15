function ReminderList({ reminders, deleteReminder }) {
    return (
        <ul className="list-group">
            {reminders.map(reminder => (
                <li className="list-group-item d-flex flex-row justify-content-between">
                    <span>{reminder.text}</span>
                    <div>
                        <span>{reminder.date}</span>
                        <div className="dropdown dropdown-start">
                            <button
                                type="button"
                                className="btn btn-outline-secondary dropdown-toggle bg-white"
                                data-bs-toggle="dropdown"
                            >
                                ...
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <button 
                                        type="button"
                                        className="dropdown-item text-danger"
                                        onClick={() => deleteReminder(reminder.id)}
                                    >
                                        Delete
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                ))
            }
        </ul>
    )
}

export default ReminderList;

