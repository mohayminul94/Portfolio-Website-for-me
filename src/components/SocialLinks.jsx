import { Mail } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function SocialLinks({ includeEmail = false, className = '' }) {
  const links = [
    ...(includeEmail
      ? [{ label: 'Email', href: `mailto:${siteConfig.email}`, icon: Mail, external: false }]
      : []),
    { label: 'GitHub', href: siteConfig.github, icon: GithubIcon, external: true },
    { label: 'LinkedIn', href: siteConfig.linkedin, icon: LinkedinIcon, external: true },
  ]

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {links.map(({ label, href, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:-translate-y-0.5 hover:border-accent-pink/50 hover:shadow-soft"
          >
            <Icon className="size-5" aria-hidden="true" />
            <span className="sr-only">
              {label}
              {external ? ' (opens in a new tab)' : ''}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
