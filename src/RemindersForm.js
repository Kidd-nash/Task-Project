import { useEffect, useState } from "react";

function RemindersForm({ type, onAdd, onClose }) {
    return (
        <form className="form-control">
            <input
                type="text"
                className="form-control"
                placeholder="Enter a task..."
            />
            <input 
                type="datetime-local"
            />
            <button type="submit" className="btn btn-primary">
                Add Reminder
            </button>
        </form>
    );
}

export default RemindersForm;