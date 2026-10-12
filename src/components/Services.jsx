import { services } from '@/data/services'
import SectionHeading from './SectionHeading'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function Services() {
  return (
    <section aria-labelledby="services-title" className="mx-auto container px-5 py-10 sm:px-8 sm:py-16">
      {/* Section Header */}
      <SectionHeading
        id="services-title"
        eyebrow="What I can build"
        before="Turning ideas into "
        highlight="interfaces"
        after="."
        description="The kinds of work I enjoy most and can confidently take on to deliver polished, modern Web experiences."
        align="center"
      />

      {/* Services Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map(({ id, title, description, features, icon: Icon }, index) => (
          <div
            key={id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift sm:p-7"
          >
            {/* Glow Background Effect on Hover (Light Theme Friendly) */}
            <span
              aria-hidden="true"
              className="absolute -right-12 -top-12 size-36 rounded-full bg-linear-to-br from-accent-pink/15 to-lavender/50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />

            <div>
              {/* Card Header: Icon & Index Number */}
              <div className="relative flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-ink text-white shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {Icon ? <Icon className="size-5" aria-hidden="true" /> : null}
                </span>
                <span aria-hidden="true" className="font-serif text-3xl font-light italic text-ink/15">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="relative mt-6 text-xl font-bold leading-snug text-ink transition-colors group-hover:text-accent-pink">
                {title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">
                {description}
              </p>

              {/* Detailed Deliverables / Features (Optional) */}
              {features && features.length > 0 ? (
                <ul className="relative mt-5 space-y-2 border-t border-line/60 pt-4">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-ink-muted">
                      <CheckCircle2 className="size-3.5 text-accent-pink shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            {/* Bottom Link / Accent line */}
            <div className="relative mt-6 pt-3 border-t border-line/40">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink group-hover:text-accent-pink transition-colors">
                Explore service
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Bottom Banner / Call to Action */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-line bg-canvas-soft p-6 text-center sm:text-left shadow-xs">
        <div>
          <h4 className="text-base font-semibold text-ink">Have a custom project in mind?</h4>
          <p className="text-xs text-ink-muted mt-0.5">Let's connect and turn your ideas into a working web app.</p>
        </div>
        <a
          href="#contact"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-ink px-5 text-xs font-semibold text-white transition-all hover:bg-accent-pink hover:shadow-soft"
        >
          Get in Touch
          <ArrowRight className="size-3.5" />
        </a>
      </div>
    </section>
  )
}