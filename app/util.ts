
export function formatDate(date: string) {
  const d = new Date(date)
  return d.toDateString()
}

export function formatDateLocal(date: string) {
  const d = new Date(date)
  return d.toLocaleDateString()
}

export function formatDateTime(dateTime: string, date: string) {
  let d = new Date(dateTime)

  const formattedDate = d.toLocaleString()
  if (formattedDate == "Invalid Date") {
    return formatDateLocal(date)
  }

  return formattedDate
}

// compare objects based on a specific field
export function compareByField(field: string) {
  return (a: any, b: any) => {
    if (a[field] < b[field]) {
      return -1
    }

    if (a[field] > b[field]) {
      return 1
    }

    return 0
  }
}
