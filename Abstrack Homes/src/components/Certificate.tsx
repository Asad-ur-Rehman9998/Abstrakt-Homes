import { motion } from 'framer-motion';
import { Award, CheckCircle, Star } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import AnimatedCounter from './ui/AnimatedCounter';

const Certificate = () => {
  const achievements = [
    { icon: Award, text: 'ASSA ABLOY Authorized Distributor' },
    { icon: CheckCircle, text: 'Authentic Products Guaranteed' },
    { icon: Star, text: 'Premium Hardware Solutions' },
  ];

  return (
    <AnimatedSection id="certificate" className="py-24 lg:py-32 bg-luxury-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(201,169,98,0.06),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm font-medium tracking-[0.25em] uppercase">Certified Excellence</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-4 mb-6">
            Our Certification
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Recognized for excellence and quality in architectural solutions
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-navy-900/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="relative bg-white p-6 sm:p-8 rounded-3xl shadow-luxury transform group-hover:-translate-y-2 transition-all duration-500 border border-gray-100">
                <img
                  src="/Certificate.jpg"
                  alt="ASSA ABLOY Distributorship Authorization Certificate"
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
                <div className="absolute top-6 right-6 bg-gold-500 text-navy-900 p-3 rounded-full shadow-glow">
                  <Award className="w-6 h-6" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
                  ASSA ABLOY Authorized Distributor
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are proud to be an authorized distributor of ASSA ABLOY Guoqiang brand products in Pakistan. This certification validates our commitment to providing authentic, tested, and high-quality window and door hardware solutions.
                </p>
              </div>

              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-gold-500/30 hover:shadow-glass transition-all duration-300"
                  >
                    <div className="p-2.5 bg-gold-500/10 rounded-lg text-gold-600">
                      <achievement.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-navy-900">{achievement.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                  <AnimatedCounter end={15} suffix="+" className="text-2xl sm:text-3xl font-bold text-gold-600 block" />
                  <span className="text-gray-500 text-xs mt-1 block">Years Experience</span>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                  <AnimatedCounter end={500} suffix="+" className="text-2xl sm:text-3xl font-bold text-gold-600 block" />
                  <span className="text-gray-500 text-xs mt-1 block">Projects Completed</span>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                  <AnimatedCounter end={98} suffix="%" className="text-2xl sm:text-3xl font-bold text-gold-600 block" />
                  <span className="text-gray-500 text-xs mt-1 block">Client Satisfaction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Certificate;
