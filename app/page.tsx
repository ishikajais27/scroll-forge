'use client'
import { useRef, useState, useEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  animate,
} from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollTextSection from '@/components/scroll-text'
import {
  ScrollAnimatedText,
  ScrollAnimatedSection,
  Card3D,
} from '@/components/scroll-animated-text'

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 25 })

  return (
    <motion.div
      style={{ scaleX, transformOrigin: 'left' }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/30 via-white to-white/30 z-[60]"
    />
  )
}

function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className="absolute bottom-12 left-1/2 -translate-x-1/2"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        className="flex flex-col items-center gap-3"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-sans">
          Scroll
        </span>
        <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-1 bg-white/50 rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

function InfiniteMotionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 30,
    mass: 1,
  })
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.6, 1.1, 0.7])
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [35, 0, -35])
  const y = useTransform(smoothProgress, [0, 0.5, 1], [100, 0, -100])
  const blur = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [15, 0, 0, 15])

  return (
    <motion.div
      ref={ref}
      className="py-16 flex items-center justify-center"
      style={{ perspective: '1200px' }}
    >
      <motion.h2
        style={{
          scale,
          opacity,
          rotateX,
          y,
          filter: useTransform(blur, (b) => `blur(${b}px)`),
        }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold text-center tracking-tighter text-smooth gpu-accelerated"
      >
        Luxury Living
      </motion.h2>
    </motion.div>
  )
}

function HeroContent() {
  const [isReady, setIsReady] = useState(false)
  const heroOpacity = useMotionValue(0)
  const heroY = useMotionValue(80)
  const heroScale = useMotionValue(0.95)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true)
      animate(heroOpacity, 1, { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] })
      animate(heroY, 0, { duration: 1.8, ease: [0.25, 0.1, 0.25, 1] })
      animate(heroScale, 1, { duration: 2, ease: [0.25, 0.1, 0.25, 1] })
    }, 800)
    return () => clearTimeout(timer)
  }, [heroOpacity, heroY, heroScale])

  return (
    <motion.div
      className="container mx-auto px-4 md:px-8 text-center z-10"
      style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        animate={isReady ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-white/30 uppercase tracking-[0.5em] text-[10px] md:text-xs mb-10 font-sans"
      >
        Premier Real Estate
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
        animate={isReady ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 leading-[0.9] text-smooth"
      >
        Discover Your
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/40 gradient-text-animated">
          Dream Property
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        animate={isReady ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="text-sm md:text-base text-white/40 mb-10 max-w-md mx-auto leading-relaxed"
      >
        Luxury properties with unparalleled service. Your journey to the perfect
        home begins here.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isReady ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1.6 }}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: '0 20px 40px rgba(255,255,255,0.1)',
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full bg-white text-black font-semibold text-sm transition-all"
        >
          View Properties
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold text-sm transition-all"
        >
          Schedule Tour
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

const features = [
  {
    number: '01',
    title: 'Luxury Properties',
    description: 'Exclusive homes in premium locations worldwide.',
  },
  {
    number: '02',
    title: 'Personalized Service',
    description: 'Dedicated agents for your unique real estate journey.',
  },
  {
    number: '03',
    title: 'Market Expertise',
    description: 'Insights and strategies for optimal investments.',
  },
]

const projects = [
  {
    title: 'Oceanfront Villa',
    category: 'Malibu, CA',
    image: '/images/property-1.jpg',
  },
  {
    title: 'Penthouse Suite',
    category: 'Manhattan, NY',
    image: '/images/property-2.jpg',
  },
]

export default function Home() {
  return (
    <div className="relative text-white">
      <ScrollProgressBar />
      <Header />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroContent />
        <ScrollIndicator />
      </section>

      <ScrollTextSection />
      <InfiniteMotionSection />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollAnimatedSection className="mb-12">
            <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-3 font-sans">
              Why Choose Brentley
            </p>
            <ScrollAnimatedText
              as="h2"
              className="text-2xl md:text-4xl font-bold"
              animation="blur"
            >
              Our Excellence
            </ScrollAnimatedText>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <ScrollAnimatedSection
                key={index}
                delay={index * 0.1}
                direction={index % 2 === 0 ? 'up' : 'down'}
              >
                <Card3D className="h-full">
                  <div className="p-6 h-full">
                    <motion.span
                      className="text-5xl font-bold text-white/5 block mb-3"
                      whileHover={{
                        scale: 1.1,
                        color: 'rgba(255,255,255,0.15)',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.number}
                    </motion.span>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card3D>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollAnimatedSection className="mb-12">
            <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-3 font-sans">
              Featured Properties
            </p>
            <ScrollAnimatedText
              as="h2"
              className="text-2xl md:text-4xl font-bold"
              animation="wave"
            >
              Premier Listings
            </ScrollAnimatedText>
          </ScrollAnimatedSection>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <ScrollAnimatedSection
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div className={`grid md:grid-cols-2 gap-6 items-center`}>
                  <Card3D
                    className={`${index % 2 === 1 ? 'md:order-2' : ''}`}
                    depth={30}
                  >
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <motion.div
                        className="w-full h-full"
                        initial={{
                          opacity: 0,
                          scale: 0.6,
                          rotateX: 35,
                          filter: 'blur(15px)',
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          rotateX: 0,
                          filter: 'blur(0px)',
                        }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </motion.div>
                    </div>
                  </Card3D>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-2 font-sans">
                      {project.category}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-4 leading-relaxed">
                      Stunning oceanfront property with panoramic views, modern
                      amenities, and private beach access.
                    </p>
                    <motion.a
                      href="#"
                      whileHover={{ x: 8 }}
                      className="inline-flex items-center gap-2 text-white font-medium text-sm group"
                    >
                      View Details{' '}
                      <motion.span
                        className="inline-block"
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </div>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollAnimatedSection>
            <Card3D depth={40}>
              <div className="p-8 md:p-12 text-center">
                <ScrollAnimatedText
                  as="h2"
                  className="text-2xl md:text-4xl font-bold mb-4"
                  animation="scale"
                >
                  Ready to Find Your Home?
                </ScrollAnimatedText>
                <p className="text-white/50 text-sm mb-8 max-w-md mx-auto leading-relaxed">
                  Let's begin your journey to the perfect property.
                </p>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 25px 50px rgba(255,255,255,0.15)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-white text-black font-semibold text-sm transition-all"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </Card3D>
          </ScrollAnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
