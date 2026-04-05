import dazoBiolinkImg from '@/assets/projects/dazo-biolink.webp'
import dazoDashboardImg from '@/assets/projects/dazo-dashboard.webp'
import lancarinImg from '@/assets/projects/lancarin.webp'
import gamelabImg from '@/assets/projects/gamelab.webp'
import eLkpImg from '@/assets/projects/e-lkp.webp'

export interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  url: string | null
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 5,
    title: 'Dazo - Digital Store (Storefront)',
    category: 'Digital storefront of online store',
    description:
      'A digital storefront that allows businesses to market products, share catalogs on social media, and expand sales reach in an integrated manner with their order management system.',
    image: dazoBiolinkImg,
    technologies: ['Laravel', 'Inertia', 'Vue.js', 'Bootstrap', 'MongoDB', 'Payment Integration'],
    url: 'https://dazo.id/product99',
    featured: true,
  },
  {
    id: 4,
    title: 'Dazo - Dashboard',
    category: 'Order Management Platform',
    description:
      'A platform that provides Order Management System, AI Chat Assistant, and Digital Store creation features to help automate order management, respond to customers, and manage sales operations efficiently in one convenient dashboard.',
    image: dazoDashboardImg,
    technologies: ['Laravel', 'Inertia', 'Vue.js', 'Bootstrap', 'MongoDB', 'Payment Integration'],
    url: 'https://app.dazo.id/login',
  },
  {
    id: 3,
    title: 'Quiz Lancarin',
    category: 'Web-Based English Learning Quiz',
    description:
      'A web-based English learning quiz platform that uses gamification to boost user engagement and make studying more enjoyable. Features include a centralized question bank, automated scoring, real-time result display, and social media sharing of scores and achievements.',
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
    category: 'Online Education & Training System',
    description:
      'An online education and training platform focused on digital skills development, vocational training, internships, and career readiness. The platform supports project-based learning, skill development programs, and industry-aligned curriculum delivery.',
    image: gamelabImg,
    technologies: ['PHP', 'Slim', 'Twig', 'Vue.js', 'Bootstrap', 'jQuery', 'MySQL'],
    url: 'https://gamelab.id',
  },
  {
    id: 1,
    title: 'e-LKP',
    category: 'Employee Daily Reporting System',
    description:
      'An internal application designed for reporting daily work activities. This system allows employees to submit daily work reports while also allowing administrators to monitor performance, track work progress, and efficiently manage employee data.',
    image: eLkpImg,
    technologies: ['Codeigniter', 'Admin LTE', 'Bootstrap', 'jQuery', 'MySQL'],
    url: null,
  },
]
