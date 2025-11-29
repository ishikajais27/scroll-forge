// 'use client'

// import { useRef, useEffect, useState } from 'react'
// import {
//   useScroll,
//   useSpring,
//   useTransform,
//   motion,
//   useMotionValue,
//   animate,
// } from 'framer-motion'

// interface GlobalScrollVideoProps {
//   src: string
//   fallbackPoster?: string
// }

// export function GlobalScrollVideo({
//   src,
//   fallbackPoster,
// }: GlobalScrollVideoProps) {
//   const videoRef = useRef<HTMLVideoElement>(null)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [isLoaded, setIsLoaded] = useState(false)
//   const [videoDuration, setVideoDuration] = useState(0)
//   const [hasEntrance, setHasEntrance] = useState(false)

//   const entranceScale = useMotionValue(2.5)
//   const entranceRotateX = useMotionValue(15)
//   const entranceRotateY = useMotionValue(-10)
//   const entranceOpacity = useMotionValue(0)
//   const entranceBlur = useMotionValue(20)

//   // Track scroll progress across entire document
//   const { scrollYProgress } = useScroll()

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 30,
//     damping: 30,
//     mass: 1,
//   })

//   const scrollScale = useTransform(
//     smoothProgress,
//     [0, 0.3, 0.7, 1],
//     [1, 1.05, 1.1, 1.2]
//   )
//   const scrollRotateX = useTransform(
//     smoothProgress,
//     [0, 0.25, 0.5, 0.75, 1],
//     [0, 2, 0, -2, 0]
//   )
//   const scrollRotateY = useTransform(
//     smoothProgress,
//     [0, 0.25, 0.5, 0.75, 1],
//     [0, -3, 0, 3, 0]
//   )
//   const scrollZ = useTransform(smoothProgress, [0, 1], [0, -200])
//   const brightness = useTransform(
//     smoothProgress,
//     [0, 0.3, 0.7, 1],
//     [0.8, 0.6, 0.45, 0.3]
//   )
//   const scrollBlur = useTransform(smoothProgress, [0, 0.5, 1], [0, 0.5, 2])

//   // Initialize video
//   useEffect(() => {
//     const video = videoRef.current
//     if (!video) return

//     const handleLoadedMetadata = () => {
//       setVideoDuration(video.duration)
//       video.pause()
//       video.currentTime = 0
//     }

//     const handleCanPlayThrough = () => {
//       setIsLoaded(true)
//       if (!hasEntrance) {
//         triggerEntranceAnimation()
//       }
//     }

//     video.addEventListener('loadedmetadata', handleLoadedMetadata)
//     video.addEventListener('canplaythrough', handleCanPlayThrough)

//     if (video.readyState >= 1) {
//       handleLoadedMetadata()
//     }
//     if (video.readyState >= 4) {
//       handleCanPlayThrough()
//     }

//     return () => {
//       video.removeEventListener('loadedmetadata', handleLoadedMetadata)
//       video.removeEventListener('canplaythrough', handleCanPlayThrough)
//     }
//   }, [hasEntrance])

//   const triggerEntranceAnimation = () => {
//     setHasEntrance(true)

//     // Animate scale from 2.5 to 1
//     animate(entranceScale, 1, {
//       duration: 2.5,
//       ease: [0.16, 1, 0.3, 1], // Expo out
//     })

//     // Animate rotation to 0
//     animate(entranceRotateX, 0, {
//       duration: 2.8,
//       ease: [0.16, 1, 0.3, 1],
//     })

//     animate(entranceRotateY, 0, {
//       duration: 2.8,
//       ease: [0.16, 1, 0.3, 1],
//     })

//     // Fade in
//     animate(entranceOpacity, 1, {
//       duration: 1.5,
//       ease: 'easeOut',
//     })

//     // Clear blur
//     animate(entranceBlur, 0, {
//       duration: 2,
//       ease: [0.16, 1, 0.3, 1],
//     })
//   }

//   useEffect(() => {
//     if (!isLoaded || videoDuration === 0) return

//     let animationFrameId: number
//     let lastTime = 0

//     const unsubscribe = smoothProgress.on('change', (progress) => {
//       if (animationFrameId) {
//         cancelAnimationFrame(animationFrameId)
//       }

//       animationFrameId = requestAnimationFrame(() => {
//         const video = videoRef.current
//         if (video) {
//           const targetTime = Math.min(
//             progress * videoDuration,
//             videoDuration - 0.1
//           )

//           // Smooth interpolation for frame-by-frame effect
//           if (Math.abs(targetTime - lastTime) > 0.01) {
//             video.currentTime = targetTime
//             lastTime = targetTime
//           }
//         }
//       })
//     })

//     return () => {
//       unsubscribe()
//       if (animationFrameId) {
//         cancelAnimationFrame(animationFrameId)
//       }
//     }
//   }, [smoothProgress, isLoaded, videoDuration])

//   const combinedScale = useTransform(
//     [entranceScale, scrollScale],
//     ([entrance, scroll]: number[]) => entrance * scroll
//   )

//   const combinedRotateX = useTransform(
//     [entranceRotateX, scrollRotateX],
//     ([entrance, scroll]: number[]) => entrance + scroll
//   )

//   const combinedRotateY = useTransform(
//     [entranceRotateY, scrollRotateY],
//     ([entrance, scroll]: number[]) => entrance + scroll
//   )

//   const combinedBlur = useTransform(
//     [entranceBlur, scrollBlur],
//     ([entrance, scroll]: number[]) => entrance + scroll
//   )

//   return (
//     <div
//       ref={containerRef}
//       className="fixed inset-0 -z-10 overflow-hidden"
//       style={{ perspective: '1500px' }}
//     >
//       <motion.div
//         className="absolute inset-0 origin-center"
//         style={{
//           scale: combinedScale,
//           rotateX: combinedRotateX,
//           rotateY: combinedRotateY,
//           z: scrollZ,
//           opacity: entranceOpacity,
//           transformStyle: 'preserve-3d',
//         }}
//       >
//         <motion.video
//           ref={videoRef}
//           src={src}
//           poster={fallbackPoster}
//           muted
//           playsInline
//           preload="auto"
//           style={{
//             filter: useTransform(combinedBlur, (b) => `blur(${b}px)`),
//           }}
//           className="w-full h-full object-cover"
//         />
//       </motion.div>

//       <motion.div
//         className="absolute inset-0 bg-black pointer-events-none"
//         style={{ opacity: useTransform(brightness, (b) => 1 - b) }}
//       />

//       {/* Gradient overlays */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none" />
//       <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none" />

//       {/* Vignette effect */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)',
//         }}
//       />

//       <motion.div
//         className="absolute top-0 left-0 right-0 bg-black pointer-events-none"
//         style={{
//           height: useTransform(smoothProgress, [0, 0.1], ['3vh', '0vh']),
//         }}
//       />
//       <motion.div
//         className="absolute bottom-0 left-0 right-0 bg-black pointer-events-none"
//         style={{
//           height: useTransform(smoothProgress, [0, 0.1], ['3vh', '0vh']),
//         }}
//       />

//       {!isLoaded && (
//         <motion.div
//           className="absolute inset-0 bg-black flex items-center justify-center z-50"
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <div className="flex flex-col items-center gap-6">
//             <motion.div
//               className="relative w-16 h-16"
//               animate={{ rotate: 360 }}
//               transition={{
//                 duration: 2,
//                 repeat: Number.POSITIVE_INFINITY,
//                 ease: 'linear',
//               }}
//             >
//               <div className="absolute inset-0 border-2 border-white/10 rounded-full" />
//               <div className="absolute inset-0 border-2 border-transparent border-t-white rounded-full" />
//             </motion.div>
//             <motion.p
//               className="text-white/40 text-sm tracking-[0.4em] uppercase"
//               animate={{ opacity: [0.4, 1, 0.4] }}
//               transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//             >
//               Loading Experience
//             </motion.p>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   )
// }
'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import {
  useScroll,
  useSpring,
  useTransform,
  motion,
  useMotionValue,
  animate,
  useVelocity,
} from 'framer-motion'

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
  const [videoDuration, setVideoDuration] = useState(0)
  const [entranceComplete, setEntranceComplete] = useState(false)

  // Entrance animation values
  const entranceProgress = useMotionValue(0)
  const entranceScale = useTransform(entranceProgress, [0, 1], [2.5, 1])
  const entranceRotateX = useTransform(
    entranceProgress,
    [0, 0.6, 1],
    [25, 5, 0]
  )
  const entranceRotateY = useTransform(
    entranceProgress,
    [0, 0.6, 1],
    [-15, -3, 0]
  )
  const entranceOpacity = useTransform(
    entranceProgress,
    [0, 0.3, 1],
    [0, 0.8, 1]
  )
  const entranceBlur = useTransform(entranceProgress, [0, 0.7, 1], [30, 5, 0])

  // Scroll progress for entire page
  const { scrollYProgress } = useScroll()

  const scrollVelocity = useVelocity(scrollYProgress)

  // Very smooth spring for scroll
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 50,
    mass: 1.5,
  })

  // Scroll-based 3D transforms
  const scrollScale = useTransform(
    smoothScrollProgress,
    [0, 0.5, 1],
    [1, 1.08, 1.15]
  )
  const scrollRotateX = useTransform(
    smoothScrollProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 1.5, 0, -1.5, 0]
  )
  const scrollRotateY = useTransform(
    smoothScrollProgress,
    [0, 0.3, 0.7, 1],
    [0, -1.5, 1.5, 0]
  )

  // Overlay darkness
  const overlayOpacity = useTransform(
    smoothScrollProgress,
    [0, 0.3, 0.6, 1],
    [0.1, 0.25, 0.4, 0.55]
  )

  const isPlayingRef = useRef(false)
  const lastScrollProgressRef = useRef(0)
  const targetTimeRef = useRef(0)
  const rafIdRef = useRef<number | null>(null)

  // Video loading
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration)
      video.currentTime = 0
    }

    const handleCanPlay = () => {
      setIsLoaded(true)
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('canplaythrough', handleCanPlay)

    video.load()

    if (video.readyState >= 1) handleLoadedMetadata()
    if (video.readyState >= 4) handleCanPlay()

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('canplaythrough', handleCanPlay)
    }
  }, [])

  useEffect(() => {
    if (!isLoaded || entranceComplete) return

    const video = videoRef.current
    if (!video) return

    // Animate entrance
    animate(entranceProgress, 1, {
      duration: 3,
      ease: [0.16, 1, 0.3, 1],
      onComplete: () => {
        setEntranceComplete(true)
        video.pause()
        // Sync video time with current scroll position
        targetTimeRef.current = smoothScrollProgress.get() * videoDuration
        video.currentTime = targetTimeRef.current
      },
    })

    // Play video forward during entrance for smooth motion
    video.playbackRate = 0.6
    video.play().catch(() => {})
  }, [
    isLoaded,
    entranceComplete,
    entranceProgress,
    smoothScrollProgress,
    videoDuration,
  ])

  const updateVideoPlayback = useCallback(() => {
    const video = videoRef.current
    if (!video || videoDuration === 0 || !entranceComplete) {
      rafIdRef.current = requestAnimationFrame(updateVideoPlayback)
      return
    }

    const currentProgress = smoothScrollProgress.get()
    const velocity = scrollVelocity.get()

    // Calculate target time with looping
    let targetTime = currentProgress * videoDuration

    if (targetTime >= videoDuration) {
      targetTime = targetTime % videoDuration
    }
    if (targetTime < 0) {
      targetTime = videoDuration + (targetTime % videoDuration)
    }

    targetTimeRef.current = targetTime

    const timeDiff = targetTime - video.currentTime
    const absTimeDiff = Math.abs(timeDiff)

    // Determine if we should play or seek
    if (absTimeDiff > 0.01) {
      // Calculate playback rate based on velocity and time difference
      const baseRate = Math.min(Math.max(Math.abs(velocity) * 10, 0.1), 4)
      const adjustedRate = Math.min(absTimeDiff * 3 + baseRate, 8)

      if (timeDiff > 0) {
        // Play forward
        if (video.playbackRate !== adjustedRate || video.paused) {
          video.playbackRate = adjustedRate
          if (video.paused && absTimeDiff > 0.02) {
            video.play().catch(() => {})
            isPlayingRef.current = true
          }
        }
      } else {
        // For reverse, we need to seek because video can't play backwards
        // Use small incremental seeks for smoothness
        const seekStep = Math.min(absTimeDiff, 0.05)
        video.currentTime = Math.max(0, video.currentTime - seekStep)
      }

      // If very close to target, pause and sync
      if (absTimeDiff < 0.02 && isPlayingRef.current) {
        video.pause()
        isPlayingRef.current = false
      }
    } else {
      // Very close - just pause
      if (!video.paused) {
        video.pause()
        isPlayingRef.current = false
      }
    }

    // Handle loop boundary crossing
    if (video.currentTime >= videoDuration - 0.1 && targetTime < 0.5) {
      video.currentTime = 0
    }
    if (video.currentTime <= 0.1 && targetTime > videoDuration - 0.5) {
      video.currentTime = videoDuration - 0.1
    }

    lastScrollProgressRef.current = currentProgress
    rafIdRef.current = requestAnimationFrame(updateVideoPlayback)
  }, [videoDuration, entranceComplete, smoothScrollProgress, scrollVelocity])

  // Start playback loop
  useEffect(() => {
    rafIdRef.current = requestAnimationFrame(updateVideoPlayback)
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
    }
  }, [updateVideoPlayback])

  // Combined transforms
  const combinedScale = useTransform(
    [entranceScale, scrollScale],
    ([entrance, scroll]) => (entrance as number) * (scroll as number)
  )

  const combinedRotateX = useTransform(
    [entranceRotateX, scrollRotateX],
    ([entrance, scroll]) => (entrance as number) + (scroll as number)
  )

  const combinedRotateY = useTransform(
    [entranceRotateY, scrollRotateY],
    ([entrance, scroll]) => (entrance as number) + (scroll as number)
  )

  const combinedBlur = useTransform(entranceBlur, (b) => `blur(${b}px)`)

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden bg-black"
      style={{ perspective: '1500px', perspectiveOrigin: '50% 50%' }}
    >
      <motion.div
        className="absolute inset-[-20%] origin-center"
        style={{
          scale: combinedScale,
          rotateX: combinedRotateX,
          rotateY: combinedRotateY,
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
          preload="auto"
          loop
          className="w-full h-full object-cover"
          style={{ filter: combinedBlur }}
          crossOrigin="anonymous"
        />
      </motion.div>

      {/* Dynamic darkness overlay */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* Letterbox bars */}
      <motion.div
        className="absolute top-0 left-0 right-0 bg-black pointer-events-none"
        style={{
          height: useTransform(smoothScrollProgress, [0, 0.08], ['4vh', '0vh']),
          opacity: useTransform(smoothScrollProgress, [0, 0.08], [1, 0]),
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-black pointer-events-none"
        style={{
          height: useTransform(smoothScrollProgress, [0, 0.08], ['4vh', '0vh']),
          opacity: useTransform(smoothScrollProgress, [0, 0.08], [1, 0]),
        }}
      />

      {/* Loading state */}
      {!isLoaded && (
        <motion.div
          className="absolute inset-0 bg-black flex items-center justify-center z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-24 h-24">
              <motion.div
                className="absolute inset-0 border border-white/10 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute inset-3 border border-white/15 rounded-full"
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.1, 0.4] }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                  delay: 0.2,
                }}
              />
              <motion.div
                className="absolute inset-6 border-2 border-transparent border-t-white/50 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                }}
              />
            </div>
            <motion.p
              className="text-white/15 text-[9px] tracking-[0.5em] uppercase"
              animate={{ opacity: [0.15, 0.4, 0.15] }}
              transition={{
                duration: 2,
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
