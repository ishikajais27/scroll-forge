'use client'

import type React from 'react'

import { useScroll, useTransform } from 'framer-motion'

export interface ScrollOffsetConfig {
  offset: [string, string]
  target?: React.RefObject<HTMLElement>
}

export function useScrollOpacity(config: ScrollOffsetConfig) {
  const { scrollYProgress } = useScroll({
    target: config.target,
    offset: config.offset,
  })

  return useTransform(scrollYProgress, [0, 1], [1, 0])
}

export function useScrollTranslateY(
  config: ScrollOffsetConfig,
  range: [number, number]
) {
  const { scrollYProgress } = useScroll({
    target: config.target,
    offset: config.offset,
  })

  return useTransform(scrollYProgress, [0, 1], range)
}

export function useScrollScale(
  config: ScrollOffsetConfig,
  range: [number, number]
) {
  const { scrollYProgress } = useScroll({
    target: config.target,
    offset: config.offset,
  })

  return useTransform(scrollYProgress, [0, 1], range)
}
