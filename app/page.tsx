// 'use client'
// import { useRef, useState, useEffect } from 'react'
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   useInView,
// } from 'framer-motion'
// import Header from '@/components/header'
// import Footer from '@/components/footer'
// import AnimatedSection from '@/components/animated-section'

// function AnimatedText({
//   children,
//   className,
//   delay = 0,
// }: {
//   children: string
//   className?: string
//   delay?: number
// }) {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: '-50px' })

//   const words = children.split(' ')

//   return (
//     <span ref={ref} className={className}>
//       {words.map((word, wordIndex) => (
//         <span key={wordIndex} className="inline-block overflow-hidden">
//           <motion.span
//             initial={{ y: '100%', rotateX: -90 }}
//             animate={
//               isInView ? { y: 0, rotateX: 0 } : { y: '100%', rotateX: -90 }
//             }
//             transition={{
//               duration: 0.8,
//               delay: delay + wordIndex * 0.1,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//             className="inline-block"
//             style={{ transformOrigin: 'bottom' }}
//           >
//             {word}
//           </motion.span>
//           {wordIndex < words.length - 1 && '\u00A0'}
//         </span>
//       ))}
//     </span>
//   )
// }

// function HeroContent() {
//   const [isReady, setIsReady] = useState(false)

//   useEffect(() => {
//     // Delay hero animation to sync with video entrance
//     const timer = setTimeout(() => setIsReady(true), 800)
//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <div className="container mx-auto px-4 md:px-8 text-center z-10">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8, y: 50 }}
//         animate={isReady ? { opacity: 1, scale: 1, y: 0 } : {}}
//         transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
//       >
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={isReady ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1, delay: 1.2 }}
//           className="text-white/50 uppercase tracking-[0.5em] text-xs md:text-sm mb-8"
//         >
//           Scroll to Experience
//         </motion.p>

//         <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
//           <motion.span
//             initial={{ opacity: 0, y: 100, rotateX: -45 }}
//             animate={isReady ? { opacity: 1, y: 0, rotateX: 0 } : {}}
//             transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
//             className="block"
//             style={{ transformOrigin: 'bottom' }}
//           >
//             Craft Your
//           </motion.span>
//           <motion.span
//             initial={{ opacity: 0, y: 100, rotateX: -45 }}
//             animate={isReady ? { opacity: 1, y: 0, rotateX: 0 } : {}}
//             transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
//             className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50"
//             style={{ transformOrigin: 'bottom' }}
//           >
//             Digital Story
//           </motion.span>
//         </h1>

//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           animate={isReady ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1, delay: 2.2 }}
//           className="text-base md:text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed"
//         >
//           Experience the art of motion design combined with strategic
//           storytelling to create unforgettable digital experiences.
//         </motion.p>

//         <motion.button
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={isReady ? { opacity: 1, scale: 1 } : {}}
//           transition={{ duration: 0.8, delay: 2.5 }}
//           whileHover={{
//             scale: 1.05,
//             boxShadow: '0 0 40px rgba(255,255,255,0.2)',
//           }}
//           whileTap={{ scale: 0.95 }}
//           className="px-10 py-5 rounded-full bg-white text-black font-semibold text-lg hover:bg-white/90 transition-colors"
//         >
//           Explore Our Work
//         </motion.button>
//       </motion.div>
//     </div>
//   )
// }

// function ScrollIndicator() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 3000)
//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <motion.div
//       className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
//       initial={{ opacity: 0, y: 20 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 1 }}
//     >
//       <motion.div
//         animate={{ y: [0, 8, 0] }}
//         transition={{
//           duration: 2,
//           repeat: Number.POSITIVE_INFINITY,
//           ease: 'easeInOut',
//         }}
//         className="flex flex-col items-center gap-4"
//       >
//         <span className="text-white/30 text-[10px] uppercase tracking-[0.5em]">
//           Scroll
//         </span>
//         <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center pt-2">
//           <motion.div
//             animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
//             transition={{
//               duration: 2,
//               repeat: Number.POSITIVE_INFINITY,
//               ease: 'easeInOut',
//             }}
//             className="w-1 h-1 bg-white/60 rounded-full"
//           />
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default function Home() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll()

//   const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

//   return (
//     <div ref={containerRef} className="relative text-white">
//       {/* Progress bar */}
//       <motion.div
//         style={{ scaleX, transformOrigin: 'left' }}
//         className="fixed top-0 left-0 right-0 h-[2px] bg-white/80 z-[60]"
//       />

//       <Header />

//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <HeroContent />
//         <ScrollIndicator />
//       </section>

//       <ScrollTextSection />

//       {/* Features Section */}
//       <section className="relative py-24 md:py-40">
//         <div className="container mx-auto px-4 md:px-8">
//           <AnimatedSection className="mb-20">
//             <p className="text-white/50 uppercase tracking-[0.3em] text-sm mb-4">
//               What We Do
//             </p>
//             <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
//               Our Capabilities
//             </h2>
//             <p className="text-white/50 text-lg max-w-2xl">
//               We specialize in creating elegant, performant digital experiences
//               that captivate and convert.
//             </p>
//           </AnimatedSection>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//             {[
//               {
//                 number: '01',
//                 title: 'Motion Design',
//                 description:
//                   'Seamless animations that guide user attention and enhance the narrative.',
//               },
//               {
//                 number: '02',
//                 title: 'Web Development',
//                 description:
//                   'High-performance web applications built with cutting-edge technologies.',
//               },
//               {
//                 number: '03',
//                 title: 'Strategic Design',
//                 description:
//                   'Data-driven design solutions that align with your business objectives.',
//               },
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 80, rotateX: -10 }}
//                 whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: index * 0.15,
//                   ease: [0.16, 1, 0.3, 1],
//                 }}
//                 viewport={{ once: true, margin: '-100px' }}
//                 className="group p-8 md:p-10 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 bg-black/30 backdrop-blur-md hover:bg-black/40"
//                 style={{ transformStyle: 'preserve-3d' }}
//               >
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: '2rem' }}
//                   transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
//                   viewport={{ once: true }}
//                   className="h-px bg-white/40 mb-6"
//                 />
//                 <div className="text-5xl md:text-6xl font-bold text-white/10 mb-4">
//                   {feature.number}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
//                 <p className="text-white/50 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <ShowcaseSection />

//       {/* CTA Section */}
//       <section className="relative py-24 md:py-40">
//         <div className="container mx-auto px-4 md:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="rounded-3xl bg-black/40 backdrop-blur-lg p-12 md:p-20 border border-white/10 text-center"
//           >
//             <h2 className="text-4xl md:text-6xl font-bold mb-6">
//               <AnimatedText>Ready to Create Something Amazing?</AnimatedText>
//             </h2>
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
//             >
//               Let's collaborate to bring your vision to life with cutting-edge
//               design and technology.
//             </motion.p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-10 py-5 rounded-full bg-white text-black font-semibold text-lg hover:bg-white/90 transition"
//             >
//               Start Your Project
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// function ScrollTextSection() {
//   const sectionRef = useRef<HTMLDivElement>(null)

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start end', 'end start'],
//   })

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 50,
//     damping: 20,
//   })

//   const y1 = useTransform(smoothProgress, [0, 1], [200, -200])
//   const y2 = useTransform(smoothProgress, [0, 1], [100, -300])
//   const opacity = useTransform(
//     smoothProgress,
//     [0.1, 0.25, 0.75, 0.9],
//     [0, 1, 1, 0]
//   )
//   const scale = useTransform(
//     smoothProgress,
//     [0.1, 0.4, 0.6, 0.9],
//     [0.8, 1, 1, 0.9]
//   )
//   const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [20, 0, -20])
//   const z = useTransform(smoothProgress, [0, 0.5, 1], [-500, 0, -500])

//   return (
//     <section ref={sectionRef} className="relative min-h-[250vh]">
//       <div
//         className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
//         style={{ perspective: '1500px' }}
//       >
//         {/* Background circle */}
//         <motion.div
//           style={{
//             opacity,
//             scale: useTransform(smoothProgress, [0, 0.5, 1], [0.5, 1.2, 0.8]),
//           }}
//           className="absolute inset-0 flex items-center justify-center pointer-events-none"
//         >
//           <div className="w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full border border-white/5" />
//           <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-white/5" />
//         </motion.div>

//         <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
//           <motion.div
//             style={{ scale, rotateX, z, transformStyle: 'preserve-3d' }}
//           >
//             <motion.p
//               style={{ y: y1, opacity }}
//               className="text-white/40 uppercase tracking-[0.5em] text-xs md:text-sm mb-8 md:mb-12"
//             >
//               Frame by Frame
//             </motion.p>
//             <motion.h2
//               style={{ y: y2, opacity }}
//               className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85]"
//             >
//               Motion in
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/30">
//                 Every Scroll
//               </span>
//             </motion.h2>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function ShowcaseSection() {
//   const projects = [
//     { title: 'Creative Motion Platform', category: 'Web Application' },
//     { title: 'Design System Suite', category: 'Design System' },
//     { title: 'Interactive Showcase', category: 'Brand Experience' },
//   ]

//   return (
//     <section className="relative py-24 md:py-40">
//       <div className="container mx-auto px-4 md:px-8">
//         <AnimatedSection className="mb-20">
//           <p className="text-white/50 uppercase tracking-[0.3em] text-sm mb-4">
//             Selected Work
//           </p>
//           <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
//             Featured Projects
//           </h2>
//         </AnimatedSection>

//         <div className="space-y-24 md:space-y-32">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 150, rotateX: -15 }}
//               whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//               viewport={{ once: true, margin: '-100px' }}
//               className="group grid md:grid-cols-2 gap-8 md:gap-16 items-center"
//               style={{ transformStyle: 'preserve-3d', perspective: '1500px' }}
//             >
//               <motion.div
//                 className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 ${
//                   index % 2 === 1 ? 'md:order-2' : ''
//                 }`}
//                 whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 5 : -5 }}
//                 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//               >
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent"
//                   whileHover={{ opacity: 0.8 }}
//                   transition={{ duration: 0.4 }}
//                 />
//                 <motion.div
//                   className="absolute inset-0 flex items-center justify-center"
//                   initial={{ scale: 1 }}
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//                 >
//                   <span className="text-white/20 font-bold text-8xl md:text-9xl">
//                     {String(index + 1).padStart(2, '0')}
//                   </span>
//                 </motion.div>
//               </motion.div>

//               <div className={index % 2 === 1 ? 'md:order-1' : ''}>
//                 <motion.div
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{
//                     duration: 0.7,
//                     delay: 0.2,
//                     ease: [0.16, 1, 0.3, 1],
//                   }}
//                   viewport={{ once: true }}
//                 >
//                   <p className="text-white/40 text-sm uppercase tracking-[0.3em] mb-3">
//                     {project.category}
//                   </p>
//                   <h3 className="text-3xl md:text-5xl font-bold mb-6">
//                     {project.title}
//                   </h3>
//                   <p className="text-white/50 text-lg mb-8 leading-relaxed">
//                     A sophisticated platform combining advanced animation
//                     capabilities with intuitive design tools, enabling teams to
//                     create stunning digital experiences.
//                   </p>
//                   <motion.a
//                     href="#"
//                     whileHover={{ x: 10 }}
//                     className="inline-flex items-center gap-3 text-white font-semibold group-hover:gap-5 transition-all duration-300"
//                   >
//                     View Project
//                     <span className="text-xl">→</span>
//                   </motion.a>
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'
import { useRef, useState, useEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  animate,
} from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import AnimatedSection from '@/components/animated-section'

function AnimatedText({
  children,
  className,
  delay = 0,
}: {
  children: string
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const words = children.split(' ')

  return (
    <span ref={ref} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: '100%', rotateX: -90, opacity: 0 }}
            animate={
              isInView
                ? { y: 0, rotateX: 0, opacity: 1 }
                : { y: '100%', rotateX: -90, opacity: 0 }
            }
            transition={{
              duration: 0.9,
              delay: delay + wordIndex * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
            style={{ transformOrigin: 'bottom', transformStyle: 'preserve-3d' }}
          >
            {word}
          </motion.span>
          {wordIndex < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  )
}

function HeroContent() {
  const [isReady, setIsReady] = useState(false)
  const heroOpacity = useMotionValue(0)
  const heroY = useMotionValue(100)
  const heroScale = useMotionValue(0.85)
  const heroRotateX = useMotionValue(20)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true)

      animate(heroOpacity, 1, { duration: 1.8, ease: [0.16, 1, 0.3, 1] })
      animate(heroY, 0, { duration: 2, ease: [0.16, 1, 0.3, 1] })
      animate(heroScale, 1, { duration: 2.2, ease: [0.16, 1, 0.3, 1] })
      animate(heroRotateX, 0, { duration: 2.5, ease: [0.16, 1, 0.3, 1] })
    }, 1500)

    return () => clearTimeout(timer)
  }, [heroOpacity, heroY, heroScale, heroRotateX])

  return (
    <motion.div
      className="container mx-auto px-4 md:px-8 text-center z-10"
      style={{
        opacity: heroOpacity,
        y: heroY,
        scale: heroScale,
        rotateX: heroRotateX,
        transformStyle: 'preserve-3d',
        perspective: '1500px',
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 40, filter: 'blur(15px)' }}
        animate={isReady ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 1.4, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-white/30 uppercase tracking-[0.7em] text-[9px] md:text-[11px] mb-12"
      >
        Scroll to Experience
      </motion.p>

      <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-12 leading-[0.85]">
        <motion.span
          initial={{ opacity: 0, y: 150, rotateX: -80, filter: 'blur(25px)' }}
          animate={
            isReady ? { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' } : {}
          }
          transition={{ duration: 1.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="block"
          style={{
            transformOrigin: 'bottom center',
            transformStyle: 'preserve-3d',
          }}
        >
          Craft Your
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 150, rotateX: -80, filter: 'blur(25px)' }}
          animate={
            isReady ? { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' } : {}
          }
          transition={{ duration: 1.6, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/30"
          style={{
            transformOrigin: 'bottom center',
            transformStyle: 'preserve-3d',
          }}
        >
          Digital Story
        </motion.span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 60, filter: 'blur(15px)' }}
        animate={isReady ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 1.4, delay: 2, ease: [0.16, 1, 0.3, 1] }}
        className="text-base md:text-xl text-white/35 mb-16 max-w-2xl mx-auto leading-relaxed"
      >
        Experience the art of motion design combined with strategic storytelling
        to create unforgettable digital experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.75 }}
        animate={isReady ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1.2, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row gap-5 justify-center"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 60px rgba(255,255,255,0.12)',
          }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 rounded-full bg-white text-black font-semibold text-lg hover:bg-white/90 transition-colors"
        >
          Explore Our Work
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: 'rgba(255,255,255,0.08)',
          }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 rounded-full border border-white/15 text-white font-semibold text-lg transition-colors"
        >
          Watch Reel
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
        className="flex flex-col items-center gap-6"
      >
        <span className="text-white/15 text-[8px] uppercase tracking-[0.7em]">
          Scroll
        </span>
        <div className="w-7 h-12 border border-white/10 rounded-full flex justify-center pt-3">
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [1, 0.15, 1] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-1.5 bg-white/40 rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <div ref={containerRef} className="relative text-white">
      {/* Progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: 'left' }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/60 via-white to-white/60 z-[60]"
      />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroContent />
        <ScrollIndicator />
      </section>

      {/* Scroll Text Reveal Section */}
      <ScrollTextSection />

      {/* Features Section */}
      <section className="relative py-28 md:py-44">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-24">
            <p className="text-white/40 uppercase tracking-[0.4em] text-xs mb-5">
              What We Do
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-5">
              Our Capabilities
            </h2>
            <p className="text-white/40 text-lg max-w-2xl">
              We specialize in creating elegant, performant digital experiences
              that captivate and convert.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                number: '01',
                title: 'Motion Design',
                description:
                  'Seamless animations that guide user attention and enhance the narrative.',
              },
              {
                number: '02',
                title: 'Web Development',
                description:
                  'High-performance web applications built with cutting-edge technologies.',
              },
              {
                number: '03',
                title: 'Strategic Design',
                description:
                  'Data-driven design solutions that align with your business objectives.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ y: -10, transition: { duration: 0.4 } }}
                className="group p-10 md:p-12 rounded-3xl border border-white/10 hover:border-white/25 transition-all duration-500 bg-black/20 backdrop-blur-md hover:bg-black/30"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '3rem' }}
                  transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                  className="h-px bg-gradient-to-r from-white/50 to-transparent mb-8"
                />
                <div className="text-6xl md:text-7xl font-bold text-white/5 mb-6">
                  {feature.number}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/40 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <ShowcaseSection />

      {/* CTA Section */}
      <section className="relative py-28 md:py-44">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-black/30 backdrop-blur-xl p-14 md:p-24 border border-white/10 text-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              <AnimatedText>Ready to Create Something Amazing?</AnimatedText>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white/50 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Let us collaborate to bring your vision to life with cutting-edge
              design and technology.
            </motion.p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 60px rgba(255,255,255,0.1)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 rounded-full bg-white text-black font-semibold text-lg hover:bg-white/90 transition"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ScrollTextSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    mass: 0.5,
  })

  const y1 = useTransform(smoothProgress, [0, 1], [250, -250])
  const y2 = useTransform(smoothProgress, [0, 1], [150, -350])
  const opacity = useTransform(
    smoothProgress,
    [0.05, 0.2, 0.8, 0.95],
    [0, 1, 1, 0]
  )
  const scale = useTransform(
    smoothProgress,
    [0.05, 0.35, 0.65, 0.95],
    [0.7, 1, 1, 0.85]
  )
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [30, 0, -30])
  const z = useTransform(smoothProgress, [0, 0.5, 1], [-700, 0, -700])
  const blur = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [15, 0, 0, 15])

  return (
    <section ref={sectionRef} className="relative min-h-[280vh]">
      <div
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        style={{ perspective: '1800px' }}
      >
        {/* Animated background rings */}
        <motion.div
          style={{
            opacity,
            scale: useTransform(smoothProgress, [0, 0.5, 1], [0.4, 1.3, 0.6]),
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            className="w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full border border-white/5"
            animate={{ rotate: 360 }}
            transition={{
              duration: 60,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
          <motion.div
            className="absolute w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full border border-white/5"
            animate={{ rotate: -360 }}
            transition={{
              duration: 45,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
          <motion.div
            className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-white/10"
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        </motion.div>

        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div
            style={{
              scale,
              rotateX,
              z,
              transformStyle: 'preserve-3d',
              filter: useTransform(blur, (b) => `blur(${b}px)`),
            }}
          >
            <motion.p
              style={{ y: y1, opacity }}
              className="text-white/30 uppercase tracking-[0.6em] text-[10px] md:text-xs mb-10 md:mb-14"
            >
              Frame by Frame
            </motion.p>
            <motion.h2
              style={{ y: y2, opacity }}
              className="text-5xl md:text-8xl lg:text-[11rem] font-bold tracking-tighter leading-[0.8]"
            >
              Motion in
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/60 to-white/20">
                Every Scroll
              </span>
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ShowcaseSection() {
  const projects = [
    { title: 'Creative Motion Platform', category: 'Web Application' },
    { title: 'Design System Suite', category: 'Design System' },
    { title: 'Interactive Showcase', category: 'Brand Experience' },
  ]

  return (
    <section className="relative py-28 md:py-44">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection className="mb-24">
          <p className="text-white/40 uppercase tracking-[0.4em] text-xs mb-5">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Featured Projects
          </h2>
        </AnimatedSection>

        <div className="space-y-28 md:space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 180, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              className="group grid md:grid-cols-2 gap-10 md:gap-20 items-center"
              style={{ transformStyle: 'preserve-3d', perspective: '1800px' }}
            >
              <motion.div
                className={`relative aspect-[4/3] rounded-3xl overflow-hidden bg-black/15 backdrop-blur-sm border border-white/10 ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
                whileHover={{ scale: 1.03, rotateY: index % 2 === 0 ? 6 : -6 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 1, opacity: 0.15 }}
                  whileHover={{ scale: 1.15, opacity: 0.25 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-white font-bold text-8xl md:text-9xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </motion.div>
              </motion.div>

              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                >
                  <p className="text-white/30 text-xs uppercase tracking-[0.4em] mb-4">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold mb-7">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-lg mb-10 leading-relaxed">
                    A sophisticated platform combining advanced animation
                    capabilities with intuitive design tools, enabling teams to
                    create stunning digital experiences.
                  </p>
                  <motion.a
                    href="#"
                    whileHover={{ x: 12 }}
                    className="inline-flex items-center gap-4 text-white font-semibold group-hover:gap-6 transition-all duration-400"
                  >
                    View Project
                    <span className="text-xl">→</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
