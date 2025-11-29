'use client'

import { cubicBezier } from 'framer-motion'

export const expoOut = cubicBezier(0.16, 1, 0.3, 1)
export const easeInOutCubic = cubicBezier(0.645, 0.045, 0.355, 1)

export function useScrollProgress(offset: [string, string]) {
  return {
    offset,
    initial: 0,
    final: 1,
  }
}

export const SPRING_CONFIG = {
  stiffness: 100,
  damping: 40,
  mass: 1,
}

export const SPRING_CONFIG_SLOW = {
  stiffness: 60,
  damping: 30,
  mass: 1,
}

// Shared IntersectionObserver for performance
type ViewChangeHandler = (entry: IntersectionObserverEntry) => void
type OnStartHandler = (
  entry: IntersectionObserverEntry
) => void | ViewChangeHandler

interface InViewOptions {
  rootMargin?: string
}

const observers: Record<
  string,
  [
    IntersectionObserver,
    WeakMap<Element, Array<ViewChangeHandler | void>>,
    WeakMap<Element, Set<OnStartHandler>>
  ]
> = {}

export function sharedInView(
  element: Element,
  onStart: OnStartHandler,
  { rootMargin = '0px 0px 0px 0px' }: InViewOptions = {}
): VoidFunction {
  const key = rootMargin
  const [observer, activeIntersections, handlers] = (observers[key] ??= [
    new IntersectionObserver(
      (entries) => {
        entries
          .sort((a, b) =>
            a.isIntersecting === b.isIntersecting
              ? 0
              : !a.isIntersecting
              ? -1
              : 1
          )
          .forEach((entry) => {
            const onEnd = activeIntersections.get(entry.target)
            if (entry.isIntersecting === Boolean(onEnd)) return

            if (entry.isIntersecting) {
              activeIntersections.set(
                entry.target,
                [...handlers.get(entry.target)!].map((h) => h(entry))
              )
            } else if (onEnd) {
              onEnd.forEach((h) => h?.(entry))
              activeIntersections.delete(entry.target)
            }
          })
      },
      { rootMargin }
    ),
    new WeakMap(),
    new WeakMap(),
  ])

  observer.observe(element)
  if (!handlers.has(element)) handlers.set(element, new Set())
  handlers.get(element)!.add(onStart)

  return () => {
    activeIntersections.delete(element)
    handlers.delete(element)
    observer.unobserve(element)
  }
}
