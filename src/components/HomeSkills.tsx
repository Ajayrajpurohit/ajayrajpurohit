'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'Product Management', icon: '🎯' },
  { name: 'Cloud Architecture', icon: '☁️' },
  { name: 'AI & Machine Learning', icon: '🤖' },
  { name: 'Microservices', icon: '🔧' },
  { name: 'CI/CD & DevOps', icon: '🚀' },
  { name: 'Team Leadership', icon: '👥' },
  { name: 'Angular / React', icon: '⚛️' },
  { name: 'Java / Spring Boot', icon: '☕' },
  { name: 'Azure / K8s', icon: '📦' },
]

const certifications = [
  { name: 'CSS Essential Training 2', org: 'LinkedIn Learning' },
  { name: 'IBM Blockchain Essentials V2', org: 'IBM' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export function HomeSkills() {
  return (
    <div className="space-y-12">
      {/* Skills */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-sm font-semibold text-zinc-900 dark:text-zinc-100"
        >
          Core Expertise
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex items-center gap-3 rounded-lg border border-zinc-100 px-4 py-3 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-700/40"
            >
              <span className="text-lg">{skill.icon}</span>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-sm font-semibold text-zinc-900 dark:text-zinc-100"
        >
          Certifications
        </motion.h2>
        <motion.div variants={containerVariants} className="mt-4 space-y-3">
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              whileHover={{ x: 4 }}
              className="flex items-start gap-3 rounded-lg border border-zinc-100 px-4 py-3 dark:border-zinc-700/40"
            >
              <span className="mt-0.5 text-teal-500">✦</span>
              <div>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {cert.name}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {cert.org}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          Education
        </h2>
        <motion.div
          whileHover={{ x: 4 }}
          className="mt-4 rounded-lg border border-zinc-100 px-4 py-3 dark:border-zinc-700/40"
        >
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            National Institute of Technology Surat
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            B.Tech, Chemical Engineering · 2016 – 2020
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
