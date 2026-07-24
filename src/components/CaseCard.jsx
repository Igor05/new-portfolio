import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CaseImage from './CaseImage'
import { TONE_BG } from '../data/tones'

const MotionLink = motion.create(Link)

export default function CaseCard({ item, index = 0 }) {
  return (
    <MotionLink
      to={`/cases/${item.slug}`}
      aria-label={`Case ${item.index}: ${item.title}, ${item.category}`}
      className="group flex border border-line bg-card transition-colors duration-150 hover:border-ink"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.06 }}
      whileHover={{
        y: -3,
        boxShadow: '0 10px 24px -12px rgba(27, 28, 30, 0.28)',
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
    >
      <div className="flex w-12 shrink-0 flex-col justify-between border-r border-line p-2.5 sm:w-14 sm:p-3">
        <span className="font-serif text-sm text-ink-soft">{item.index}</span>
        <span aria-hidden="true" className={`h-9 w-full sm:h-10 ${TONE_BG[item.tone]}`} />
      </div>

      <div className="flex flex-1 flex-col">
        <CaseImage
          src={item.cover}
          alt={`${item.title} — website cover`}
          index={item.index}
          tone={item.tone}
          className="border-b border-line"
        />

        <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
          <div>
            <h3 className="font-serif text-xl text-ink sm:text-2xl">{item.title}</h3>
            <p className="mt-1 text-sm text-ink-soft">
              {item.category} · {item.year}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-ink-soft">{item.summary}</p>

          <div className="mt-auto flex items-baseline gap-2 border-t border-line pt-3">
            <span className="font-serif text-lg text-ink">{item.stat.value}</span>
            <span className="text-xs uppercase tracking-[0.06em] text-ink-soft">{item.stat.label}</span>
          </div>
        </div>
      </div>
    </MotionLink>
  )
}
