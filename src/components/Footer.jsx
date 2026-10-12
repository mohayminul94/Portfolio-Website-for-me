import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import { navLinks, siteConfig } from '@/data/site'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto container px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Link href="#home" className="rounded-md font-serif text-2xl tracking-tight text-ink">
              Rayhan<span className="text-gradient italic">.</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{siteConfig.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-1 sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={`#${link.id}`}
                    className="inline-flex min-h-10 items-center text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4 md:items-end">
            <SocialLinks includeEmail />
            <Link
              href="#top"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-medium text-ink transition hover:bg-canvas-soft"
            >
              Back to top
              <ArrowUp className="size-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}
          </p>
          <p className="font-serif text-sm italic">Designed with curiosity. Built with code.</p>
        </div>
      </div>
    </footer>
  )
}
