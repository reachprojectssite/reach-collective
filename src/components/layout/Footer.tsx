import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-reach-offwhite border-t border-reach-border">
      <div className="container mx-auto px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/Untitled.png" alt="Reach Nationals" className="h-9 w-auto object-contain mb-5" />
            <p className="text-reach-ink/60 text-sm leading-relaxed max-w-sm mb-7">
              The national chapter network connecting student creators, filmmakers, founders, and culture-builders at 100+ universities.
            </p>
            <div className="space-y-1.5">
              <p className="text-reach-ink/55 text-[10px] uppercase tracking-widest font-bold">National Office</p>
              <p className="text-reach-ink/60 text-sm">Los Angeles, California</p>
              <a href="mailto:join@reachnationals.org" className="block text-reach-goldDark hover:text-reach-navy text-sm transition-colors font-medium">
                join@reachnationals.org
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-reach-ink/55 mb-5">Navigate</h3>
            <ul className="space-y-2.5">
              {[
                { text: 'Our Story', href: '/about' },
                { text: 'Members', href: '/members' },
                { text: 'Chapters', href: '/chapters' },
                { text: 'Summit', href: '/summit' },
                { text: 'Apply to REACH', href: '/join' },
                { text: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-reach-ink/50 hover:text-reach-ink text-sm transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Creed + Social */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-reach-ink/55 mb-5">Our Creed</h3>
            <p className="text-reach-ink/60 text-sm italic leading-relaxed mb-6">
              "We are the next generation of creators, thinkers, and leaders. We don't wait for permission. We build what's next."
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/reachnatl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="REACH Nationals on Instagram"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-reach-border text-reach-ink/40 hover:text-reach-navy hover:border-reach-navy/30 transition-all"
              >
                <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/reach-fam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="REACH Nationals on LinkedIn"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-reach-border text-reach-ink/40 hover:text-reach-navy hover:border-reach-navy/30 transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-reach-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-reach-ink/55 text-xs">
            © {currentYear} Reach Nationals Corp · Est. 2023 · 501(c)(3) Nonprofit
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {[
              { text: 'Journal', href: '/blog' },
              { text: 'Privacy Policy', href: '/privacy' },
              { text: 'Terms', href: '/terms' },
              { text: 'Code of Conduct', href: '/code-of-conduct' },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-reach-ink/60 hover:text-reach-ink text-xs transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
