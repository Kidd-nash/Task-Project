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