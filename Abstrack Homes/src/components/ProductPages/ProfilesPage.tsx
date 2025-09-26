import React from 'react';
import { ArrowLeft, Layers, Ruler, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfilesPage = () => {
  const profileProducts = [
    {
      id: 1,
      name: "UPVC Window Profiles",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Multi-chambered UPVC profiles designed for superior thermal performance and structural integrity.",
      features: ["Multi-chambered design", "Thermal breaks", "Reinforcement ready", "Weather resistant"],
      price: "Contact for pricing"
    },
    {
      id: 2,
      name: "Aluminium Window Profiles",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Precision-engineered aluminium profiles for modern architectural applications.",
      features: ["Precision engineering", "Anodized finish", "Structural strength", "Corrosion resistant"],
      price: "Contact for pricing"
    },
    {
      id: 3,
      name: "Door Frame Profiles",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Robust door frame profiles suitable for both residential and commercial applications.",
      features: ["High strength", "Easy installation", "Versatile design", "Long-lasting"],
      price: "Contact for pricing"
    },
    {
      id: 4,
      name: "Curtain Wall Profiles",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Commercial-grade curtain wall profiles for large-scale architectural projects.",
      features: ["Commercial grade", "Structural glazing", "Weather sealed", "Modular system"],
      price: "Contact for pricing"
    }
  ];

  const benefits = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Multi-Chambered Design",
      description: "Advanced chamber technology for superior insulation"
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Precision Manufacturing",
      description: "Exact dimensions and tolerances for perfect fit"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy Efficient",
      description: "Thermal breaks and insulation for energy savings"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Tested and certified for performance standards"
    }
  ];

  const specifications = [
    {
      category: "UPVC Profiles",
      specs: [
        "Profile depth: 60mm, 70mm, 80mm",
        "Chambers: 3, 4, 5, 6 chamber options",
        "Glazing: Single, double, triple glazing ready",
        "Colors: White, woodgrain, custom colors"
      ]
    },
    {
      category: "Aluminium Profiles",
      specs: [
        "Profile depth: 45mm, 50mm, 60mm",
        "Thermal break: Available",
        "Finish: Anodized, powder coated",
        "Strength: High structural integrity"
      ]
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Window & Door Profiles
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
              Precision-engineered profiles for UPVC and aluminium window and door systems with superior performance
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Profile Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-green-600 mb-4 flex justify-center">
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
            Our Profile Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {profileProducts.map((product) => (
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
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-green-600">{product.price}</span>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{spec.category}</h3>
                <ul className="space-y-3">
                  {spec.specs.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Custom Profiles?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for custom profile solutions tailored to your specific project requirements
          </p>
          <Link 
            to="/#contact"
            className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProfilesPage;