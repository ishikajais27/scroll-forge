'use client'

import type React from 'react'

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const services = [
  {
    id: '01',
    title: 'Motion Design',
    description:
      'Breathe life into your digital products with fluid animations that guide, delight, and engage users at every touchpoint.',
    features: [
      'Micro-interactions',
      'Page Transitions',
      'Loading States',
      'Scroll Animations',
    ],
  },
  {
    id: '02',
    title: 'Web Development',
    description:
      'High-performance web applications built with cutting-edge technologies and optimized for speed and scalability.',
    features: [
      'Next.js & React',
      'Performance Optimization',
      'API Development',
      'Database Design',
    ],
  },
  {
    id: '03',
    title: 'Brand Identity',
    description:
      'Craft distinctive visual identities that resonate with your audience and set you apart from the competition.',
    features: [
      'Logo Design',
      'Visual Systems',
      'Brand Guidelines',
      'Typography',
    ],
  },
  {
    id: '04',
    title: 'UI/UX Design',
    description:
      'User-centered design that balances aesthetics with functionality to create intuitive digital experiences.',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Usability Testing',
    ],
  },
]

// Animated text that reveals character by character
function AnimatedText({
  children,
  className,
  delay = 0,
}: {
  children: string
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const characters = children.split('')

  return (
    <span ref={ref} className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.4,
            delay: delay + index * 0.02,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

// Parallax section wrapper
function ParallaxSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  )
}

// Service card with staggered animation
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-black/30 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/30 hover:bg-black/40">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)',
          }}
        />

        {/* Service number */}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
          className="absolute top-6 right-6 text-6xl md:text-8xl font-bold text-white/5 select-none"
        >
          {service.id}
        </motion.span>

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '3rem' } : { width: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
            className="h-px bg-white/40 mb-6"
          />

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <AnimatedText delay={index * 0.15 + 0.2}>
              {service.title}
            </AnimatedText>
          </h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
            className="text-white/60 text-lg leading-relaxed mb-8"
          >
            {service.description}
          </motion.p>

          <div className="flex flex-wrap gap-3">
            {service.features.map((feature, featureIndex) => (
              <motion.span
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.4,
                  delay: index * 0.15 + 0.5 + featureIndex * 0.05,
                }}
                className="px-4 py-2 rounded-full text-sm bg-white/5 text-white/70 border border-white/10"
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Horizontal scroll text marquee
function ScrollingText() {
  return (
    <div className="py-16 overflow-hidden border-y border-white/10">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-6xl md:text-8xl font-bold text-white/5">
            Design & Development — Motion & Experience —
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function Services() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  // Progress bar at the top
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <div ref={containerRef} className="relative text-white min-h-screen">
      {/* Progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: 'left' }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-white/80 z-[60]"
      />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/50 uppercase tracking-[0.4em] text-sm mb-8"
            >
              What We Do
            </motion.p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              <AnimatedText delay={0.3}>Services That</AnimatedText>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50">
                <AnimatedText delay={0.5}>Move You Forward</AnimatedText>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
            >
              We craft digital experiences that blend strategic thinking with
              exceptional design and flawless execution.
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
              Scroll to Explore
            </span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-1 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Scrolling marquee */}
      <ScrollingText />

      {/* Services Grid */}
      <section className="relative py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-8">
          <ParallaxSection className="mb-20">
            <motion.p className="text-white/50 uppercase tracking-[0.3em] text-sm mb-4">
              Our Expertise
            </motion.p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
              Comprehensive solutions for modern digital challenges
            </h2>
          </ParallaxSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with horizontal scroll effect */}
      <ProcessSection />

      {/* CTA Section */}
      <section className="relative py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-black/40 backdrop-blur-lg p-12 md:p-20 border border-white/10 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <AnimatedText>Ready to Start?</AnimatedText>
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            >
              Let's discuss how we can help transform your vision into a
              compelling digital reality.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full bg-white text-black font-semibold text-lg hover:bg-white/90 transition"
            >
              Start a Project
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Process section with scroll-triggered steps
function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description:
        'Understanding your goals, audience, and competitive landscape.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Defining the roadmap and key milestones for success.',
    },
    {
      number: '03',
      title: 'Design',
      description:
        'Creating visual concepts that align with your brand vision.',
    },
    {
      number: '04',
      title: 'Development',
      description: 'Building with precision using modern technologies.',
    },
    {
      number: '05',
      title: 'Launch',
      description: 'Deploying and optimizing for maximum impact.',
    },
  ]

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-40 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/50 uppercase tracking-[0.3em] text-sm mb-4"
        >
          Our Process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold"
        >
          How We Work
        </motion.h2>
      </div>

      <motion.div style={{ x }} className="flex gap-8 pl-8 md:pl-16">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex-shrink-0 w-[300px] md:w-[400px] p-8 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md"
          >
            <span className="text-5xl font-bold text-white/10 mb-4 block">
              {step.number}
            </span>
            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
            <p className="text-white/60">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
