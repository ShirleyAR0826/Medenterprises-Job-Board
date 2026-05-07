import Link from 'next/link'
import { Job } from '@/lib/jobs/jobs.types'

type Props = {
  job: Job
}

export default function JobCard({ job }: Props) {
  return (
    <Link
      href={`/jobs/${job.slug}`}
      className="block rounded-xl border border-gray-800 bg-black p-6 transition hover:border-gray-600 hover:shadow-lg"
    >
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          {job.title}
        </h2>

        <div className="text-sm text-gray-400">
          {job.location}
        </div>

        <div className="flex flex-wrap gap-2 text-sm">
          <span className="rounded-md bg-gray-800 px-3 py-1 text-sm text-gray-200">
            {job.type}
          </span>

          <span className="rounded-md bg-gray-800 px-3 py-1 text-sm text-gray-200">
            {job.department}
          </span>
        </div>

        <div className="text-sm text-gray-400">
          Posted {job.postedDate}
        </div>
      </div>
    </Link>
  )
}