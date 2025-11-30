'use client'

import { useRef, type ReactNode, type ElementType } from 'react'
import {
  motion,
  useInView,
  useSpring,
  useTransform,
  useScroll,
} from 'framer-motion'

interface ScrollAnimatedTextProps {
  children: string
  as?: ElementType
  className?: string
  delay?: number
  animation?:
    | 'default'
    | 'blur'
    | 'scale'
    | 'wave'
    | 'glitch'
    | 'infinite-motion'
  stagger?: number
}

export function ScrollAnimatedText({
  children,
  as: Component = 'span',
  className = '',
  delay = 0,
  animation = 'infinite-motion',
  stagger = 0.04,
}: ScrollAnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-80px' })
  const words = children.split(' ')

  const getWordAnimation = (wordIndex: number) => {
    const baseDelay = delay + wordIndex * stagger * 3

    switch (animation) {
      case 'infinite-motion':
        return {
          initial: {
            opacity: 0,
            y: 100,
            scale: 0.6,
            rotateX: 35,
            filter: 'blur(15px)',
          },
          animate: isInView
            ? { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px)' }
            : {
                opacity: 0,
                y: 100,
                scale: 0.6,
                rotateX: 35,
                filter: 'blur(15px)',
              },
          transition: {
            duration: 1.2,
            delay: baseDelay,
            ease: [0.23, 1, 0.32, 1],
            opacity: { duration: 0.8 },
            filter: { duration: 1 },
            scale: { type: 'spring', stiffness: 50, damping: 30 },
            rotateX: { type: 'spring', stiffness: 50, damping: 30 },
            y: { type: 'spring', stiffness: 50, damping: 30 },
          },
        }
      case 'blur':
        return {
          initial: {
            opacity: 0,
            filter: 'blur(20px)',
            y: 80,
            scale: 0.7,
            rotateX: 35,
          },
          animate: isInView
            ? { opacity: 1, filter: 'blur(0px)', y: 0, scale: 1, rotateX: 0 }
            : {
                opacity: 0,
                filter: 'blur(20px)',
                y: 80,
                scale: 0.7,
                rotateX: 35,
              },
          transition: {
            duration: 1.2,
            delay: baseDelay,
            ease: [0.23, 1, 0.32, 1],
            opacity: { duration: 0.8 },
            filter: { duration: 1 },
            scale: { type: 'spring', stiffness: 50, damping: 30 },
          },
        }
      case 'scale':
        return {
          initial: {
            scale: 0.5,
            opacity: 0,
            rotateX: -45,
            y: 60,
            filter: 'blur(12px)',
          },
          animate: isInView
            ? { scale: 1, opacity: 1, rotateX: 0, y: 0, filter: 'blur(0px)' }
            : {
                scale: 0.5,
                opacity: 0,
                rotateX: -45,
                y: 60,
                filter: 'blur(12px)',
              },
          transition: {
            duration: 1.1,
            delay: baseDelay,
            ease: [0.23, 1, 0.32, 1],
            scale: { type: 'spring', stiffness: 50, damping: 25 },
            rotateX: { type: 'spring', stiffness: 50, damping: 25 },
          },
        }
      case 'wave':
        return {
          initial: {
            y: 100,
            opacity: 0,
            rotateX: 45,
            scale: 0.7,
            filter: 'blur(10px)',
          },
          animate: isInView
            ? { y: 0, opacity: 1, rotateX: 0, scale: 1, filter: 'blur(0px)' }
            : {
                y: 100,
                opacity: 0,
                rotateX: 45,
                scale: 0.7,
                filter: 'blur(10px)',
              },
          transition: {
            duration: 1.1,
            delay: baseDelay,
            ease: [0.23, 1, 0.32, 1],
            y: { type: 'spring', stiffness: 50, damping: 25 },
          },
        }
      case 'glitch':
        return {
          initial: {
            x: -50,
            opacity: 0,
            skewX: 20,
            scale: 0.8,
            filter: 'blur(10px)',
          },
          animate: isInView
            ? { x: 0, opacity: 1, skewX: 0, scale: 1, filter: 'blur(0px)' }
            : {
                x: -50,
                opacity: 0,
                skewX: 20,
                scale: 0.8,
                filter: 'blur(10px)',
              },
          transition: {
            duration: 0.9,
            delay: baseDelay,
            ease: [0.23, 1, 0.32, 1],
            x: { type: 'spring', stiffness: 60, damping: 25 },
          },
        }
      default:
        return {
          initial: {
            y: 100,
            rotateX: 35,
            opacity: 0,
            scale: 0.6,
            filter: 'blur(15px)',
          },
          animate: isInView
            ? { y: 0, rotateX: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }
            : {
                y: 100,
                rotateX: 35,
                opacity: 0,
                scale: 0.6,
                filter: 'blur(15px)',
              },
          transition: {
            duration: 1.2,
            delay: baseDelay,
            ease: [0.23, 1, 0.32, 1],
            y: { type: 'spring', stiffness: 50, damping: 30 },
            scale: { type: 'spring', stiffness: 50, damping: 30 },
          },
        }
    }
  }

  return (
    <Component
      ref={ref}
      className={`${className} text-smooth`}
      style={{ perspective: '1200px' }}
    >
      {words.map((word, wordIndex) => {
        const {
          initial,
          animate: animateProps,
          transition,
        } = getWordAnimation(wordIndex)
        return (
          <span
            key={wordIndex}
            className="inline-block overflow-hidden mr-[0.25em]"
          >
            <motion.span
              initial={initial}
              animate={animateProps}
              transition={transition}
              className="inline-block gpu-accelerated"
              style={{
                transformOrigin: 'bottom center',
                transformStyle: 'preserve-3d',
              }}
            >
              {word}
            </motion.span>
          </span>
        )
      })}
    </Component>
  )
}

interface ScrollAnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function ScrollAnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollAnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  const directionConfig = {
    up: { y: 100, x: 0, rotateX: 35 },
    down: { y: -100, x: 0, rotateX: -35 },
    left: { y: 0, x: 100, rotateY: -15 },
    right: { y: 0, x: -100, rotateY: 15 },
  }

  const { y, x, rotateX = 0, rotateY = 0 } = directionConfig[direction]

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y,
        x,
        rotateX,
        rotateY,
        scale: 0.6,
        filter: 'blur(15px)',
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              x: 0,
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              filter: 'blur(0px)',
            }
          : {
              opacity: 0,
              y,
              x,
              rotateX,
              rotateY,
              scale: 0.6,
              filter: 'blur(15px)',
            }
      }
      transition={{
        duration: 1.2,
        delay,
        ease: [0.23, 1, 0.32, 1],
        opacity: { duration: 0.8 },
        scale: { type: 'spring', stiffness: 50, damping: 30 },
        filter: { duration: 1 },
      }}
      className={`${className} gpu-accelerated`}
      style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
    >
      {children}
    </motion.div>
  )
}

interface Card3DProps {
  children: ReactNode
  className?: string
  glowColor?: string
  depth?: number
}

export function Card3D({
  children,
  className = '',
  glowColor = 'rgba(255,255,255,0.15)',
  depth = 20,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const floatY = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [depth * 3, 0, -depth * 3]),
    {
      stiffness: 35,
      damping: 30,
      mass: 1,
    }
  )

  const floatRotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]),
    {
      stiffness: 35,
      damping: 30,
    }
  )

  const floatScale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 0.9]),
    {
      stiffness: 35,
      damping: 30,
    }
  )

  const floatOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  )
  const floatBlur = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [8, 0, 0, 8]
  )

  return (
    <motion.div
      ref={cardRef}
      className={`relative perspective-container ${className}`}
      style={{
        y: floatY,
        rotateX: floatRotateX,
        scale: floatScale,
        opacity: floatOpacity,
        filter: useTransform(floatBlur, (b) => `blur(${b}px)`),
        perspective: '1200px',
      }}
      whileHover={{
        scale: 1.08,
        rotateX: -5,
        rotateY: 5,
        z: 80,
        transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
      }}
      whileTap={{ scale: 0.95, transition: { duration: 0.15 } }}
    >
      <motion.div
        className="card-3d glass-morphism card-glitter glow-effect rounded-2xl overflow-hidden relative animate-border-glow"
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: `
            0 2px 4px rgba(0,0,0,0.05),
            0 4px 8px rgba(0,0,0,0.08),
            0 8px 16px rgba(0,0,0,0.1),
            0 16px 32px rgba(0,0,0,0.12),
            0 32px 64px rgba(0,0,0,0.15),
            0 48px 100px -20px rgba(0,0,0,0.25),
            0 0 0 1px ${glowColor},
            0 0 40px ${glowColor},
            inset 0 1px 0 rgba(255,255,255,0.1),
            inset 0 -1px 0 rgba(0,0,0,0.1)
          `,
        }}
        whileHover={{
          boxShadow: `
            0 4px 8px rgba(0,0,0,0.08),
            0 8px 16px rgba(0,0,0,0.1),
            0 16px 32px rgba(0,0,0,0.12),
            0 32px 64px rgba(0,0,0,0.15),
            0 48px 100px rgba(0,0,0,0.2),
            0 64px 140px -30px rgba(0,0,0,0.35),
            0 0 80px ${glowColor},
            0 0 120px rgba(255,255,255,0.08),
            inset 0 1px 0 rgba(255,255,255,0.2),
            inset 0 -1px 0 rgba(0,0,0,0.15)
          `,
        }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="animate-shimmer" />
        {children}
      </motion.div>
    </motion.div>
  )
}

interface ParallaxTextProps {
  children: string
  className?: string
  speed?: number
}

export function ParallaxText({
  children,
  className = '',
  speed = 0.5,
}: ParallaxTextProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]),
    {
      stiffness: 35,
      damping: 30,
      mass: 1,
    }
  )

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.1, 0.8])
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [35, 0, -35]),
    {
      stiffness: 35,
      damping: 30,
    }
  )
  const blur = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [15, 0, 0, 15])

  return (
    <motion.span
      ref={ref}
      className={`inline-block gpu-accelerated ${className}`}
      style={{
        y,
        opacity,
        scale,
        rotateX,
        filter: useTransform(blur, (b) => `blur(${b}px)`),
        transformStyle: 'preserve-3d',
        perspective: '1200px',
      }}
    >
      {children}
    </motion.span>
  )
}
