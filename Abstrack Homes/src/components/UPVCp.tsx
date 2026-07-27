import React from "react";
import { Zap, Wrench, Eye, Recycle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { scrollToContact } from "../utils/scrollToContact";

interface UPVCContentProps {
  showViewAll?: boolean;           // Show/hide button
  viewAllRoute?: string;           // Route for button
  viewAllLabel?: string;           // Button text
}

const UPVCContent: React.FC<UPVCContentProps> = ({
  showViewAll = false,
  viewAllRoute = "/category-layout?category=upvc",
  viewAllLabel = "View All Products",
}) => {
  const navigate = useNavigate();

  const uPVCProducts = [
    {
      id: 1,
      name: "uPVC Sliding Windows",
      image: "/images/sliding 2.jpg",
      description:
        "Sleek sliding windows with smooth operation and modern aesthetics for contemporary buildings.",
      features: ["Smooth sliding", "Corrosion resistant", "Lightweight", "Modern design"],
      price: "Contact for pricing",
    },
    {
      id: 2,
      name: "uPVC Casement Windows",
      image: "/images/casement.jpg",
      description:
        "Durable casement windows with excellent ventilation and security features.",
      features: ["Excellent ventilation", "High security", "Weather resistant", "Easy maintenance"],
      price: "Contact for pricing",
    },
    {
      id: 3,
      name: "uPVC Curtain Wall",
      image: "/images/outdoor-sofa-with-beige-cushions-coffee-table-front-restaurant-window.jpg",
      description:
        "Commercial grade curtain wall systems for modern office buildings and high-rises.",
      features: ["Commercial grade", "Structural glazing", "Energy efficient", "Weather sealed"],
      price: "Contact for pricing",
    },
    {
      id: 4,
      name: "uPVC Folding Doors",
      image: "/images/French doors.png",
      description:
        "Space-saving folding doors perfect for patios and large openings.",
      features: ["Space saving", "Large openings", "Smooth operation", "Durable hinges"],
      price: "Contact for pricing",
    },
  ];

  const benefits = [
    { icon: <Zap className="w-8 h-8" />, title: "Lightweight & Strong", description: "High strength-to-weight ratio for superior performance." },
    { icon: <Wrench className="w-8 h-8" />, title: "Low Maintenance", description: "Corrosion resistant and easy to maintain." },
    { icon: <Eye className="w-8 h-8" />, title: "Modern Aesthetics", description: "Sleek profiles for contemporary architecture." },
    { icon: <Recycle className="w-8 h-8" />, title: "Eco-Friendly", description: "100% recyclable and environmentally sustainable." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-5">
      {/* HERO SECTION */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-navy-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,98,0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 relative">
          <span className="text-gold-400 text-sm tracking-[0.25em] uppercase">Deceuninck</span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold mb-4 mt-2">uPVC Doors & Windows</h1>
          <p className="text-sm sm:text-lg max-w-2xl mx-auto">
            Modern uPVC solutions offering strength, durability, and style.
          </p>
        </div>
      </section>
      <div className="text-gray-900 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 pb-4">
      {/* BENEFITS */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10 text-gray-900">
            Why Choose uPVC?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                <div className="text-gray-700 mb-3 flex justify-center">{b.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1">{b.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10 text-gray-900">Our uPVC Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {uPVCProducts.map((p) => (
              <div key={p.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-48 sm:h-56 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3">{p.description}</p>
                  <ul className="text-gray-600 text-sm space-y-1 mb-3">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-gray-700 rounded-full mr-2"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">{p.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Dynamic “View All Products” button */}
          {showViewAll && (
            <div className="text-center mt-8">
              <button
                onClick={() => navigate(viewAllRoute)}
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
              >
                {viewAllLabel}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need uPVC Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch for premium uPVC doors and windows tailored to your needs.
          </p>
          <button 
            onClick={scrollToContact}
            className="inline-block px-8 py-4 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
          >
            Get Free Quote
          </button>
        </div>
      </section>
      </div>
    </div>
  );
};

export default UPVCContent;
