'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollTextSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -180])
  const y3 = useTransform(scrollYProgress, [0, 1], [200, -50])
  const opacity1 = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.75, 0.9],
    [0, 1, 1, 0]
  )
  const opacity2 = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.7, 0.85],
    [0, 1, 1, 0]
  )
  const scale = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [0.85, 1, 0.9])
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[200vh] flex items-center justify-center"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: y3, opacity: opacity1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[600px] h-[600px] rounded-full border border-white/5" />
        </motion.div>

        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div style={{ scale, rotate }}>
            <motion.p
              style={{ y: y1, opacity: opacity1 }}
              className="text-white/40 uppercase tracking-[0.5em] text-sm mb-10"
            >
              Frame by Frame
            </motion.p>
            <motion.h2
              style={{ y: y2, opacity: opacity2 }}
              className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-none"
            >
              Motion in
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/40">
                Every Scroll
              </span>
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
