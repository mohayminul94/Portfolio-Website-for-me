export default function SkillCard({ name, description, icon: Icon }) {
  return (
    <li className="group flex items-start gap-4 rounded-2xl border border-line bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent-pink/40 hover:shadow-soft">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-canvas-soft text-ink transition-colors group-hover:bg-lavender">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <h4 className="text-sm font-semibold text-ink">{name}</h4>
        <p className="mt-0.5 text-sm leading-snug text-ink-muted">{description}</p>
      </div>
    </li>
  )
}
