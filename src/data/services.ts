export interface Service {
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    title: 'Full-Stack Development',
    description: 'Building interactive front-ends and managing back-ends to bring ideas to life.',
    icon: 'pi-code',
  },
  {
    title: 'Landing Page Design',
    description: 'Building custom landing pages that look great and work smoothly for users.',
    icon: 'pi-window-maximize',
  },
  {
    title: 'Responsive Design',
    description: 'Designing layouts that work smoothly on any device for a better user experience.',
    icon: 'pi-mobile',
  },
  {
    title: 'API Integration',
    description: 'Setting up APIs to enable easy data exchange and communication between services.',
    icon: 'pi-cloud',
  },
  {
    title: 'Performance Optimization',
    description:
      'Optimizing application performance for faster load times and better user experience.',
    icon: 'pi-bolt',
  },
  {
    title: 'Database Integration',
    description: 'Connecting databases to manage and access data effectively in applications.',
    icon: 'pi-database',
  },
]
