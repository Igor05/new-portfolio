import { TONE_BG } from '../data/tones'

export default function PlaceholderImage({ index, tone, aspect = 'aspect-[4/3]', label = 'Project cover — add image', className = '' }) {
  return (
    <div className={`relative flex flex-col justify-between bg-card ${aspect} ${className}`}>
      <div className="flex items-start justify-between p-4">
        <span aria-hidden="true" className="font-serif text-5xl leading-none text-ink/10 sm:text-6xl">
          {index}
        </span>
        <span aria-hidden="true" className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${TONE_BG[tone]}`} />
      </div>
      <p className="border-t border-line px-4 py-2 text-[11px] uppercase tracking-[0.08em] text-ink-soft">{label}</p>
    </div>
  )
}
