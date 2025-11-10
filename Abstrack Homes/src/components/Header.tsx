import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // ✅ Import WhatsApp icon
import { Link } from 'react-router-dom';
import { useScrollNavigation } from '../utils/scrollNavigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Products',
      href: '/category-layout',
      dropdown: [
        { name: 'uPVC Doors and Windows', href: '/upvc-doors-windows' },
        { name: 'Aluminium Doors and Windows', href: '/aluminium-doors-windows' },
        { name: 'Hardware', href: '/hardware' },
        { name: 'Profiles', href: '/profiles' }
      ]
    },
    { name: 'Contact', href: '/#contact' }
  ];

  const handleNavigation = useScrollNavigation();
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all mb-4
           duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2" aria-label="Go to homepage">
                <img
                  src="/images/logo.png"
                  alt="Abstrakt Homes - Premium Windows and Doors"
                  className="h-20 w-auto"
                  loading="eager"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {/* Use scroll-aware navigation for hash links, regular Link for routes */}
                  {item.href.startsWith('/#') ? (
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-black'
                        }`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-black'
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-lg last:rounded-b-lg transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* WhatsApp and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* ✅ WhatsApp Button */}
              <a
                href="https://wa.me/923054553553"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isScrolled
                    ? 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
                    : 'text-white hover:text-green-400 hover:bg-white/20'
                  }`}
              >
                <FaWhatsapp className="w-5 h-5 text-green-500" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors bg-gray-100`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <div key={item.name} className="py-2">
                  {item.href.startsWith('/#') ? (
                    <button
                      onClick={() => {
                        handleNavigation(item.href);
                        setIsMenuOpen(false);
                      }}
                      className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* ✅ WhatsApp Link in Mobile Menu */}
              <a
                href="https://wa.me/923054553553"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="block mt-4 text-green-600 font-semibold transition-colors hover:text-green-700"
              >
                WhatsApp: +92 305 4553553
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
