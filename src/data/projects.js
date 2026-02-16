const projects = [
  {
    src: '',
    title: '',
    description: '',
    tags: ['UX Design', 'Product Concept', 'Mobile App'],
    links: [{ label: 'Prototype', href: '#', color: 'cyan.300' }],
  },
  {
    src: '/photos/project-dashboard.jpg',
    title: 'Analytics Dashboard Web App',
    description:
      'A responsive dashboard that converts operational data into actionable insights with role-based metrics and compact visual summaries.',
    tags: ['React', 'Data Viz', 'Dashboard UI'],
    links: [
      { label: 'GitHub', href: '#', color: 'cyan.400' },
      { label: 'Live Demo', href: '#', color: 'cyan.300' },
    ],
  },
]

export const projectsByLang = {
  en: projects,
  mya: projects,
  th: projects,
  zh: projects,
}
