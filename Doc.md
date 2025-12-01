1. Home Page (/)
   What it does:

Shows our best luxury properties right away

Explains why people should choose Brentley

Makes visitors want to see more properties

Gets people interested in working with us

Visitor sees:

Beautiful property photos

Easy buttons to explore

Reasons we're different

Simple way to start looking

2. About Page (/about)
   What it does:

Tells our real story - why we started

Shows the real people behind Brentley

Builds trust and makes us feel human

Shows we know what we're doing

Visitor learns:

Who we are as people

Why we care about real estate

Our team's experience

What matters to us

3. Services Page (/services)
   What it does:

Clearly explains what we offer

Shows how we help buyers

Shows how we help sellers

Explains property management

Visitor understands:

How we help find homes

How we help sell homes

How we take care of properties

What to expect working with us

4. Contact Page (/contact)
   What it does:

Makes it easy to get in touch

Shows where to find us

Provides contact information

Simple form to reach out

Visitor can:

Send a message easily

See our office location

Call or email us

Start a conversation

Technology Stack
Core Technologies:
Next.js - Modern React framework

React - JavaScript library for building user interfaces

TypeScript - Programming language with type checking

Tailwind CSS - Utility-first CSS framework

Animation & Motion Library:
Framer Motion - Animation library for React

NOT GSAP - We don't use GreenSock Animation Platform

Key Features Using Framer Motion:
motion components

useScroll hook for scroll tracking

useSpring for smooth animations

useTransform for value transformations

useInView for viewport detection

useMotionValue for animated values

animate function for manual animations

Styling & Visual Effects:
CSS Animations in globals.css:

gradient-shift - Moving gradient text

float - Floating animation

glitter-move - Glitter particle effect

text-reveal - Text reveal animation

shimmer - Shimmering effect

sparkle - Sparkle animation

border-glow - Glowing border effect

Custom CSS Classes:

gpu-accelerated - GPU optimization

glass-morphism - Glass-like effect

text-smooth - Smooth text rendering

gradient-text-animated - Animated gradient text

Components We Built:
Header - Navigation component

Footer - Page footer

ScrollAnimatedText - Text animations on scroll

ScrollAnimatedSection - Section animations

Card3D - 3D card components

ParallaxText - Parallax text effects

GlobalScrollVideo - Background video with scroll effects

ScrollTextSection - Full-screen scroll text section

ScrollProgressBar - Top scroll progress indicator

Development Setup:
All components use 'use client' directive

App Router structure (/app directory)

Component-based architecture (/components directory)

TypeScript for type safety

Next.js Image component for optimized images

usePathname hook for route detection

Animation Types Implemented:
Scroll-driven animations (tracking scroll progress)

Viewport-triggered animations (when elements come into view)

Spring physics animations (natural movement)

Transform animations (scale, rotate, translate)

Filter animations (blur, opacity changes)

3D card hover effects

Gradient animations

Performance Optimizations:
will-change properties for animation hints

GPU acceleration classes

transform: translateZ(0) for hardware acceleration

Next.js Image component optimization
