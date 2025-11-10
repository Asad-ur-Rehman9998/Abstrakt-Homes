import React from "react";
import { Settings, Lock, Wrench, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { scrollToContact } from "../utils/scrollToContact";

interface HardwareContentProps {
  showViewAll?: boolean;
  viewAllRoute?: string;
  viewAllLabel?: string;
}

const HardwareContent: React.FC<HardwareContentProps> = ({
  showViewAll = false,
  viewAllRoute = "/category-layout?category=hardware",
  viewAllLabel = "View All Products",
}) => {
  const hardwareProducts = [
    {
      id: 1,
      name: "Multi-Point Locking Systems",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Advanced multi-point locking mechanisms for maximum security and smooth operation.",
      features: ["200,000 cycle durability", "Multi-point security", "Smooth operation", "Weather resistant"],
      price: "Contact for pricing",
    },
    {
      id: 2,
      name: "Window Handles & Locks",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Premium window handles with integrated locking mechanisms for security and ease of use.",
      features: ["Ergonomic design", "Integrated locks", "Corrosion resistant", "Easy installation"],
      price: "Contact for pricing",
    },
    {
      id: 3,
      name: "Door Hinges & Hardware",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Heavy-duty hinges and door hardware for residential and commercial applications.",
      features: ["Heavy-duty construction", "Adjustable", "Long-lasting", "Professional grade"],
      price: "Contact for pricing",
    },
    {
      id: 4,
      name: "Sealing & Weatherstripping",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "High-quality sealing solutions for energy efficiency and weather protection.",
      features: ["Energy efficient", "Weather protection", "Long-lasting", "Easy installation"],
      price: "Contact for pricing",
    },
  ];

  const benefits = [
    { icon: <Settings className="w-8 h-8" />, title: "Precision Engineering", description: "Manufactured to exact specifications for perfect fit." },
    { icon: <Lock className="w-8 h-8" />, title: "Enhanced Security", description: "Advanced locking mechanisms for maximum protection." },
    { icon: <Wrench className="w-8 h-8" />, title: "Easy Installation", description: "Designed for quick and hassle-free installation." },
    { icon: <Shield className="w-8 h-8" />, title: "Durability Tested", description: "Tested for 200,000+ cycles of operation." },
  ];

  return (
    <div className="text-gray-900">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Premium Hardware</h1>
          <p className="text-sm sm:text-lg max-w-2xl mx-auto">
            ASSA ABLOY Guoqiang brand hardware engineered for performance, security, and longevity.
          </p>
        </div>
      </section>
      <div className="text-gray-900 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 pb-4">
        {/* Benefits */}
        <section className="py-8 sm:py-12">
          <h2 className="text-3xl font-bold text-center mb-6 sm:mb-8">Why Choose Our Hardware?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center p-4 sm:p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                <div className="text-orange-600 mb-2 sm:mb-3 flex justify-center">{benefit.icon}</div>
                <h3 className="font-semibold text-lg mb-1 sm:mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section id="hardware" className="py-8 sm:py-12 bg-white">
          <h2 className="text-3xl font-bold text-center mb-6 sm:mb-8">Our Hardware Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {hardwareProducts.map(p => (
              <div key={p.id} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg font-semibold mb-1 sm:mb-2">{p.name}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3">{p.description}</p>
                  <ul className="text-gray-600 text-sm space-y-1 mb-2 sm:mb-3">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>{f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-orange-600 font-medium text-sm sm:text-base">{p.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          {showViewAll && (
            <div className="text-center mt-6 sm:mt-10">
              <Link
                to={viewAllRoute}
                className="inline-block bg-orange-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-orange-700 transition"
              >
                {viewAllLabel} →
              </Link>
            </div>
          )}
        </section>

        {/* CTA */}
                <section className="py-16 bg-gray-900 text-white text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Quality Hardware?</h2>
                  <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Contact us for authentic ASSA ABLOY hardware solutions with guaranteed quality and performance.
                  </p>
            <button
              onClick={scrollToContact}
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition cursor-pointer"
            >
              Get Free Quote
            </button>
                </section>
      </div>

    </div>
  );
};

export default HardwareContent;
