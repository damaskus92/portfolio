export interface TechStack {
  languages: string[]
  backend: string[]
  frontend: string[]
  database: string[]
  tools: string[]
  others: string[]
}

export const techStack: TechStack = {
  languages: ['HTML', 'CSS', 'PHP', 'JavaScript', 'TypeScript'],
  backend: ['Laravel', 'Codeigniter', 'Slim PHP', 'Node.js'],
  frontend: ['Vue.js', 'React.js', 'Inertia.js', 'Livewire', 'JQuery', 'Tailwind CSS', 'Bootstrap'],
  database: ['MySQL', 'PostgreSQL', 'MongoDB'],
  tools: ['Git (GitHub, GitLab)', 'Postman', 'Notion'],
  others: ['Figma', 'CorelDRAW', 'SSO Integration'],
}
