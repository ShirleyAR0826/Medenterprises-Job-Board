import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <Link
        href="/jobs"
        className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
      >
        View Jobs
      </Link>
    </main>
  )
}