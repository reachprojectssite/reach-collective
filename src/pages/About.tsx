import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TIMELINE = [
  {
    year: "2017",
    tag: "Origin",
    title: "USC REACH is born",
    body:
      "Markian Benhamou, Xavier Di Petta (PartyShirt), and a circle of students start USC REACH at the University of Southern California. The creator economy is exploding, and student creators have nowhere to learn the business of it.",
  },
  {
    year: "2020",
    tag: "Rebuild",
    title: "Dylan Huey joins",
    body:
      "A creator with millions of followers and a deep background in talent and digital strategy, Dylan brings a new lens to the organization during his freshman year, along with a vision for what it could become at scale.",
  },
  {
    year: "2022",
    tag: "Scale",
    title: "REACH goes national",
    body:
      "Dylan takes over leadership and builds REACH chapter by chapter. The same problems USC creators faced existed at every university in the country, so we expanded to meet them.",
  },
  {
    year: "Today",
    tag: "Movement",
    title: "100+ chapters strong",
    body:
      "Reach Nationals is a registered 501(c)(3) nonprofit, operating chapters at over 100 universities, partnering with the biggest brands in media, and shaping the careers of the next generation of digital builders.",
  },
];

const PRINCIPLES = [
  { number: "01", tag: "Student-led",                  title: "Run by students, for students.",        body: "Every chapter is led by students. Adults don't decide what creators care about." },
  { number: "02", tag: "Wellness First",               title: "Built around how creators actually live.", body: "Mental health and creative sustainability are not afterthoughts. They are foundational." },
  { number: "03", tag: "Authentic > Algorithmic",      title: "Long-term taste over chasing trends.",   body: "Craft, story, and point of view outlast every algorithm change." },
  { number: "04", tag: "Community > Clout",            title: "Real rooms, real relationships.",        body: "We measure success in lives changed, not follower counts." },
  { number: "05", tag: "Founders, Not Followers",      title: "Treat creators like founders.",          body: "Because they are. We teach the business of the creator economy as seriously as a B-school." },
  { number: "06", tag: "Built to Last",                title: "Careers, not viral moments.",            body: "We're playing the long game with the people doing this." },
];

const ADVISORS: { name: string; role: string; company: string; photo: string; url?: string }[] = [
  { name: "Alessandro Bogliari",  role: "CEO",                              company: "The Influencer Marketing Factory", photo: "/images/Industry%20Advisory%20Board/Alessandro%20Bogliari.jpg",  url: "https://www.linkedin.com/in/alessandrobogliari" },
  { name: "Bill Imada",           role: "Chairman",                         company: "IW Group",                         photo: "/images/Industry%20Advisory%20Board/Bill%20Imada.jpeg",          url: "https://www.linkedin.com/in/bill-imada-2b90544/" },
  { name: "Brendan Gahan",        role: "CEO",                              company: "Creator Authority",                photo: "/images/Industry%20Advisory%20Board/Brendan%20Gahan.jpg",        url: "https://www.linkedin.com/in/brendangahan/" },
  { name: "Brooke Berry",         role: "Head of Creator Development",      company: "Snap",                             photo: "/images/Industry%20Advisory%20Board/Brooke%20Berry.jpg",         url: "https://www.linkedin.com/in/brookeberry" },
  { name: "Chanel Lake",          role: "Head of Influencer (West)",        company: "Weber Shandwick",                  photo: "/images/Industry%20Advisory%20Board/Chanel%20Lake.jpg",          url: "https://www.linkedin.com/in/chanel-lake-61680050/" },
  { name: "Damian Skoczylas",     role: "Co-Founder & President",           company: "Reign Maker Talent",               photo: "/images/Industry%20Advisory%20Board/Damian%20Skoczylas.jpg",     url: "https://www.linkedin.com/in/damianskoczylas" },
  { name: "Eric Artell",          role: "Executive Director",               company: "Nerd HQ",                          photo: "/images/Industry%20Advisory%20Board/Eric%20Artell.jpg",          url: "https://www.linkedin.com/in/ericartell/" },
  { name: "Evan Britton",         role: "CEO",                              company: "Famous Birthdays",                 photo: "/images/Industry%20Advisory%20Board/Evan%20Britton.jpg",         url: "https://www.linkedin.com/in/evanbritton" },
  { name: "Freddy Nager",         role: "Professor",                        company: "USC",                              photo: "/images/Industry%20Advisory%20Board/Freddy%20Nager.jpg",         url: "https://www.linkedin.com/in/freddynager/" },
  { name: "Kevin Herrera",        role: "CEO",                              company: "TheMachine",                       photo: "/images/Industry%20Advisory%20Board/Kevin%20Herrera.jpg",        url: "https://www.linkedin.com/in/kevin-herrera-8427a8121/" },
  { name: "Lia Haberman",         role: "Professor",                        company: "UCLA",                             photo: "/images/Industry%20Advisory%20Board/Lia%20Haberman.jpg",         url: "https://www.linkedin.com/in/liahaberman/" },
  { name: "Loren Piretra",        role: "Podcaster",                        company: "",                                 photo: "/images/Industry%20Advisory%20Board/Loren%20Piretra.jpg",        url: "https://www.linkedin.com/in/lorenpiretra/" },
  { name: "Natasha Desruisseaux", role: "Lead, Emerging Creators",          company: "Meta",                             photo: "/images/Industry%20Advisory%20Board/Natasha%20DesRuisseaux.jpg", url: "https://www.linkedin.com/in/natashadesruis/" },
  { name: "Peter Hollens",        role: "Creator",                          company: "",                                 photo: "/images/Industry%20Advisory%20Board/Peter%20Hollens.jpg",        url: "https://www.youtube.com/peterhollens" },
  { name: "Phil Ranta",           role: "CEO",                              company: "Stealth Talent",                   photo: "/images/Industry%20Advisory%20Board/Phil%20Ranta.jpg",           url: "https://www.linkedin.com/in/philranta" },
  { name: "Ramon Mendez",         role: "CEO",                              company: "View.ws",                          photo: "/images/Industry%20Advisory%20Board/Ramon%20Mendez.jpg",         url: "https://www.linkedin.com/in/ramon-mendez" },
];

const ALUMNI: { name: string; note: string; url?: string }[] = [
  { name: "Alan Chikin Chow",  note: "Creator",                       url: "https://www.youtube.com/c/Alanchikinchow" },
  { name: "Bri Wilburn",       note: "Founder, Answers.AI",           url: "https://www.tiktok.com/@briwilburn" },
  { name: "Chris Duncan",      note: "Founder, Creator Camp",         url: "https://www.linkedin.com/in/chrisrduncan/" },
  { name: "Cosette Rinab",     note: "Creator",                       url: "https://www.tiktok.com/@cosette" },
  { name: "Daniel Min",        note: "Former CMO, Cluely",            url: "https://www.linkedin.com/in/daniel-min-04a0031a2/" },
  { name: "Dylan Huey",        note: "CEO, Reach Nationals",          url: "https://www.linkedin.com/in/dylanhuey40" },
  { name: "Ellie Dobleske",    note: "Creator",                       url: "https://www.tiktok.com/@scrubnumberone" },
  { name: "Justin Leusner",    note: "Founder, TDAY Sports",          url: "https://www.linkedin.com/in/justinleusner/" },
  { name: "Katie Feeney",      note: "Creator",                       url: "https://www.tiktok.com/@katiefeeneyy" },
  { name: "Mia Finney",        note: "Creator",                       url: "https://www.tiktok.com/@miafinney" },
  { name: "Noah Miller",       note: "Creator",                       url: "https://www.tiktok.com/@nmillz1" },
  { name: "PartyShirt",        note: "Creator",                       url: "https://www.tiktok.com/@partyshirt" },
  { name: "Sami Brielle",      note: "Creator",                       url: "https://www.tiktok.com/@samibrielle" },
  { name: "Sophie Silva",      note: "Creator",                       url: "https://www.tiktok.com/@notsophiesilva" },
  { name: "Tanner Kesel",      note: "Former Founder, Fanfix",        url: "https://www.linkedin.com/in/tannerkesel/" },
];

const AVATAR_BG = [
  "bg-reach-navy",
  "bg-reach-goldDark",
  "bg-reach-crimson",
  "bg-reach-slate",
  "bg-amber-800",
  "bg-emerald-800",
  "bg-purple-800",
  "bg-rose-800",
  "bg-cyan-800",
  "bg-indigo-800",
];

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-reach-goldDark mb-4">
    <span className="w-5 h-px bg-reach-gold" />
    {children}
  </span>
);

const About = () => (
  <div className="bg-white">
    {/* ── Hero ── */}
    <section className="relative overflow-hidden border-b border-reach-border">
      <div className="absolute inset-0">
        <img
          src="/images/Photos/Group of Students.jpg"
          alt="REACH members"
          className="w-full h-full object-cover object-[center_45%]"
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
            <Eyebrow>Our Story</Eyebrow>
            <h1 className="font-grotesk text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-6 text-reach-ink">
              Built on campus.
              <br />
              <span className="text-reach-navy">Built for creators.</span>
            </h1>
            <p className="text-reach-ink/55 text-base sm:text-lg max-w-2xl leading-relaxed">
              Most student creators are navigating the creator economy alone. No support, no structure, no peers who get it.{" "}
              <span className="text-reach-navy font-semibold">That's exactly why REACH began.</span>
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
                REACH by the numbers
              </span>
              <div className="space-y-3">
                {[
                  { label: "Founded",           value: "2017" },
                  { label: "Workshops Hosted",  value: "250+" },
                  { label: "Events Hosted",     value: "2,500+" },
                  { label: "Industry Advisors", value: "16" },
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

    {/* ── Mission ── */}
    <section className="bg-reach-offwhite py-14 md:py-24 border-t border-reach-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Eyebrow>Why We Exist</Eyebrow>
          <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight mb-6">
            We exist so no student creator has to{" "}
            <span className="text-reach-navy">figure this out alone.</span>
          </h2>
          <p className="text-reach-ink/55 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Reach Nationals is the national chapter network that turns scattered campus talent into a real, supported, organized community of creators, founders, and builders.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ── Timeline ── */}
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
            <Eyebrow>The Path So Far</Eyebrow>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight">
              From dorm-room idea
              <br className="hidden sm:block" /> to <span className="text-reach-navy">national movement.</span>
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {TIMELINE.map((t, i) => (
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
              <span className="absolute -bottom-3 -right-1 font-grotesk font-black text-[72px] leading-none text-reach-ink/[0.04] select-none group-hover:text-reach-navy/5 transition-colors duration-500">
                {t.year}
              </span>
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-reach-goldDark bg-reach-gold/10 px-3 py-1 rounded-full mb-5">
                {t.tag}
              </span>
              <h3 className="font-grotesk text-lg font-bold text-reach-ink mb-3 leading-snug group-hover:text-reach-navy transition-colors duration-200">
                {t.title}
              </h3>
              <p className="text-reach-ink/50 text-sm leading-relaxed">{t.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── Photo mosaic ── */}
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
          <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight">
            On campus, at festivals,
            <br className="hidden sm:block" /> in studios, everywhere.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-4 grid-rows-2 gap-3 md:gap-4 h-[440px] md:h-[560px]"
        >
          <div className="col-span-2 row-span-2 rounded-xl overflow-hidden group">
            <img src="/images/Photos/Six Students Posing Photoshoot.jpg" alt="REACH photoshoot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-1 row-span-1 rounded-xl overflow-hidden group">
            <img src="/images/Photos/Lollapalooza.jpg" alt="Lollapalooza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-1 row-span-1 rounded-xl overflow-hidden group">
            <img src="/images/Photos/VitaminWater at PreCoachella Gifting Suite.jpg" alt="VitaminWater at PreCoachella gifting suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-1 row-span-1 rounded-xl overflow-hidden group">
            <img src="/images/Photos/usc group photo.jpg" alt="USC chapter members" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-1 row-span-1 rounded-xl overflow-hidden group">
            <img src="/images/Photos/four members.jpg" alt="REACH members" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Principles (Features-style cards) ── */}
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
            <Eyebrow>What We Believe</Eyebrow>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight">
              The principles that
              <br className="hidden sm:block" /> built this <span className="text-reach-navy">thing.</span>
            </h2>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {PRINCIPLES.map((p, i) => (
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
              <span className="absolute -bottom-3 -right-1 font-grotesk font-black text-[72px] leading-none text-reach-ink/[0.04] select-none group-hover:text-reach-navy/5 transition-colors duration-500">
                {p.number}
              </span>
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-reach-goldDark bg-reach-gold/10 px-3 py-1 rounded-full mb-5">
                {p.tag}
              </span>
              <h3 className="font-grotesk text-lg font-bold text-reach-ink mb-3 leading-snug group-hover:text-reach-navy transition-colors duration-200">
                {p.title}
              </h3>
              <p className="text-reach-ink/50 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── Industry Advisory Board ── */}
    <section className="bg-reach-offwhite py-14 md:py-24 border-t border-reach-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <Eyebrow>Industry Advisory Board</Eyebrow>
          <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight mb-5">
            The leaders behind
            <br className="hidden sm:block" /> the <span className="text-reach-navy">curtain.</span>
          </h2>
          <p className="text-reach-ink/55 text-base md:text-lg leading-relaxed">
            The Reach Nationals 501(c)(3) Industry Advisory Board brings decades of operating experience from the platforms, agencies, and academic institutions shaping the creator economy. They guide our long-term strategy and open doors for our members.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {ADVISORS.map((a, i) => {
            const inner = (
              <>
                <div
                  className={`${AVATAR_BG[i % AVATAR_BG.length]} w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm overflow-hidden ring-2 ring-white relative`}
                >
                  <span className="font-grotesk font-bold text-white text-sm tracking-wide">{initials(a.name)}</span>
                  {a.photo && (
                    <img
                      src={a.photo}
                      alt={a.name}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-grotesk font-bold text-reach-ink text-[15px] leading-tight mb-1 group-hover:text-reach-navy transition-colors">
                    {a.name}
                  </p>
                  <p className="text-reach-ink/55 text-[12px] leading-snug">
                    {a.role}
                    {a.company && (
                      <>
                        <br />
                        <span className="text-reach-goldDark font-semibold">{a.company}</span>
                      </>
                    )}
                  </p>
                </div>
              </>
            );
            const cardClasses =
              "group bg-white border border-reach-border rounded-xl p-5 hover:border-reach-navy/30 hover:shadow-md transition-all flex items-start gap-4";
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 16, scale: 0.96 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 280, damping: 20 } },
                }}
                whileHover={{ y: -4 }}
              >
                {a.url ? (
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${a.name} - ${a.role}${a.company ? `, ${a.company}` : ""}`}
                    className={cardClasses}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cardClasses}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>

    {/* ── Alumni ── */}
    <section className="bg-white py-14 md:py-24 border-t border-reach-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <Eyebrow>Where They Went</Eyebrow>
          <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight mb-5">
            REACH alumni are
            <br className="hidden sm:block" /> <span className="text-reach-navy">building the internet.</span>
          </h2>
          <p className="text-reach-ink/55 text-base md:text-lg leading-relaxed">
            Creators, founders, and operators who came through REACH chapters and went on to do something with it.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.03, delayChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {ALUMNI.map((a, i) => {
            const inner = (
              <>
                <div className="w-1.5 h-1.5 rounded-full bg-reach-gold flex-shrink-0" />
                <span className="font-grotesk font-bold text-reach-ink text-sm group-hover:text-reach-navy transition-colors">{a.name}</span>
                <span className="text-reach-ink/40 text-xs ml-auto truncate">{a.note}</span>
              </>
            );
            const cardClasses =
              "group flex items-center gap-3 bg-reach-offwhite border border-reach-border rounded-xl px-5 py-4 hover:border-reach-navy/30 hover:bg-white transition-all";
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                {a.url ? (
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${a.name} - ${a.note}`}
                    className={cardClasses}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cardClasses}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>

    {/* ── Join Us CTA ── */}
    <section className="relative overflow-hidden border-t border-reach-border">
      <div className="absolute inset-0">
        <img
          src="/images/Photos/Four Students at an event.jpeg"
          alt="REACH event"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-reach-offwhite/70 via-white/55 to-reach-offwhite/70" />
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
          <Eyebrow>Join Us</Eyebrow>
          <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-reach-ink">
            The next chapter of REACH{" "}
            <span className="text-reach-navy">is being built right now.</span>
          </h2>
          <p className="text-reach-ink/55 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            Start a chapter at your school, apply for membership, or just say hello. Every REACH story starts somewhere.
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

export default About;
