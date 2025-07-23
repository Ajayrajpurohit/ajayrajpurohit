import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
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

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Ajay Rajpurohit. I live in India, where I build the future of software development.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              From a young age, I&apos;ve been fascinated by systems and how they connect to create something 
              greater than the sum of their parts. This perspective has guided my journey through software 
              engineering, product development, and now AI-powered platforms.
            </p>
            <p>
              As Head of Product at Gemba, I lead strategic initiatives that transform how teams build 
              and ship software. With over 5 years of experience, I&apos;ve learned that the best products 
              are born from understanding both the technical possibilities and human needs.
            </p>
            <p>
              My current passion projects reflect my vision for the future: Indona, an AI-powered SDLC 
              platform that transforms moodboards and UI concepts into fully deployable applications, 
              and NEURA OS, a personal operating system designed for human-AI symbiosis. These aren&apos;t 
              just tools—they&apos;re explorations into how technology can amplify human potential.
            </p>
            <p>
              I believe we&apos;re at a pivotal moment where AI isn&apos;t replacing human creativity but 
              enhancing it. My work focuses on building platforms that understand context, anticipate 
              needs, and turn complex technical processes into intuitive experiences.
            </p>
            <p>
              When I&apos;m not building systems that build systems, I&apos;m thinking about cognition, 
              self-evolution, and the beautiful complexity of emergence in both technology and life.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/ajayrajpurohit" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/ajayrajpurohit" icon={LinkedInIcon} className="mt-4">
              Connect on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:ajay@rajpurohit.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              ajay@rajpurohit.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
