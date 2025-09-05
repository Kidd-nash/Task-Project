import { useState } from "react";

function CreateTask({ onAdd }) {

    // Second branch first commit change

    return (
        <form className="d-flex gap-2 mb-3">
          <input type="text" className="form-control" placeholder="Enter a task..." />
          <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
    );
}

export default CreateTask;