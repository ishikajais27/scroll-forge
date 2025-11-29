// 'use client'

// import { motion } from 'framer-motion'
// import AnimatedSection from './animated-section'

// export default function ShowcaseSection() {
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

//         <div className="space-y-20">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 100 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
//               viewport={{ once: true, margin: '-100px' }}
//               className="group grid md:grid-cols-2 gap-8 md:gap-16 items-center"
//             >
//               <div
//                 className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 ${
//                   index % 2 === 1 ? 'md:order-2' : ''
//                 }`}
//               >
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent"
//                   whileHover={{ opacity: 0.8 }}
//                   transition={{ duration: 0.4 }}
//                 />
//                 <motion.div
//                   className="absolute inset-0 flex items-center justify-center"
//                   initial={{ scale: 1 }}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//                 >
//                   <span className="text-white/20 font-bold text-8xl">
//                     {String(index + 1).padStart(2, '0')}
//                   </span>
//                 </motion.div>
//               </div>

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

import { motion } from 'framer-motion'
import AnimatedSection from './animated-section'

export default function ShowcaseSection() {
  const projects = [
    { title: 'Creative Motion Platform', category: 'Web Application' },
    { title: 'Design System Suite', category: 'Design System' },
    { title: 'Interactive Showcase', category: 'Brand Experience' },
  ]

  return (
    <section className="relative py-24 md:py-40">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection className="mb-20">
          <p className="text-white/50 uppercase tracking-[0.3em] text-sm mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Featured Projects
          </h2>
        </AnimatedSection>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              className="group grid md:grid-cols-2 gap-8 md:gap-16 items-center"
            >
              <div
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent"
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-white/20 font-bold text-8xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </motion.div>
              </div>

              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                >
                  <p className="text-white/40 text-sm uppercase tracking-[0.3em] mb-3">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-lg mb-8 leading-relaxed">
                    A sophisticated platform combining advanced animation
                    capabilities with intuitive design tools, enabling teams to
                    create stunning digital experiences.
                  </p>
                  <motion.a
                    href="#"
                    whileHover={{ x: 10 }}
                    className="inline-flex items-center gap-3 text-white font-semibold group-hover:gap-5 transition-all duration-300"
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
