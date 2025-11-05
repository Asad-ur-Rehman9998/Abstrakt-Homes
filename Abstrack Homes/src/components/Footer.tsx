import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/profile.php?id=100009858330366", name: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/accounts/login/?hl=en", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/", name: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#category" },
    { name: "Certificate", href: "#certificate" },
    { name: "Contact", href: "#contact" }
  ];

  const products = [
    { name: "PVC Windows", href: "#pvc" },
    { name: "Aluminum Frames", href: "#aluminum" },
    { name: "Hardware", href: "#hardware" },
    { name: "Assa Aboly", href: "#assa-aboly" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="public\images\logo.png" 
                alt="Abstrakt Homes" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Abstrakt Homes - Premium architectural solutions for modern living. We specialize in high-quality PVC windows, aluminum frames, and premium hardware.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300 group"
                  aria-label={social.name}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href={product.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <a
                href="tel:+923057799977"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+92 305 7799977</span>
              </a>
              <a
                href="mailto:info@abstrkhomes.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@abstrakthomes.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
  <span>All TradeMarks, Logos And Brand Names Are The Property Of Their Respective Owners.</span>
</div>
            <div className="text-gray-400 text-sm">
              © 2024 Abstrakt Homes. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;