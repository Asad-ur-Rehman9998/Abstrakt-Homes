import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Product', 
      href: '#category',
      dropdown: [
        { name: 'UPVC Doors and Windows', href: '/upvc-doors-windows' },
        { name: 'Aluminium doors and windows', href: '/aluminium-doors-windows' },
        { name: 'Hardware', href: '/hardware' },
        { name: 'Profiles', href: '/profiles' }
      ]
    },
    { name: 'Certificate', href: '#certificate' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center space-x-2">
                <img 
                  src="/Logo.png" 
                  alt="Abstrakt Homes" 
                  className="h-12 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-lg last:rounded-b-lg transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Admin Link */}
              <a
                href="/admin"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Admin
              </a>
            </nav>

            {/* Search and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 rounded-lg transition-colors hover:bg-gray-100 ${
                  isScrolled ? 'text-gray-700' : 'text-white hover:bg-white/20'
                }`}
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors hover:bg-gray-100 ${
                  isScrolled ? 'text-gray-700' : 'text-white hover:bg-white/20'
                }`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <div key={item.name} className="py-2">
                  <a
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 transform transition-all duration-300 scale-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Search</h3>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search here..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;