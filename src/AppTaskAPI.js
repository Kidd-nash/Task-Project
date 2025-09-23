import { useState, useEffect } from "react";
import TaskListAPI from "./TaskListAPI";

function AppTaskAPI() {

    return (
        <div className="container my-4 bg-light">
            <h2>API Tasks</h2>
            <TaskListAPI />
        </div>
    )
}

export default AppTaskAPI;