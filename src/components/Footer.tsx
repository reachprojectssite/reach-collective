
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-white font-display font-bold text-2xl">REACH</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering the next generation of digital influencers and marketers through collaborative learning, industry connections, and hands-on experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-reach-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-reach-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-reach-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-reach-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-reach-blue transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/join" className="text-gray-400 hover:text-white transition-colors">Join</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Why REACH</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Brand Partnerships</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Advisory Board</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Email: info@reachnationals.org</p>
            <form className="mt-4">
              <h4 className="text-sm font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-reach-blue w-full"
                />
                <button 
                  type="submit" 
                  className="bg-reach-blue hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} REACH Nationals. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm mr-4 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
