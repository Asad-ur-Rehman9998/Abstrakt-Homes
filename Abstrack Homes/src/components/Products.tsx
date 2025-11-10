import React from "react";
import { ArrowRight, Shield, Zap, Settings, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import products from "../data/products";

const Products = () => {
  // Select one featured product from each main category
  const featuredProducts = [
    products.find(p => p.category === 'upvc') ?? products[0], // uPVC product
    products.find(p => p.category === 'aluminium') ?? products[1], // Aluminium product
    products.find(p => p.category === 'hardware') ?? products[2], // Hardware product
  ];

  // Map category to icon for visual consistency
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'upvc':
        return <Shield className="w-8 h-8" />;
      case 'aluminium':
        return <Zap className="w-8 h-8" />;
      case 'hardware':
        return <Settings className="w-8 h-8" />;
      case 'profiles':
        return <Layers className="w-8 h-8" />;
      default:
        return <Shield className="w-8 h-8" />;
    }
  };

  return (
    <section id="category" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium range of upvc doors and windows designed for modern living
          </p>
        </div>

        {/* Featured Products Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((product, index) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Icon Overlay */}
                <div className="absolute top-3 right-3 p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-full text-blue-600 transform translate-x-10 group-hover:translate-x-0 transition-transform duration-300">
                  {getCategoryIcon(product.category)}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col h-full">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-2 sm:mb-4 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-100 text-blue-600 text-xs sm:text-sm rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA Button */}
                <div className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/btn mt-auto">
                  <span className="text-sm sm:text-base">Learn More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-10 sm:mt-14 lg:mt-16">
          <Link
            to="/category-layout"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
