const taskUrl = "http://localhost:8080/tasks";


export function getTask() {

  return fetch(taskUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch tasks");
      }
      return res.json();
    })
    .catch((err) => console.log(err.message));

}

export async function deleteTask(id) {
  const res = await fetch(`${taskUrl}?id=${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  return res.json();
}