import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

/**
 * Slim announcement banner that promotes the REACH Summit on the landing page.
 * Lives at the top of the home flow, just below the main navbar.
 */
const SummitBanner = () => {
  return (
    <section className="bg-reach-navy text-white border-b border-reach-navy">
      <div className="container mx-auto px-6 py-3 md:py-3.5">
        <Link
          to="/summit"
          className="group flex flex-wrap items-center justify-center gap-x-4 gap-y-1 md:gap-x-6 text-center"
        >
          <span className="inline-flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.24em] text-reach-gold flex-shrink-0">
            <Sparkles className="w-3 h-3" />
            Just Announced
          </span>

          <span className="font-grotesk text-sm md:text-base font-bold tracking-tight">
            <span className="text-reach-gold">REACH Summit</span>
            <span className="hidden sm:inline text-white"> · </span>
            <span className="block sm:inline text-white/90 font-medium">
              Where creators, tech, & entertainment collide. First week of December, Los Angeles.
            </span>
          </span>

          <span className="inline-flex items-center gap-1.5 text-reach-gold font-bold text-xs md:text-sm whitespace-nowrap group-hover:gap-2.5 transition-all flex-shrink-0">
            Learn more
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default SummitBanner;
