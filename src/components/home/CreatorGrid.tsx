import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function useCountUp(end: number, duration = 1.8) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * end));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, end, duration]);
  return { value, ref };
}

const creatorTypes = [
  'Photographers', 'Filmmakers', 'Founders', 'TikTokers',
  'Podcasters', 'Athletes', 'Designers', 'Marketers',
  'DJs', 'Editors', 'Journalists', 'Activists',
];

const CreatorGrid = () => {
  const followers = useCountUp(500);
  const campuses = useCountUp(100);

  return (
    <section className="bg-reach-cream py-14 md:py-24 border-t border-reach-border">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-reach-goldDark mb-4 block">
              Who's in REACH
            </span>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight">
              Every type of creator.
              <br />
              <span className="text-reach-ink/30">One national network.</span>
            </h2>
          </div>
          <Link
            to="/members"
            className="group flex-shrink-0 inline-flex items-center gap-2 text-reach-navy text-sm font-semibold hover:gap-3 transition-all"
          >
            Meet the community
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 [&>*]:min-h-[200px] md:[&>*]:min-h-0"
          style={{ gridAutoRows: 'minmax(200px, auto)' }}
        >
          {/* Large photo card */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl group min-h-[280px] md:min-h-0">
            <img
              src="/images/Photos/Four Students at an event.jpeg"
              alt="REACH community"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-reach-ink/60 via-reach-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 block mb-2">REACH Community</span>
              <p className="font-grotesk font-bold text-white text-xl leading-snug">
                Where creators find collaborators before they find managers.
              </p>
            </div>
          </div>

          {/* Stat: Combined REACH */}
          <div ref={followers.ref} className="relative overflow-hidden rounded-2xl bg-reach-navy p-7 flex flex-col justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Combined REACH</span>
            <div>
              <span className="font-grotesk font-bold text-5xl text-white leading-none block">{followers.value}M+</span>
              <span className="text-white/40 text-xs mt-2 block">cumulative followers amongst members</span>
            </div>
          </div>

          {/* Stat: Campuses */}
          <div ref={campuses.ref} className="relative overflow-hidden rounded-2xl bg-reach-gold/15 border border-reach-gold/20 p-7 flex flex-col justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-reach-goldDark">Campuses</span>
            <div>
              <span className="font-grotesk font-bold text-5xl text-reach-ink leading-none block">{campuses.value}+</span>
              <span className="text-reach-ink/40 text-xs mt-2 block">universities & counting</span>
            </div>
          </div>

          {/* Events photo */}
          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src="/images/Photos/Students Holding Up YouTube Swag.jpeg"
              alt="REACH chapter event"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-reach-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 block mb-1">Chapter Events</span>
              <p className="text-white text-sm font-medium">IRL moments that turn strangers into collaborators</p>
            </div>
          </div>

          {/* Manifesto quote */}
          <div className="md:col-span-2 relative overflow-hidden rounded-2xl bg-white border border-reach-border p-7 flex flex-col justify-center">
            <p className="font-grotesk text-lg md:text-xl font-bold text-reach-ink leading-snug">
              "Culture doesn't move from corporations to consumers anymore. It moves through{' '}
              <span className="text-reach-navy">networks</span>,{' '}
              <span className="text-reach-navy">communities</span>, and{' '}
              <span className="text-reach-navy">people with trust</span>."
            </p>
            <span className="text-reach-ink/30 text-xs mt-4 font-semibold uppercase tracking-widest">REACH</span>
          </div>
        </motion.div>

        {/* Creator type tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {creatorTypes.map((type, i) => (
            <span
              key={i}
              className="text-xs font-semibold text-reach-ink/50 border border-reach-border bg-white px-4 py-2 rounded-full hover:border-reach-navy/30 hover:text-reach-navy transition-all duration-200 cursor-default"
            >
              {type}
            </span>
          ))}
          <span className="text-xs font-semibold text-reach-goldDark border border-reach-gold/30 bg-reach-gold/10 px-4 py-2 rounded-full">
            + more
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorGrid;
