'use client'

import { useRouter, useSearchParams } from 'next/navigation'

type Props = {
  departments: string[]
  types: string[]
}

export default function JobFilters({
  departments,
  types
}: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const selectedDepartment =
    searchParams.get('department') || ''

  const selectedType =
    searchParams.get('type') || ''

  function updateFilters(
    key: string,
    value: string
  ) {
    const params = new URLSearchParams(
      searchParams.toString()
    )

    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }

    router.push(`/jobs?${params.toString()}`)
  }

  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row">
      <select
        value={selectedDepartment}
        onChange={(e) =>
          updateFilters(
            'department',
            e.target.value
          )
        }
        className="rounded border p-3"
      >
        <option value="">
          All Departments
        </option>

        {departments.map((department) => (
          <option
            key={department}
            value={department}
          >
            {department}
          </option>
        ))}
      </select>

      <select
        value={selectedType}
        onChange={(e) =>
          updateFilters('type', e.target.value)
        }
        className="rounded border p-3"
      >
        <option value="">
          All Employment Types
        </option>

        {types.map((type) => (
          <option
            key={type}
            value={type}
          >
            {type}
          </option>
        ))}
      </select>
    </div>
  )
}