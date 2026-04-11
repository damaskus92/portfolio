import dazoBiolinkImg from '@/assets/projects/dazo-biolink.webp'
import dazoDashboardImg from '@/assets/projects/dazo-dashboard.webp'
import lancarinImg from '@/assets/projects/lancarin.webp'
import gamelabImg from '@/assets/projects/gamelab.webp'
import eLkpImg from '@/assets/projects/e-lkp.webp'

export interface Project {
  id: number
  title: string
  image: string
  technologies: string[]
  url: string | null
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 5,
    title: 'Dazo - Digital Store (Storefront)',
    image: dazoBiolinkImg,
    technologies: ['Laravel', 'Inertia', 'Vue.js', 'Bootstrap', 'MongoDB', 'Payment Integration'],
    url: 'https://dazo.id/product99',
    featured: true,
  },
  {
    id: 4,
    title: 'Dazo - Dashboard',
    image: dazoDashboardImg,
    technologies: ['Laravel', 'Inertia', 'Vue.js', 'Bootstrap', 'MongoDB', 'Payment Integration'],
    url: 'https://app.dazo.id/login',
  },
  {
    id: 3,
    title: 'Quiz Lancarin',
    image: lancarinImg,
    technologies: [
      'Laravel',
      'Inertia',
      'Vue.js',
      'Tailwind',
      'PrimeVue',
      'MySQL',
      'Filament Admin',
    ],
    url: 'https://quiz.lancarin.id',
    featured: true,
  },
  {
    id: 2,
    title: 'Gamelab Indonesia',
    image: gamelabImg,
    technologies: ['PHP', 'Slim', 'Twig', 'Vue.js', 'Bootstrap', 'jQuery', 'MySQL'],
    url: 'https://gamelab.id',
  },
  {
    id: 1,
    title: 'e-LKP',
    image: eLkpImg,
    technologies: ['Codeigniter', 'Admin LTE', 'Bootstrap', 'jQuery', 'MySQL'],
    url: null,
  },
]
