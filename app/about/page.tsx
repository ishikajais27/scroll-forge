'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import {
  ScrollAnimatedText,
  ScrollAnimatedSection,
  Card3D,
} from '@/components/scroll-animated-text'

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 35, damping: 30 })

  return (
    <motion.div
      style={{ scaleX, transformOrigin: 'left' }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/30 via-white to-white/30 z-[60]"
    />
  )
}

export default function About() {
  return (
    <div className="relative text-white min-h-screen">
      <ScrollProgressBar />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <ScrollAnimatedSection>
            <motion.p
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.8,
                rotateX: 25,
                filter: 'blur(12px)',
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                filter: 'blur(0px)',
              }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="text-white/50 uppercase tracking-[0.4em] text-xs mb-6 font-sans"
            >
              About Us
            </motion.p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 text-smooth">
              <ScrollAnimatedText animation="infinite-motion" delay={0.3}>
                Elevating Digital
              </ScrollAnimatedText>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50 gradient-text-animated">
                <ScrollAnimatedText animation="infinite-motion" delay={0.5}>
                  Experiences
                </ScrollAnimatedText>
              </span>
            </h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.8,
                rotateX: 25,
                filter: 'blur(12px)',
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                filter: 'blur(0px)',
              }}
              transition={{
                duration: 1.2,
                delay: 0.8,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="text-sm md:text-base text-white/60 max-w-md mx-auto leading-relaxed"
            >
              Designers and developers creating experiences that inspire.
            </motion.p>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Story with 3D Card */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollAnimatedSection direction="left">
              <ScrollAnimatedText
                as="h2"
                className="text-2xl md:text-3xl font-bold mb-4"
                animation="infinite-motion"
              >
                Our Story
              </ScrollAnimatedText>
              <motion.p
                className="text-white/60 text-sm leading-relaxed"
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.9,
                  filter: 'blur(10px)',
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: 'blur(0px)',
                }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                Founded in 2020, we emerged from a passion for pushing
                boundaries in digital design. What began as freelancers evolved
                into a full-service creative studio.
              </motion.p>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection direction="right">
              <Card3D depth={25}>
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
                      src="/images/about-story.jpg"
                      alt="Our Story"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <motion.span
                      className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-6xl"
                      whileHover={{
                        scale: 1.1,
                        color: 'rgba(255,255,255,0.3)',
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      2020
                    </motion.span>
                  </motion.div>
                </div>
              </Card3D>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Values with 3D Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollAnimatedSection className="mb-10">
            <ScrollAnimatedText
              as="h2"
              className="text-2xl md:text-3xl font-bold"
              animation="infinite-motion"
            >
              Our Values
            </ScrollAnimatedText>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Innovation', desc: 'New technologies.' },
              { title: 'Quality', desc: 'Every detail matters.' },
              { title: 'Collaboration', desc: 'Working together.' },
              { title: 'Impact', desc: 'Real results.' },
            ].map((value, index) => (
              <ScrollAnimatedSection key={index} delay={index * 0.1}>
                <Card3D depth={15}>
                  <motion.div
                    className="p-5"
                    initial={{
                      opacity: 0,
                      y: 30,
                      scale: 0.8,
                      rotateX: 25,
                      filter: 'blur(12px)',
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotateX: 0,
                      filter: 'blur(0px)',
                    }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <h3 className="text-base font-bold mb-1">{value.title}</h3>
                    <p className="text-white/60 text-xs">{value.desc}</p>
                  </motion.div>
                </Card3D>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
