import { Link } from 'react-router-dom'

const NAV = [
  { label: 'Cases', href: '/#cases' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-4 sm:px-6">
        <Link to="/" className="font-serif text-lg text-ink">
          Igor Grebenkin Studio
        </Link>
        <nav aria-label="Main navigation" className="flex gap-5 text-sm text-ink-soft sm:gap-8">
          {NAV.map((item) => (
            <Link key={item.href} to={item.href} className="transition-colors duration-150 hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
