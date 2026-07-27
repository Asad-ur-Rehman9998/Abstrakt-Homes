import { motion } from 'framer-motion';
import { Shield, DoorOpen, Wrench, Layers, Sparkles, GlassWater } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './ui/AnimatedSection';
import TiltCard from './ui/TiltCard';

const services = [
  {
    icon: Shield,
    title: 'Deceuninck uPVC Windows',
    description: 'Premium uPVC sliding, casement, and tilt & turn windows with superior insulation and modern aesthetics.',
    href: '/upvc-doors-windows',
    image: '/images/sliding 2.jpg',
  },
  {
    icon: DoorOpen,
    title: 'Deceuninck Doors',
    description: 'Elegant uPVC folding doors and entrance systems designed for security, style, and seamless indoor-outdoor living.',
    href: '/upvc-doors-windows',
    image: '/images/French doors.png',
  },
  {
    icon: Wrench,
    title: 'ASSA ABLOY Hardware',
    description: 'Authorized distributor of ASSA ABLOY multi-point locks, handles, hinges, and weatherstripping.',
    href: '/hardware',
    image: '/images/casement 4.jpg',
  },
  {
    icon: Layers,
    title: 'Premium Window Accessories',
    description: 'Complete range of premium accessories for window and door systems — handles, seals, and fittings.',
    href: '/hardware',
    image: '/images/casement 5.jpg',
  },
  {
    icon: Sparkles,
    title: 'Sliding & Casement Windows',
    description: 'Smooth-operating sliding windows and high-security casement systems for residential and commercial projects.',
    href: '/upvc-doors-windows',
    image: '/images/casement.jpg',
  },
  {
    icon: GlassWater,
    title: 'Glass Solutions & Aluminium',
    description: 'Modern aluminium systems and glass solutions with slim sightlines for architectural excellence.',
    href: '/aluminium-doors-windows',
    image: '/images/alu 1.png',
  },
];

const Services = () => {
  return (
    <AnimatedSection id="services" className="py-24 lg:py-32 bg-luxury-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,98,0.05),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold-600 text-sm font-medium tracking-[0.25em] uppercase"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-4 mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Discover our premium range of uPVC doors and windows designed for modern living
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltCard className="group h-full">
                <Link to={service.href} className="block h-full">
                  <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-glass hover:shadow-luxury transition-all duration-500 border border-gray-100/80">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl text-gold-600">
                        <service.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                      <span className="inline-block mt-4 text-gold-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Services;
