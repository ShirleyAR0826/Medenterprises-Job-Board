import Link from 'next/link'
import { Job } from '@/lib/jobs/jobs.types'

type Props = {
  job: Job
}

export default function JobCard({ job }: Props) {
  return (
    <Link
      href={`/jobs/${job.slug}`}
      className="block rounded-lg border p-5 transition hover:shadow-md"
    >
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          {job.title}
        </h2>

        <div className="text-sm text-gray-600">
          {job.location}
        </div>

        <div className="flex flex-wrap gap-2 text-sm">
          <span className="rounded bg-gray-100 px-2 py-1">
            {job.type}
          </span>

          <span className="rounded bg-gray-100 px-2 py-1">
            {job.department}
          </span>
        </div>

        <div className="text-sm text-gray-500">
          Posted {job.postedDate}
        </div>
      </div>
    </Link>
  )
}