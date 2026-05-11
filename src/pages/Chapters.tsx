import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users, MapPin, Info } from "lucide-react";

const CAMPUS_CHAPTERS = [
  "Cal State Northridge",
  "Chapman University",
  "Emmanuel University",
  "Florida State University",
  "Loyola Marymount University",
  "Middle Tennessee State University",
  "Penn State University",
  "Univ. of Illinois Urbana-Champaign",
  "University of California, Irvine",
  "University of California, Los Angeles",
  "University of California, San Diego",
  "University of Michigan",
  "University of Pennsylvania",
  "University of Southern California",
  "University of Washington",
];

const REGIONAL_CHAPTERS = [
  { city: "Bay Area",     state: "CA" },
  { city: "Chicago",      state: "IL" },
  { city: "Los Angeles",  state: "CA" },
  { city: "Miami",        state: "FL" },
  { city: "New York",     state: "NY" },
];

const PATHS = [
  {
    number: "01",
    tag: "I'm in college",
    title: "Join the chapter on your campus.",
    body: "If REACH is already at your school, the move is simple: apply, show up, get involved. Connect with creators on your campus who are already building, and level up alongside them.",
    cta: "Find your chapter",
    href: "/join?path=join",
    icon: Users,
  },
  {
    number: "02",
    tag: "I'm in college (no chapter)",
    title: "Start a chapter at your school.",
    body: "If REACH isn't at your university yet, be the one who brings it. You'll get full national support: branding, playbooks, mentorship, and access to the entire REACH network from day one.",
    cta: "Start a chapter",
    href: "/join?path=start",
    icon: GraduationCap,
  },
  {
    number: "03",
    tag: "Post-grad, industry, or non-student",
    title: "Pioneer a city chapter.",
    body: "REACH is expanding into regional chapters in LA, NY, Miami, the Bay Area, and Chicago. Open to creators, industry leaders, and creator economy enthusiasts. These are the first of their kind.",
    cta: "Express interest",
    href: "/join?path=regional",
    icon: MapPin,
  },
];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-reach-goldDark mb-4">
    <span className="w-5 h-px bg-reach-gold" />
    {children}
  </span>
);

const Chapters = () => (
  <div className="bg-white">
    {/* ── Hero ── */}
    <section className="relative overflow-hidden border-b border-reach-border">
      <div className="absolute inset-0">
        <img
          src="/images/Photos/usc group photo.jpg"
          alt="REACH chapter members"
          className="w-full h-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-white/55 to-reach-offwhite/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
        <div className="absolute -right-32 -top-32 w-[480px] h-[480px] bg-reach-gold/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end pt-16 pb-20 md:pt-24 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <Eyebrow>Chapters</Eyebrow>
            <h1 className="font-grotesk text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-6 text-reach-ink">
              Not just a campus club.
              <br />
              <span className="text-reach-navy">A national movement.</span>
            </h1>
            <p className="text-reach-ink/55 text-base sm:text-lg max-w-2xl leading-relaxed">
              Reach Nationals is a national creator economy organization. Chapters are how we show up locally,{" "}
              <span className="text-reach-navy font-semibold">on every campus and in every major creator city.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <div className="bg-white border border-reach-border rounded-xl p-6 shadow-lg shadow-black/5">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-reach-goldDark mb-5 block">
                The Network
              </span>
              <div className="space-y-3">
                {[
                  { label: "Active Campus Chapters", value: "100+" },
                  { label: "Regional Chapters",      value: "5" },
                  { label: "States Represented",     value: "20+" },
                  { label: "Combined Reach",         value: "500M+" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="flex items-baseline justify-between border-b border-reach-border last:border-0 pb-3 last:pb-0"
                  >
                    <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-reach-ink/45">{s.label}</span>
                    <span className="font-grotesk text-2xl font-bold text-reach-ink">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── Three Paths ── */}
    <section className="bg-white py-14 md:py-24 border-t border-reach-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <Eyebrow>Three Ways In</Eyebrow>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight">
              There's a chapter for{" "}
              <span className="text-reach-navy">where you are.</span>
            </h2>
          </div>
          <p className="text-reach-ink/50 text-base max-w-sm leading-relaxed md:text-right">
            Pick the path that matches you right now. Each one has the same goal: get you building alongside the people who are doing the work.
          </p>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {PATHS.map((p, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.12)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="group bg-white border border-reach-border rounded-xl p-7 relative overflow-hidden flex flex-col"
            >
              <span className="absolute -bottom-3 -right-1 font-grotesk font-black text-[72px] leading-none text-reach-ink/[0.04] select-none group-hover:text-reach-navy/5 transition-colors duration-500">
                {p.number}
              </span>
              <span className="inline-block w-fit text-[10px] font-bold uppercase tracking-[0.18em] text-reach-goldDark bg-reach-gold/10 px-3 py-1 rounded-full mb-5">
                {p.tag}
              </span>
              <p.icon className="w-5 h-5 text-reach-goldDark mb-4 group-hover:text-reach-navy transition-colors" />
              <h3 className="font-grotesk text-lg font-bold text-reach-ink mb-3 leading-snug group-hover:text-reach-navy transition-colors duration-200">
                {p.title}
              </h3>
              <p className="text-reach-ink/50 text-sm leading-relaxed mb-6 flex-1">{p.body}</p>
              <Link
                to={p.href}
                className="inline-flex items-center gap-2 text-sm font-bold text-reach-navy hover:gap-3 transition-all"
              >
                {p.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── Photo strip ── */}
    <section className="bg-reach-offwhite py-14 md:py-24 border-t border-reach-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <Eyebrow>Chapters In Motion</Eyebrow>
          <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight">
            Built and run{" "}
            <span className="text-reach-navy">by the students themselves.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4"
        >
          {[
            { src: "/images/Photos/Four Female Students at a reach event.jpeg", alt: "REACH chapter members",   position: "object-center" },
            { src: "/images/Photos/Students at Event.jpeg",                       alt: "REACH campus event",     position: "object-center" },
            { src: "/images/Photos/Three Students Photoshoot.jpg",                alt: "REACH creators on campus", position: "object-[center_30%]" },
          ].map((photo, i) => (
            <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden group">
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${photo.position}`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── Current campus chapters ── */}
    <section className="bg-white py-14 md:py-24 border-t border-reach-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <Eyebrow>Campus Chapters</Eyebrow>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight">
              We might already be{" "}
              <span className="text-reach-navy">at your school.</span>
            </h2>
          </div>
          <p className="text-reach-ink/50 text-base max-w-sm leading-relaxed md:text-right">
            Featured chapters below. We're at 100+ universities and growing fast.
          </p>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.025 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2.5 md:gap-3"
        >
          {CAMPUS_CHAPTERS.map((u, i) => (
            <motion.span
              key={i}
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
              className="font-grotesk font-semibold text-sm text-reach-ink bg-reach-offwhite border border-reach-border px-5 py-2.5 rounded-full hover:border-reach-navy/30 hover:bg-white hover:text-reach-navy transition-all"
            >
              {u}
            </motion.span>
          ))}
          <motion.span
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
            className="font-grotesk font-semibold text-sm text-reach-ink/45 bg-reach-offwhite border border-reach-border px-5 py-2.5 rounded-full"
          >
            + 85 more
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex items-start gap-4 bg-reach-gold/10 border border-reach-gold/30 rounded-xl px-6 py-5"
        >
          <Info className="w-5 h-5 text-reach-goldDark flex-shrink-0 mt-0.5" />
          <p className="text-reach-ink/75 text-sm leading-relaxed">
            <span className="font-semibold text-reach-ink">Don't see your school?</span> Before applying, check your university's recognized student organization list. Some chapters also have a dedicated Instagram you can search for.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ── Regional chapters ── */}
    <section className="bg-reach-offwhite py-14 md:py-24 border-t border-reach-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 lg:col-span-5"
          >
            <Eyebrow>Regional Chapters</Eyebrow>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight mb-5">
              REACH is coming{" "}
              <span className="text-reach-navy">to your city.</span>
            </h2>
            <p className="text-reach-ink/55 text-base md:text-lg leading-relaxed mb-6">
              Beyond campus, REACH is building regional chapters across the country. Open to creators, industry leaders, and creator economy enthusiasts in that city, whether you're in school or not. These are the first of their kind.
            </p>
            <p className="text-reach-navy font-semibold text-base mb-8">
              Want to pioneer one? We're looking for the right people.
            </p>
            <Link
              to="/join?path=regional"
              className="group inline-flex items-center gap-2 bg-reach-navy text-white text-sm font-bold px-7 py-3.5 rounded-lg hover:bg-reach-navy/90 transition-colors"
            >
              Express interest
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-6 lg:col-span-7 space-y-3"
          >
            {REGIONAL_CHAPTERS.map((r, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, x: 16 }, show: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                className="flex items-center justify-between bg-white border border-reach-border rounded-xl px-6 py-4 hover:border-reach-navy/30 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-4">
                  <MapPin className="w-4 h-4 text-reach-ink/25 group-hover:text-reach-navy transition-colors" />
                  <span className="font-grotesk font-bold text-reach-ink text-base">{r.city}</span>
                  <span className="text-reach-ink/35 text-sm">{r.state}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-reach-goldDark bg-reach-gold/10 px-3 py-1 rounded-full">
                  Pioneer
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="relative overflow-hidden border-t border-reach-border">
      <div className="absolute inset-0">
        <img
          src="/images/Photos/four members.jpg"
          alt="REACH community"
          className="w-full h-full object-cover object-[center_15%]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-reach-offwhite/90 via-white/80 to-reach-offwhite/90" />
        <div className="absolute -right-32 -bottom-32 w-[420px] h-[420px] bg-reach-gold/15 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative py-14 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <Eyebrow>Don't See Your School?</Eyebrow>
          <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-reach-ink">
            Be the one{" "}
            <span className="text-reach-navy">who brings it.</span>
          </h2>
          <p className="text-reach-ink/55 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            We'll back you. National support, brand templates, mentorship, and connections from day one. The hardest part is just saying yes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/join"
              className="group inline-flex items-center justify-center gap-2 bg-reach-navy text-white font-bold text-sm px-7 py-3.5 rounded-lg hover:bg-reach-navy/90 transition-colors"
            >
              Apply to REACH
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 text-reach-ink font-medium text-sm px-7 py-3.5 rounded-lg border border-reach-border hover:bg-reach-offwhite transition-colors"
            >
              Read our story
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Chapters;
