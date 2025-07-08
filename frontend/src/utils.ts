const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const formatDateRange = (start: string | Date, end: string | Date = new Date()): string => {
  const startDate = new Date(start)
  const endDate = new Date(end)

  const startMonth = startDate.toLocaleString("ru", { month: "long" })
  const startYear = startDate.getFullYear()

  const endMonth = endDate.toLocaleString("ru", { month: "long" })
  const endYear = endDate.getFullYear()

  const totalMonths = (endYear - startYear) * 12 + (endDate.getMonth() - startDate.getMonth())

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const duration =
    (years > 0 ? `${years.toString()}г.` : "") +
    (years > 0 && months > 0 ? " " : "") +
    (months > 0 ? `${months.toString()}мес.` : "")

  return `${capitalize(startMonth)} ${startYear.toString()} - ${capitalize(endMonth)} ${endYear.toString()}  |  ${duration}`
}
