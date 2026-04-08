'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Internal Low-Code Platform',
    description:
      'Built an org-wide internal low-code tool builder at Gemba Concepts, enabling non-technical teams to create workflows and automate processes — reducing development bottlenecks significantly.',
    tech: ['Azure', 'Microservices', 'CI/CD', 'Low-Code'],
    emoji: '🛠️',
  },
  {
    name: 'Cloud Infrastructure Scale-up',
    description:
      'Owned and optimized Azure cloud infrastructure, microservices architecture, and CI/CD pipelines at Gemba — achieving significant infrastructure cost optimization.',
    tech: ['Azure', 'DevOps', 'K8s', 'Cost Optimization'],
    emoji: '☁️',
  },
  {
    name: 'Visual Webflow Builder',
    description:
      'Led the Angular frontend team at Pingtree to build a visual webflow builder with complex data visualization using D3.js and AMCharts.',
    tech: ['Angular', 'D3.js', 'AMCharts', 'TypeScript'],
    emoji: '🎨',
  },
  {
    name: 'Enterprise Backend Platform',
    description:
      'Built scalable backend systems at Effiya Technologies with Java, Spring Boot, and PostgreSQL. Containerized services and managed K8s deployments across multiple environments.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Kubernetes'],
    emoji: '⚡',
  },
  {
    name: 'CI/CD Pipeline Architecture',
    description:
      'Designed and set up CI/CD pipelines using GitLab and Azure DevOps, enabling continuous delivery across multiple teams and environments.',
    tech: ['GitLab CI', 'Azure DevOps', 'Docker', 'Automation'],
    emoji: '🔄',
  },
  {
    name: 'Multi-Product Technical Vision',
    description:
      'Defined and executed technical vision across multiple product verticals at Gemba, partnering with business leadership for product roadmaps and GTM alignment.',
    tech: ['Product Strategy', 'Architecture', 'Team Building'],
    emoji: '🎯',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export function ProjectGrid() {
  return (
    <motion.ul
      role="list"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <motion.li
          key={project.name}
          variants={cardVariants}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="group relative flex flex-col items-start rounded-2xl border border-zinc-100 p-6 transition-shadow hover:shadow-lg dark:border-zinc-700/40"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 text-2xl dark:bg-zinc-800">
            {project.emoji}
          </div>
          <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
            {project.name}
          </h2>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-300"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.li>
      ))}
    </motion.ul>
  )
}
