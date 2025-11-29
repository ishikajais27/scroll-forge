'use client'

import { useEffect } from 'react'
import type { MotionValue } from 'framer-motion'

interface UseScrubberOptions {
  once?: boolean
}

export function useScrubber(
  callback: () => void | (() => void),
  progress: MotionValue<number>,
  options: UseScrubberOptions = {}
) {
  useEffect(() => {
    let unsubscribe: (() => void) | void
    let shouldRun = true

    const cleanup = progress.onChange(() => {
      if (shouldRun) {
        unsubscribe = callback()
        if (options.once) shouldRun = false
      }
    })

    return () => {
      cleanup()
      if (typeof unsubscribe === 'function') unsubscribe()
    }
  }, [callback, progress, options.once])
}
