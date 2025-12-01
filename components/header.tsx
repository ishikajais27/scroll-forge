// 'use client'

// import Link from 'next/link'
// import { motion } from 'framer-motion'

// export default function Header() {
//   return (
//     <motion.header
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: 0.2 }}
//       className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-6"
//     >
//       <nav className="container mx-auto flex items-center justify-between">
//         <Link href="/" className="text-xl font-bold tracking-tight">
//           Studio
//         </Link>
//         <div className="flex items-center gap-8">
//           <Link
//             href="/about"
//             className="text-sm text-white/60 hover:text-white transition-colors"
//           >
//             About
//           </Link>
//           <Link
//             href="/services"
//             className="text-sm text-white/60 hover:text-white transition-colors"
//           >
//             Services
//           </Link>
//           <Link
//             href="/contact"
//             className="text-sm text-white/60 hover:text-white transition-colors"
//           >
//             Contact
//           </Link>
//         </div>
//       </nav>
//     </motion.header>
//   )
// }
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-6"
    >
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Brentley
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/about"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}
