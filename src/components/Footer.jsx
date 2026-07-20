import { studio } from '../data/studio'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} {studio.name}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={`mailto:${studio.email}`} className="transition-colors duration-150 hover:text-ink">
            {studio.email}
          </a>
          {studio.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-150 hover:text-ink"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
