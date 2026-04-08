import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { ProjectGrid } from '@/components/ProjectGrid'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Key projects and platforms I have built and led.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Key projects and platforms I've built and led."
      intro="From internal low-code platforms to scalable microservices architectures, these are some of the most impactful projects I've contributed to across my career."
    >
      <ProjectGrid />
    </SimpleLayout>
  )
}
