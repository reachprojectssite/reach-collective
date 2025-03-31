import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Facebook, MapPin, Mail, Phone, ExternalLink, Shield, Users, BookOpen, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-reach-navy text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Mission Statement */}
          <div className="lg:col-span-2">
            <p className="text-lg font-light mb-8">
              Empowering the Next Generation of Creators Through Leadership, Innovation, and Community Since 2023
            </p>
            
            {/* Contact Info */}
            <div className="mb-8">
              <h3 className="font-semibold mb-2">National Office</h3>
              <p className="text-white/80 mb-2">Los Angeles, California</p>
              <a href="mailto:join@reachnationals.org" className="block text-reach-gold hover:text-white/90 transition-colors mb-1">
                📧 join@reachnationals.org
              </a>
              <a href="mailto:help@reachnationals.org" className="block text-reach-gold hover:text-white/90 transition-colors">
                📧 help@reachnationals.org
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { text: 'Start a Chapter', href: '/start-chapter' },
                { text: 'Find Your Chapter', href: '/chapters' },
                { text: 'Workshops', href: '/workshops' },
                { text: 'Chapter Standards', href: '/standards' },
                { text: 'Brand Partnerships', href: '/partnerships' },
                { text: 'REACH Resources', href: '/resources' },
                { text: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-reach-gold transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Creed */}
          <div>
            <h3 className="font-semibold mb-4">Our Creed</h3>
            <p className="text-white/80 italic">
              "We are the next generation of creators, thinkers, and leaders. We don't wait for permission—we build what's next. Together, we create change, elevate each other, and turn influence into impact."
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 REACH National Corp | Est. 2023
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { text: 'Privacy Policy', href: '/privacy' },
                { text: 'Terms', href: '/terms' },
                { text: 'Code of Conduct', href: '/code-of-conduct' },
                { text: 'Accessibility', href: '/accessibility' },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-white/60 hover:text-reach-gold text-sm transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 