import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import AnimatedSection from './ui/AnimatedSection';
import { FloatingInput, FloatingTextarea } from './ui/FloatingInput';
import MagneticButton from './ui/MagneticButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        'service_nxkb9t4',
        'template_p49wow8',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        'dJ8Oo5s8vl2Tf9SWB'
      );

      console.log('Email sent:', result.text);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Sales Team',
      details: '+92 305 7799977',
      link: 'tel:+923057799977',
    },
    {
      icon: Phone,
      title: 'CEO',
      details: '+92 305 4553553',
      link: 'tel:+923054553553',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@abstrakthomes.com',
      link: 'mailto:info@abstrakthomes.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: '127-A, Main Commercial Broadway DHA Phase 8, Lahore, 54000',
      link: 'https://www.google.com/maps/dir//127-A,+Main+Commercial+Broadway+DHA+Phase+8,+Lahore,+54000/@31.4933248,74.399744,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39191da2256ab8e9:0xffcbd308126f8f41!2m2!1d74.4288754!2d31.5029087?hl=en-GB&authuser=0&entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D',
    },
  ];

  return (
    <AnimatedSection id="contact" className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,98,0.06),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm font-medium tracking-[0.25em] uppercase">Contact</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a consultation
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-luxury"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400">Message sent successfully!</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FloatingInput
                  id="name"
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FloatingInput
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FloatingInput
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <FloatingInput
                  id="subject"
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <FloatingTextarea
                id="message"
                label="Your Message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <MagneticButton type="submit">
                <span className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold rounded-xl shadow-glow hover:shadow-luxury transition-all">
                  Send Message
                  <Send className="w-5 h-5" />
                </span>
              </MagneticButton>
            </form>
          </motion.div>

          {/* Contact info + map */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.title === 'Location' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="block p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-gold-500/30 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-gold-500/10 rounded-lg text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{info.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{info.details}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923054553553"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 hover:bg-green-500/20 transition-all"
            >
              <FaWhatsapp className="w-6 h-6" />
              <span className="font-semibold">Chat on WhatsApp: +92 305 4553553</span>
            </a>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-luxury">
              <div className="p-4 bg-white/5 border-b border-white/10">
                <h4 className="text-white font-semibold">Our Location</h4>
              </div>
              <div className="h-64 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13614.22569336532!2d74.4192506!3d31.4825001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191a0dc2e7e68d%3A0x9f6a62329f432f86!2s127-A%2C%20Main%20Commercial%20Broadway%2C%20DHA%20Phase%208%2C%20Lahore%2054000!5e0!3m2!1sen!2s!4v1730621000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Abstrakt Homes location on Google Maps"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
