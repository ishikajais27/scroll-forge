// 'use client'

// import { motion, useScroll, useSpring } from 'framer-motion'
// import Image from 'next/image'
// import Header from '@/components/header'
// import Footer from '@/components/footer'
// import {
//   ScrollAnimatedText,
//   ScrollAnimatedSection,
//   Card3D,
// } from '@/components/scroll-animated-text'

// function ScrollProgressBar() {
//   const { scrollYProgress } = useScroll()
//   const scaleX = useSpring(scrollYProgress, { stiffness: 35, damping: 30 })

//   return (
//     <motion.div
//       style={{ scaleX, transformOrigin: 'left' }}
//       className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/30 via-white to-white/30 z-[60]"
//     />
//   )
// }

// const services = [
//   {
//     id: '01',
//     title: 'Motion Design',
//     description: 'Fluid animations that engage users.',
//     features: ['Micro-interactions', 'Transitions'],
//     image: '/images/service-motion.jpg',
//   },
//   {
//     id: '02',
//     title: 'Web Development',
//     description: 'High-performance applications.',
//     features: ['Next.js', 'APIs'],
//     image: '/images/service-web.jpg',
//   },
//   {
//     id: '03',
//     title: 'Brand Identity',
//     description: 'Distinctive visuals.',
//     features: ['Logo Design', 'Guidelines'],
//     image: '/images/service-brand.jpg',
//   },
//   {
//     id: '04',
//     title: 'UI/UX Design',
//     description: 'Intuitive experiences.',
//     features: ['Research', 'Prototyping'],
//     image: '/images/service-uiux.jpg',
//   },
// ]

// export default function Services() {
//   return (
//     <div className="relative text-white min-h-screen">
//       <ScrollProgressBar />
//       <Header />

//       {/* Hero */}
//       <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
//         <div className="container mx-auto px-4 md:px-8 text-center">
//           <ScrollAnimatedSection>
//             <motion.p
//               initial={{
//                 opacity: 0,
//                 y: 30,
//                 scale: 0.8,
//                 rotateX: 25,
//                 filter: 'blur(12px)',
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//                 rotateX: 0,
//                 filter: 'blur(0px)',
//               }}
//               transition={{
//                 duration: 1.2,
//                 delay: 0.2,
//                 ease: [0.23, 1, 0.32, 1],
//               }}
//               className="text-white/50 uppercase tracking-[0.4em] text-xs mb-6 font-sans"
//             >
//               What We Do
//             </motion.p>
//             <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 text-smooth">
//               <ScrollAnimatedText animation="infinite-motion" delay={0.3}>
//                 Services That
//               </ScrollAnimatedText>
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50 gradient-text-animated">
//                 <ScrollAnimatedText animation="infinite-motion" delay={0.5}>
//                   Move Forward
//                 </ScrollAnimatedText>
//               </span>
//             </h1>
//             <motion.p
//               initial={{
//                 opacity: 0,
//                 y: 30,
//                 scale: 0.8,
//                 rotateX: 25,
//                 filter: 'blur(12px)',
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//                 rotateX: 0,
//                 filter: 'blur(0px)',
//               }}
//               transition={{
//                 duration: 1.2,
//                 delay: 0.8,
//                 ease: [0.23, 1, 0.32, 1],
//               }}
//               className="text-sm md:text-base text-white/60 max-w-md mx-auto leading-relaxed"
//             >
//               Strategic thinking with exceptional design.
//             </motion.p>
//           </ScrollAnimatedSection>
//         </div>
//       </section>

//       {/* Services with 3D Cards */}
//       <section className="py-12 md:py-16">
//         <div className="container mx-auto px-4 md:px-8">
//           <ScrollAnimatedSection className="mb-10">
//             <ScrollAnimatedText
//               as="h2"
//               className="text-2xl md:text-3xl font-bold"
//               animation="infinite-motion"
//             >
//               Our Expertise
//             </ScrollAnimatedText>
//           </ScrollAnimatedSection>

//           <div className="grid md:grid-cols-2 gap-5">
//             {services.map((service, index) => (
//               <ScrollAnimatedSection
//                 key={service.id}
//                 delay={index * 0.1}
//                 direction={index % 2 === 0 ? 'left' : 'right'}
//               >
//                 <Card3D depth={20}>
//                   <motion.div
//                     className="p-6"
//                     initial={{
//                       opacity: 0,
//                       y: 30,
//                       scale: 0.85,
//                       rotateX: 20,
//                       filter: 'blur(12px)',
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       y: 0,
//                       scale: 1,
//                       rotateX: 0,
//                       filter: 'blur(0px)',
//                     }}
//                     viewport={{ once: true, margin: '-30px' }}
//                     transition={{
//                       duration: 1.1,
//                       delay: index * 0.1,
//                       ease: [0.23, 1, 0.32, 1],
//                     }}
//                   >
//                     <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
//                       <motion.div
//                         className="w-full h-full"
//                         initial={{
//                           opacity: 0,
//                           scale: 0.6,
//                           rotateX: 35,
//                           filter: 'blur(15px)',
//                         }}
//                         whileInView={{
//                           opacity: 1,
//                           scale: 1,
//                           rotateX: 0,
//                           filter: 'blur(0px)',
//                         }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
//                       >
//                         <Image
//                           src={service.image || '/placeholder.svg'}
//                           alt={service.title}
//                           fill
//                           className="object-cover transition-transform duration-700 hover:scale-110"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//                       </motion.div>
//                     </div>
//                     <motion.span
//                       className="text-4xl font-bold text-white/5 block mb-3"
//                       initial={{
//                         opacity: 0,
//                         scale: 0.6,
//                         rotateX: 35,
//                         filter: 'blur(15px)',
//                       }}
//                       whileInView={{
//                         opacity: 1,
//                         scale: 1,
//                         rotateX: 0,
//                         filter: 'blur(0px)',
//                       }}
//                       viewport={{ once: true }}
//                       whileHover={{
//                         scale: 1.1,
//                         color: 'rgba(255,255,255,0.15)',
//                       }}
//                       transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
//                     >
//                       {service.id}
//                     </motion.span>
//                     <h3 className="text-lg font-bold mb-2">{service.title}</h3>
//                     <p className="text-white/60 text-sm mb-3 leading-relaxed">
//                       {service.description}
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {service.features.map((feature, fIndex) => (
//                         <motion.span
//                           key={feature}
//                           className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/70 border border-white/10"
//                           initial={{
//                             opacity: 0,
//                             scale: 0.8,
//                             filter: 'blur(8px)',
//                           }}
//                           whileInView={{
//                             opacity: 1,
//                             scale: 1,
//                             filter: 'blur(0px)',
//                           }}
//                           viewport={{ once: true }}
//                           transition={{
//                             duration: 0.6,
//                             delay: 0.3 + fIndex * 0.1,
//                             ease: [0.23, 1, 0.32, 1],
//                           }}
//                           whileHover={{
//                             scale: 1.05,
//                             backgroundColor: 'rgba(255,255,255,0.1)',
//                           }}
//                         >
//                           {feature}
//                         </motion.span>
//                       ))}
//                     </div>
//                   </motion.div>
//                 </Card3D>
//               </ScrollAnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA with 3D Card */}
//       <section className="py-12 md:py-16">
//         <div className="container mx-auto px-4 md:px-8">
//           <ScrollAnimatedSection>
//             <Card3D depth={35}>
//               <motion.div
//                 className="p-8 md:p-12 text-center"
//                 initial={{
//                   opacity: 0,
//                   y: 40,
//                   scale: 0.85,
//                   rotateX: 20,
//                   filter: 'blur(15px)',
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                   scale: 1,
//                   rotateX: 0,
//                   filter: 'blur(0px)',
//                 }}
//                 viewport={{ once: true, margin: '-50px' }}
//                 transition={{ duration: 1.3, ease: [0.23, 1, 0.32, 1] }}
//               >
//                 <ScrollAnimatedText
//                   as="h2"
//                   className="text-2xl md:text-3xl font-bold mb-3"
//                   animation="infinite-motion"
//                 >
//                   Ready to Start?
//                 </ScrollAnimatedText>
//                 <motion.p
//                   className="text-white/60 text-sm mb-6 max-w-md mx-auto leading-relaxed"
//                   initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
//                   whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 0.8,
//                     delay: 0.2,
//                     ease: [0.23, 1, 0.32, 1],
//                   }}
//                 >
//                   Let's transform your vision.
//                 </motion.p>
//                 <motion.button
//                   initial={{
//                     opacity: 0,
//                     y: 20,
//                     scale: 0.9,
//                     filter: 'blur(8px)',
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     y: 0,
//                     scale: 1,
//                     filter: 'blur(0px)',
//                   }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 0.8,
//                     delay: 0.3,
//                     ease: [0.23, 1, 0.32, 1],
//                   }}
//                   whileHover={{
//                     scale: 1.05,
//                     boxShadow: '0 25px 50px rgba(255,255,255,0.15)',
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-3 rounded-full bg-white text-black font-semibold text-sm transition-all"
//                 >
//                   Start a Project
//                 </motion.button>
//               </motion.div>
//             </Card3D>
//           </ScrollAnimatedSection>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
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

const services = [
  {
    id: '01',
    title: 'Property Acquisition',
    description: 'Finding your perfect luxury home.',
    features: ['Market Analysis', 'Property Tours', 'Negotiation'],
    image: '/images/service-buying.jpg',
  },
  {
    id: '02',
    title: 'Property Sales',
    description: 'Maximizing your property value.',
    features: ['Valuation', 'Marketing', 'Closing'],
    image: '/images/service-selling.jpg',
  },
  {
    id: '03',
    title: 'Property Management',
    description: 'Comprehensive asset management.',
    features: ['Maintenance', 'Tenant Relations', 'Reporting'],
    image: '/images/service-management.jpg',
  },
  {
    id: '04',
    title: 'Investment Consulting',
    description: 'Strategic real estate investments.',
    features: ['Portfolio Analysis', 'Market Research', 'ROI Planning'],
    image: '/images/service-investment.jpg',
  },
]

export default function Services() {
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
              Our Services
            </motion.p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 text-smooth">
              <ScrollAnimatedText animation="infinite-motion" delay={0.3}>
                Comprehensive
              </ScrollAnimatedText>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50 gradient-text-animated">
                <ScrollAnimatedText animation="infinite-motion" delay={0.5}>
                  Real Estate Solutions
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
              End-to-end services for buyers, sellers, and investors.
            </motion.p>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Services with 3D Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollAnimatedSection className="mb-10">
            <ScrollAnimatedText
              as="h2"
              className="text-2xl md:text-3xl font-bold"
              animation="infinite-motion"
            >
              Our Expertise
            </ScrollAnimatedText>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <ScrollAnimatedSection
                key={service.id}
                delay={index * 0.1}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <Card3D depth={20}>
                  <motion.div
                    className="p-6"
                    initial={{
                      opacity: 0,
                      y: 30,
                      scale: 0.85,
                      rotateX: 20,
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
                      duration: 1.1,
                      delay: index * 0.1,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
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
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      </motion.div>
                    </div>
                    <motion.span
                      className="text-4xl font-bold text-white/5 block mb-3"
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
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        color: 'rgba(255,255,255,0.15)',
                      }}
                      transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                    >
                      {service.id}
                    </motion.span>
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-white/60 text-sm mb-3 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, fIndex) => (
                        <motion.span
                          key={feature}
                          className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/70 border border-white/10"
                          initial={{
                            opacity: 0,
                            scale: 0.8,
                            filter: 'blur(8px)',
                          }}
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                            filter: 'blur(0px)',
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: 0.3 + fIndex * 0.1,
                            ease: [0.23, 1, 0.32, 1],
                          }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: 'rgba(255,255,255,0.1)',
                          }}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </Card3D>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with 3D Card */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollAnimatedSection>
            <Card3D depth={35}>
              <motion.div
                className="p-8 md:p-12 text-center"
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.85,
                  rotateX: 20,
                  filter: 'blur(15px)',
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                  filter: 'blur(0px)',
                }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <ScrollAnimatedText
                  as="h2"
                  className="text-2xl md:text-3xl font-bold mb-3"
                  animation="infinite-motion"
                >
                  Ready to Begin?
                </ScrollAnimatedText>
                <motion.p
                  className="text-white/60 text-sm mb-6 max-w-md mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  Let's find your perfect property together.
                </motion.p>
                <motion.button
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.9,
                    filter: 'blur(8px)',
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: 'blur(0px)',
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 25px 50px rgba(255,255,255,0.15)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-white text-black font-semibold text-sm transition-all"
                >
                  Schedule Consultation
                </motion.button>
              </motion.div>
            </Card3D>
          </ScrollAnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
