import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/seo/SEO';
import SmoothScroll from './components/layout/SmoothScroll';
import LoadingScreen from './components/layout/LoadingScreen';
import { defaultSEO, pageSEO, getProductSEO } from './data/seo';
import products from './data/products';

const UPVCPage = lazy(() => import('./components/ProductPages/UPVCPage'));
const AluminiumPage = lazy(() => import('./components/ProductPages/AluminiumPage'));
const HardwarePage = lazy(() => import('./components/ProductPages/HardwarePage'));
const ProfilesPage = lazy(() => import('./components/ProductPages/ProfilesPage'));
const ProductDetails = lazy(() => import('./components/ProductDetails'));
const CategoryLayout = lazy(() => import('./components/CategoryLayout'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-navy-900">
    <div className="w-12 h-12 border-2 border-gold-500/30 border-t-gold-500 rounded-full animate-spin" />
  </div>
);

const MainWebsite = () => (
  <PageWrapper>
    <SEO {...defaultSEO} />
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <About />
        <WhyChooseUs />
        <Gallery />
        <Certificate />
        <Contact />
      </main>
      <Footer />
    </div>
  </PageWrapper>
);

const ProductDetailRoute = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const seo = product
    ? getProductSEO(product.title, product.description, product.id)
    : defaultSEO;

  return (
    <PageWrapper>
      <SEO {...seo} image={product?.image} productName={product?.title} productDescription={product?.description} />
      <Suspense fallback={<PageLoader />}>
        <ProductDetails />
      </Suspense>
    </PageWrapper>
  );
};

const RoutedPage = ({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) => {
  const seo = pageSEO[path] ?? defaultSEO;
  return (
    <PageWrapper>
      <SEO {...seo} />
      <Suspense fallback={<PageLoader />}>{children}</Suspense>
    </PageWrapper>
  );
};

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainWebsite />} />
          <Route
            path="/category-layout"
            element={
              <RoutedPage path="/category-layout">
                <CategoryLayout />
              </RoutedPage>
            }
          />
          <Route
            path="/upvc-doors-windows"
            element={
              <RoutedPage path="/upvc-doors-windows">
                <UPVCPage />
              </RoutedPage>
            }
          />
          <Route
            path="/aluminium-doors-windows"
            element={
              <RoutedPage path="/aluminium-doors-windows">
                <AluminiumPage />
              </RoutedPage>
            }
          />
          <Route
            path="/hardware"
            element={
              <RoutedPage path="/hardware">
                <HardwarePage />
              </RoutedPage>
            }
          />
          <Route
            path="/profiles"
            element={
              <RoutedPage path="/profiles">
                <ProfilesPage />
              </RoutedPage>
            }
          />
          <Route path="/product/:id" element={<ProductDetailRoute />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <HelmetProvider>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <SmoothScroll>
          <Router>
            <AppRoutes />
          </Router>
        </SmoothScroll>
      )}
    </HelmetProvider>
  );
}

export default App;
