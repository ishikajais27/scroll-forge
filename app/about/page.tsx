'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import AnimatedSection from '@/components/animated-section'

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -300])

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
        </motion.div>

        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/50 text-lg uppercase tracking-widest mb-4">
              About Us
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Elevating Digital Experiences
            </h1>
            <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
              We are a team of designers, developers, and strategists dedicated
              to creating digital experiences that inspire, engage, and drive
              results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  Founded in 2020, our studio emerged from a passion for pushing
                  the boundaries of what's possible in digital design. We
                  started with a simple mission: create experiences that matter.
                </p>
                <p>
                  What began as a small team of freelancers quickly evolved into
                  a full-service creative studio. Today, we work with ambitious
                  brands and innovative startups to transform their visions into
                  compelling digital experiences.
                </p>
                <p>
                  Every project we undertake is guided by our core principles:
                  attention to detail, commitment to innovation, and a
                  relentless focus on impact.
                </p>
              </div>
            </AnimatedSection>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center"
            >
              <div className="text-white/30 font-bold text-6xl">2020</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
            <p className="text-white/60 text-lg">
              Talented individuals united by passion and purpose.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Design Lead', 'Creative Director', 'Tech Lead'].map(
              (role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/20 to-white/5 mb-6 overflow-hidden">
                    <motion.div
                      className="w-full h-full flex items-center justify-center text-white/40 font-bold text-4xl group-hover:text-white/60 transition"
                      whileHover={{ scale: 1.1 }}
                    >
                      {index + 1}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Team Member {index + 1}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">{role}</p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Passionate creative professional with years of expertise in
                    delivering exceptional work.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Our Values</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Innovation',
                desc: 'We constantly explore new technologies and approaches to stay ahead.',
              },
              {
                title: 'Quality',
                desc: 'Every detail matters. We obsess over excellence in everything we do.',
              },
              {
                title: 'Collaboration',
                desc: 'Great work happens when we work closely with our clients.',
              },
              {
                title: 'Impact',
                desc: 'We measure success by the real-world results our work achieves.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-white/10 hover:border-white/30 transition"
              >
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
