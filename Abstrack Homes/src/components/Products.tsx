import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Settings, Layers, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import AnimatedSection from './ui/AnimatedSection';
import TiltCard from './ui/TiltCard';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'upvc':
      return Shield;
    case 'aluminium':
      return Zap;
    case 'hardware':
      return Settings;
    case 'profiles':
      return Layers;
    default:
      return Shield;
  }
};

const Products = () => {
  const featuredProducts = [
    products.find((p) => p.category === 'upvc') ?? products[0],
    products.find((p) => p.category === 'aluminium') ?? products[1],
    products.find((p) => p.category === 'hardware') ?? products[2],
  ];

  return (
    <AnimatedSection id="category" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,169,98,0.04),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm font-medium tracking-[0.25em] uppercase">Featured</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-4 mb-6">
            Our Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our premium range of upvc doors and windows designed for modern living
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => {
            const Icon = getCategoryIcon(product.category);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <TiltCard className="group h-full">
                  <Link to={`/product/${product.id}`} className="block h-full">
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-glass hover:shadow-luxury transition-all duration-500 border border-gray-100">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl text-gold-600 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                          <Icon className="w-6 h-6" />
                        </div>

                        {/* Quick view overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full text-navy-900 text-sm font-semibold">
                            <Eye className="w-4 h-4" />
                            Quick View
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                          {product.description}
                        </p>

                        {product.features && product.features.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {product.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gold-500/10 text-gold-700 text-xs rounded-full font-medium"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-gold-600 font-semibold text-sm">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/category-layout"
            className="inline-flex items-center gap-2 px-10 py-4 bg-navy-900 text-gold-400 font-semibold rounded-xl hover:bg-navy-800 transition-all shadow-luxury hover:shadow-luxury-lg"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Products;
