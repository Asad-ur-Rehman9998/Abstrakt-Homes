import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowLeft,
  Layers,
  Ruler,
  Zap,
  CheckCircle,
  Shield,
  Volume2,
  Wrench,
  Droplet,
  Flame
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

type Brand = 'ASAS' | 'Deceuninck';
type Category = 'Casement' | 'Sliding';

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
  price: string;
}

const ProfilesPage: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<Brand>('ASAS');
  const [flipped, setFlipped] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const img1 =
    '/images/casement 1.jpg';
  const img2 =
    '/images/casement 2.jpg';
  const img3 =
    '/images/casement 3.jpg';
   const img4 =
    '/images/casement 4.jpg';
  const img5 =
    '/images/casement 5.jpg';
  const img6 =
    '/images/casement 6.jpg';  
   const img7 =
    '/images/casement 7.jpg';
  const img8 =
    '/images/casement 8.jpg';
  const img9 =
    '/images/casement.jpg';
    
  const img10 =
    '/images/cliding 7.jpg';
  const img11 =
    '/images/sliding 1.jpg';
  const img12 =
    '/images/sliding 2.jpg';
   const img13 =
    '/images/sliding 3.jpg';
  const img14 =
    '/images/sliding 4.jpg';
  const img15 =
    '/images/sliding 5.jpg';  
   const img16 =
    '/images/sliding 6.jpg';
  const img17 =
    '/images/sliding 3.jpg';
  const img18 =
    '/images/sliding 1.jpg';    

  const brandProfiles: Record<Brand, Record<Category, Product[]>> = {
    ASAS: {
      Casement: [
        { id: 'ASAS-CAS-01', name: 'ASAS Elite 60 Casement', image: img1, description: 'Premium casement designed for thermal efficiency and secure locking.', features: ['60mm depth', 'Multi-chamber profile', 'High-security locking', 'Triple-glazing ready'], price: 'Contact for pricing' },
        { id: 'ASAS-CAS-02', name: 'ASAS EcoSeal Casement', image: img2, description: 'Economical casement with excellent dust and water sealing.', features: ['Dust-proof gaskets', 'Reinforced frame', 'Low-maintenance finish', 'Energy-efficient'], price: 'Contact for pricing' },
        { id: 'ASAS-CAS-03', name: 'ASAS ThermoCas 70', image: img3, description: 'Enhanced thermal break system for cold and hot climates.', features: ['70mm depth', 'Thermal break', 'Noise reduction', 'Durable hardware'], price: 'Contact for pricing' },
        { id: 'ASAS-CAS-04', name: 'ASAS SecureView Casement', image: img4, description: 'Built with added reinforcement for improved security.', features: ['Reinforced steel chamber', 'Multi-point lock', 'Anti-burglar features', 'Long life'], price: 'Contact for pricing' },
        { id: 'ASAS-CAS-05', name: 'ASAS AeroCas Accent', image: img5, description: 'Sleek profile for modern architecture with superior finishing.', features: ['Slim sightlines', 'Anodized look', 'Easy install', 'Custom colors'], price: 'Contact for pricing' },
        { id: 'ASAS-CAS-06', name: 'ASAS QuietSeal Casement', image: img6, description: 'Optimized for sound insulation in busy urban areas.', features: ['Sound insulation', 'Multi-chamber', 'High quality seals', 'Thermal performance'], price: 'Contact for pricing' },
        { id: 'ASAS-CAS-07', name: 'ASAS Classic 60 Casement', image: img7, description: 'Reliable, all-purpose casement suitable for residential projects.', features: ['Classic profile', 'Easy maintenance', 'Weather resistant', 'Affordable'], price: 'Contact for pricing' },
        { id: 'ASAS-CAS-08', name: 'ASAS Harmony Casement', image: img8, description: 'Balanced design combining aesthetics and performance.', features: ['Stylish finish', 'Thermal insulation', 'Reinforced sash', 'Eco-friendly material'], price: 'Contact for pricing' },
        { id: 'ASAS-CAS-09', name: 'ASAS Vision Casement XL', image: img9, description: 'Larger sightline option for expansive window openings.', features: ['XL sash', 'High structural strength', 'Glazing up to 44mm', 'Wind resistant'], price: 'Contact for pricing' },
        { id: 'ASAS-CAS-10', name: 'ASAS Compact Casement', image: img1, description: 'Space-saving casement ideal for tight spaces and small rooms.', features: ['Compact frame', 'Easy operation', 'Low profile', 'Durable finish'], price: 'Contact for pricing' }
      ],
      Sliding: [
        { id: 'ASAS-SLD-01', name: 'ASAS SlidePro 80', image: img10, description: 'Smooth-glide sliding system with excellent sealing and strength.', features: ['80mm profile', 'Ball-bearing rollers', 'Weather sealed', 'High load capacity'], price: 'Contact for pricing' },
        { id: 'ASAS-SLD-02', name: 'ASAS GlideMax 60', image: img11, description: 'Compact sliding window with minimal maintenance needs.', features: ['Low friction rollers', 'Slim frame', 'Easy to clean', 'Durable tracks'], price: 'Contact for pricing' },
        { id: 'ASAS-SLD-03', name: 'ASAS Panorama Slider', image: img12, description: 'Designed for wide openings, offering large glazed areas.', features: ['Wide sash', 'Thermal break available', 'Large glass support', 'Smooth operation'], price: 'Contact for pricing' },
        { id: 'ASAS-SLD-04', name: 'ASAS SecureSlide', image: img13, description: 'Slider with improved locking and anti-lift hardware.', features: ['Anti-lift system', 'Multi-point latch', 'Secure track', 'Robust rollers'], price: 'Contact for pricing' },
        { id: 'ASAS-SLD-05', name: 'ASAS SlimTrack Slider', image: img14, description: 'Slimline profile for modern facades and balconies.', features: ['Slim sightlines', 'Low threshold', 'Thermal option', 'Aesthetic design'], price: 'Contact for pricing' },
        { id: 'ASAS-SLD-06', name: 'ASAS DuoTrack 2.0', image: img15, description: 'Double-track system for flexible opening configurations.', features: ['Double track', 'Smooth rollers', 'Versatile layouts', 'Weather resistant'], price: 'Contact for pricing' },
        { id: 'ASAS-SLD-07', name: 'ASAS OceanSlide', image: img16, description: 'Coastal-grade slider with corrosion-resistant finish.', features: ['Corrosion resistant', 'Sealed drainage', 'Marine-grade hardware', 'Long-lasting'], price: 'Contact for pricing' },
        { id: 'ASAS-SLD-08', name: 'ASAS NightGuard Slider', image: img17, description: 'Enhanced security slider with reinforced sash and locks.', features: ['Enhanced security', 'Reinforced sash', 'Tamper-proof locks', 'Stable tracks'], price: 'Contact for pricing' },
        { id: 'ASAS-SLD-09', name: 'ASAS ComfortSlide', image: img18, description: 'Designed for ease-of-use with ergonomic handles and smooth action.', features: ['Ergonomic handle', 'Quiet rollers', 'Low maintenance', 'Durable seals'], price: 'Contact for pricing' },
        { id: 'ASAS-SLD-10', name: 'ASAS ThermalSlide', image: img14, description: 'Sliding system with thermal break for improved energy performance.', features: ['Thermal break', 'Insulated frame', 'Energy efficient', 'Modern finish'], price: 'Contact for pricing' }
      ]
    },
    Deceuninck: {
      Casement: [
        { id: 'DEC-CAS-01', name: 'Deceuninck Classic 60 Casement', image: img1, description: 'Classic casement from Deceuninck offering reliable performance.', features: ['60mm profile', 'Durable gaskets', 'Easy install', 'Timeless design'], price: 'Contact for pricing' },
        { id: 'DEC-CAS-02', name: 'Deceuninck UltraSeal Casement', image: img2, description: 'Superior sealing for dust and water protection in harsh climates.', features: ['Superior seals', 'Weather shield', 'Low maintenance', 'Long life'], price: 'Contact for pricing' },
        { id: 'DEC-CAS-03', name: 'Deceuninck PrimeTherm 70', image: img3, description: 'Designed for high thermal performance and comfort.', features: ['70mm option', 'Thermal break', 'Energy saver', 'Noise reduction'], price: 'Contact for pricing' },
        { id: 'DEC-CAS-04', name: 'Deceuninck SecureLine Casement', image: img4, description: 'Casement with reinforced locking points for higher security.', features: ['Reinforced locking', 'Anti-intrusion', 'Robust frame', 'Secure fit'], price: 'Contact for pricing' },
        { id: 'DEC-CAS-05', name: 'Deceuninck Harmony Casement', image: img5, description: 'A balanced profile blending strength and aesthetics.', features: ['Elegant finish', 'Strong sash', 'UV resistant', 'Eco-friendly materials'], price: 'Contact for pricing' }
      ],
      Sliding: [
        { id: 'DEC-SLD-01', name: 'Deceuninck SlideClassic 75', image: img10, description: 'Reliable sliding system suitable for residential and commercial use.', features: ['75mm profile', 'Smooth rollers', 'Durable tracks', 'Weather sealed'], price: 'Contact for pricing' },
        { id: 'DEC-SLD-02', name: 'Deceuninck SlimGlide', image: img15, description: 'Slimline sliding system for minimalist designs.', features: ['Slim profile', 'Low threshold', 'Minimal sightlines', 'Easy operation'], price: 'Contact for pricing' },
        { id: 'DEC-SLD-03', name: 'Deceuninck Panorama Glide', image: img17, description: 'Large-span sliding solution for panoramic views.', features: ['Large glass support', 'High load rollers', 'Thermal option', 'Continuous sightline'], price: 'Contact for pricing' },
        { id: 'DEC-SLD-04', name: 'Deceuninck SecureGlide', image: img12, description: 'Security-focused slider with enhanced locking and anti-lift features.', features: ['Anti-lift', 'Secure locks', 'Reinforced track', 'Child-safe options'], price: 'Contact for pricing' },
        { id: 'DEC-SLD-05', name: 'Deceuninck Coastal Slider', image: img17, description: 'Built for coastal installations with corrosion resistance.', features: ['Corrosion-resistant finish', 'Sealed drainage', 'Durable hardware', 'UV resistant'], price: 'Contact for pricing' }
      ]
    }
  };

  const benefits = [
    { icon: <Zap className="w-8 h-8" />, title: 'Thermal Insulation', description: 'Keeps indoor temperature stable and energy efficient' },
    { icon: <Layers className="w-8 h-8" />, title: 'Dust Proof', description: 'Prevents dust from entering and keeps interiors clean' },
    { icon: <CheckCircle className="w-8 h-8" />, title: 'Eco Friendly', description: 'Made from sustainable and recyclable materials' },
    { icon: <Ruler className="w-8 h-8" />, title: 'Rust Free', description: 'Non-corrosive materials ensure long life' },
    { icon: <Shield className="w-8 h-8" />, title: 'Security', description: 'Enhanced locking and reinforced profiles for safety' },
    { icon: <Volume2 className="w-8 h-8" />, title: 'Sound Insulation', description: 'Blocks external noise for a peaceful environment' },
    { icon: <Wrench className="w-8 h-8" />, title: 'Low Maintenance', description: 'Requires minimal upkeep and easy to clean' },
    { icon: <Droplet className="w-8 h-8" />, title: 'Water Resistant', description: 'Prevents water leakage during rain and humidity' },
    { icon: <Flame className="w-8 h-8" />, title: 'Fire Resistant', description: 'Resists ignition and minimizes fire spread' }
  ];

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleBrandClick = (brand: Brand) => {
    if (brand === activeBrand) return;
    setFlipped(true);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setActiveBrand(brand);
      setFlipped(false);
      timeoutRef.current = null;
    }, 420);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Window & Door Profiles</h1>
        <p className="text-xl">Choose from premium ASAS and Deceuninck systems for every architectural need</p>
      </section>

      {/* Brand Selector with Rotation */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Select Profile Brand</h2>

          <div className="flex justify-center space-x-6 mb-12">
            {(['ASAS', 'Deceuninck'] as Brand[]).map((brand) => (
              <button
                key={brand}
                onClick={() => handleBrandClick(brand)}
                className={`px-8 py-4 text-lg font-semibold rounded-xl border-2 transition-all duration-300 ${activeBrand === brand ? 'bg-green-600 text-white border-green-600' : 'bg-white border-gray-300 hover:bg-gray-100'}`}
              >
                {brand}
              </button>
            ))}
          </div>

          <div className="relative w-full" style={{ perspective: 1000 }}>
            <motion.div animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.45 }} style={{ transformStyle: 'preserve-3d' }} className="space-y-10">
              {/* Casement Category */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Casement Windows</h3>

                {/* If ASAS: show grid cards (unchanged). If Deceuninck: show vertical large image-description pairs */}
                {activeBrand === 'ASAS' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <AnimatePresence>
                      {brandProfiles[activeBrand].Casement.map((product) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.28 }}
                          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                          style={{ backfaceVisibility: 'hidden' }}
                        >
                          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                          <div className="p-6">
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h4>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <div className="mb-4">
                              <h5 className="font-medium text-gray-900 mb-2">Features:</h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {product.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-semibold text-green-600">{product.price}</span>
                              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">Get Quote</button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className="space-y-10">
                    {brandProfiles.Deceuninck.Casement.map((product) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.28 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        {/* Vertical stacked layout: description left, image right on md+ */}
                        <div className="flex flex-col md:flex-row md:items-stretch">
                          <div className="md:w-1/2 p-6 flex flex-col justify-center">
                            <h4 className="text-2xl font-semibold text-gray-900 mb-3">{product.name}</h4>
                            <p className="text-gray-600 mb-4">{product.description}</p>

                            <div className="mb-4">
                              <h5 className="font-medium text-gray-900 mb-2">Features:</h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {product.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                              <span className="text-lg font-semibold text-green-600">{product.price}</span>
                              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">Get Quote</button>
                            </div>
                          </div>

                          <div className="md:w-1/2">
                            <img src={product.image} alt={product.name} className="w-full h-64 md:h-full object-cover" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Sliding Category */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Sliding Windows</h3>

                {activeBrand === 'ASAS' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <AnimatePresence>
                      {brandProfiles[activeBrand].Sliding.map((product) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.28 }}
                          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                          style={{ backfaceVisibility: 'hidden' }}
                        >
                          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                          <div className="p-6">
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h4>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <div className="mb-4">
                              <h5 className="font-medium text-gray-900 mb-2">Features:</h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {product.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-semibold text-green-600">{product.price}</span>
                              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">Get Quote</button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className="space-y-10">
                    {brandProfiles.Deceuninck.Sliding.map((product) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.28 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <div className="flex flex-col md:flex-row md:items-stretch">
                          <div className="md:w-1/2 p-6 flex flex-col justify-center">
                            <h4 className="text-2xl font-semibold text-gray-900 mb-3">{product.name}</h4>
                            <p className="text-gray-600 mb-4">{product.description}</p>

                            <div className="mb-4">
                              <h5 className="font-medium text-gray-900 mb-2">Features:</h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {product.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                              <span className="text-lg font-semibold text-green-600">{product.price}</span>
                              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">Get Quote</button>
                            </div>
                          </div>

                          <div className="md:w-1/2">
                            <img src={product.image} alt={product.name} className="w-full h-64 md:h-full object-cover" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">Profile Advantages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-green-600 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Custom Profiles?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us for custom profile solutions tailored to your specific project requirements
        </p>
        <Link
          to="/#contact"
          className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
        >
          Get Free Quote
        </Link>
      </section>
    </div>
  );
};

export default ProfilesPage;
