import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const pillars = [
  { label: 'Community', desc: 'Stop building alone' },
  { label: 'Education', desc: 'Know your worth' },
  { label: 'Access', desc: 'Open the right doors' },
];

const CallToAction = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '15%']);

  return (
    <div ref={ref} className="relative overflow-hidden bg-reach-navy">
      {/* Background image: very dark navy treatment */}
      <div className="absolute inset-0">
        <motion.img
          style={{ y: bgY }}
          src="/images/group-photo.webp"
          alt="REACH community"
          className="w-full h-[120%] -top-[10%] absolute inset-x-0 object-cover object-center opacity-40 will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-reach-navy/90 via-reach-navy/80 to-reach-navy/60" />
      </div>

      <div className="relative py-14 md:py-28 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              <span className="w-8 h-px bg-reach-gold/50" />
              Ready to build?
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-grotesk text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-8"
          >
            The creator economy
            <br />
            starts on{' '}
            <span className="text-reach-gold">campus.</span>
          </motion.h2>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mb-12 leading-relaxed"
          >
            Most creators begin with a peer group. A campus. A roommate who edits. A friend with a camera. REACH is built around that reality: 100 universities, 5,000 members, one network that has your back.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-16"
          >
            <Link
              to="/join"
              className="group inline-flex items-center gap-2 bg-reach-gold text-reach-navy font-bold text-sm px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Apply to REACH
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/chapters"
              className="inline-flex items-center gap-2 text-white/60 font-medium text-sm px-8 py-4 rounded-lg border border-white/15 hover:border-white/30 hover:text-white transition-all"
            >
              Find your chapter
            </Link>
          </motion.div>

          {/* Three pillars */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-8 border-t border-white/10 pt-10"
          >
            {pillars.map((p, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="w-px h-8 bg-reach-gold/40 flex-shrink-0" />
                <div>
                  <p className="font-grotesk font-bold text-white text-sm">{p.label}</p>
                  <p className="text-white/35 text-xs mt-0.5">{p.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
