import Image from 'next/image'
import { Dumbbell } from 'lucide-react'

const backgrounds = {
  fitlog: 'from-[#ffe1ec] via-[#fbe9ff] to-peach',
  devconf: 'from-lavender via-[#e9ecff] to-[#fde7f3]',
  portfolio: 'from-peach via-[#fff0f6] to-lavender',
}

function BrowserFrame({ url, children }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/80 bg-white shadow-lift">
      <div className="flex items-center gap-2 border-b border-line px-3 py-2">
        <span className="flex gap-1" aria-hidden="true">
          <span className="size-2 rounded-full bg-[#ffb4c8]" />
          <span className="size-2 rounded-full bg-[#ffd9b8]" />
          <span className="size-2 rounded-full bg-[#d8c8ff]" />
        </span>
        <span className="mx-auto truncate rounded-full bg-canvas-soft px-3 py-0.5 text-[0.6rem] text-ink-muted">
          {url}
        </span>
      </div>
      <div className="flex-1 overflow-hidden p-3 sm:p-4">{children}</div>
    </div>
  )
}

function FitLogMock() {
  const rows = ['w-3/4', 'w-1/2', 'w-2/3']
  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-16 rounded-full bg-ink/80" />
        <div className="h-5 w-12 rounded-full bg-accent-pink/80" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {['bg-[#ffe1ec]', 'bg-lavender', 'bg-peach'].map((bg) => (
          <div key={bg} className={`h-10 rounded-lg ${bg}`} />
        ))}
      </div>
      {rows.map((width) => (
        <div key={width} className="flex items-center gap-2 rounded-lg border border-line p-2">
          <span className="flex size-6 items-center justify-center rounded-md bg-canvas-soft text-ink">
            <Dumbbell className="size-3" aria-hidden="true" />
          </span>
          <div className="flex-1 space-y-1">
            <div className={`h-1.5 rounded-full bg-ink/70 ${width}`} />
            <div className="h-1.5 w-1/3 rounded-full bg-ink/15" />
          </div>
        </div>
      ))}
    </div>
  )
}

function DevConfMock() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="rounded-lg bg-linear-to-br from-[#2b2540] to-[#433469] p-3">
        <div className="h-1.5 w-10 rounded-full bg-white/50" />
        <p className="mt-2 font-serif text-2xl italic leading-none text-white">2026</p>
        <div className="mt-2 h-1.5 w-20 rounded-full bg-accent-pink/80" />
      </div>
      <div className="flex justify-between gap-2">
        {['bg-[#ffd3e3]', 'bg-lavender', 'bg-peach', 'bg-[#dfe3ff]'].map((bg) => (
          <div key={bg} className="flex flex-1 flex-col items-center gap-1">
            <span className={`size-7 rounded-full ${bg}`} />
            <span className="h-1 w-3/4 rounded-full bg-ink/20" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[false, true, false].map((highlighted, index) => (
          <div
            key={index}
            className={`h-10 rounded-lg border ${highlighted ? 'border-accent-purple/50 bg-lavender' : 'border-line'}`}
          />
        ))}
      </div>
    </div>
  )
}

function PortfolioMock() {
  return (
    <div className="flex h-full items-center gap-4">
      <div className="flex-1 space-y-2">
        <div className="h-1.5 w-12 rounded-full bg-accent-pink/70" />
        <p className="font-serif text-lg leading-tight text-ink">
          I build digital <em className="text-gradient italic">experiences.</em>
        </p>
        <div className="h-1.5 w-full rounded-full bg-ink/15" />
        <div className="h-1.5 w-4/5 rounded-full bg-ink/15" />
        <div className="flex gap-1.5 pt-1">
          <span className="h-5 w-14 rounded-full bg-ink" />
          <span className="h-5 w-12 rounded-full border border-line" />
        </div>
      </div>
      <div className="rounded-full bg-[conic-gradient(from_210deg,#f777a8,#a855f7,#6366f1,#ffc5a3,#f777a8)] p-[2px]">
        <div className="flex size-16 items-center justify-center rounded-full border-2 border-white bg-lavender font-serif text-xl italic text-ink">
          MR
        </div>
      </div>
    </div>
  )
}

const mocks = {
  fitlog: FitLogMock,
  devconf: DevConfMock,
  portfolio: PortfolioMock,
}

export default function ProjectPreview({ project, large = false }) {
  const Mock = mocks[project.preview]
  const background = backgrounds[project.preview] ?? 'from-canvas-soft to-lavender'

  return (
    <div
      className={`relative overflow-hidden bg-linear-to-br ${background} ${
        large ? 'aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[22rem]' : 'aspect-[4/3]'
      }`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-[1.03] sm:p-10"
        >
          <div className="h-full max-h-72 w-full max-w-sm">
            <BrowserFrame url={project.displayUrl}>{Mock ? <Mock /> : null}</BrowserFrame>
          </div>
        </div>
      )}
      <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
        {project.category}
      </span>
    </div>
  )
}
