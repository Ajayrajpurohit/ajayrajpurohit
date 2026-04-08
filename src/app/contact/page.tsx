import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Ajay Rajpurohit.',
}

export default function Contact() {
  return (
    <SimpleLayout
      title="Let's build something bold together."
      intro="I'm always interested in connecting with people who are building meaningful products. Whether you want to discuss a collaboration, need a tech leader, or just want to say hello — reach out."
    >
      <ContactForm />
    </SimpleLayout>
  )
}
