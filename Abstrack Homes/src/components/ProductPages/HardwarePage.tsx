import React from 'react';
import { ArrowLeft, Settings, Lock, Wrench, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const HardwarePage = () => {
  const hardwareProducts = [
    {
      id: 1,
      name: "Multi-Point Locking Systems",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Advanced multi-point locking mechanisms for maximum security and smooth operation.",
      features: ["200,000 cycle durability", "Multi-point security", "Smooth operation", "Weather resistant"],
      price: "Contact for pricing"
    },
    {
      id: 2,
      name: "Window Handles & Locks",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Premium window handles with integrated locking mechanisms for security and ease of use.",
      features: ["Ergonomic design", "Integrated locks", "Corrosion resistant", "Easy installation"],
      price: "Contact for pricing"
    },
    {
      id: 3,
      name: "Door Hinges & Hardware",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Heavy-duty hinges and door hardware for residential and commercial applications.",
      features: ["Heavy-duty construction", "Adjustable", "Long-lasting", "Professional grade"],
      price: "Contact for pricing"
    },
    {
      id: 4,
      name: "Sealing & Weatherstripping",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "High-quality sealing solutions for energy efficiency and weather protection.",
      features: ["Energy efficient", "Weather protection", "Long-lasting", "Easy installation"],
      price: "Contact for pricing"
    }
  ];

  const benefits = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Precision Engineering",
      description: "Manufactured to exact specifications for perfect fit"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Enhanced Security",
      description: "Advanced locking mechanisms for maximum protection"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Easy Installation",
      description: "Designed for quick and hassle-free installation"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Durability Tested",
      description: "Tested for 200,000+ cycles of operation"
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
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Premium Hardware
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
              ASSA ABLOY Guoqiang brand hardware solutions engineered for performance, security, and longevity
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Hardware?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-orange-600 mb-4 flex justify-center">
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
            Our Hardware Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {hardwareProducts.map((product) => (
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
                          <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-orange-600">{product.price}</span>
                    <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSA ABLOY Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ASSA ABLOY Authorized Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As an authorized distributor, we guarantee authentic ASSA ABLOY Guoqiang brand products with full warranty and support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aluminum Hardware</h3>
              <p className="text-gray-600">Premium aluminum window and door hardware solutions</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Hardware</h3>
              <p className="text-gray-600">Heavy-duty hardware for commercial applications</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">UPVC Hardware</h3>
              <p className="text-gray-600">Specialized hardware for UPVC door and window systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Quality Hardware?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for authentic ASSA ABLOY hardware solutions with guaranteed quality and performance
          </p>
          <Link 
            to="/#contact"
            className="inline-block px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HardwarePage;