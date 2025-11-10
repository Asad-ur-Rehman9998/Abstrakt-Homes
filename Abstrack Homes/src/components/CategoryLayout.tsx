import React, { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation, Link } from "react-router-dom";
import products from "../data/products";

// NOTE: CategoryLayout now shows simplified product cards from shared data

const categories = [
  { name: "uPVC Doors and Windows", key: "upvc" },
  { name: "Aluminium Doors and Windows", key: "aluminium" },
  { name: "Hardware", key: "hardware" },
  { name: "Profiles", key: "profiles" },
];

const CategoryLayout: React.FC = () => {
  const { search } = useLocation();
  const [selected, setSelected] = useState("upvc"); // ✅ Default: uPVC selected
  const mainRef = useRef<HTMLElement | null>(null);

  // Read the ?category= query param on mount / when search changes
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

  // When selected changes, scroll the main content into view for better UX
  useEffect(() => {
    // Slight delay helps when route transition/ScrollToTop runs first
    const t = window.setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 80);
    return () => window.clearTimeout(t);
  }, [selected]);

  // Render a simplified card list (image + description) for the selected category
  const renderCategoryContent = () => {
    const list = products.filter((p) => p.category === selected);
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          {categories.find((c) => c.key === selected)?.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <div key={p.id} className="bg-gray-50 rounded-xl shadow hover:shadow-lg overflow-hidden">
              <Link to={`/product/${p.id}`} className="block group">
                <div className="h-48 w-full overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ Header */}
      <Header />

      {/* ✅ Main Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28 flex flex-col lg:flex-row gap-8">
        {/* ✅ Sidebar */}
        <aside className="w-full lg:w-64 bg-white rounded-xl shadow-md p-4 h-fit lg:sticky top-28">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Categories</h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat.key}>
                <button
                  onClick={() => setSelected(cat.key)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-sm font-medium transition-colors ${
                    selected === cat.key
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {cat.name}
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      selected === cat.key ? "rotate-90" : ""
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* ✅ Dynamic Content */}
        <main ref={mainRef} className="flex-1 bg-white rounded-xl shadow-md p-6">
          {renderCategoryContent()}
        </main>
      </div>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default CategoryLayout;
