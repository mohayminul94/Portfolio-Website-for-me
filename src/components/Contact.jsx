import { Mail } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import ContactForm from './ContactForm'

const channels = [
  { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail, external: false },
  { label: 'GitHub', value: siteConfig.github.replace('https://', ''), href: siteConfig.github, icon: GithubIcon, external: true },
  { label: 'LinkedIn', value: 'https://www.linkedin.com/in/mohayminul02/', href: siteConfig.linkedin, icon: LinkedinIcon, external: true },
]

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-3 pb-20 sm:px-6 sm:pb-28">
      <div className="relative mx-auto container overflow-hidden rounded-[2.5rem] bg-linear-to-br from-[#ffe6f0] via-lavender to-peach">
        <div aria-hidden="true" className="absolute -right-20 -top-24 size-80 rounded-full bg-white/50 blur-3xl" />
        <div className="relative grid gap-10 px-5 py-14 sm:px-10 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-14 lg:py-20">
          <div className="flex flex-col">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
              <span aria-hidden="true" className="h-px w-6 bg-ink/40" />
              Contact
            </p>
            <h2
              id="contact-title"
              className="mt-4 text-balance font-serif text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl"
            >
              Have an idea? <em className="italic">{"Let's build something great."}</em>
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-ink/75">
              {"I'm always interested in learning, collaborating, and exploring new opportunities in frontend development."}
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {channels.map(({ label, value, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-4 rounded-2xl bg-white/70 p-3 pr-5 backdrop-blur transition hover:bg-white hover:shadow-soft"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink text-white">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-wider text-ink-muted">{label}</span>
                      <span className="block truncate text-sm font-semibold text-ink">{value}</span>
                    </span>
                    {external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm recipient={siteConfig.email} />
        </div>
      </div>
    </section>
  )
}
