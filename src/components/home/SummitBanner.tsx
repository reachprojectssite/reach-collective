import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SummitBanner = () => {
  return (
    <section className="bg-summit-ink text-white">
      <div className="container mx-auto px-6 py-3 md:py-3.5">
        <Link
          to="/summit"
          className="group flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center md:gap-x-6"
        >
          <span className="font-grotesk text-sm font-bold tracking-tight md:text-base">
            <span className="text-summit-lime">REACH Nationals Summit</span>
            <span className="block font-medium text-white/90 sm:ml-2 sm:inline">
              December 5 in Los Angeles. Spots are limited.
            </span>
          </span>

          <span className="inline-flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap text-xs font-bold text-summit-lime transition-all group-hover:gap-2.5 md:text-sm">
            Save your spot
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default SummitBanner;
