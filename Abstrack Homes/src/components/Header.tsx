import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useScrollNavigation } from '../utils/scrollNavigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const handleNavigation = useScrollNavigation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Products',
      href: '/category-layout',
      dropdown: [
        { name: 'uPVC Doors and Windows', href: '/upvc-doors-windows', desc: 'Deceuninck uPVC systems' },
        { name: 'Aluminium Doors and Windows', href: '/aluminium-doors-windows', desc: 'Modern aluminium frames' },
        { name: 'Hardware', href: '/hardware', desc: 'ASSA ABLOY authorized' },
        { name: 'Profiles', href: '/profiles', desc: 'ASAS & Deceuninck profiles' },
      ],
    },
    { name: 'About', href: '/#about' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/#contact' },
  ];

  const textColor = isScrolled || !isHome
    ? 'text-gray-700 hover:text-gold-600'
    : 'text-white/90 hover:text-gold-300';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-white/90 backdrop-blur-xl shadow-glass border-b border-gray-100/50'
            : 'bg-navy-900/30 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex-shrink-0" aria-label="Go to homepage">
              <img
                src="/images/logo.png"
                alt="Abstrakt Homes - Premium Windows and Doors"
                className={`h-10 sm:h-12 lg:h-14 w-auto transition-all duration-300 ${
                  isScrolled || !isHome ? '' : 'brightness-0 invert'
                }`}
                loading="eager"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.href.startsWith('/#') ? (
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors ${textColor}`}
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors group ${textColor}`}
                    >
                      {item.name}
                      {item.dropdown && <ChevronDown className="inline w-3 h-3 ml-1 opacity-60" />}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  )}

                  {/* Mega menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-luxury border border-gray-100/50 overflow-hidden"
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className="block px-5 py-4 hover:bg-gold-50/50 transition-colors border-b border-gray-50 last:border-0 group"
                          >
                            <span className="block text-sm font-semibold text-gray-900 group-hover:text-gold-600 transition-colors">
                              {sub.name}
                            </span>
                            <span className="block text-xs text-gray-500 mt-0.5">{sub.desc}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="tel:+923054553553"
                className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  isScrolled || !isHome
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+92 305 4553553</span>
              </a>
              <a
                href="https://wa.me/923054553553"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-xl text-sm font-medium hover:bg-green-600 transition-colors shadow-sm"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-xl transition-colors ${
                  isScrolled || !isHome ? 'text-gray-700' : 'text-white'
                }`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.href.startsWith('/#') ? (
                      <button
                        onClick={() => {
                          handleNavigation(item.href);
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left py-3 text-gray-800 font-medium hover:text-gold-600 transition-colors"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className="block py-3 text-gray-800 font-medium hover:text-gold-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                    {item.dropdown && (
                      <div className="ml-4 space-y-1 mb-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className="block py-2 text-sm text-gray-600 hover:text-gold-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Sticky contact bar on scroll */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-navy-900/95 backdrop-blur-xl border-t border-gold-500/20 px-4 py-3 flex gap-3"
          >
            <a
              href="tel:+923054553553"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-gold-500 text-navy-900 rounded-xl font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button
              onClick={() => handleNavigation('/#contact')}
              className="flex-1 py-3 border border-gold-500/30 text-gold-400 rounded-xl font-semibold text-sm"
            >
              Get Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
