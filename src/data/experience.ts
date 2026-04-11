export interface Experience {
  id: number
  company: string
  period: string
  descriptionCount: number
  technologies: string[]
  current?: boolean
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'PT DAZO KREATIF INDONESIA',
    period: 'Jan 2026 — Mar 2026',
    descriptionCount: 4,
    technologies: [
      'Laravel',
      'MongoDB',
      'PostgreSQL',
      'Node.js',
      'Vue.js',
      'Inertia.js',
      'Bootstrap',
      'Tailwind',
    ],
  },
  {
    id: 2,
    company: 'LANCARIN.ID',
    period: 'Nov 2025 — Dec 2025',
    descriptionCount: 5,
    technologies: ['Laravel', 'MySQL', 'Vue.js', 'Inertia.js', 'Tailwind'],
  },
  {
    id: 3,
    company: 'PT EDUCA SISFOMEDIA INDONESIA',
    period: 'Dec 2024 — Dec 2025',
    descriptionCount: 5,
    technologies: ['PHP', 'Slim', 'Twig', 'Vue.js', 'Bootstrap', 'jQuery', 'MySQL'],
  },
  {
    id: 4,
    company: 'CALSEN INDONESIA',
    period: 'Jan 2020 — Nov 2024',
    descriptionCount: 4,
    technologies: ['Laravel', 'MySQL', 'Vue.js', 'React.js', 'jQuery', 'Bootstrap'],
  },
]
