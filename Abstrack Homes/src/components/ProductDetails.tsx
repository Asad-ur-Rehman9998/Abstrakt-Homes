import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Zap, Settings, Layers, Phone } from "lucide-react";
import products from "../data/products";
import Header from "./Header";
import Footer from "./Footer";
import { scrollToContact } from "../utils/scrollToContact";
import MagneticButton from "./ui/MagneticButton";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-luxury-50">
        <Header />
        <div className="flex-grow flex items-center justify-center text-gray-500 text-xl pt-28">
          Product not found
        </div>
        <Footer />
      </div>
    );
  }

  const CategoryIcon =
    product.category === "upvc"
      ? Shield
      : product.category === "aluminium"
        ? Zap
        : product.category === "hardware"
          ? Settings
          : Layers;

  return (
    <div className="min-h-screen flex flex-col bg-luxury-50">
      <Header />
      <section className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gold-600 font-semibold hover:text-gold-500 mb-10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-luxury overflow-hidden border border-gray-100"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative h-72 lg:h-auto lg:min-h-[500px] overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                <div className="absolute top-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-2xl text-gold-600">
                  <CategoryIcon className="w-8 h-8" />
                </div>
              </div>

              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <span className="text-gold-600 text-sm font-medium tracking-wider uppercase mb-3">
                  {product.category}
                </span>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
                  {product.title}
                </h1>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{product.description}</p>

                {(product.features || []).length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {(product.features || []).map((feature, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gold-500/10 text-gold-700 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton onClick={() => scrollToContact()}>
                    <span className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-gold-400 font-semibold rounded-xl hover:bg-navy-800 transition-colors shadow-luxury">
                      Contact Us for Pricing
                    </span>
                  </MagneticButton>
                  <MagneticButton href="tel:+923057799977" ariaLabel="Call sales team">
                    <span className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 text-navy-900 font-semibold rounded-xl hover:border-gold-500/50 transition-colors">
                      <Phone className="w-4 h-4" />
                      Call Sales
                    </span>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetails;
