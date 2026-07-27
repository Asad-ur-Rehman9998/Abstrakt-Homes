import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation, Link } from "react-router-dom";
import products from "../data/products";
import TiltCard from "./ui/TiltCard";

const categories = [
  { name: "uPVC Doors and Windows", key: "upvc", href: "/upvc-doors-windows" },
  { name: "Aluminium Doors and Windows", key: "aluminium", href: "/aluminium-doors-windows" },
  { name: "Hardware", key: "hardware", href: "/hardware" },
  { name: "Profiles", key: "profiles", href: "/profiles" },
];

const CategoryLayout: React.FC = () => {
  const { search } = useLocation();
  const [selected, setSelected] = useState("upvc");
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(search);
      const cat = params.get("category");
      if (cat && ["upvc", "aluminium", "hardware", "profiles"].includes(cat)) {
        setSelected(cat);
      }
    } catch {
      // ignore malformed query
    }
  }, [search]);

  useEffect(() => {
    const t = window.setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 80);
    return () => window.clearTimeout(t);
  }, [selected]);

  const renderCategoryContent = () => {
    const list = products.filter((p) => p.category === selected);
    const catInfo = categories.find((c) => c.key === selected);

    return (
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900">
            {catInfo?.name}
          </h2>
          <Link
            to={catInfo?.href ?? "#"}
            className="text-gold-600 text-sm font-semibold hover:text-gold-500 flex items-center gap-1"
          >
            View Category Page <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltCard className="group h-full">
                <Link to={`/product/${p.id}`} className="block h-full">
                  <div className="bg-luxury-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-luxury transition-all duration-500 h-full">
                    <div className="h-52 w-full overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-luxury-50">
      <Header />

      {/* Page hero */}
      <section className="pt-28 pb-12 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,98,0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="text-gold-400 text-sm tracking-[0.25em] uppercase">Browse</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Our Products
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Discover our premium range of upvc doors and windows designed for modern living
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-72 bg-white rounded-2xl shadow-glass border border-gray-100 p-5 h-fit lg:sticky top-28">
          <h3 className="text-sm font-semibold tracking-wider uppercase text-gold-600 mb-4">Categories</h3>
          <ul className="space-y-1">
            {categories.map((cat) => (
              <li key={cat.key}>
                <button
                  onClick={() => setSelected(cat.key)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-all duration-300 ${
                    selected === cat.key
                      ? "bg-navy-900 text-gold-400 shadow-luxury"
                      : "text-gray-700 hover:bg-luxury-50"
                  }`}
                >
                  {cat.name}
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      selected === cat.key ? "rotate-90 text-gold-400" : ""
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main ref={mainRef} className="flex-1 bg-white rounded-2xl shadow-glass border border-gray-100 p-6 sm:p-8">
          {renderCategoryContent()}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryLayout;
