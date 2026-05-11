import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const events = [
  {
    tag: 'Gifting Suite · Los Angeles, CA · 2024',
    name: 'REACH Pre-Coachella',
    stat: '1,000+',
    statLabel: 'creators attended',
    desc: 'We brought over 1,000 creators together in Los Angeles ahead of the world\'s biggest music festival. Brands showed up. The internet noticed.',
    highlights: [
      'Liquid Death', 'Quest Nutrition', 'Revlon', 'Beyond Meat',
      'Fanfix', 'Barebells', 'Vitamin Water', 'Nosotros Mezcal',
      'LESSEREVIL', 'Mavely', 'HiitHaus', '+ 20 more brands',
    ],
    image: '/images/Photos/PreCoachella Gifting Suite.jpg',
  },
  {
    tag: 'Creator House · Chicago · 2024',
    name: 'REACH x Daisy at Lollapalooza',
    stat: 'Lolla \'24',
    statLabel: 'Chicago',
    desc: 'REACH ran a Creator House in Chicago during Lollapalooza, one of the world\'s most iconic festivals. Creators, culture, and community colliding in real life.',
    highlights: [],
    image: '/images/Photos/Lollapalooza3.jpeg',
  },
  {
    tag: 'Community Event · Los Angeles, CA · 2025',
    name: 'REACH x HiitHaus #NUFFSAID',
    stat: 'ft. Sommer Ray',
    statLabel: 'HiitHaus',
    desc: 'A creator experience in LA with Sommer Ray that blurred the line between fitness, lifestyle, and culture. Built for the community. Made for the feed.',
    highlights: [],
    image: '/images/Photos/NuffSaid.jpg',
  },
];

const Events = () => {
  return (
    <section className="bg-reach-ink py-14 md:py-24 border-t border-white/5">
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-reach-gold/70 mb-4 block">
              IRL · National · Ours
            </span>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              REACH goes beyond
              <br />
              <span className="text-reach-gold">the campus.</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
            We produce national creator events, gifting suites, festival activations, and community experiences across the country.
          </p>
        </motion.div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-reach-gold/30 transition-all duration-300"
            >
              {/* Event photo */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-reach-ink/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-reach-gold/60 block mb-3">
                  {event.tag}
                </span>
                <h3 className="font-grotesk font-bold text-white text-xl mb-3 leading-snug group-hover:text-reach-gold transition-colors">
                  {event.name}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-5">
                  {event.desc}
                </p>

                {event.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/8">
                    {event.highlights.map((h, j) => (
                      <span
                        key={j}
                        className="text-[10px] font-medium text-white/35 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}

                {event.highlights.length === 0 && (
                  <div className="pt-4 border-t border-white/8 flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-reach-gold/50" />
                    <span className="text-white/40 text-xs font-semibold">{event.stat}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white/5 border border-white/10 rounded-2xl px-8 py-6"
        >
          <div>
            <p className="font-grotesk font-bold text-white text-lg mb-1">
              Reach Nationals is a national creator economy organization.
            </p>
            <p className="text-white/40 text-sm">
              College chapters, regional chapters, and national events. All under one roof.
            </p>
          </div>
          <Link
            to="/chapters"
            className="group flex-shrink-0 inline-flex items-center gap-2 bg-reach-gold text-reach-navy text-sm font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
          >
            See all chapters
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
