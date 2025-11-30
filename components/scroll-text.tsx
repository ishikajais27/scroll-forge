'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function ScrollTextSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 30,
    mass: 1,
  })

  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.6, 1.1, 0.7])
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [35, 0, -35])
  const y = useTransform(smoothProgress, [0, 0.5, 1], [100, 0, -100])
  const blur = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [15, 0, 0, 15])

  // Secondary text animations
  const y1 = useTransform(smoothProgress, [0, 1], [80, -80])
  const opacity1 = useTransform(
    smoothProgress,
    [0.1, 0.25, 0.75, 0.9],
    [0, 1, 1, 0]
  )

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[120vh] flex items-center justify-center"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background circles */}
        <motion.div
          style={{
            opacity: useTransform(
              smoothProgress,
              [0, 0.3, 0.7, 1],
              [0, 0.5, 0.5, 0]
            ),
            scale: useTransform(smoothProgress, [0, 0.5, 1], [0.7, 1.2, 0.8]),
            rotate: useTransform(smoothProgress, [0, 1], [0, 180]),
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div
            className="w-[700px] h-[700px] rounded-full border border-white/[0.03]"
            style={{
              boxShadow:
                '0 0 150px rgba(255,255,255,0.02), inset 0 0 100px rgba(255,255,255,0.01)',
            }}
          />
        </motion.div>

        <motion.div
          style={{
            opacity: useTransform(
              smoothProgress,
              [0.15, 0.3, 0.7, 0.85],
              [0, 0.5, 0.5, 0]
            ),
            scale: useTransform(smoothProgress, [0, 0.5, 1], [0.5, 0.9, 0.6]),
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[400px] h-[400px] rounded-full border border-white/[0.02]" />
        </motion.div>

        <div
          className="container mx-auto px-4 md:px-8 text-center relative z-10"
          style={{ perspective: '1200px' }}
        >
          <motion.div
            style={{
              scale,
              opacity,
              rotateX,
              y,
              filter: useTransform(blur, (b) => `blur(${b}px)`),
            }}
            className="gpu-accelerated"
          >
            <motion.p
              style={{ y: y1, opacity: opacity1 }}
              className="text-white/40 uppercase tracking-[0.5em] text-sm mb-8 font-sans text-smooth"
            >
              Frame by Frame
            </motion.p>
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-none text-smooth">
              Motion in
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/40 gradient-text-animated">
                Every Scroll
              </span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
