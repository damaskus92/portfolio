export interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
  current?: boolean
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'PT DAZO KREATIF INDONESIA',
    period: 'Jan 2026 — Mar 2026',
    description: [
      'Developed and implemented Google Single Sign-On (SSO) for enhanced user authentication.',
      'Optimized technical SEO strategies to boost website visibility and performance.',
      'Configured Open Graph (OG) tags for improved social media link previews.',
      'Integrated various tracking tools to ensure precise measurement of marketing data.',
    ],
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
    title: 'Full Stack Developer - Freelance',
    company: 'LANCARIN.ID',
    period: 'Nov 2025 — Dec 2025',
    description: [
      'Implementing Google Single Sign-On (SSO) for user authentication.',
      'Gamified Learning: Boosted user engagement by making language practice fun and interactive.',
      'Real-Time Analytics: Implemented instant scoring and performance feedback for users.',
      'Social Integration: Integrated social media sharing functionality to encourage community-driven learning.',
      'Automated Assessment: Built an automated evaluation engine to provide immediate results.',
    ],
    technologies: ['Laravel', 'MySQL', 'Vue.js', 'Inertia.js', 'Tailwind'],
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'PT EDUCA SISFOMEDIA INDONESIA',
    period: 'Dec 2024 — Dec 2025',
    description: [
      'Develop new features and updates to the company internal platform.',
      'Maintain and optimize tools and platforms.',
      'Participate in optimizing design and requirements specifications.',
      'Conduct unit testing and debugging to ensure product quality.',
      'Collaborate with the team to help identify bottlenecks and provide product improvement suggestions.',
    ],
    technologies: ['PHP', 'Slim', 'Twig', 'Vue.js', 'Bootstrap', 'jQuery', 'MySQL'],
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    company: 'CALSEN INDONESIA',
    period: 'Jan 2020 — Nov 2024',
    description: [
      'Design and develop applications according to client requirements.',
      'Analyze efficient database designs to support system performance.',
      'Write clean, structured, and easy-to-understand code.',
      'Apply design patterns to ensure system scalability and maintainability.',
    ],
    technologies: ['Laravel', 'MySQL', 'Vue.js', 'React.js', 'jQuery', 'Bootstrap'],
  },
  // {
  //   id: 5,
  //   title: 'Multimedia Staff',
  //   company: 'PT SINAR AGUNG PRASADIKINDO',
  //   period: 'Feb 2018 — Jul 2019',
  //   description: [
  //     'Design various promotional materials, including brochures, banners, catalogs, and product packaging.',
  //     'Capture and edit product photos and videos for promotions, catalogs, and company social media.',
  //     'Collaborate with the sales team to understand needs and create promotional materials.',
  //     'Document all company events, internal activities, and special events through photos and videos.',
  //   ],
  //   technologies: ['CodeIgniter', 'Bootstrap', 'jQuery', 'MySQL'],
  // },
]
