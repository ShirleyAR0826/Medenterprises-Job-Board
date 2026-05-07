import { Job } from '@/lib/jobs/jobs.types'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export function trackJobApply(job: Job) {
  if (typeof window === 'undefined') {
    return
  }

  window.dataLayer = window.dataLayer || []

  window.dataLayer.push({
    event: 'job_apply_click',
    jobId: job.id,
    jobTitle: job.title,
    department: job.department,
    employmentType: job.type,
    location: job.location
  })
}