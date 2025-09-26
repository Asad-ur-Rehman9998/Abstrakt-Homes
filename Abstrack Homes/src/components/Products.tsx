import React from 'react';
import { ArrowRight, Shield, Zap, Settings } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      title: "PVC Window",
      description: "Energy Efficiency: Excellent thermal insulation due to multi-chambered frames and compatibility with double or triple glazing, reducing heat loss and energy bills. Durable and low maintenance.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      icon: <Shield className="w-8 h-8" />,
      features: ["Energy Efficient", "Low Maintenance", "Durable"]
    },
    {
      id: 2,
      title: "Transparent Overlay",
      description: "Appearance: A subtle, semi-transparent dark layer that mimics a shadow. Depth, focus, and modern aesthetics in UI design.",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      icon: <Zap className="w-8 h-8" />,
      features: ["Modern Design", "Aesthetic Appeal", "Professional Look"]
    },
    {
      id: 3,
      title: "Handle and Lock",
      description: "Engineered for smooth operation with durability up to 200,000 cycles. Multi-point locking for safety and performance.",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      icon: <Settings className="w-8 h-8" />,
      features: ["200k Cycles", "Multi-point Lock", "Smooth Operation"]
    }
  ];

  return (
    <section id="category" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium range of architectural solutions designed for modern living
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full text-blue-600 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                  {product.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/btn">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;