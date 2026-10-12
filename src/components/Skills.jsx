import { skillGroups } from '@/data/skills'
import SectionHeading from './SectionHeading'
import SkillCard from './SkillCard'

const groupLayout = {
  frontend: { wrapper: 'lg:col-span-2', list: 'sm:grid-cols-2 lg:grid-cols-3' },
  tools: { wrapper: '', list: '' },
  additional: { wrapper: 'lg:col-span-3', list: 'sm:grid-cols-2 lg:grid-cols-4' },
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-canvas-soft">
      <div className="mx-auto container px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          before="My "
          highlight="toolkit"
          after="."
          description="The languages, frameworks, and tools I reach for when turning an idea into a working interface."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const layout = groupLayout[group.id] ?? { wrapper: '', list: '' }
            return (
              <div
                key={group.id}
                className={`rounded-3xl border border-line bg-white/70 p-5 backdrop-blur-sm sm:p-6 ${layout.wrapper}`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-2xl text-ink">{group.title}</h3>
                  <p className="text-sm text-ink-muted">{group.summary}</p>
                </div>
                <ul className={`mt-5 grid gap-3 ${layout.list}`}>
                  {group.skills.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
