'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export function HeroSection() {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
        >
          Engineering leader, product thinker, and{' '}
          <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
            systems architect.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        >
          I&apos;m Ajay Rajpurohit, Chief Product Officer at Gemba Concepts. I
          lead engineering and scale both code and culture — from cloud-native
          infra to internal low-code platforms, I design tools that serve real
          humans. My strength lies in making complexity feel simple: aligning
          product goals with tech execution, and helping teams ship confidently.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="mt-6 flex gap-6"
        >
          <SocialLink
            href="https://linkedin.com/in/ajayrajpurohit"
            aria-label="Connect on LinkedIn"
            icon={LinkedInIcon}
          />
          <SocialLink
            href="https://github.com/ajayrajpurohit"
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />
          <SocialLink
            href="mailto:ajayrajpurohit1@hotmail.com"
            aria-label="Send an email"
            icon={MailIcon}
          />
        </motion.div>
      </div>
    </Container>
  )
}
