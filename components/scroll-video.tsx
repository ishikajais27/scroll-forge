'use client'

import type React from 'react'

import { useRef, useEffect } from 'react'
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from 'framer-motion'

interface ScrollVideoProps {
  src: string
  className?: string
  startOffset?: number
  endOffset?: number
}

export default function ScrollVideo({
  src,
  className = '',
  startOffset = 0,
  endOffset = 1,
}: ScrollVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Map scroll progress to video time
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (videoRef.current && videoRef.current.duration) {
      const mappedProgress = startOffset + progress * (endOffset - startOffset)
      const targetTime = mappedProgress * videoRef.current.duration
      videoRef.current.currentTime = targetTime
    }
  })

  // Ensure video is loaded and paused initially
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </div>
  )
}

// Alternative: Canvas-based frame-by-frame video for smoother scrubbing
interface ScrollVideoCanvasProps {
  posterSrc?: string
  className?: string
  overlayContent?: React.ReactNode
}

export function ScrollVideoCanvas({
  posterSrc,
  className = '',
  overlayContent,
}: ScrollVideoCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Animated values based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2])
  const blur = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 10])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ opacity }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            scale,
            filter: useTransform(blur, (b) => `blur(${b}px)`),
          }}
        >
          {posterSrc && (
            <img
              src={posterSrc || '/placeholder.svg'}
              alt=""
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        {overlayContent && (
          <div className="absolute inset-0 flex items-center justify-center">
            {overlayContent}
          </div>
        )}
      </motion.div>
    </div>
  )
}
