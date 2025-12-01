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

export default function Contact() {
  return (
    <div className="relative text-white min-h-screen">
      <ScrollProgressBar />
      <Header />

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
              Contact Us
            </motion.p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 text-smooth">
              <ScrollAnimatedText animation="infinite-motion" delay={0.3}>
                Get In
              </ScrollAnimatedText>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50 gradient-text-animated">
                <ScrollAnimatedText animation="infinite-motion" delay={0.5}>
                  Touch
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
              Looking for your dream property? Let's find it together.
            </motion.p>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Form with 3D Card */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <ScrollAnimatedSection direction="left">
              <Card3D depth={25}>
                <div className="relative aspect-square overflow-hidden rounded-lg">
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
                      src="/images/contact-hero.jpg"
                      alt="Contact Brentley"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </motion.div>
                </div>
              </Card3D>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection direction="right">
              <Card3D depth={25}>
                <motion.form
                  className="p-6 space-y-5"
                  initial={{
                    opacity: 0,
                    y: 40,
                    scale: 0.9,
                    rotateX: 15,
                    filter: 'blur(10px)',
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    filter: 'blur(0px)',
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <motion.input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-all text-white placeholder:text-white/40 text-sm"
                      whileFocus={{
                        scale: 1.01,
                        borderColor: 'rgba(255,255,255,0.3)',
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <motion.input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-all text-white placeholder:text-white/40 text-sm"
                      whileFocus={{
                        scale: 1.01,
                        borderColor: 'rgba(255,255,255,0.3)',
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <motion.textarea
                      placeholder="Tell us about your property needs..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-all text-white placeholder:text-white/40 resize-none text-sm"
                      whileFocus={{
                        scale: 1.01,
                        borderColor: 'rgba(255,255,255,0.3)',
                      }}
                    />
                  </motion.div>
                  <motion.button
                    type="submit"
                    initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 20px 40px rgba(255,255,255,0.1)',
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-3 rounded-lg bg-white text-black font-semibold text-sm transition-all"
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              </Card3D>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Info with 3D Cards */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Email', value: 'info@brentleyrealestate.com' },
              { label: 'Phone', value: '+1 (310) 555-0123' },
              { label: 'Location', value: 'Beverly Hills, CA' },
            ].map((item, index) => (
              <ScrollAnimatedSection key={index} delay={index * 0.1}>
                <Card3D depth={10}>
                  <motion.div
                    className="p-4 text-center"
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
                      delay: index * 0.15,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <p className="text-white/50 text-xs mb-1 font-sans">
                      {item.label}
                    </p>
                    <p className="font-medium text-sm">{item.value}</p>
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
