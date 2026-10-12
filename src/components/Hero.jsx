import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Download, FileText } from 'lucide-react'
import { siteConfig } from '@/data/site'
import HeroVisual from './HeroVisual'

const heroTech = ['React', 'Next.js', 'JavaScript', 'Tailwind CSS']

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] bg-linear-to-b from-canvas-soft via-white to-white"
      />

      <div className="mx-auto grid container items-center gap-12 px-5 pb-10 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pb-16 lg:pt-20">
        <div>
          <h1
            id="hero-title"
            className="mt-6 text-balance font-serif text-[2.6rem] leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.6rem]"
          >
            I build digital experiences that feel <em className="text-gradient italic">effortless.</em>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
            {
              "I'm Rayhan, a Computer Science and Engineering student and aspiring Frontend Developer focused on building responsive, accessible, and user-friendly web experiences."
            }
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              Explore My Work
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-6 text-sm font-semibold text-ink transition hover:border-accent-pink/50 hover:bg-canvas-soft"
            >
              {"Let's Connect"}
            </Link>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <ul aria-label="Core technologies" className="flex flex-wrap gap-2">
              {heroTech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-lavender/70 px-3 py-1 text-xs font-medium text-ink"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {siteConfig.resumeUrl ? (
              <a
                href={siteConfig.resumeUrl}
                download
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-accent-pink/60 decoration-2 underline-offset-4 transition-colors hover:decoration-accent-purple"
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </a>
            ) : (
              <p className="inline-flex items-center gap-1.5 text-sm text-ink-muted">
                <FileText className="size-4" aria-hidden="true" />
                Resume available on request
              </p>
            )}
          </div>
        </div>

        <HeroVisual />
      </div>

      <div className="flex justify-center pb-10">
        <Link
          href="#about"
          className="group inline-flex flex-col items-center gap-2 rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-ink-muted transition-colors hover:text-ink"
        >
          Scroll
          <span className="flex size-9 items-center justify-center rounded-full border border-line bg-white">
            <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
          </span>
          <span className="sr-only">to the about section</span>
        </Link>
      </div>
    </section>
  )
}
