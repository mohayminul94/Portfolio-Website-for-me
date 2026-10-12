import { BookOpen, GraduationCap, KeyRound, Layers, Rocket } from 'lucide-react'

// Milestones use neutral labels instead of dates. Add a `date` field if you want to show one.
export const journey = [
  {
    id: 'cse',
    label: 'Foundation',
    title: 'Studying Computer Science and Engineering',
    description:
      'Building a strong base in programming, data structures, and problem solving through my CSE degree.',
    icon: GraduationCap,
  },
  {
    id: 'fundamentals',
    label: 'First steps',
    title: 'Learning frontend fundamentals',
    description:
      'Getting comfortable with HTML, CSS, and JavaScript by recreating layouts and building small interactive pages.',
    icon: BookOpen,
  },
  {
    id: 'react',
    label: 'Leveling up',
    title: 'Building React and Next.js projects',
    description:
      'Moving to component-based thinking with React, then shipping full projects with Next.js and Tailwind CSS.',
    icon: Layers,
  },
  {
    id: 'api-auth',
    label: 'Going deeper',
    title: 'Practicing API integration and authentication',
    description:
      'Connecting interfaces to real data with REST APIs and exploring sign-in flows with Better Auth.',
    icon: KeyRound,
  },
  {
    id: 'now',
    label: 'Now',
    title: 'Preparing for junior and internship roles',
    description:
      'Polishing my projects, strengthening fundamentals, and looking for a team where I can learn and contribute.',
    icon: Rocket,
    current: true,
  },
]
