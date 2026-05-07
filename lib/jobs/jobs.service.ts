import { fetchJobs } from './jobs.repository'

type GetJobsFilters = {
  department?: string
  type?: string
}

export async function getJobs(filters?: GetJobsFilters) {
  const jobs = await fetchJobs()

  return jobs.filter((job) => {
    const matchesDepartment =
      !filters?.department ||
      job.department === filters.department

    const matchesType =
      !filters?.type ||
      job.type === filters.type

    return matchesDepartment && matchesType
  })
}

export async function getJobBySlug(slug: string) {
  const jobs = await fetchJobs()

  return jobs.find((job) => job.slug === slug)
}