import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      "Founding a REACH chapter changed how I think about leadership entirely. I went from posting content alone to running a team, building systems, and learning how to mobilize people. That skill will follow me into every career I have.",
    name: 'Justin Leusner',
    handle: '@justinleusner',
    role: 'Chapter Founder · Penn State University',
    photo: '/images/testimonials/Justin Leusner.webp',
  },
  {
    quote:
      "REACH gave me the platform and structure to take my passion seriously. Through hosting events, running a team, and connecting with creators across schools, I grew more in one semester than I had in years of posting on my own.",
    name: 'Nila Makhfi',
    handle: '@nilamakhfi',
    role: 'Chapter Founder · University of California, Los Angeles',
    photo: '/images/testimonials/Nila Makhfi.webp',
  },
  {
    quote:
      "I didn't know content creation could be a real career until REACH. The workshops, brand deal education, learning how to pitch myself, it all made me realize I was already doing the work. I just needed the language for it.",
    name: 'Jayme Aiden',
    handle: '@jayme.aiden',
    role: 'Alum · University of California, Los Angeles',
    photo: '/images/testimonials/Jayme Aiden.webp',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const Testimonials = () => {
  return (
    <section className="bg-white py-14 md:py-24 border-t border-reach-border">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-reach-goldDark mb-4 block">
            From the Community
          </span>
          <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink">
            Don't take our word for it.
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{
                y: -8,
                rotate: i === 1 ? 0 : i === 0 ? -1 : 1,
                scale: 1.02,
                boxShadow: '0 24px 48px -12px rgba(0,0,0,0.14)',
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="group bg-reach-offwhite border border-reach-border rounded-2xl p-7 cursor-default"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                  <img decoding="async" loading="lazy" src={t.photo} alt={t.name} className="w-full h-full object-cover" />
                </div>
                {/* Quote mark */}
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="text-reach-gold/40 group-hover:text-reach-gold/70 transition-colors">
                  <path d="M0 18V10.8C0 7.6.733 4.933 2.2 2.8 3.667.667 5.867 0 8.8 0L10 2.2C8.267 2.6 6.933 3.4 6 4.6 5.067 5.8 4.6 7.2 4.6 8.8H8V18H0Zm14 0V10.8c0-3.2.733-5.867 2.2-8C17.667.667 19.867 0 22.8 0L24 2.2c-1.733.4-3.067 1.2-4 2.4-.933 1.2-1.4 2.6-1.4 4.2H22V18H14Z" fill="currentColor" />
                </svg>
              </div>

              {/* Quote */}
              <blockquote className="text-reach-ink/65 text-sm leading-relaxed mb-7">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-reach-border pt-5">
                <p className="font-grotesk font-bold text-reach-ink text-sm">{t.name}</p>
                <p className="text-reach-goldDark text-xs mt-0.5 font-mono">{t.handle}</p>
                <p className="text-reach-ink/35 text-xs mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
