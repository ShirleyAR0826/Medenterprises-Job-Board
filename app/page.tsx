import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Link
        href="/jobs"
        className="rounded bg-black px-5 py-3 text-white"
      >
        View Jobs
      </Link>
    </main>
  )
}