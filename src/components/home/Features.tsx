import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    number: '01',
    tag: 'Campus Community',
    title: 'Your chapter. Your crew.',
    description:
      'Official student organizations at 100+ universities. For creators, digital marketers, aspiring talent managers, editors, and anyone building in the creator economy. Weekly meetings, workshops, and collabs, all built around your campus.',
  },
  {
    number: '02',
    tag: 'Creator Education',
    title: 'The business side nobody teaches.',
    description:
      "Contracts. Brand deals. Negotiation. Monetization. Analytics. The stuff your professors don't cover, but that will determine how your career actually goes.",
  },
  {
    number: '03',
    tag: 'Events & Activations',
    title: 'Experiences worth posting.',
    description:
      'National summits, campus brand activations, content shoot days, and creator showcases. Plus appearances at VidCon, SXSW, and CES. The internet starts offline.',
  },
  {
    number: '04',
    tag: 'Industry Access',
    title: 'Real pipelines, not cold DMs.',
    description:
      "REACH alumni now work at TikTok, Meta, YouTube, Amazon, and major agencies. Our network opens doors that follower counts alone can't.",
  },
  {
    number: '05',
    tag: 'Brand Partnerships',
    title: 'Real life experiences. Actual brands.',
    description:
      "We've partnered with Amazon, Disney, Quest Nutrition, Bare Bells, and more to bring exclusive experiences and product collaborations directly to REACH members.",
  },
  {
    number: '06',
    tag: 'Creator Wellbeing',
    title: 'Built to last, not just to post.',
    description:
      "REACH was built with mental health at its core. A creator who burns out isn't a creator for long. We build sustainable careers, not just content schedules.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const Features = () => {
  return (
    <section className="bg-reach-offwhite py-14 md:py-24 border-t border-reach-border">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-reach-goldDark mb-4 block">
              What You Get
            </span>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight">
              Everything the creator economy
              <br className="hidden sm:block" /> requires. Nothing it doesn't.
            </h2>
          </div>
          <Link
            to="/join"
            className="group flex-shrink-0 inline-flex items-center gap-2 text-reach-navy text-sm font-semibold hover:gap-3 transition-all"
          >
            Apply now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.12)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="group bg-white border border-reach-border rounded-xl p-7 relative overflow-hidden cursor-default"
            >
              {/* Background number */}
              <span className="absolute -bottom-3 -right-1 font-grotesk font-black text-[72px] leading-none text-reach-ink/[0.04] select-none group-hover:text-reach-navy/5 transition-colors duration-500">
                {f.number}
              </span>

              {/* Tag */}
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-reach-goldDark bg-reach-gold/10 px-3 py-1 rounded-full mb-5">
                {f.tag}
              </span>

              {/* Title */}
              <h3 className="font-grotesk text-lg font-bold text-reach-ink mb-3 leading-snug group-hover:text-reach-navy transition-colors duration-200">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-reach-ink/50 text-sm leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
