const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

interface ExperienceRange {
  start: Date | null
  end: Date | null
}

const workExperiences: ExperienceRange = {
  start: null,
  end: null,
}

export const getWorkExperience = (): string | null => {
  if (workExperiences.start === null || workExperiences.end === null) {
    return null
  }
  return formatDateRange(workExperiences.start, workExperiences.end)
}

export const formatDateRange = (start: string | Date, end: string | Date = new Date()): string => {
  const startDate = new Date(start)
  const endDate = new Date(end)

  if (!workExperiences.start || startDate < workExperiences.start) {
    workExperiences.start = startDate
  }

  if (!workExperiences.end || endDate > workExperiences.end) {
    workExperiences.end = endDate
  }

  const startMonth = startDate.toLocaleString("ru", { month: "long" })
  const startYear = startDate.getFullYear()

  const endMonth = endDate.toLocaleString("ru", { month: "long" })
  const endYear = endDate.getFullYear()

  const totalMonths = (endYear - startYear) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const duration =
    (years > 0 ? `${years.toString()}г.` : "") +
    (years > 0 && months > 0 ? " " : "") +
    (months > 0 ? `${months.toString()}мес.` : "")

  return `${capitalize(startMonth)} ${startYear.toString()} - ${capitalize(endMonth)} ${endYear.toString()}  |  ${duration}`
}
