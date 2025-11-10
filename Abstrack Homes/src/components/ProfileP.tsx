import React, { useState, useRef, useEffect } from 'react';
import {
  Layers,
  Ruler,
  Zap,
  CheckCircle,
  Shield,
  Volume2,
  Wrench,
  Droplet,
  Flame,
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

interface ProfilesContentProps {
  showViewAll?: boolean;
  viewAllRoute?: string;
  viewAllLabel?: string;
}

const ProfilesContent: React.FC<ProfilesContentProps> = ({
  showViewAll = false,
  viewAllRoute = "/category-layout?category=profiles",
  viewAllLabel = "View All Products"
}) => {
  const [activeBrand, setActiveBrand] = useState<Brand>('ASAS');
  const [flipped, setFlipped] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const images = {
    img1: '/images/casement 1.jpg',
    img2: '/images/casement 2.jpg',
    img3: '/images/casement 3.jpg',
    img4: '/images/casement 4.jpg',
    img5: '/images/casement 5.jpg',
    img6: '/images/casement 6.jpg',
    img7: '/images/casement 7.jpg',
    img8: '/images/casement 8.jpg',
    img9: '/images/casement.jpg',
    img10: '/images/cliding 7.jpg',
    img11: '/images/sliding 1.jpg',
    img12: '/images/sliding 2.jpg',
    img13: '/images/sliding 3.jpg',
    img14: '/images/sliding 4.jpg',
    img15: '/images/sliding 5.jpg',
    img16: '/images/sliding 6.jpg',
  };

  const brandProfiles: Record<Brand, Record<Category, Product[]>> = {
    ASAS: {
      Casement: [
        { id: 'ASAS-CAS-01', name: 'ASAS Elite 60 Casement', image: images.img1, description: 'Premium casement designed for thermal efficiency and secure locking.', features: ['60mm depth', 'Multi-chamber profile', 'High-security locking', 'Triple-glazing ready'], price: 'Contact for pricing' },
        { id: 'ASAS-CAS-02', name: 'ASAS EcoSeal Casement', image: images.img2, description: 'Economical casement with excellent dust and water sealing.', features: ['Dust-proof gaskets', 'Reinforced frame', 'Low-maintenance finish', 'Energy-efficient'], price: 'Contact for pricing' },
        { id: 'ASAS-CAS-03', name: 'ASAS ThermoCas 70', image: images.img3, description: 'Enhanced thermal break system for cold and hot climates.', features: ['70mm depth', 'Thermal break', 'Noise reduction', 'Durable hardware'], price: 'Contact for pricing' },
        { id: 'ASAS-CAS-04', name: 'ASAS SecureView Casement', image: images.img4, description: 'Built with added reinforcement for improved security.', features: ['Reinforced steel chamber', 'Multi-point lock', 'Anti-burglar features', 'Long life'], price: 'Contact for pricing' },
        { id: 'ASAS-CAS-05', name: 'ASAS AeroCas Accent', image: images.img5, description: 'Sleek profile for modern architecture with superior finishing.', features: ['Slim sightlines', 'Anodized look', 'Easy install', 'Custom colors'], price: 'Contact for pricing' },
        { id: 'ASAS-CAS-06', name: 'ASAS QuietSeal Casement', image: images.img6, description: 'Optimized for sound insulation in busy urban areas.', features: ['Sound insulation', 'Multi-chamber', 'High quality seals', 'Thermal performance'], price: 'Contact for pricing' },
        { id: 'ASAS-CAS-07', name: 'ASAS Classic 60 Casement', image: images.img7, description: 'Reliable, all-purpose casement suitable for residential projects.', features: ['Classic profile', 'Easy maintenance', 'Weather resistant', 'Affordable'], price: 'Contact for pricing' },
        { id: 'ASAS-CAS-08', name: 'ASAS Harmony Casement', image: images.img8, description: 'Balanced design combining aesthetics and performance.', features: ['Stylish finish', 'Thermal insulation', 'Reinforced sash', 'Eco-friendly material'], price: 'Contact for pricing' },
        { id: 'ASAS-CAS-09', name: 'ASAS Vision Casement XL', image: images.img9, description: 'Larger sightline option for expansive window openings.', features: ['XL sash', 'High structural strength', 'Glazing up to 44mm', 'Wind resistant'], price: 'Contact for pricing' },
      ],
      Sliding: [
        { id: 'ASAS-SLD-01', name: 'ASAS SlidePro 80', image: images.img10, description: 'Smooth-glide sliding system with excellent sealing and strength.', features: ['80mm profile', 'Ball-bearing rollers', 'Weather sealed', 'High load capacity'], price: 'Contact for pricing' },
        { id: 'ASAS-SLD-02', name: 'ASAS GlideMax 60', image: images.img11, description: 'Compact sliding window with minimal maintenance needs.', features: ['Low friction rollers', 'Slim frame', 'Easy to clean', 'Durable tracks'], price: 'Contact for pricing' },
        { id: 'ASAS-SLD-03', name: 'ASAS Panorama Slider', image: images.img12, description: 'Designed for wide openings, offering large glazed areas.', features: ['Wide sash', 'Thermal break available', 'Large glass support', 'Smooth operation'], price: 'Contact for pricing' },
      ],
    },
    Deceuninck: {
      Casement: [
        { id: 'DEC-CAS-01', name: 'Deceuninck Classic 60 Casement', image: images.img1, description: 'Classic casement from Deceuninck offering reliable performance.', features: ['60mm profile', 'Durable gaskets', 'Easy install', 'Timeless design'], price: 'Contact for pricing' },
        { id: 'DEC-CAS-02', name: 'Deceuninck UltraSeal Casement', image: images.img2, description: 'Superior sealing for dust and water protection in harsh climates.', features: ['Superior seals', 'Weather shield', 'Low maintenance', 'Long life'], price: 'Contact for pricing' },
      ],
      Sliding: [
        { id: 'DEC-SLD-01', name: 'Deceuninck SlideClassic 75', image: images.img10, description: 'Reliable sliding system suitable for residential and commercial use.', features: ['75mm profile', 'Smooth rollers', 'Durable tracks', 'Weather sealed'], price: 'Contact for pricing' },
      ],
    },
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
    { icon: <Flame className="w-8 h-8" />, title: 'Fire Resistant', description: 'Resists ignition and minimizes fire spread' },
  ];

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleBrandClick = (brand: Brand) => {
    if (brand === activeBrand) return;
    setFlipped(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setActiveBrand(brand);
      setFlipped(false);
      timeoutRef.current = null;
    }, 420);
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Window & Door Profiles</h1>
          <p className="text-sm sm:text-lg max-w-2xl mx-auto">
            Choose from premium ASAS and Deceuninck systems for every architectural need
          </p>
        </div>
      </section>
      <div className="text-gray-900 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 pb-4">
        {/* Brand Selector */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Select Profile Brand</h2>

            <div className="flex justify-center space-x-6 mb-12">
              {(['ASAS', 'Deceuninck'] as Brand[]).map((brand) => (
                <button
                  key={brand}
                  onClick={() => handleBrandClick(brand)}
                  className={`px-8 py-4 text-lg font-semibold rounded-xl border-2 transition-all duration-300 ${activeBrand === brand
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white border-gray-300 hover:bg-gray-100'
                    }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* Products */}
            <div className="relative w-full" style={{ perspective: 1000 }}>
              <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.45 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="space-y-10"
              >
                {(['Casement', 'Sliding'] as Category[]).map((category) => (
                  <div key={category}>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">{category} Windows</h3>

                    {/* Responsive Grid */}
                    <div className="grid gap-6 sm:gap-8"
                      style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
                      }}
                    >
                      <AnimatePresence>
                        {brandProfiles[activeBrand][category].map((product) => (
                          <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.28 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
                          >
                            {/* Image */}
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover"
                            />

                            {/* Card Content */}
                            <div className="p-4 sm:p-6 flex flex-col flex-grow">
                              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{product.name}</h4>
                              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base flex-grow">{product.description}</p>

                              {/* Features */}
                              <ul className="text-sm sm:text-base text-gray-600 space-y-1 mb-3 sm:mb-4">
                                {product.features.map((f, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                                    {f}
                                  </li>
                                ))}
                              </ul>

                              {/* Price & Button */}
                              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 sm:gap-0 mt-auto">
                                <span className="text-lg font-semibold text-green-600">{product.price}</span>
                                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition w-full sm:w-auto text-center">
                                  Get Quote
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>

                  </div>
                ))}
              </motion.div>
            </div>

          </div>
          {showViewAll && (
            <div className="text-center pt-8">
              <Link
                to={viewAllRoute}
                className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
              >
                {viewAllLabel} →
              </Link>
            </div>
          )}
        </section>


        {/* Advantages */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">Profile Advantages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((b, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
                  <div className="text-green-600 mb-4 flex justify-center">{b.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-gray-600">{b.description}</p>
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
            className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Get Free Quote
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ProfilesContent;
