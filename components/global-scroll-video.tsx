'use client'

import { useRef, useEffect, useState } from 'react'
import {
  useScroll,
  useSpring,
  useTransform,
  motion,
  useMotionValue,
  animate,
} from 'framer-motion'
import { usePathname } from 'next/navigation'

interface GlobalScrollVideoProps {
  src: string
  fallbackPoster?: string
}

export function GlobalScrollVideo({
  src,
  fallbackPoster,
}: GlobalScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [entranceComplete, setEntranceComplete] = useState(false)
  const pathname = usePathname()

  const entranceProgress = useMotionValue(0)
  const entranceScale = useTransform(entranceProgress, [0, 1], [2.8, 1])
  const entranceRotateX = useTransform(
    entranceProgress,
    [0, 0.5, 1],
    [30, 8, 0]
  )
  const entranceRotateY = useTransform(
    entranceProgress,
    [0, 0.5, 1],
    [-18, -5, 0]
  )
  const entranceOpacity = useTransform(
    entranceProgress,
    [0, 0.25, 1],
    [0, 0.7, 1]
  )
  const entranceBlur = useTransform(entranceProgress, [0, 0.6, 1], [40, 8, 0])
  const entranceZ = useTransform(entranceProgress, [0, 1], [-500, 0])

  const { scrollYProgress } = useScroll()

  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 30,
    mass: 1,
  })

  const scrollScale = useTransform(
    smoothScrollProgress,
    [0, 0.5, 1],
    [1, 1.1, 1.18]
  )
  const scrollRotateX = useTransform(
    smoothScrollProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 2, 0, -2, 0]
  )
  const scrollRotateY = useTransform(
    smoothScrollProgress,
    [0, 0.25, 0.75, 1],
    [0, -2, 2, 0]
  )
  const scrollZ = useTransform(smoothScrollProgress, [0, 0.5, 1], [0, 50, 100])
  const overlayOpacity = useTransform(
    smoothScrollProgress,
    [0, 0.25, 0.5, 1],
    [0.08, 0.22, 0.38, 0.55]
  )

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => setIsLoaded(true)
    video.addEventListener('canplaythrough', handleCanPlay)
    video.load()
    if (video.readyState >= 4) handleCanPlay()

    return () => video.removeEventListener('canplaythrough', handleCanPlay)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.playbackRate = 1
    video.play().catch(() => {})

    if (!entranceComplete) {
      animate(entranceProgress, 1, {
        duration: 3,
        ease: [0.16, 1, 0.3, 1],
        onComplete: () => setEntranceComplete(true),
      })
    }
  }, [isLoaded, entranceComplete, entranceProgress])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.currentTime = 0
    video.play().catch(() => {})
    entranceProgress.set(0)
    setEntranceComplete(false)

    animate(entranceProgress, 1, {
      duration: 3,
      ease: [0.16, 1, 0.3, 1],
      onComplete: () => setEntranceComplete(true),
    })
  }, [pathname, entranceProgress])

  const combinedScale = useTransform(
    [entranceScale, scrollScale],
    ([e, s]) => (e as number) * (s as number)
  )
  const combinedRotateX = useTransform(
    [entranceRotateX, scrollRotateX],
    ([e, s]) => (e as number) + (s as number)
  )
  const combinedRotateY = useTransform(
    [entranceRotateY, scrollRotateY],
    ([e, s]) => (e as number) + (s as number)
  )
  const combinedZ = useTransform(
    [entranceZ, scrollZ],
    ([e, s]) => (e as number) + (s as number)
  )
  const combinedBlur = useTransform(entranceBlur, (b) => `blur(${b}px)`)

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden bg-black"
      style={{ perspective: '2000px', perspectiveOrigin: '50% 50%' }}
    >
      <motion.div
        className="absolute inset-[-25%] origin-center gpu-accelerated"
        style={{
          scale: combinedScale,
          rotateX: combinedRotateX,
          rotateY: combinedRotateY,
          z: combinedZ,
          opacity: entranceOpacity,
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.video
          ref={videoRef}
          src={src}
          poster={fallbackPoster}
          muted
          playsInline
          autoPlay
          loop
          className="w-full h-full object-cover"
          style={{ filter: combinedBlur }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/65 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.65) 100%)',
        }}
      />

      <motion.div
        className="absolute top-0 left-0 right-0 bg-black pointer-events-none"
        style={{
          height: useTransform(smoothScrollProgress, [0, 0.1], ['5vh', '0vh']),
          opacity: useTransform(smoothScrollProgress, [0, 0.1], [1, 0]),
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-black pointer-events-none"
        style={{
          height: useTransform(smoothScrollProgress, [0, 0.1], ['5vh', '0vh']),
          opacity: useTransform(smoothScrollProgress, [0, 0.1], [1, 0]),
        }}
      />

      {!isLoaded && (
        <motion.div
          className="absolute inset-0 bg-black flex items-center justify-center z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-28 h-28">
              <motion.div
                className="absolute inset-0 border border-white/8 rounded-full"
                animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0, 0.2] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute inset-2 border border-white/10 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                  delay: 0.15,
                }}
              />
              <motion.div
                className="absolute inset-4 border border-white/12 rounded-full"
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.1, 0.4] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                  delay: 0.3,
                }}
              />
              <motion.div
                className="absolute inset-6 border-2 border-transparent border-t-white/40 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                }}
              />
            </div>
            <motion.p
              className="text-white/12 text-[9px] tracking-[0.6em] uppercase font-sans text-smooth"
              animate={{ opacity: [0.12, 0.35, 0.12] }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            >
              Loading Experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
