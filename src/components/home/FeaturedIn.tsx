import { motion } from 'framer-motion';

// Brand-ID-based CDN URLs — dark theme = text wordmarks visible on white backgrounds.
// Each BrandFetch SVG has different internal padding, so per-logo heightPx is tuned
// so the visible wordmark x-height matches across all publications.
const publications = [
  {
    name: 'Good Morning America',
    logo: 'https://cdn.brandfetch.io/idXN6rfX-g/theme/dark/logo.svg?c=1idUvIq0FKjJXyzw7_R',
    href: 'https://www.goodmorningamerica.com/amp/living/story/influencer-101-colleges-teaching-students-business-influencer-102971928',
    heightPx: 100,
  },
  {
    name: 'The Hollywood Reporter',
    logo: 'https://cdn.brandfetch.io/idYn1tJhSw/theme/dark/logo.svg?c=1idUvIq0FKjJXyzw7_R',
    href: 'https://www.hollywoodreporter.com/lists/influencer-studies-universities/',
    heightPx: 36,
  },
  {
    name: 'The Information',
    logo: 'https://cdn.brandfetch.io/id40eezpym/theme/dark/logo.svg?c=1idUvIq0FKjJXyzw7_R',
    href: 'https://www.theinformation.com/newsletters/creator-economy/the-exclusive-college-club-training-student-influencers',
    heightPx: 28,
  },
  {
    name: 'Tubefilter',
    logo: 'https://cdn.brandfetch.io/idDRgfK_a0/theme/dark/logo.svg?c=1idUvIq0FKjJXyzw7_R',
    href: 'https://www.tubefilter.com/2023/05/24/usc-reach-now-podcast/',
    heightPx: 40,
  },
  {
    name: 'NBC News',
    logo: 'https://cdn.brandfetch.io/idBTgaxPfa/theme/dark/logo.svg?c=1idUvIq0FKjJXyzw7_R',
    href: 'https://www.nbcnews.com/news/us-news/big-gram-campus-usc-students-train-become-influencers-n1156881',
    heightPx: 21,
  },
  {
    name: 'Business Insider',
    logo: 'https://cdn.brandfetch.io/idrOA5w3um/theme/dark/logo.svg?c=1idUvIq0FKjJXyzw7_R',
    href: 'https://www.businessinsider.com/college-influencer-organization-brand-deals-pitch-deck-email-template-2023-1',
    heightPx: 45,
  },
];

const FeaturedIn = () => {
  return (
    <section className="bg-white border-b border-reach-border overflow-hidden">
      <div className="container mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-2 text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-reach-ink/25">
            As featured in
          </span>

          {/* Flex row: logos wrap on mobile, single row on md+ */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-x-4 md:gap-x-6 gap-y-1 w-full max-w-6xl">
            {publications.map((pub) => (
              <a
                key={pub.name}
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={pub.name}
                className="group flex items-center justify-center h-[64px] md:h-[100px] px-2 md:px-3"
              >
                <img
                  src={pub.logo}
                  alt={pub.name}
                  style={{ height: `${pub.heightPx}px` }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fb = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fb) fb.style.display = 'block';
                  }}
                  className="w-auto max-w-[110px] md:max-w-[180px] max-h-[34px] md:max-h-none object-contain grayscale opacity-40 group-hover:opacity-70 transition-opacity duration-200"
                />
                <span className="hidden text-[10px] font-bold text-reach-ink/30 group-hover:text-reach-ink/60 transition-colors">
                  {pub.name}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedIn;
