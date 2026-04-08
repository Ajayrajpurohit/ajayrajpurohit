'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Gemba Concepts',
    title: 'Chief Product Officer',
    period: 'April 2024 – Present',
    location: 'Bengaluru, Karnataka, India',
    highlights: [
      'Leading engineering org spanning backend, frontend, DevOps, QA, and architecture',
      'Defined and executed technical vision across multiple product verticals',
      'Owned Azure cloud infrastructure, microservices architecture, and CI/CD pipelines',
      'Partnered with business leadership for product roadmaps and GTM alignment',
      'Introduced org-wide engineering rituals and growth systems',
      'Mentored team leads and drove hiring across key technical roles',
    ],
    keyWins:
      'Platform scale-up, internal low-code tool builder, infrastructure cost optimization.',
  },
  {
    company: 'Pingtree',
    title: 'Team Lead',
    period: 'July 2023 – April 2024',
    location: 'Ahmedabad, Gujarat, India',
    highlights: [
      'Led Angular frontend team building a visual webflow builder',
      'Delivered complex data visualization using D3.js and AMCharts',
      'Streamlined component reuse and delivery cycles',
    ],
  },
  {
    company: 'Pingtree',
    title: 'Sr. Angular Developer',
    period: 'May 2023 – July 2023',
    location: 'Ahmedabad, Gujarat, India',
    highlights: [
      'Developed reusable Angular components for the webflow platform',
      'Contributed to frontend architecture decisions and best practices',
    ],
  },
  {
    company: 'Effiya Technologies',
    title: 'Senior Software Engineer',
    period: 'April 2022 – March 2023',
    location: 'Noida, Uttar Pradesh, India',
    highlights: [
      'Built scalable backend systems with Java, Spring Boot, and PostgreSQL',
      'Set up CI/CD pipelines using GitLab and Azure DevOps',
      'Containerized services and managed K8s deployments across multiple environments',
      'Created technical documentation (API specs, data models, diagrams)',
    ],
  },
  {
    company: 'Effiya Technologies',
    title: 'Software Engineer',
    period: 'July 2020 – April 2022',
    location: 'Noida, Uttar Pradesh, India',
    highlights: [
      'Contributed to backend development using Java and Spring framework',
      'Participated in agile development processes and code reviews',
      'Gained deep experience in enterprise software engineering practices',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
} as const

export function ExperienceTimeline() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative space-y-0"
    >
      {/* Timeline line */}
      <div className="absolute top-0 left-[19px] hidden h-full w-px bg-zinc-200 dark:bg-zinc-700 md:block" />

      {experiences.map((exp, index) => (
        <motion.div
          key={`${exp.company}-${exp.title}`}
          variants={itemVariants}
          className="relative pb-12 last:pb-0 md:pl-12"
        >
          {/* Timeline dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15 * index + 0.3, type: 'spring', stiffness: 300 }}
            className="absolute top-1.5 left-3 hidden h-3 w-3 rounded-full border-2 border-teal-500 bg-white dark:bg-zinc-900 md:block"
          />

          <motion.div
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="rounded-2xl border border-zinc-100 p-6 transition-shadow hover:shadow-md dark:border-zinc-700/40"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {exp.title}
                </h3>
                <p className="text-sm font-medium text-teal-600 dark:text-teal-400">
                  {exp.company}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {exp.period}
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">
                  {exp.location}
                </p>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              {exp.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-teal-500" />
                  {highlight}
                </motion.li>
              ))}
            </ul>

            {exp.keyWins && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-4 rounded-lg bg-teal-50 px-4 py-2 dark:bg-teal-900/20"
              >
                <p className="text-xs font-medium text-teal-800 dark:text-teal-300">
                  Key wins: {exp.keyWins}
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}
