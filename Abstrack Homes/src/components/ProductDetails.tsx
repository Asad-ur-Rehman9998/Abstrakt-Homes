import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Zap, Settings, Layers } from "lucide-react";
import products from "../data/products";
import Header from "./Header";
import Footer from "./Footer";
import { scrollToContact } from "../utils/scrollToContact";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center text-gray-500 text-xl">
          Product not found
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className='flex-grow py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className='flex items-center text-blue-600 font-semibold hover:text-blue-700 mb-10 transition-colors'
          >
            <ArrowLeft className='w-5 h-5 mr-2' />
            Back to Products
          </button>

          {/* Product Detail Card */}
          <div className='bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl'>
            <div className='relative h-96'>
              <img
                src={product.image}
                alt={product.title}
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>

              {/* Icon Overlay */}
              <div className="absolute top-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-full">
                {/* Choose a simple icon per category */}
                {product.category === 'upvc' && <Shield className="w-10 h-10 text-blue-600" />}
                {product.category === 'aluminium' && <Zap className="w-10 h-10 text-blue-600" />}
                {product.category === 'hardware' && <Settings className="w-10 h-10 text-blue-600" />}
                {product.category === 'profiles' && <Layers className="w-10 h-10 text-blue-600" />}
              </div>
            </div>

            {/* Content */}
            <div className='p-10'>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">{product.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-3 mb-8">
                {(product.features || []).map((feature, i) => (
                  <span key={i} className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => scrollToContact()}
                aria-label={`Contact us about ${product.title}`}
                className='px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all'
              >
                Contact Us for Pricing
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetails;
