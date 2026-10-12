// repoUrl: set to null until the repository link is confirmed — the card shows "Source coming soon".
// preview: selects the CSS mock in ProjectPreview.jsx. Add `image: '/images/projects/name.png'` to use a real screenshot instead.
export const projects = [
  {
    id: 'fitlog',
    title: 'FitLog',
    category: 'Web App',
    description:
      'A workout tracking web application designed to help users explore workouts and organize their fitness plans.',
    tech: ['Next.js', 'JavaScript', 'Tailwind CSS', 'API Integration'],
    liveUrl: 'https://myfitlogapp.netlify.app/',
    repoUrl: null,
    preview: 'fitlog',
    displayUrl: 'myfitlogapp.netlify.app',
    featured: true,
  },
  {
    id: 'devconf',
    title: 'DevConf 2026',
    category: 'Event Website',
    description:
      'A developer conference website featuring a hero section, speaker profiles, pricing cards, and event information.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
    liveUrl: 'https://mohayminul94.github.io/devconf-26-website/',
    repoUrl: 'https://github.com/mohayminul94/devconf-26-website',
    preview: 'devconf',
    displayUrl: 'mohayminul94.github.io',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    category: 'Portfolio',
    description:
      'A personal portfolio that presents my frontend skills, development projects, and career goals.',
    tech: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    liveUrl: '/',
    repoUrl: null,
    preview: 'portfolio',
    displayUrl: 'rayhan.dev',
  },
]
