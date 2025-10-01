function getUrl(type) {
  if (type === "task") return "http://localhost:8080/tasks";
  if (type === "reminder") return "http://localhost:8080/reminders";
  throw new Error("API data type undefined");
}

export async function getData(type) {
  const apiUrl = getUrl(type);
  try {
    const res = await fetch(apiUrl);
    const json = await res.json();

    if (!res.ok) {
      return { success: false, error: json.error || json.message || "Fetch failed" };
    }

    return { success: !!json.success, data: json.data ?? json };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export async function deleteData(type, id) {
  const apiUrl = getUrl(type);
  try {
    const res = await fetch(
      `${apiUrl}?id=${encodeURIComponent(id)}`, { method: "DELETE" }
    );
    const json = await res.json();

    if (!res.ok) {
      return { success: false, error: json.error || json.message || "Delete failed" };
    }

    return { success: true, data: json };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export async function createData(type, payload) {
  const apiUrl = getUrl(type);
  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const json = await res.json();

    if (!res.ok) {
      return { success: false, error: json.error || json.message || "Create failed" };
    }

    return { success: true, data: json.data };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
