import React from 'react';
import { ArrowLeft, Zap, Wrench, Eye, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AluminiumPage = () => {
  const aluminiumProducts = [
    {
      id: 1,
      name: "Aluminium Sliding Windows",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Sleek sliding windows with smooth operation and modern aesthetics for contemporary buildings.",
      features: ["Smooth sliding", "Corrosion resistant", "Lightweight", "Modern design"],
      price: "Contact for pricing"
    },
    {
      id: 2,
      name: "Aluminium Casement Windows",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Durable casement windows with excellent ventilation and security features.",
      features: ["Excellent ventilation", "High security", "Weather resistant", "Easy maintenance"],
      price: "Contact for pricing"
    },
    {
      id: 3,
      name: "Aluminium Curtain Wall",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Commercial grade curtain wall systems for modern office buildings and high-rises.",
      features: ["Commercial grade", "Structural glazing", "Energy efficient", "Weather sealed"],
      price: "Contact for pricing"
    },
    {
      id: 4,
      name: "Aluminium Folding Doors",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Space-saving folding doors perfect for patios and large openings.",
      features: ["Space saving", "Large openings", "Smooth operation", "Durable hinges"],
      price: "Contact for pricing"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightweight & Strong",
      description: "High strength-to-weight ratio for superior performance"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Low Maintenance",
      description: "Corrosion resistant and easy to maintain"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Modern Aesthetics",
      description: "Sleek profiles for contemporary architecture"
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Eco-Friendly",
      description: "100% recyclable and environmentally sustainable"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-700 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Aluminium Doors & Windows
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
              Modern aluminium solutions offering strength, durability, and contemporary design for commercial and residential projects
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Aluminium?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-gray-700 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Aluminium Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {aluminiumProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-gray-700 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-700">{product.price}</span>
                    <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Aluminium Solutions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch for premium aluminium doors and windows tailored to your project requirements
          </p>
          <Link 
            to="/#contact"
            className="inline-block px-8 py-4 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AluminiumPage;