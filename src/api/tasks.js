export async function fetchTasks() {
    const res = await fetch("http://localhost:8080/tasks");
    const data = await res.json();
    if (!data.success) throw new Error(data.error || "Failed to fetch tasks");
    return data.data;
  }