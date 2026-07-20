import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <p className="font-serif text-3xl text-ink">Page not found</p>
      <Link to="/" className="mt-4 inline-block text-ink-soft underline underline-offset-4 transition-colors duration-150 hover:text-ink">
        Back to home
      </Link>
    </div>
  )
}
