import { useEffect, useState } from "react";

function RemindersForm({ type, onAdd, onClose }) {
    return (
        <form className="p-3 border rounded bg-white shadow-sm">
            <div className="mb-3">
                <label className="form-label">Task</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a task..."
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Date & Time</label>
                <input 
                    type="datetime-local"
                    className="form-control"
                />
            </div>
            <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">
                    Add Reminder
                </button>
                <button 
                    type="button" 
                    className="btn btn-outline-secondary"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default RemindersForm;
