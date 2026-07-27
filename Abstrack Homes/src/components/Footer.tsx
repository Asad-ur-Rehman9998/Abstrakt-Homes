import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollNavigation } from '../utils/scrollNavigation';

const Footer = () => {
  const [email, setEmail] = useState('');
  const handleNavigation = useScrollNavigation();

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=100009858330366',
      name: 'Facebook',
      ariaLabel: 'Visit our Facebook page',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/abstrakthomes',
      name: 'Instagram',
      ariaLabel: 'Follow us on Instagram',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/abstrakt-homes',
      name: 'LinkedIn',
      ariaLabel: 'Connect with us on LinkedIn',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/category-layout' },
    { name: 'About', href: '/#about' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Certificate', href: '/#certificate' },
    { name: 'Contact', href: '/#contact' },
  ];

  const productLinks = [
    { name: 'uPVC Doors & Windows', href: '/upvc-doors-windows' },
    { name: 'Aluminium Systems', href: '/aluminium-doors-windows' },
    { name: 'ASSA ABLOY Hardware', href: '/hardware' },
    { name: 'Deceuninck Profiles', href: '/profiles' },
  ];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:info@abstrakthomes.com?subject=Newsletter Subscription&body=Please subscribe ${email} to the newsletter.`;
      setEmail('');
    }
  };

  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,98,0.05),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Company info */}
          <div className="lg:col-span-4 space-y-6">
            <img
              src="/images/logo.png"
              alt="Abstrakt Homes - Premium Windows and Doors"
              className="h-14 w-auto brightness-0 invert"
              loading="lazy"
            />
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Abstrakt Homes — Premium architectural solutions for modern living.
              We specialize in high-quality PVC windows, aluminum frames, and premium hardware.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl hover:bg-gold-500/20 hover:text-gold-400 transition-all duration-300 border border-white/10"
                  aria-label={social.ariaLabel}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gold-400 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/#') ? (
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gold-400 mb-6">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product.name}>
                  <Link to={product.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gold-400 mb-2">Contact Info</h3>
            <div className="space-y-4">
              <a href="tel:+923057799977" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                <Phone className="w-4 h-4 text-gold-400" />
                +92 305 7799977 (Sales)
              </a>
              <a href="tel:+923054553553" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                <Phone className="w-4 h-4 text-gold-400" />
                +92 305 4553553 (CEO)
              </a>
              <a href="mailto:info@abstrakthomes.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4 text-gold-400" />
                info@abstrakthomes.com
              </a>
              <a
                href="https://maps.google.com/?q=127-A+Main+Commercial+Broadway+DHA+Phase+8+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                127-A, Main Commercial Broadway DHA Phase 8, Lahore, 54000
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-gold-400" />
                Mon – Sat: 9:00 AM – 6:00 PM
              </div>
            </div>

            {/* Newsletter */}
            <form onSubmit={handleNewsletter} className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:border-gold-500/50 outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-gold-500 text-navy-900 rounded-xl hover:bg-gold-400 transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            All trademarks, logos, and brand names are the property of their respective owners.
          </p>
          <p className="text-gray-500 text-xs">© 2025 Abstrakt Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
