'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
}

export default function AnimatedSection({
  children,
  className = '',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
      }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  )
}
