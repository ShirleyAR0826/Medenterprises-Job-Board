import { MetadataRoute } from 'next'
import { getJobs } from '@/lib/jobs/jobs.service'
import { SITE_URL } from '@/lib/constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const jobs = await getJobs()

  const jobPages = jobs.map((job) => ({
    url: `${SITE_URL}/jobs/${job.slug}`,
    lastModified: new Date(job.postedDate)
  }))

  return [
    {
      url: `${SITE_URL}/jobs`,
      lastModified: new Date()
    },
    ...jobPages
  ]
}