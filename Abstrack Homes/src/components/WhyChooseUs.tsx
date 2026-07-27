import { motion } from 'framer-motion';
import { Shield, Thermometer, Volume2, Lock, Palette, HeadphonesIcon } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import TiltCard from './ui/TiltCard';

const features = [
  {
    icon: Shield,
    title: 'ASSA ABLOY Authorized Distributor',
    description: 'Authentic Products Guaranteed — we supply genuine ASSA ABLOY Guoqiang brand hardware in Pakistan.',
  },
  {
    icon: Thermometer,
    title: 'Energy Efficient Windows',
    description: 'Deceuninck uPVC profiles engineered for superior thermal insulation and reduced energy costs.',
  },
  {
    icon: Volume2,
    title: 'Style and Silence',
    description: 'Style and silence in every frame — premium sealing for noise reduction and comfort.',
  },
  {
    icon: Lock,
    title: 'Premium Security',
    description: 'Multi-point locking systems and high-security hardware for complete peace of mind.',
  },
  {
    icon: Palette,
    title: 'Modern Aesthetics',
    description: 'Sleek profiles and contemporary designs that elevate any architectural project.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Installation',
    description: 'Professional window and door installation by experienced craftsmen with 15+ years of expertise.',
  },
];

const WhyChooseUs = () => {
  return (
    <AnimatedSection className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.03),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm font-medium tracking-[0.25em] uppercase">Why Abstrakt Homes</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-4 mb-6">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Premium Hardware Solutions backed by certification, experience, and unwavering quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltCard className="group h-full">
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-luxury-50 to-white border border-gray-100 hover:border-gold-500/30 transition-all duration-500 hover:shadow-luxury overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhyChooseUs;
