import { cases } from '../data/cases'
import { studio } from '../data/studio'
import CaseCard from '../components/CaseCard'

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
        <p className="text-sm uppercase tracking-[0.08em] text-ink-soft">Design Studio · Web Design Case Studies</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
          Websites made fast — and made well.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          I design and build every project myself — from the first sketch to the production code that
          ships. Most cases in this portfolio take 5 to 12 days, from brief to release.
        </p>
      </section>

      <section id="cases" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mb-10 flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">Cases</h2>
            <p className="text-sm text-ink-soft">{cases.length} projects</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((item) => (
              <CaseCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="font-serif text-2xl text-ink sm:text-3xl">About</h2>
          <p className="mt-2 text-sm text-ink-soft">{studio.role}</p>
          <div className="mt-6 max-w-xl space-y-4">
            {studio.about.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="font-serif text-2xl text-ink sm:text-3xl">Contact</h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
            Tell me about your project — I usually reply within a day.
          </p>
          <a
            href={`mailto:${studio.email}`}
            className="mt-4 inline-block text-lg text-ink underline underline-offset-4 transition-colors duration-150 hover:text-ink-soft"
          >
            {studio.email}
          </a>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
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
      </section>
    </>
  )
}
