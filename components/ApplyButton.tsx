'use client'

import { Job } from '@/lib/jobs/jobs.types'
import { trackJobApply } from '@/lib/analytics/tracking'

type Props = {
  job: Job
}

export default function ApplyButton({
  job
}: Props) {
  function handleApply() {
    trackJobApply(job)

    alert('Application flow would continue here.')
  }

  return (
    <button
      onClick={handleApply}
      className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
    >
      Apply Now
    </button>
  )
}