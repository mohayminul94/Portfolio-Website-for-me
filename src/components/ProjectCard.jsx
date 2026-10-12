import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import ProjectPreview from './ProjectPreview'

function ProjectLink({ href, children, variant = 'primary' }) {
  const isExternal = href.startsWith('http')
  const base =
    'group/link inline-flex h-9 items-center gap-1.5 rounded-full px-3.5 text-xs font-semibold transition'
  const styles =
    variant === 'primary'
      ? 'bg-ink text-white hover:bg-accent-pink hover:text-white'
      : 'border border-line bg-canvas-soft text-ink hover:border-accent-pink/50'

  const content = (
    <>
      {children}
      <ArrowUpRight
        className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
        aria-hidden="true"
      />
    </>
  )

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
        {content}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    )
  }

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {content}
    </Link>
  )
}

export default function ProjectCard({ project, featured = false }) {
  const { title, description, tech, liveUrl, repoUrl } = project
  const headingId = `project-${project.id}`

  return (
    <article
      aria-labelledby={headingId}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
    >
      {/* Project Thumbnail / Preview */}
      <div className="relative overflow-hidden">
        <ProjectPreview project={project} large={false} />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <h3
            id={headingId}
            className="text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-accent-pink"
          >
            {title}
          </h3>
          <p className="mt-2 line-clamp-2 text-xs sm:text-sm leading-relaxed text-ink-muted">
            {description}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <ul aria-label={`${title} technologies`} className="mt-4 flex flex-wrap gap-1.5">
          {tech?.map((item) => (
            <li
              key={item}
              className="rounded-md bg-canvas-soft px-2.5 py-0.5 text-[11px] font-medium text-ink-muted border border-line/50"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-wrap items-center gap-2.5 pt-3 border-t border-line/60">
          {liveUrl && <ProjectLink href={liveUrl}>Live Demo</ProjectLink>}
          {repoUrl ? (
            <ProjectLink href={repoUrl} variant="secondary">
              <GithubIcon className="size-3.5" />
              Code
            </ProjectLink>
          ) : (
            <p className="inline-flex h-9 items-center gap-1.5 px-1 text-xs text-ink-muted">
              <GithubIcon className="size-3.5" />
              Private
            </p>
          )}
        </div>
      </div>
    </article>
  )
}