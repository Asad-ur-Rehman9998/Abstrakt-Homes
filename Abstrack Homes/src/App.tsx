import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UPVCPage from './components/ProductPages/UPVCPage';
import AluminiumPage from './components/ProductPages/AluminiumPage';
import HardwarePage from './components/ProductPages/HardwarePage';
import ProfilesPage from './components/ProductPages/ProfilesPage';
import ProductDetails from "./components/ProductDetails";
import CategoryLayout from './components/CategoryLayout';

// ✅ ScrollToTop Component (moved inside file properly)
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// ✅ Main Website Layout
const MainWebsite = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <Products />
    <Certificate />
    <Contact />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Scrolls to top on every page change */}

      <Routes>
        {/* ✅ Main website route */}
        <Route path="/" element={<MainWebsite />} />

        {/* ✅ Category Layout Page */}
        <Route path="/category-layout" element={<CategoryLayout />} />

        {/* ✅ Product detail pages */}
        <Route path="/upvc-doors-windows" element={<UPVCPage />} />
        <Route path="/aluminium-doors-windows" element={<AluminiumPage />} />
        <Route path="/hardware" element={<HardwarePage />} />
        <Route path="/profiles" element={<ProfilesPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* ✅ Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
