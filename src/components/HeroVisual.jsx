import Image from 'next/image'
import { Atom, Braces, Triangle, Wind } from 'lucide-react'
import { siteConfig } from '@/data/site'
import heroImg from '../app/assets/hero.jpeg'

const stack = [
  { name: 'React', icon: Atom },
  { name: 'Next.js', icon: Triangle },
  { name: 'JavaScript', icon: Braces },
  { name: 'Tailwind CSS', icon: Wind },
]

const profileFacts = [
  { label: 'Focus', value: 'Frontend' },
  { label: 'Studying', value: 'CSE' },
  { label: 'Seeking', value: 'Junior role' },
]

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg py-12 lg:max-w-none">
      
      {/* 1. Main Profile Block (Neubrutalist Style) */}
      <div className="relative z-10 rounded-xl border-4 border-neutral-950 bg-white p-7 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start text-center sm:text-left">
          
          {/* Square Profile Image with Border */}
          <div className="size-32 shrink-0 overflow-hidden rounded-lg border-4 border-neutral-950 bg-neutral-100 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <Image
              src={heroImg} // public ফোল্ডারে আপনার ছবি রাখুন
              alt={siteConfig.name}
              width={128}
              height={128}
              priority
              className="size-full object-cover"
            />
          </div>

          {/* User Info */}
          <div className="flex-1">
            <div className="inline-block rounded-full border-2 border-neutral-950 bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neutral-950 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Available for Hire
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tighter text-neutral-950 sm:text-4xl">
              Mohayminul Islam Rayhan
            </h2>
            <p className="mt-2 text-base font-medium text-neutral-700">
              Frontend Developer · CSE Student
            </p>
          </div>
        </div>

        {/* 2. Facts Matrix (Grid instead of classic list) */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {profileFacts.map((fact, index) => (
            <div 
              key={fact.label} 
              className={`rounded-lg border-2 border-neutral-950 p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] ${
                index === 0 ? 'bg-indigo-50' : index === 1 ? 'bg-rose-50' : 'bg-amber-50'
              }`}
            >
              <dt className="text-xs font-bold uppercase tracking-widest text-neutral-600">
                {fact.label}
              </dt>
              <dd className="mt-1 text-lg font-extrabold text-neutral-950">
                {fact.value}
              </dd>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Floating Building Block (Top Right) */}
      <div className="absolute -right-4 -top-6 z-20 max-w-[200px] rotate-3 animate-float rounded-xl border-2 border-neutral-950 bg-white p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] lg:-right-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600">
          <span className="size-2 rounded-full bg-emerald-500 border border-neutral-950" aria-hidden="true" />
          Building Now
        </div>
        <p className="mt-2 truncate text-sm font-bold text-neutral-950">
          {siteConfig.currentlyBuilding.title}
        </p>
        <p className="truncate text-xs text-neutral-700">
          {siteConfig.currentlyBuilding.detail}
        </p>
      </div>

      {/* 4. Floating Tech Stack Block (Bottom Left) */}
      <div className="absolute -bottom-6 -left-4 z-20 -rotate-3 animate-float-delayed rounded-xl border-2 border-neutral-950 bg-white p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] lg:-left-8">
        <p className="text-xs font-bold uppercase tracking-wider text-neutral-600">Daily Stack</p>
        <ul className="mt-3 flex gap-3" aria-label="Daily technology stack">
          {stack.map(({ name, icon: Icon }, index) => (
            <li
              key={name}
              title={name}
              className={`flex size-10 items-center justify-center rounded-lg border-2 border-neutral-950 shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 ${
                index % 2 === 0 ? 'bg-sky-50' : 'bg-teal-50'
              }`}
            >
              <Icon className="size-5 text-neutral-950" aria-hidden="true" />
              <span className="sr-only">{name}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}