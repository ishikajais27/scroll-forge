// import type React from 'react'
// import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
// import './globals.css'
// import GlobalScrollVideo from '@/components/global-scroll-video'

// const _geist = Geist({ subsets: ['latin'] })
// const _geistMono = Geist_Mono({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: {
//     default: 'Studio | Creative Digital Experiences',
//     template: '%s | Studio',
//   },
//   description:
//     'A creative studio specializing in motion design, web development, and digital strategy. Transform your vision into compelling digital experiences.',
//   generator: 'v0.app',
//   icons: {
//     icon: [
//       {
//         url: '/icon-light-32x32.png',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/icon-dark-32x32.png',
//         media: '(prefers-color-scheme: dark)',
//       },
//       {
//         url: '/icon.svg',
//         type: 'image/svg+xml',
//       },
//     ],
//     apple: '/apple-icon.png',
//   },
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" className="dark">
//       <body className="font-sans antialiased">
//         <GlobalScrollVideo
//           src="https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-large.mp4"
//           fallbackPoster="/dark-cinematic-landscape.jpg"
//         />
//         {children}
//       </body>
//     </html>
//   )
// }
import type React from 'react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { GlobalScrollVideo } from '@/components/global-scroll-video'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Studio | Creative Digital Experiences',
    template: '%s | Studio',
  },
  description:
    'A creative studio specializing in motion design, web development, and digital strategy. Transform your vision into compelling digital experiences.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <GlobalScrollVideo
          src="/videos/scroll-video.mp4"
          fallbackPoster="/images/dark-cinematic-landscape.jpg"
        />
        {children}
      </body>
    </html>
  )
}
