'use client'

import { useRef } from 'react'

export function useSplitText() {
  const characterRefs = useRef<(HTMLSpanElement | null)[]>([])

  function splitCharacters(text: string) {
    return text.split('').map((char, index) => (
      <span
        key={index}
        ref={(el) => {
          characterRefs.current[index] = el
        }}
        className="inline-block"
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return { characterRefs, splitCharacters }
}
