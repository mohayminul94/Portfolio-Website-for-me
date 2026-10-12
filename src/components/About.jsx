import { Hammer, Palette, TrendingUp } from 'lucide-react'
import SectionHeading from './SectionHeading'

const highlights = [
  {
    title: 'Learning by Building',
    description: 'Every concept I learn turns into a project I can ship, break, and improve.',
    icon: Hammer,
  },
  {
    title: 'UI & UX Focused',
    description: 'I care about spacing, hierarchy, and how an interface feels to use.',
    icon: Palette,
  },
  {
    title: 'Always Improving',
    description: 'I revisit old code, read docs, and keep sharpening my problem-solving.',
    icon: TrendingUp,
  },
]

const quickFacts = [
  { label: 'Education', value: 'B.Sc. in Computer Science & Engineering (ongoing)' },
  { label: 'Focus', value: 'Frontend development & UI' },
  { label: 'Looking for', value: 'Junior Frontend role or internship' },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto container px-5 py-5 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading id="about-title" eyebrow="About" before="A little " highlight="about me" after="." />

          <div className="mt-8 space-y-5 text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
            <p>
              {
                "I'm a Computer Science and Engineering student who fell for frontend development the first time a few lines of code turned into something I could see and click. Since then, I've been learning how to build interfaces that are clear, responsive, and genuinely pleasant to use."
              }
            </p>
            <p>
              {
                "Most of what I know comes from building — starting with plain HTML, CSS, and JavaScript, then moving to React, Next.js, and Tailwind CSS. Each project pushes my problem-solving a bit further and teaches me something new about writing clean, maintainable code."
              }
            </p>
            <p>
              {
                "Right now I'm focused on growing into a professional software developer, and I'm looking for a team where I can contribute, learn from experienced engineers, and keep improving."
              }
            </p>
          </div>

          <dl className="mt-8 divide-y divide-line rounded-3xl border border-line bg-canvas-soft">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{fact.label}</dt>
                <dd className="text-sm font-medium text-ink sm:text-right">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="flex flex-col gap-4 lg:pt-20">
          {highlights.map(({ title, description, icon: Icon }, index) => (
            <li
              key={title}
              className={`group flex gap-5 rounded-3xl border border-line bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:p-7 ${
                index === 1 ? 'lg:ml-10' : ''
              }`}
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#ffe3ef] to-lavender text-ink">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
