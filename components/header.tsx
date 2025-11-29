'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-lg"
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="text-2xl font-bold tracking-tight text-white">
          Studio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden flex-1 items-center justify-center gap-12 md:flex">
          <Link
            href="/"
            className="text-sm tracking-wide text-white/70 hover:text-white transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm tracking-wide text-white/70 hover:text-white transition"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm tracking-wide text-white/70 hover:text-white transition"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm tracking-wide text-white/70 hover:text-white transition"
          >
            Contact
          </Link>
        </div>

        <button className="hidden md:block px-6 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition">
          Get In Touch
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/10 bg-black/80 backdrop-blur-md md:hidden"
        >
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link
              href="/"
              className="text-sm tracking-wide text-white/70 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm tracking-wide text-white/70 hover:text-white transition"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm tracking-wide text-white/70 hover:text-white transition"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-sm tracking-wide text-white/70 hover:text-white transition"
            >
              Contact
            </Link>
            <button className="w-full px-6 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition">
              Get In Touch
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

// Add default export
export default Header
