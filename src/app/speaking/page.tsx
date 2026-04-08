import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'My professional journey from software engineer to Chief Product Officer.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="My professional journey — from engineer to CPO."
      intro="Over 5+ years I've grown from a software engineer building backend systems to leading entire engineering organizations. Here's the full timeline."
    >
      <ExperienceTimeline />
    </SimpleLayout>
  )
}
