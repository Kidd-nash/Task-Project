
function getUrl(type) {

  if (type === "task") {
    return "http://localhost:8080/tasks";
  } if (type === "reminder") {
    return "http://localhost:8080/api-data/reminders";
  } else {
    throw new Error("API data type undefined");
  };
};


export function getData(type) {
  const apiUrl = getUrl(type);

  return fetch(apiUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch " + type);
      }
      return res.json();
    })
    .catch((err) => console.log(err.message));

}

export async function deleteData(type, id) {
  const apiUrl = getUrl(type);

  const res = await fetch(`${apiUrl}?id=${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  return res.json();
}