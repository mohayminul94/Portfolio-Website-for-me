'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/site'

const observedIds = ['home', ...navLinks.map((link) => link.id)]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const sections = observedIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur-md"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 container items-center justify-between px-5 sm:px-8"
      >
        {/* Simple Text Logo */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="font-bold font-serif text-xl tracking-tight text-neutral-900 transition-opacity hover:opacity-75"
        >
          Rayhan<span className="text-indigo-600">.</span>
        </Link>

        {/* Minimal Nav Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.id
            return (
              <li key={link.id}>
                <Link
                  href={`#${link.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive ? 'text-neutral-900 font-semibold' : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-neutral-900"
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Action Link & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden rounded-full border border-neutral-200 bg-neutral-900 px-4 py-1.5 text-xs font-medium text-white transition-all hover:bg-neutral-800 md:inline-flex"
          >
            Let&apos;s Talk
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex size-9 items-center justify-center rounded-lg text-neutral-700 transition-colors hover:bg-neutral-100 md:hidden"
          >
            {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        className={`border-b border-neutral-200 bg-white md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <ul className="mx-auto flex max-w-5xl flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => {
            const isActive = activeId === link.id
            return (
              <li key={link.id}>
                <Link
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  aria-current={isActive ? 'location' : undefined}
                  className={`flex h-10 items-center justify-between rounded-lg px-3 text-sm font-medium transition-colors ${
                    isActive ? 'bg-neutral-100 text-neutral-900 font-semibold' : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                  {isActive && <span className="size-1.5 rounded-full bg-neutral-900" />}
                </Link>
              </li>
            )
          })}
          <li className="pt-2">
            <Link
              href="#contact"
              onClick={closeMenu}
              className="flex h-10 items-center justify-center rounded-lg bg-neutral-900 text-sm font-medium text-white"
            >
              Let&apos;s Talk
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}