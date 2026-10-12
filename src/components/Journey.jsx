import { journey } from '@/data/journey'
import SectionHeading from './SectionHeading'

export default function Journey() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="bg-canvas-soft">
      <div className="mx-auto grid container gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="journey-title"
            eyebrow="Experience"
            before="My journey "
            highlight="so far"
            after="."
            description="No job titles yet — just steady, hands-on progress from fundamentals to full projects, and the next step I'm working toward."
          />
        </div>

        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-linear-to-b from-accent-pink via-accent-purple to-accent-blue/30"
          />
          {journey.map(({ id, label, title, description, icon: Icon, current }) => (
            <li key={id} className="relative flex gap-5 pb-8 last:pb-0 sm:gap-6">
              <span
                className={`relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border ${
                  current
                    ? 'border-transparent bg-ink text-white shadow-lift'
                    : 'border-line bg-white text-ink'
                }`}
              >
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div
                className={`flex-1 rounded-3xl border p-5 transition duration-300 hover:shadow-soft sm:p-6 ${
                  current ? 'border-accent-pink/40 bg-white' : 'border-line bg-white/70'
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  {label}
                  {current && <span className="ml-2 rounded-full bg-[#ffe3ef] px-2 py-0.5 text-[0.65rem] text-ink">In progress</span>}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
