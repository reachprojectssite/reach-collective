import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import AnimatedCounter from '../AnimatedCounter';

const chapters = ['New York University', 'Penn State University', 'University of California, Los Angeles', 'University of Georgia', 'University of Miami', 'University of Michigan', 'University of Southern California', 'University of Texas at Austin'];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  // Parallax: photo translates slowly as user scrolls past hero
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={sectionRef} className="min-h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2">
      {/* Left: text content */}
      <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-16 pt-20 lg:pt-24 order-2 lg:order-1">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-reach-goldDark">
            <span className="w-5 h-px bg-reach-gold" />
            The Creator Org Everyone's Joining
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-grotesk text-[32px] sm:text-[42px] lg:text-[56px] xl:text-[64px] font-bold text-reach-ink leading-[1.05] tracking-tight mb-6">
          <span className="block overflow-hidden">
            {['The', 'club', 'that', 'truly'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.22em]"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden">
            {['values', 'creativity.'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.38 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`inline-block mr-[0.22em] ${i === 0 ? 'text-reach-navy' : 'text-reach-navy'}`}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-reach-ink/55 text-base sm:text-lg leading-relaxed max-w-md mb-8"
        >
          For creators, digital marketers, aspiring talent managers, editors, and anyone building a future in the creator economy. 100+ chapters. One national network.
        </motion.p>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {[
            { value: 100,   suffix: '+',  label: 'Universities' },
            { value: 5000,  suffix: '+',  label: 'Creators' },
            { value: 500,   suffix: 'M+', label: 'Cumulative Followers' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2 bg-reach-offwhite border border-reach-border rounded-full px-4 py-2">
              <span className="font-grotesk font-bold text-reach-ink text-sm">
                <AnimatedCounter value={s.value} suffix={s.suffix} duration={1.4 + i * 0.2} />
              </span>
              <span className="text-reach-ink/40 text-xs">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 mb-10"
        >
          <Link
            to="/join"
            className="group inline-flex items-center justify-center gap-2 bg-reach-navy text-white font-bold text-sm px-7 py-3.5 rounded-lg hover:bg-reach-navy/90 transition-colors"
          >
            Apply to REACH
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            to="/chapters"
            className="inline-flex items-center justify-center gap-2 text-reach-ink font-medium text-sm px-7 py-3.5 rounded-lg border border-reach-border hover:bg-reach-offwhite transition-colors"
          >
            Find your chapter
          </Link>
        </motion.div>

        {/* Chapter preview */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xs text-reach-ink/35 leading-relaxed"
        >
          Currently at {chapters.slice(0, 5).join(', ')} + {92} more universities
        </motion.p>
      </div>

      {/* Right: photo */}
      <div className="relative order-1 lg:order-2 h-64 sm:h-80 lg:h-auto bg-reach-cream overflow-hidden">
        <motion.img
          style={{ y: photoY, scale: photoScale }}
          src="/images/hero/thisphoto.webp"
          alt="REACH community"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-[center_20%] will-change-transform"
        />
        {/* Subtle warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-reach-cream/30 via-transparent to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
