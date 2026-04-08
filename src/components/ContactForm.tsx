'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-2xl"
    >
      {/* Direct contact info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10 grid gap-6 sm:grid-cols-2"
      >
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
        >
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Email
          </h3>
          <Link
            href="mailto:ajayrajpurohit1@hotmail.com"
            className="mt-2 block text-sm text-teal-500 transition hover:text-teal-600"
          >
            ajayrajpurohit1@hotmail.com
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
        >
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            LinkedIn
          </h3>
          <Link
            href="https://linkedin.com/in/ajayrajpurohit"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-sm text-teal-500 transition hover:text-teal-600"
          >
            linkedin.com/in/ajayrajpurohit
          </Link>
        </motion.div>
      </motion.div>

      {/* Contact form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        action="/thank-you"
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 shadow-sm transition focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-zinc-600 dark:bg-zinc-700/50 dark:text-zinc-100"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 shadow-sm transition focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-zinc-600 dark:bg-zinc-700/50 dark:text-zinc-100"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 shadow-sm transition focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-zinc-600 dark:bg-zinc-700/50 dark:text-zinc-100"
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-md bg-teal-500 px-6 py-2.5 text-sm font-medium text-white shadow transition hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  )
}
