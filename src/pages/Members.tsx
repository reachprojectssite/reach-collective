import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ARCHETYPES = [
  { number: "01", tag: "Filmmakers",   title: "The storyteller.",      body: "Visual creators who think in scenes, cuts, and arcs. They'll be making the next generation of premium content." },
  { number: "02", tag: "Strategists",  title: "The growth mind.",      body: "The ones who know audience, analytics, and algorithms. They build careers at platforms, agencies, and inside creator brands." },
  { number: "03", tag: "Editors",      title: "The post-production crew.", body: "Pacing, color, sound. The people most viewers never credit, but every great creator can't work without." },
  { number: "04", tag: "Designers",    title: "The visual identity.",  body: "Brand systems, packaging, drops, look-and-feel. They shape what creators look like in market." },
  { number: "05", tag: "Founders",     title: "The builders.",         body: "Already running businesses out of their dorm. Brands, agencies, software, products. REACH is where they meet their first hires and earliest backers." },
  { number: "06", tag: "Talent",       title: "The faces.",            body: "Creators on-camera, on stage, in the feed. Audiences from a few thousand to several million. All inside the same network." },
];

const BENEFITS = [
  { number: "01", tag: "Network",            title: "100+ chapters. One network.",        body: "Members across the country in every major creator market. Cross-campus collabs, intros, and inside opportunities only members see." },
  { number: "02", tag: "Mentorship",         title: "Direct line to the industry.",       body: "Our Industry Advisory Board includes leaders from Meta, Snap, Famous Birthdays, Weber Shandwick, and UCLA. They open doors our members walk through." },
  { number: "03", tag: "Brand Opportunities", title: "Real partnerships, not group deals.", body: "We bring exclusive brand campaigns, gifting suites, festival activations, and product collaborations directly to members. With brands like Amazon, Disney, Quest Nutrition, and more." },
  { number: "04", tag: "Education",          title: "The business of being a creator.",   body: "Contracts, monetization, analytics, brand negotiations, taxes. Workshops led by working professionals and successful creator alumni." },
  { number: "05", tag: "Wellness",           title: "Built so you don't burn out.",       body: "Mental health is foundational. Peer support, healthy boundaries, sustainable schedules. We're playing the long game with the people who make this work." },
  { number: "06", tag: "Career",             title: "Pipelines into real jobs.",          body: "REACH alumni now work at TikTok, Meta, YouTube, Amazon, and major creator agencies. Our network is your portfolio's biggest amplifier." },
];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="font-dmono inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-reach-goldDark mb-4">
    <span className="w-5 h-px bg-reach-gold" />
    {children}
  </span>
);

const Members = () => (
  <div className="bg-white font-dm [&_h1]:font-sohne [&_h2]:font-sohne [&_h3]:font-dm [&_h4]:font-dm">
    {/* ── Hero ── */}
    <section className="relative overflow-hidden border-b border-reach-border">
      <div className="absolute inset-0">
        <img decoding="async" loading="eager" fetchPriority="high"
          src="/images/Photos/Six Students Posing Photoshoot.webp"
          alt="REACH members"
          className="w-full h-full object-cover object-[center_18%]"
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
            <Eyebrow>Our Members</Eyebrow>
            <h1 className="font-sohne text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-6 text-reach-ink">
              More than students.
              <br />
              <span className="text-reach-navy">The heart of REACH.</span>
            </h1>
            <p className="text-reach-ink/55 text-base sm:text-lg max-w-2xl leading-relaxed">
              Storytellers, strategists, editors, designers, founders, and visionaries. The people building the creator economy from the inside,{" "}
              <span className="text-reach-navy font-semibold">already, before anyone tells them they can.</span>
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
                The Membership
              </span>
              <div className="space-y-3">
                {[
                  { label: "Active Members",        value: "5,000+" },
                  { label: "Active Chapters",       value: "100+" },
                  { label: "Cumulative Followers",  value: "500M+" },
                  { label: "Alumni",                value: "2,000+" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="flex items-baseline justify-between border-b border-reach-border last:border-0 pb-3 last:pb-0"
                  >
                    <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-reach-ink/45">{s.label}</span>
                    <span className="font-sohne text-2xl font-bold text-reach-ink tabular-nums tracking-tight">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── Pull Quote ── */}
    <section className="bg-reach-offwhite py-14 md:py-24 border-t border-reach-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Eyebrow>Who's In The Room</Eyebrow>
          <h2 className="font-sohne text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight mb-6">
            They're filming between classes, planning shoots after lectures,{" "}
            <span className="text-reach-navy">and pitching brands from dorm rooms.</span>
          </h2>
          <p className="text-reach-ink/55 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Some are just starting. Some have millions of followers. Every one of them is building something bigger than a brand. They're building a future in the creator economy.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ── Archetypes ── */}
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
            <Eyebrow>The Member Mix</Eyebrow>
            <h2 className="font-sohne text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight">
              The full creator economy
              <br className="hidden sm:block" /> under <span className="text-reach-navy">one roof.</span>
            </h2>
          </div>
          <p className="text-reach-ink/50 text-base max-w-sm leading-relaxed md:text-right">
            REACH isn't just for on-camera talent. It's for everyone shaping how creator businesses get built.
          </p>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {ARCHETYPES.map((a, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.12)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="group bg-white border border-reach-border rounded-xl p-7 relative overflow-hidden cursor-default"
            >
              <span className="absolute -bottom-3 -right-1 font-sohne font-black text-[72px] leading-none text-reach-ink/[0.04] select-none group-hover:text-reach-navy/5 transition-colors duration-500">
                {a.number}
              </span>
              <span className="font-dmono inline-block text-[10px] font-medium uppercase tracking-[0.18em] text-reach-goldDark bg-reach-gold/10 px-3 py-1 rounded-full mb-5">
                {a.tag}
              </span>
              <h3 className="font-dm text-lg font-bold text-reach-ink mb-3 leading-snug group-hover:text-reach-navy transition-colors duration-200">
                {a.title}
              </h3>
              <p className="text-reach-ink/50 text-sm leading-relaxed">{a.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── Member Photos ── */}
    <section className="bg-reach-offwhite py-14 md:py-24 border-t border-reach-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <Eyebrow>In The Wild</Eyebrow>
          <h2 className="font-sohne text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight mb-5">
            Members and the creators{" "}
            <span className="text-reach-navy">who come through our events.</span>
          </h2>
          <p className="text-reach-ink/55 text-base md:text-lg leading-relaxed">
            Snapshots from chapter events, gifting suites, and national activations. Our members alongside the creators we host on campuses and at festivals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 md:h-[560px]"
        >
          <div className="aspect-[4/3] md:aspect-auto md:col-span-2 md:row-span-2 rounded-xl overflow-hidden group">
            <img decoding="async" loading="lazy" src="/images/Photos/Three Students Photoshoot.webp" alt="Members photoshoot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden group">
            <img decoding="async" loading="lazy" src="/images/Photos/Students at Event.webp" alt="Members at event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden group">
            <img decoding="async" loading="lazy" src="/images/Photos/Lollapalooza2.webp" alt="Members at Lollapalooza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden group">
            <img decoding="async" loading="lazy" src="/images/Photos/Creator at woman empowerment event holding a book.webp" alt="Creator at event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden group">
            <img decoding="async" loading="lazy" src="/images/Photos/Two Creators.webp" alt="Two creators" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Benefits ── */}
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
            <Eyebrow>What Membership Gets You</Eyebrow>
            <h2 className="font-sohne text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight">
              Six things you can't buy.
              <br className="hidden sm:block" /> <span className="text-reach-navy">Only build.</span>
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

        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {BENEFITS.map((b, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.12)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="group bg-white border border-reach-border rounded-xl p-7 relative overflow-hidden cursor-default"
            >
              <span className="absolute -bottom-3 -right-1 font-sohne font-black text-[72px] leading-none text-reach-ink/[0.04] select-none group-hover:text-reach-navy/5 transition-colors duration-500">
                {b.number}
              </span>
              <span className="font-dmono inline-block text-[10px] font-medium uppercase tracking-[0.18em] text-reach-goldDark bg-reach-gold/10 px-3 py-1 rounded-full mb-5">
                {b.tag}
              </span>
              <h3 className="font-dm text-lg font-bold text-reach-ink mb-3 leading-snug group-hover:text-reach-navy transition-colors duration-200">
                {b.title}
              </h3>
              <p className="text-reach-ink/50 text-sm leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── Manifesto ── */}
    <section className="bg-reach-offwhite py-14 md:py-24 border-t border-reach-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Eyebrow>The Manifesto</Eyebrow>
          <h2 className="font-sohne text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight mb-6">
            Being a REACH member means{" "}
            <span className="text-reach-navy">you're never creating alone.</span>
          </h2>
          <p className="text-reach-ink/55 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            You're part of something bigger than your own platform: a national community of creators who care, collaborate, and collectively raise the bar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              "Where confidence is built.",
              "Where creators become leaders.",
              "Where influence meets purpose.",
            ].map((line, i) => (
              <div key={i} className="bg-white border border-reach-border rounded-xl p-6">
                <span className="font-dmono text-[10px] font-medium uppercase tracking-[0.2em] text-reach-goldDark block mb-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-dm font-bold text-reach-ink text-base leading-snug">{line}</p>
              </div>
            ))}
          </div>

          <p className="font-sohne text-3xl md:text-4xl font-bold text-reach-navy tracking-tight">
            This is REACH.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="relative overflow-hidden border-t border-reach-border">
      <div className="absolute inset-0">
        <img decoding="async" loading="lazy"
          src="/images/Photos/4 students.webp"
          alt="REACH community"
          className="w-full h-full object-cover object-[center_40%]"
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
          <Eyebrow>Become A Member</Eyebrow>
          <h2 className="font-sohne text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-reach-ink">
            REACH members don't wait{" "}
            <span className="text-reach-navy">for opportunity.</span>
          </h2>
          <p className="text-reach-ink/55 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            They build together. And they're just getting started. Apply to your campus chapter or start one if it doesn't exist yet.
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
              to="/chapters"
              className="inline-flex items-center justify-center gap-2 text-reach-ink font-medium text-sm px-7 py-3.5 rounded-lg border border-reach-border hover:bg-reach-offwhite transition-colors"
            >
              Find your chapter
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Members;
