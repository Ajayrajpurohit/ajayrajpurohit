import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { UsesContent } from '@/components/UsesContent'

export const metadata: Metadata = {
  title: 'Uses',
  description: 'Tools, technologies, and things I use every day.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Tools, technologies, and things I use every day."
      intro="Here's a look at the software, hardware, and services that power my daily workflow — from writing code to managing products."
    >
      <UsesContent />
    </SimpleLayout>
  )
}
