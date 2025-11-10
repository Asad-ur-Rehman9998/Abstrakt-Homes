import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { useScrollNavigation } from '../utils/scrollNavigation';

const Footer = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const handleNavigation = useScrollNavigation();

  const socialLinks = [
    { 
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/profile.php?id=100009858330366",
      name: "Facebook",
      ariaLabel: "Visit our Facebook page"
    },
    { 
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/abstrakthomes",
      name: "Instagram",
      ariaLabel: "Follow us on Instagram"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/abstrakt-homes",
      name: "LinkedIn",
      ariaLabel: "Connect with us on LinkedIn"
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/category-layout" },
    { name: "Certificate", href: "/#certificate" },
    { name: "Contact", href: "/#contact" },
  ];

  const products = [
    { name: "uPVC", href: "/upvc-doors-windows" },
    { name: "Aluminium", href: "/aluminium-doors-windows" },
    { name: "Hardware", href: "/hardware" },
    { name: "Profiles", href: "/profiles" },
  ];

  return (
    <footer className="bg-gray-900 text-white scroll-smooth">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ✅ Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/images/logo.png" 
                alt="Abstrakt Homes - Premium Windows and Doors" 
                className="h-10 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Abstrakt Homes — Premium architectural solutions for modern living.  
              We specialize in high-quality PVC windows, aluminum frames, and premium hardware.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300 group"
                  aria-label={social.ariaLabel}
                >
                  <div className="group-hover:scale-110 transition-transform" role="img" aria-hidden="true">
                    {social.icon}
                  </div>
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ✅ Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      handleNavigation(link.href);
                      setActiveLink(link.href);
                    }}
                    className={`text-gray-400 hover:text-white transition-colors duration-300 flex items-center group ${
                      activeLink === link.href ? "text-blue-400 rotate-1" : ""
                    }`}
                  >
                    <span
                      className={`w-2 h-2 bg-blue-600 rounded-full mr-3 transition-all duration-300 ${
                        activeLink === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    ></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      handleNavigation(product.href);
                      setActiveLink(product.href);
                    }}
                    className={`text-gray-400 hover:text-white transition-colors duration-300 flex items-center group ${
                      activeLink === product.href ? "text-purple-400 rotate-1" : ""
                    }`}
                  >
                    <span
                      className={`w-2 h-2 bg-purple-600 rounded-full mr-3 transition-all duration-300 ${
                        activeLink === product.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    ></span>
                    {product.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <a
                href="tel:+923057799977"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                aria-label="Call us at +92 305 7799977"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+92 305 7799977</span>
              </a>

              <a
                href="mailto:info@abstrakthomes.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                aria-label="Email us at info@abstrakthomes.com"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@abstrakthomes.com</span>
              </a>

              <a
                href="https://maps.google.com/?q=Lahore,Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                aria-label="Find us on Google Maps in Lahore, Pakistan"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Lahore, Pakistan</span>
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              All trademarks, logos, and brand names are the property of their respective owners.
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Abstrakt Homes. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
