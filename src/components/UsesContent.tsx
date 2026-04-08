'use client'

import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Development',
    tools: [
      {
        name: 'VS Code / Cursor',
        description:
          'My primary editors for everything from TypeScript to Java. VS Code with GitHub Copilot for speed, Cursor for AI-first workflows.',
      },
      {
        name: 'Angular & React',
        description:
          'Angular for enterprise-grade frontend work; React/Next.js for personal projects and rapid prototyping.',
      },
      {
        name: 'Java / Spring Boot',
        description:
          'My go-to backend stack for building scalable microservices and enterprise APIs.',
      },
      {
        name: 'Docker & Kubernetes',
        description:
          'Containerizing everything and orchestrating deployments across multiple environments.',
      },
      {
        name: 'GitLab CI / Azure DevOps',
        description:
          'Setting up and maintaining CI/CD pipelines that let teams ship with confidence.',
      },
    ],
  },
  {
    title: 'Cloud & Infra',
    tools: [
      {
        name: 'Microsoft Azure',
        description:
          'Primary cloud platform — managing compute, storage, networking, and AKS clusters.',
      },
      {
        name: 'PostgreSQL',
        description:
          'Reliable, performant relational database for most backend systems I build.',
      },
      {
        name: 'Terraform / IaC',
        description:
          'Infrastructure as code for reproducible, version-controlled cloud environments.',
      },
    ],
  },
  {
    title: 'Productivity',
    tools: [
      {
        name: 'Notion',
        description:
          'Product roadmaps, personal knowledge base, meeting notes — all in one place.',
      },
      {
        name: 'Figma',
        description:
          'For design reviews, wireframing, and collaborating with design teams on UI/UX.',
      },
      {
        name: 'Slack & Teams',
        description:
          'Daily communication and async collaboration with distributed teams.',
      },
      {
        name: 'Linear / Jira',
        description:
          'Issue tracking and sprint management for engineering teams.',
      },
    ],
  },
  {
    title: 'Workstation',
    tools: [
      {
        name: 'MacBook Pro',
        description:
          'M-series MacBook Pro — the performance and battery life are unmatched for development work.',
      },
      {
        name: 'External Monitor',
        description:
          'A large high-resolution display is essential when juggling code, terminals, and documentation.',
      },
    ],
  },
]

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
}

export function UsesContent() {
  return (
    <div className="space-y-20">
      {sections.map((section) => (
        <motion.section
          key={section.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={sectionVariants}
          className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
        >
          <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
            <motion.h2
              variants={itemVariants}
              className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
            >
              {section.title}
            </motion.h2>
            <div className="md:col-span-3">
              <ul role="list" className="space-y-16">
                {section.tools.map((tool) => (
                  <motion.li
                    key={tool.name}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className="group relative flex flex-col items-start"
                  >
                    <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                      {tool.name}
                    </h3>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {tool.description}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  )
}
