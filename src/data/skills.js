import {
  Atom,
  Braces,
  FileCode,
  GitBranch,
  KeyRound,
  MonitorSmartphone,
  Paintbrush,
  Plug,
  Puzzle,
  SquareTerminal,
  Triangle,
  Wind,
} from 'lucide-react'
import { GithubIcon } from '@/components/BrandIcons'

export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    summary: 'The core of how I build for the web.',
    skills: [
      { name: 'HTML5', description: 'Semantic, accessible page structure.', icon: FileCode },
      { name: 'CSS3', description: 'Layouts with Flexbox, Grid, and motion.', icon: Paintbrush },
      { name: 'JavaScript', description: 'Interactivity, DOM, and async logic.', icon: Braces },
      { name: 'React', description: 'Reusable components and hooks.', icon: Atom },
      { name: 'Next.js', description: 'App Router, routing, and rendering.', icon: Triangle },
      { name: 'Tailwind CSS', description: 'Fast, consistent utility styling.', icon: Wind },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    summary: 'Everyday workflow essentials.',
    skills: [
      { name: 'Git', description: 'Version control and branching.', icon: GitBranch },
      { name: 'GitHub', description: 'Repos, collaboration, and Pages.', icon: GithubIcon },
      { name: 'VS Code', description: 'My editor of choice.', icon: SquareTerminal },
    ],
  },
  {
    id: 'additional',
    title: 'Additional',
    summary: 'Concepts I apply across projects.',
    skills: [
      {
        name: 'Responsive Design',
        description: 'Mobile-first layouts for every screen.',
        icon: MonitorSmartphone,
      },
      {
        name: 'REST API Integration',
        description: 'Fetching and displaying live data.',
        icon: Plug,
      },
      {
        name: 'Component Architecture',
        description: 'Small, focused, composable UI pieces.',
        icon: Puzzle,
      },
      {
        name: 'Basic Authentication',
        description: 'Sign-in flows with Better Auth.',
        icon: KeyRound,
      },
    ],
  },
]
