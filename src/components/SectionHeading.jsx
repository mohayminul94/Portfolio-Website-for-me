export default function SectionHeading({ id, eyebrow, before, highlight, after = '', description, align = 'left' }) {
  const isCentered = align === 'center'

  return (
    <div className={isCentered ? 'mx-auto container text-center' : 'max-w-2xl'}>
      <p
        className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted ${
          isCentered ? 'justify-center' : ''
        }`}
      >
        <span aria-hidden="true" className="h-px w-6 bg-linear-to-r from-accent-pink to-accent-purple" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 text-balance font-serif text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
        {before}
        <em className="text-gradient italic">{highlight}</em>
        {after}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">{description}</p>
      )}
    </div>
  )
}
