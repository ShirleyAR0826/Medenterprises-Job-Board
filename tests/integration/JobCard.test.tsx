import { render, screen } from '@testing-library/react'
import JobCard from '@/components/JobCard'
import { Job } from '@/lib/jobs/jobs.types'

const mockJob: Job = {
  id: 'JOB-001',
  title: 'Paediatrician',
  slug: 'paediatrician',
  location: 'Auckland, NZ',
  type: 'Full-time',
  department: 'Paediatrics',
  postedDate: '2026-04-01',
  closingDate: '2026-05-15',
  salary: {
    min: 220000,
    max: 280000,
    currency: 'NZD'
  },
  description: '<p>Test</p>',
  requirements: ['Requirement']
}

describe('JobCard', () => {
  it('renders job information', () => {
    render(<JobCard job={mockJob} />)

    expect(
      screen.getByText('Paediatrician')
    ).toBeInTheDocument()

    expect(
      screen.getByText('Auckland, NZ')
    ).toBeInTheDocument()

    expect(
      screen.getByText('Full-time')
    ).toBeInTheDocument()
  })
})