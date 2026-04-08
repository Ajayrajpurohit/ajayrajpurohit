'use client'

import { motion } from 'framer-motion'

export function AboutContent() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
      >
        I&apos;m Ajay Rajpurohit. I lead engineering at Gemba, scaling{' '}
        <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
          code and culture.
        </span>
      </motion.h1>
      <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        >
          I lead engineering at Gemba, where I&apos;m responsible for scaling
          both code and culture. From cloud-native infra to internal low-code
          platforms, I enjoy designing tools that serve real humans — both
          customers and developers.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        >
          My strength lies in making complexity feel simple: aligning product
          goals with tech execution, and helping teams ship confidently. At
          Gemba Concepts, I lead the engineering org spanning backend, frontend,
          DevOps, QA, and architecture — defining and executing technical vision
          across multiple product verticals.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
        >
          Before Gemba, I led an Angular frontend team at Pingtree building a
          visual webflow builder, delivered complex data visualizations using
          D3.js and AMCharts, and streamlined component reuse and delivery
          cycles. At Effiya Technologies, I built scalable backend systems with
          Java, Spring Boot, and PostgreSQL, set up CI/CD pipelines, and managed
          Kubernetes deployments across multiple environments.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
        >
          I hold a B.Tech in Chemical Engineering from the National Institute of
          Technology Surat (2016–2020). My pivot from chemical engineering to
          software was driven by a deep fascination with building systems that
          create value at scale.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75, ease: 'easeOut' }}
        >
          If you&apos;re building something bold and want a grounded, high-agency
          tech leader on your side — let&apos;s talk.
        </motion.p>
      </div>
    </>
  )
}
