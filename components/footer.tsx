import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Studio</h3>
            <p className="text-white/60 text-sm">
              Creating beautiful digital experiences.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Pages
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/60 hover:text-white text-sm transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-white text-sm transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-white/60 hover:text-white text-sm transition"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex items-center justify-between text-sm text-white/60">
          <p>&copy; 2025 Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Add default export
export default Footer
