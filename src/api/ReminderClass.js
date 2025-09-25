const constantUrl = "http://localhost:8080/api-data/reminders";

export function getReminders() {

    return fetch(constantUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch the reminders...")
            }
            return response.json();
        })
        .catch((err) => console.log(err.message));
}

export async function deleteReminder(id) {
    const response = await fetch(
        `${constantUrl}?id=${id}`,
        {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        }
    );
    return response.json();
}