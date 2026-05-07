import jobs from '@/data/jobs.json'
import { Job } from './jobs.types'

export async function fetchJobs(): Promise<Job[]> {
  return jobs as Job[]
}