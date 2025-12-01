// import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
// import './globals.css'
// import { GlobalScrollVideo } from '@/components/global-scroll-video'

// const geist = Geist({
//   subsets: ['latin'],
//   display: 'swap',
// })

// const geistMono = Geist_Mono({
//   subsets: ['latin'],
//   display: 'swap',
// })

// export const metadata: Metadata = {
//   title: {
//     default: 'Studio | Creative Digital Experiences',
//     template: '%s | Studio',
//   },
//   description:
//     'A creative studio specializing in motion design, web development, and digital strategy. Transform your vision into compelling digital experiences.',
//   generator: 'v0.app',
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" className="dark" style={{ scrollBehavior: 'smooth' }}>
//       <body className={`${geist.className} antialiased bg-black`}>
//         <GlobalScrollVideo
//           src="/videos/scroll-video.mp4"
//           fallbackPoster="/images/dark-cinematic-landscape.jpg"
//         />
//         {children}
//       </body>
//     </html>
//   )
// }
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { GlobalScrollVideo } from '@/components/global-scroll-video'

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Brentley | Luxury Real Estate',
    template: '%s | Brentley Real Estate',
  },
  description:
    'Premier luxury real estate brokerage specializing in exceptional properties. Discover your dream home with Brentley.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${geist.className} antialiased bg-black`}>
        <GlobalScrollVideo
          src="/videos/scroll-video.mp4"
          fallbackPoster="/images/dark-cinematic-landscape.jpg"
        />
        {children}
      </body>
    </html>
  )
}
