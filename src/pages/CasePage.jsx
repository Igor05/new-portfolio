import { Link, useParams } from 'react-router-dom'
import { cases, getCaseBySlug } from '../data/cases'
import { TONE_BG } from '../data/tones'
import CaseImage from '../components/CaseImage'

const SECTIONS = [
  { key: 'problem', label: 'Problem' },
  { key: 'solution', label: 'Solution' },
  { key: 'result', label: 'Result' },
]

export default function CasePage() {
  const { slug } = useParams()
  const item = getCaseBySlug(slug)

  if (!item) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <p className="text-ink-soft">Case not found.</p>
        <Link to="/" className="mt-4 inline-block text-ink underline underline-offset-4">
          Back to home
        </Link>
      </div>
    )
  }

  const currentPos = cases.findIndex((c) => c.slug === slug)
  const next = cases[(currentPos + 1) % cases.length]

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link to="/#cases" className="text-sm text-ink-soft transition-colors duration-150 hover:text-ink">
        ← All cases
      </Link>

      <header className="mt-6 flex items-start gap-4 sm:mt-8">
        <span aria-hidden="true" className={`mt-2 h-12 w-2 shrink-0 ${TONE_BG[item.tone]}`} />
        <div>
          <p className="text-sm text-ink-soft">
            {item.index} · {item.category} · {item.year}
          </p>
          <h1 className="mt-2 font-serif text-4xl leading-tight text-ink sm:text-5xl">{item.title}</h1>
        </div>
      </header>

      <CaseImage
        src={item.cover}
        alt={`${item.title} — website cover`}
        index={item.index}
        tone={item.tone}
        aspect="aspect-[16/10]"
        className="mt-10 border border-line"
      />

      <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-line py-5 text-sm sm:grid-cols-4">
        <div>
          <dt className="text-ink-soft">Duration</dt>
          <dd className="mt-1 text-ink">{item.duration}</dd>
        </div>
        <div>
          <dt className="text-ink-soft">Result</dt>
          <dd className="mt-1 text-ink">
            {item.stat.value} <span className="text-ink-soft">{item.stat.label}</span>
          </dd>
        </div>
        <div className="col-span-2">
          <dt className="text-ink-soft">Process</dt>
          <dd className="mt-1 text-ink">{item.process}</dd>
        </div>
      </dl>

      <div className="mt-10 space-y-10">
        {SECTIONS.map((section) => (
          <section key={section.key}>
            <h2 className="font-serif text-xl text-ink">{section.label}</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">{item[section.key]}</p>
          </section>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <CaseImage
          src={item.detailImages?.[0]}
          alt={`${item.title} — project detail`}
          tone={item.tone}
          label="Project detail — add image"
          aspect="aspect-[4/3]"
          className="border border-line"
        />
        <CaseImage
          src={item.detailImages?.[1]}
          alt={`${item.title} — project detail`}
          tone={item.tone}
          label="Project detail — add image"
          aspect="aspect-[4/3]"
          className="border border-line"
        />
      </div>

      <div className="mt-14 border-t border-line pt-8">
        <p className="text-sm text-ink-soft">Next case</p>
        <Link
          to={`/cases/${next.slug}`}
          className="mt-2 inline-block font-serif text-2xl text-ink transition-colors duration-150 hover:text-ink-soft sm:text-3xl"
        >
          {next.title} →
        </Link>
      </div>
    </article>
  )
}
