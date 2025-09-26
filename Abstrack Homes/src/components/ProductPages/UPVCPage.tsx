import React from 'react';
import { ArrowLeft, Shield, Thermometer, Volume2, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const UPVCPage = () => {
  const upvcProducts = [
    {
      id: 1,
      name: "UPVC Casement Windows",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Energy-efficient casement windows with multi-point locking system and excellent thermal insulation.",
      features: ["Multi-point locking", "Double glazing ready", "Weather resistant", "Low maintenance"],
      price: "Contact for pricing"
    },
    {
      id: 2,
      name: "UPVC Sliding Windows",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Smooth sliding operation with superior sealing and modern aesthetics for contemporary homes.",
      features: ["Smooth operation", "Space saving", "Superior sealing", "Modern design"],
      price: "Contact for pricing"
    },
    {
      id: 3,
      name: "UPVC French Doors",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Elegant French doors with excellent security features and thermal performance.",
      features: ["Elegant design", "High security", "Thermal efficiency", "Durable construction"],
      price: "Contact for pricing"
    },
    {
      id: 4,
      name: "UPVC Tilt & Turn Windows",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Versatile tilt and turn functionality with excellent ventilation control and easy cleaning.",
      features: ["Dual operation", "Easy cleaning", "Ventilation control", "Child safety"],
      price: "Contact for pricing"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Superior Security",
      description: "Multi-point locking systems and reinforced frames"
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Thermal Efficiency",
      description: "Excellent insulation reduces energy costs"
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "Sound Insulation",
      description: "Reduces external noise for peaceful living"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Weather Resistant",
      description: "Withstands harsh weather conditions"
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              UPVC Doors & Windows
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
              Premium UPVC solutions combining energy efficiency, security, and modern aesthetics for your home
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose UPVC?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">
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
            Our UPVC Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {upvcProducts.map((product) => (
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
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-600">{product.price}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
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
            Ready to Upgrade Your Home?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote on our premium UPVC doors and windows
          </p>
          <Link 
            to="/#contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UPVCPage;