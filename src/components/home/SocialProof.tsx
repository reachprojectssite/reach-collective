import { motion } from 'framer-motion';

const CLIENT_ID = '1idUvIq0FKjJXyzw7_R';
const bf = (domain: string) => `https://cdn.brandfetch.io/${domain}?c=${CLIENT_ID}`;

const creatorSpeakers = [
  { name: 'Adam W', note: 'Creator', initials: 'AW', photo: '/images/People/Adam W.webp' },
  { name: 'Cameron Dallas', note: 'Creator', initials: 'CD', photo: '/images/People/Cameron Dallas.webp' },
  { name: 'Cole Walliser', note: 'Director', initials: 'CW', photo: '/images/People/Cole Walliser.webp' },
  { name: 'Colin & Samir', note: 'Creators', initials: 'CS', photo: '/images/People/Colin And Samir.webp' },
  { name: 'Jabari Banks', note: 'Actor', initials: 'JB', photo: '/images/People/Jabari Banks.webp' },
  { name: 'JasonTheWeen', note: 'Creator', initials: 'JW', photo: '/images/People/Jason The Ween.webp' },
  { name: 'Jordan Matter', note: 'Photographer', initials: 'JM', photo: '/images/People/Jordan Matter.webp' },
  { name: 'JT Barnett', note: 'Creator', initials: 'JT', photo: '/images/People/JT Barnett.webp' },
  { name: 'Steven He', note: 'Creator', initials: 'SH', photo: '/images/People/Steven He.webp' },
  { name: 'Sydney Sweeney', note: 'Actress', initials: 'SS', photo: '/images/People/Sydney Sweeney.webp' },
];

const industrySpeakers = [
  { name: 'Amazon Prime Video', domain: 'primevideo.com' },
  { name: 'Electronic Arts',    domain: 'ea.com' },
  { name: 'Jubilee',            domain: 'jubileemedia.com' },
  { name: 'LinkedIn',           domain: 'linkedin.com' },
  { name: 'Merrill Lynch',      domain: 'ml.com' },
  { name: 'Meta',               domain: 'meta.com' },
  { name: 'Snapchat',           domain: 'snapchat.com' },
  { name: 'Spotify',            domain: 'spotify.com' },
  { name: 'Warner Bros',        domain: 'warnerbros.com' },
  { name: 'YouTube',            domain: 'youtube.com' },
];

const brands = [
  { name: 'Amazon Prime Video', domain: 'primevideo.com' },
  { name: 'American Eagle',     domain: 'ae.com' },
  { name: 'Barebells',          domain: 'barebells.com' },
  { name: 'Beyond Meat',        domain: 'beyondmeat.com' },
  { name: 'CapCut',             domain: 'capcut.com' },
  { name: 'Coca-Cola',          domain: 'coca-cola.com' },
  { name: 'DoorDash',           domain: 'doordash.com' },
  { name: 'InKind',             domain: 'inkind.com' },
  { name: 'NASCAR',             domain: 'nascar.com' },
  { name: 'PUMA',               domain: 'puma.com' },
  { name: 'Spotify',            domain: 'spotify.com' },
  { name: 'Warner Bros',        domain: 'warnerbros.com' },
  { name: 'YouTube',            domain: 'youtube.com' },
];

const universities = [
  { name: 'Cal State Northridge',                     abbr: 'CSUN',  domain: 'strengthunited.org' },
  { name: 'Chapman University',                       abbr: 'CU',    domain: 'chapman.edu' },
  { name: 'Emmanuel University',                      abbr: 'EU',    domain: 'eu.edu' },
  { name: 'Florida State University',                 abbr: 'FSU',   domain: 'fsu.edu' },
  { name: 'Loyola Marymount University',              abbr: 'LMU',   domain: 'lmu.edu' },
  { name: 'Middle Tennessee State University',        abbr: 'MTSU',  domain: 'mtsu.edu' },
  { name: 'Penn State University',                    abbr: 'PSU',   domain: 'psu.edu' },
  { name: 'Univ. of Illinois Urbana-Champaign',       abbr: 'UIUC',  domain: 'illinois.edu' },
  { name: 'University of California, Irvine',         abbr: 'UCI',   domain: 'uci.edu' },
  { name: 'University of California, Los Angeles',    abbr: 'UCLA',  domain: 'ucla.edu' },
  { name: 'University of California, San Diego',      abbr: 'UCSD',  domain: 'ucsd.edu' },
  { name: 'University of Michigan',                   abbr: 'UMich', domain: 'umich.edu' },
  { name: 'University of Pennsylvania',               abbr: 'Penn',  domain: 'upenn.edu' },
  { name: 'University of Southern California',        abbr: 'USC',   domain: 'usc.edu' },
  { name: 'University of Washington',                 abbr: 'UW',    domain: 'washington.edu' },
];

const avatarBgs = [
  'bg-reach-navy', 'bg-reach-slate', 'bg-amber-800', 'bg-emerald-800',
  'bg-purple-800', 'bg-rose-800', 'bg-cyan-800', 'bg-indigo-800',
  'bg-orange-800', 'bg-teal-800',
];

const avatarContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const avatarItem = {
  hidden: { opacity: 0, scale: 0.4, y: 24 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 16 } },
};
const logoContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};
const logoItem = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 18 } },
};

/** Logo image with text fallback */
const BrandLogo = ({
  domain,
  name,
  className,
  fallbackClass,
}: {
  domain: string;
  name: string;
  className: string;
  fallbackClass: string;
}) => (
  <>
    <img
      src={bf(domain)}
      alt={name}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        const fb = e.currentTarget.nextElementSibling as HTMLElement;
        if (fb) fb.style.display = 'flex';
      }}
      className={className}
    />
    <span style={{ display: 'none' }} className={fallbackClass}>
      {name}
    </span>
  </>
);

const SocialProof = () => {
  return (
    <section className="bg-white border-y border-reach-border divide-y divide-reach-border">

      {/* ── Creator guest speakers ── */}
      <div className="container mx-auto px-6 py-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[10px] font-bold uppercase tracking-[0.22em] text-reach-ink/30 mb-10 text-center"
        >
          Creator guest speakers we've brought to campus
        </motion.p>
        <motion.div
          variants={avatarContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-8"
        >
          {creatorSpeakers.map((s, i) => (
            <motion.div key={i} variants={avatarItem} className="flex flex-col items-center gap-3 group cursor-default">
              <motion.div
                whileHover={{ scale: 1.15, y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className={`w-16 h-16 rounded-full ${avatarBgs[i % avatarBgs.length]} flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden`}
              >
                {s.photo ? (
                  <img decoding="async" loading="lazy" src={s.photo} alt={s.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-grotesk font-bold text-white text-xs tracking-wide">{s.initials}</span>
                )}
              </motion.div>
              <div className="text-center w-20">
                <p className="font-grotesk font-bold text-reach-ink text-[11px] leading-tight group-hover:text-reach-navy transition-colors">{s.name}</p>
                <p className="text-reach-ink/35 text-[10px] mt-0.5">{s.note}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Industry speakers ── */}
      <div className="bg-reach-offwhite">
        <div className="container mx-auto px-6 py-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-bold uppercase tracking-[0.22em] text-reach-ink/30 mb-8 text-center"
          >
            Industry speakers from
          </motion.p>
          <motion.div
            variants={logoContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-8"
          >
            {industrySpeakers.map((s, i) => (
              <motion.div key={i} variants={logoItem} className="flex flex-col items-center gap-3 group cursor-default">
                <motion.div
                  whileHover={{ scale: 1.15, y: -4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden"
                >
                  <BrandLogo
                    domain={s.domain}
                    name={s.name}
                    className="w-full h-full object-cover scale-110"
                    fallbackClass="w-full h-full flex items-center justify-center bg-white text-[9px] font-bold text-reach-ink/60 text-center leading-tight"
                  />
                </motion.div>
                <div className="text-center w-20">
                  <p className="font-grotesk font-bold text-reach-ink text-[11px] leading-tight group-hover:text-reach-navy transition-colors">{s.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Brand partners + Universities ── */}
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* Brands */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-reach-ink/30 mb-6">
              Brand partners we've worked with
            </p>
            <motion.div
              variants={logoContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-4 sm:grid-cols-5 gap-y-5"
            >
              {brands.map((b, i) => (
                <motion.div
                  key={i}
                  variants={logoItem}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="flex flex-col items-center justify-center gap-1.5 cursor-default group"
                >
                  <div className="flex items-center justify-center w-14 h-9">
                    <BrandLogo
                      domain={b.domain}
                      name={b.name}
                      className="max-w-[46px] max-h-[26px] w-auto h-auto object-contain transition-opacity duration-200"
                      fallbackClass="text-[8px] font-bold text-reach-ink/35 text-center leading-tight"
                    />
                  </div>
                  <span className="text-[8px] font-semibold text-reach-ink/30 group-hover:text-reach-ink/55 transition-colors text-center leading-tight w-14">
                    {b.name}
                  </span>
                </motion.div>
              ))}
              <div className="flex items-center justify-center w-14 h-9">
                <span className="text-[11px] font-bold text-reach-ink/20">+&nbsp;more</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Universities */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-reach-ink/30 mb-6">
              100+ chapters, including
            </p>
            <motion.div
              variants={logoContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-4 sm:grid-cols-5 gap-y-5"
            >
              {universities.map((u, i) => (
                <motion.div
                  key={i}
                  variants={logoItem}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="flex flex-col items-center justify-center gap-1.5 cursor-default group"
                >
                  <div className="flex items-center justify-center w-14 h-9">
                    <BrandLogo
                      domain={u.domain}
                      name={u.abbr}
                      className="max-w-[48px] max-h-[28px] w-auto h-auto object-contain transition-opacity duration-200"
                      fallbackClass="text-[10px] font-black text-reach-ink/40 tracking-wide"
                    />
                  </div>
                  <span className="text-[8px] font-semibold text-reach-ink/30 group-hover:text-reach-ink/55 transition-colors text-center leading-tight w-14">
                    {u.abbr}
                  </span>
                </motion.div>
              ))}
              <div className="flex flex-col items-center justify-center gap-1.5 cursor-default">
                <div className="flex items-center justify-center w-14 h-9">
                  <span className="text-[11px] font-bold text-reach-ink/20">+85 more</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default SocialProof;
