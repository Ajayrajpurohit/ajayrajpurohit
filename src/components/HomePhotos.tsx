'use client'

import Image, { type StaticImageData } from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export function HomePhotos({ images }: { images: StaticImageData[] }) {
  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ]

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1 * imageIndex,
              ease: 'easeOut',
            }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
