import { getJobs } from '@/lib/jobs/jobs.service'

export default async function Home() {
  const jobs = await getJobs()

  return (
    <main>
      <h1>{jobs.length} jobs loaded</h1>
    </main>
  )
}