'use client'

import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/50 text-lg uppercase tracking-widest mb-4">
              Let's Talk
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-white/70 max-w-3xl">
              Have a project in mind? We'd love to hear from you. Drop us a line
              and let's create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <label className="block text-sm font-medium mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none focus:bg-white/10 transition text-white placeholder:text-white/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none focus:bg-white/10 transition text-white placeholder:text-white/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none focus:bg-white/10 transition text-white">
                  <option value="">Select a project type</option>
                  <option value="web">Web Design</option>
                  <option value="app">App Development</option>
                  <option value="branding">Branding</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  Project Details
                </label>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none focus:bg-white/10 transition text-white placeholder:text-white/40 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Email', value: 'hello@studio.com' },
              { label: 'Phone', value: '+1 (555) 123-4567' },
              { label: 'Location', value: 'San Francisco, CA' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-white/50 text-sm mb-2">{item.label}</p>
                <p className="text-lg font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
