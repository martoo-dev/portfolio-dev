export function formatDateLong(dateString) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("es", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function formatDate(dateString) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("es", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
