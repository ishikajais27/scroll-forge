'use client'

import type React from 'react'

import { useRef, useEffect, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion'

interface VideoHeroProps {
  videoSrc?: string
  fallbackImage?: string
  children?: React.ReactNode
}

export function VideoHero({
  videoSrc,
  fallbackImage,
  children,
}: VideoHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Smooth spring for video scrubbing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Scrub video based on scroll
  useMotionValueEvent(smoothProgress, 'change', (progress) => {
    if (videoRef.current && videoRef.current.duration && isVideoLoaded) {
      videoRef.current.currentTime = progress * videoRef.current.duration
    }
  })

  // Visual transforms
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0

      const handleLoaded = () => {
        setIsVideoLoaded(true)
      }

      video.addEventListener('loadeddata', handleLoaded)
      return () => video.removeEventListener('loadeddata', handleLoaded)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ opacity }}
      >
        {/* Video/Image Background */}
        <motion.div className="absolute inset-0" style={{ scale }}>
          {videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
              muted
              playsInline
              preload="auto"
              poster={fallbackImage}
              className="w-full h-full object-cover"
            />
          ) : fallbackImage ? (
            <img
              src={fallbackImage || '/placeholder.svg'}
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            // Animated gradient fallback
            <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-black to-neutral-800">
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 50% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                }}
              />
            </div>
          )}
        </motion.div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />

        {/* Content */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ y: textY, opacity: textOpacity }}
        >
          {children}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          style={{ opacity: textOpacity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-white/80 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
