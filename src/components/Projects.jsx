import { projects } from '@/data/projects'
import SectionHeading from './SectionHeading'
import ProjectPreview from './ProjectPreview'

export default function Projects() {
  return (
    // py-20 sm:py-28 এর বদলে py-8 sm:py-12 ব্যবহার করা হয়েছে
    <section id="projects" aria-labelledby="projects-title" className="mx-auto container px-5 py-8 sm:px-8 sm:py-12">
      {/* Section Header */}
      <SectionHeading
        id="projects-title"
        eyebrow="Projects"
        before="Things I've been "
        highlight="building"
        after="."
        description="A few projects where I practiced turning designs and ideas into responsive, working interfaces."
      />

      {/* Grid Showcase - mt-12 এর বদলে mt-6 দিয়ে গ্যাপ কমানো হয়েছে */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            {/* Visual Preview Container */}
            <div className="relative w-full overflow-hidden">
              <ProjectPreview project={project} />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-md transition-transform hover:scale-105"
                  >
                    <span>Code ↗</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full bg-accent-pink px-4 py-2 text-xs font-semibold text-white shadow-md transition-transform hover:scale-105"
                  >
                    <span>Live Demo ↗</span>
                  </a>
                )}
              </div>
            </div>

            {/* Details Section - p-6 এর জায়গায় p-4 করে ভেতরের স্পেস কমানো হয়েছে */}
            <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
              <div>
                <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-accent-pink">
                  {project.title}
                </h3>

                <p className="mt-1.5 line-clamp-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-line/60">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-canvas-soft px-2 py-0.5 text-[10px] font-medium text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}