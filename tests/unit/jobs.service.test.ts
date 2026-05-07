import { describe, expect, it } from 'vitest'
import { getJobs } from '@/lib/jobs/jobs.service'

describe('getJobs', () => {
  it('filters jobs by department', async () => {
    const jobs = await getJobs({
      department: 'Paediatrics'
    })

    expect(jobs.length).toBeGreaterThan(0)

    expect(
      jobs.every(
        (job) =>
          job.department === 'Paediatrics'
      )
    ).toBe(true)
  })

  it('filters jobs by employment type', async () => {
    const jobs = await getJobs({
      type: 'Contract'
    })

    expect(jobs.length).toBeGreaterThan(0)

    expect(
      jobs.every(
        (job) => job.type === 'Contract'
      )
    ).toBe(true)
  })
})