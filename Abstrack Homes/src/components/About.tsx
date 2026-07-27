import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import AnimatedCounter from './ui/AnimatedCounter';

const timeline = [
  { year: '2010', title: 'Company Founded', description: 'Abstrakt Homes established in Lahore with a vision for premium architectural solutions.' },
  { year: '2015', title: 'ASSA ABLOY Partnership', description: 'Became an authorized ASSA ABLOY distributor for authentic hardware in Pakistan.' },
  { year: '2020', title: 'Deceuninck Profiles', description: 'Expanded to offer Deceuninck and ASAS premium uPVC profile systems.' },
  { year: '2025', title: '500+ Projects', description: 'Completed over 500 premium window and door installations across Lahore and beyond.' },
];

const About = () => {
  return (
    <AnimatedSection id="about" className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,169,98,0.08),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <img src="/images/outdoor-sofa-with-beige-cushions-coffee-table-front-restaurant-window.jpg" alt="" className="w-full h-full object-cover" loading="lazy" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-gold-400 text-sm font-medium tracking-[0.25em] uppercase">About Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Crafting Premium
              <span className="block text-gold-400">Architectural Excellence</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Abstrakt Homes — Premium architectural solutions for modern living.
              We specialize in high-quality PVC windows, aluminum frames, and premium hardware.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <AnimatedCounter end={15} suffix="+" className="text-3xl font-bold text-gold-400 block" />
                <span className="text-gray-400 text-xs mt-1 block">Years Experience</span>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <AnimatedCounter end={500} suffix="+" className="text-3xl font-bold text-gold-400 block" />
                <span className="text-gray-400 text-xs mt-1 block">Projects Completed</span>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <AnimatedCounter end={98} suffix="%" className="text-3xl font-bold text-gold-400 block" />
                <span className="text-gray-400 text-xs mt-1 block">Client Satisfaction</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                <Target className="w-8 h-8 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Our Mission</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    To deliver premium window and door solutions that combine elegance, energy efficiency, and lasting quality for every home and commercial space.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                <Eye className="w-8 h-8 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Our Vision</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    To be Lahore's most trusted premium window company, setting the standard for luxury architectural solutions across Pakistan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-500/50 via-gold-500/20 to-transparent" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-gold-500 border-4 border-navy-900" />
                  <span className="text-gold-400 font-bold text-sm tracking-wider">{item.year}</span>
                  <h4 className="text-white font-semibold text-lg mt-1 mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20"
            >
              <Award className="w-8 h-8 text-gold-400 mb-3" />
              <p className="text-white font-medium">
                Recognized for excellence and quality in architectural solutions
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
