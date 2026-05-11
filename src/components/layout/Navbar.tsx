import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Members', path: '/members' },
    { name: 'Chapters', path: '/chapters' },
    { name: 'Summit', path: '/summit' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200',
      isScrolled ? 'border-b border-reach-border shadow-sm' : 'border-b border-reach-border'
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src="/Untitled.png" alt="Reach Nationals" className="h-9 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors duration-150',
                  isActive(link.path)
                    ? 'text-reach-navy'
                    : 'text-reach-ink/60 hover:text-reach-ink'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/join"
              className="hidden md:inline-flex items-center bg-reach-navy text-white text-xs font-bold uppercase tracking-wide px-5 py-2.5 rounded-lg hover:bg-reach-navy/90 transition-colors duration-150"
            >
              Apply Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-reach-ink/60 hover:text-reach-ink"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-reach-border bg-white">
            <div className="px-2 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors',
                    isActive(link.path)
                      ? 'text-reach-navy bg-reach-navy/5'
                      : 'text-reach-ink/60 hover:text-reach-ink hover:bg-reach-offwhite'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-reach-border mt-2">
                <Link
                  to="/join"
                  className="block text-center bg-reach-navy text-white text-sm font-bold uppercase tracking-wide px-4 py-3 rounded-lg hover:bg-reach-navy/90 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
