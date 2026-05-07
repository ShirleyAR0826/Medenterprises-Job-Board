import { Job } from '@/lib/jobs/jobs.types'

type Props = {
  job: Job
}

export default function JobStructuredData({
  job
}: Props) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    datePosted: job.postedDate,
    validThrough:
      job.closingDate || undefined,
    employmentType: job.type,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Medenterprises'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'NZ'
      }
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: job.salary.currency,
      value: {
        '@type': 'QuantitativeValue',
        minValue: job.salary.min,
        maxValue: job.salary.max,
        unitText: 'YEAR'
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          structuredData
        )
      }}
    />
  )
}