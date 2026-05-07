import { Metadata } from 'next'
import { getJobs } from '@/lib/jobs/jobs.service'
import JobCard from '@/components/JobCard'
import JobFilters from '@/components/JobFilters'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Medical Jobs | Medenterprises',
    description:
      'Browse medical career opportunities across New Zealand.',
    alternates: {
      canonical: '/jobs'
    },
    openGraph: {
      title: 'Medical Jobs | Medenterprises',
      description:
        'Browse medical career opportunities across New Zealand.',
      url: '/jobs',
      type: 'website'
    }
  }
}

type Props = {
  searchParams: Promise<{
    department?: string
    type?: string
  }>
}

export default async function JobsPage({
  searchParams
}: Props) {
  const params = await searchParams

  const jobs = await getJobs({
    department: params.department,
    type: params.type
  })

  const allJobs = await getJobs()

  const departments = [
    ...new Set(
      allJobs.map((job) => job.department)
    )
  ]

  const types = [
    ...new Set(allJobs.map((job) => job.type))
  ]

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Medical Jobs
        </h1>

        <p className="mt-2 text-gray-500">
          Browse current opportunities across New Zealand.
        </p>
      </div>

      <JobFilters
        departments={departments}
        types={types}
      />

      <div className="grid gap-4">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}
      </div>
    </main>
  )
}