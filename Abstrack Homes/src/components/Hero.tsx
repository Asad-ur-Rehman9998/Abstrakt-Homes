import { motion } from 'framer-motion';
import { ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToContact } from '../utils/scrollToContact';
import MagneticButton from './ui/MagneticButton';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">
      {/* Full-bleed background — sits behind header */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/header.jpg"
          alt="Premium architectural windows and doors by Abstrakt Homes"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-navy-900/40" />
      </div>

      {/* Content — padded below fixed header */}
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-20">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-[0.25em] uppercase text-gold-400 border border-gold-500/30 rounded-full bg-navy-900/40 backdrop-blur-sm"
          >
            Premium Deceuninck & ASSA ABLOY
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1]"
          >
            Let the Light
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500">
              in, keep
            </span>
            the chaos out
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-200 mb-10 max-w-lg leading-relaxed font-light"
          >
            Style and silence in every frame
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <MagneticButton onClick={() => scrollToContact()}>
              <span className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold rounded-xl shadow-glow hover:shadow-luxury transition-shadow">
                Book Consultation
              </span>
            </MagneticButton>
            <MagneticButton onClick={() => scrollToContact()}>
              <span className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all">
                Get Free Quote
              </span>
            </MagneticButton>
            <MagneticButton href="tel:+923054553553" ariaLabel="Call Abstrakt Homes">
              <span className="inline-flex items-center gap-2 px-8 py-4 border border-gold-500/30 text-gold-400 font-semibold rounded-xl hover:bg-gold-500/10 transition-all">
                <Phone className="w-4 h-4" />
                Call Now
              </span>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <Link
              to="/category-layout"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-gold-400 transition-colors text-sm"
            >
              Explore Products
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown className="w-6 h-6 text-gold-400/60" />
        </motion.div>
      </motion.div>

      {/* WhatsApp floating */}
      <a
        href="https://wa.me/923054553553"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 p-4 bg-green-500 text-white rounded-full shadow-luxury hover:bg-green-600 hover:scale-110 transition-all duration-300 lg:hidden"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
