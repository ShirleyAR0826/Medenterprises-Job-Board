export type Job = {
  id: string
  title: string
  slug: string
  location: string
  type: string
  department: string
  postedDate: string
  closingDate: string | null
  salary: {
    min: number
    max: number
    currency: string
  }
  description: string
  requirements: string[]
}