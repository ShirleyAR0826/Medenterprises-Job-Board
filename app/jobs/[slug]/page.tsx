import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  getJobBySlug,
  getJobs
} from '@/lib/jobs/jobs.service'
import JobStructuredData from '@/components/JobStructuredData'
import ApplyButton from '@/components/ApplyButton'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const jobs = await getJobs()

  return jobs.map((job) => ({
    slug: job.slug
  }))
}

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const { slug } = await params

  const job = await getJobBySlug(slug)

  if (!job) {
    return {
      title: 'Job Not Found'
    }
  }

  return {
    title: `${job.title} | Medenterprises`,
    description: `${job.title} opportunity in ${job.location}`,
    alternates: {
      canonical: `/jobs/${job.slug}`
    },
    openGraph: {
      title: job.title,
      description: `${job.title} opportunity in ${job.location}`,
      url: `/jobs/${job.slug}`,
      type: 'article'
    }
  }
}

export default async function JobDetailPage({
  params
}: Props) {
  const { slug } = await params

  const job = await getJobBySlug(slug)

  if (!job) {
    notFound()
  }

  return (
    <>
      <JobStructuredData job={job} />
      <main className="mx-auto max-w-4xl px-6 py-10">
        <div className="space-y-10">
          <div>
            <h1 className="text-4xl font-bold">
              {job.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-md bg-gray-800 px-3 py-1 text-sm text-gray-200">
                {job.location}
              </span>

              <span className="rounded-md bg-gray-800 px-3 py-1 text-sm text-gray-200">
                {job.type}
              </span>

              <span className="rounded-md bg-gray-800 px-3 py-1 text-sm text-gray-200">
                {job.department}
              </span>
            </div>
          </div>

          <div className="grid gap-6 rounded-xl border border-gray-800 bg-black p-6 md:grid-cols-2">
            <div>
              <div className="text-sm text-gray-500">
                Salary Range
              </div>

              <div className="font-medium">
                {job.salary.currency}{' '}
                {job.salary.min.toLocaleString()} -{' '}
                {job.salary.max.toLocaleString()}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500">
                Posted Date
              </div>

              <div className="font-medium">
                {job.postedDate}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500">
                Closing Date
              </div>

              <div className="font-medium">
                {job.closingDate ||
                  'Open until filled'}
              </div>
            </div>
          </div>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Description
            </h2>

            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{
                __html: job.description
              }}
            />
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Requirements
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              {job.requirements.map(
                (requirement) => (
                  <li key={requirement}>
                    {requirement}
                  </li>
                )
              )}
            </ul>

            <div className="mt-8">
              <ApplyButton job={job} />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}