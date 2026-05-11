import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, GraduationCap, MapPin, Sparkles, Heart, Compass, Award, Info, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Path = "join" | "start" | "regional";

const PATHS: { key: Path; tag: string; title: string; body: string; icon: React.ElementType; number: string }[] = [
  {
    key: "join",
    number: "01",
    tag: "I'm in college",
    title: "Join the chapter on my campus.",
    body: "REACH is already at your school. Join the local chapter, attend events, and start collaborating with creators on campus.",
    icon: Users,
  },
  {
    key: "start",
    number: "02",
    tag: "I'm in college (no chapter yet)",
    title: "Start a chapter at my school.",
    body: "Bring REACH to your university. You'll get national support: branding, playbooks, mentorship, and access to the full REACH network.",
    icon: GraduationCap,
  },
  {
    key: "regional",
    number: "03",
    tag: "Post-grad or industry",
    title: "Pioneer my city chapter.",
    body: "Help build the first regional chapters in LA, NY, Miami, Bay Area, or Chicago. Open to creators, industry leaders, and creator economy enthusiasts. No school required.",
    icon: MapPin,
  },
];

const QUALITIES = [
  { icon: Sparkles, tag: "Initiative",  title: "You start things.",            body: "You don't wait for permission. You see a gap and fill it. Doesn't matter if it's a club, a project, a series, or a side hustle." },
  { icon: Heart,    tag: "Community",   title: "You bring people in.",          body: "Your wins aren't just yours. You connect, hype up your peers, and make rooms feel bigger when you're in them." },
  { icon: Compass,  tag: "Curiosity",   title: "You're already learning.",      body: "You read, listen, study how the industry works. The business side excites you as much as the creative side." },
  { icon: Award,    tag: "Follow-through", title: "You finish what you start.", body: "Posting consistently, running the meeting, sending the email. The unglamorous work that compounds." },
];

const JOIN_TIMELINE = [
  { step: "01", title: "Submit your interest",            body: "Quick form. Tell us who you are, where you go to school or live, and what you're building." },
  { step: "02", title: "We forward to your chapter",      body: "Your information goes to the leadership of your local chapter. REACH Nationals routes, the chapter decides." },
  { step: "03", title: "Follow your chapter's Instagram", body: "Every chapter runs on its own calendar. Following their Instagram is the easiest way to see when applications open and what's coming up." },
  { step: "04", title: "The chapter reaches out",         body: "When applications open and you're a fit, the chapter will reach out directly with their own application, interview process, and onboarding." },
];

const FOUNDER_TIMELINE = [
  { step: "01", title: "Submit your application", body: "5–10 minutes. Tell us who you are, what you're building, and why you're the right person to lead this." },
  { step: "02", title: "We review",               body: "Your application is reviewed by REACH Nationals staff. We respond to every founding application within 5–7 days." },
  { step: "03", title: "Founder interview",       body: "A 30-minute conversation with REACH Nationals. We dig into your vision, capacity, and what you'll need to succeed." },
  { step: "04", title: "Onboarding & launch",     body: "Branding, playbooks, mentorship, and a launch plan. You officially become the founder of your chapter." },
];

const TIMELINE_HEADERS: Record<Path, { eyebrow: string; title: React.ReactNode; sub: string }> = {
  join: {
    eyebrow: "What Happens Next",
    title: (
      <>
        REACH Nationals routes.{" "}
        <span className="text-reach-navy">Chapters decide.</span>
      </>
    ),
    sub: "Every chapter runs admissions on its own timeline. We pass your interest along, and your chapter takes it from there.",
  },
  start: {
    eyebrow: "What Happens Next",
    title: (
      <>
        From application to{" "}
        <span className="text-reach-navy">founding your chapter.</span>
      </>
    ),
    sub: "Founding a chapter goes directly through REACH Nationals. We review, interview, and onboard every founder personally.",
  },
  regional: {
    eyebrow: "What Happens Next",
    title: (
      <>
        From application to{" "}
        <span className="text-reach-navy">pioneering your city.</span>
      </>
    ),
    sub: "Regional chapter pioneers go directly through REACH Nationals. We review, interview, and onboard every pioneer personally.",
  },
};

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-reach-goldDark mb-4">
    <span className="w-5 h-px bg-reach-gold" />
    {children}
  </span>
);

const Join = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const pathParam = searchParams.get("path");
  const initialPath: Path =
    pathParam === "start" || pathParam === "regional" || pathParam === "join" ? pathParam : "join";
  const [selectedPath, setSelectedPath] = useState<Path>(initialPath);

  useEffect(() => {
    if (pathParam === "start" || pathParam === "regional" || pathParam === "join") {
      setSelectedPath(pathParam);
    }
  }, [pathParam]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    gradYear: "",
    city: "",
    socials: "",
    portfolio: "",
    role: "",
    why: "",
    weeklyHours: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/.netlify/functions/submit-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: selectedPath, ...formData }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      toast({
        title: "Interest submitted",
        description:
          selectedPath === "join"
            ? "We'll forward your info to your local chapter. They run their own timeline, so follow their Instagram for updates."
            : "We received your application. We'll review and respond within 5–7 days.",
      });

      setFormData({
        name: "", email: "", phone: "", university: "", gradYear: "",
        city: "", socials: "", portfolio: "", role: "", why: "", weeklyHours: "",
      });
    } catch (err) {
      toast({
        title: "Could not submit",
        description:
          err instanceof Error && err.message
            ? err.message
            : "Please try again or email hello@reachnationals.org.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "block w-full bg-white border border-reach-border rounded-lg px-4 py-3 text-reach-ink placeholder:text-reach-ink/30 text-sm focus:outline-none focus:ring-2 focus:ring-reach-navy/40 focus:border-reach-navy/40 transition-all";
  const labelClass = "block text-[11px] font-bold uppercase tracking-[0.18em] text-reach-ink/55 mb-2";

  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-reach-border">
        <div className="absolute inset-0">
          <img
            src="/images/Photos/Three Students Photoshoot.jpg"
            alt="REACH community"
            className="w-full h-full object-cover object-[center_10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/65 to-reach-offwhite/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-transparent" />
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
              <Eyebrow>Apply To REACH</Eyebrow>
              <h1 className="font-grotesk text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-6 text-reach-ink">
                The application{" "}
                <br />
                <span className="text-reach-navy">that starts everything.</span>
              </h1>
              <p className="text-reach-ink/60 text-base sm:text-lg max-w-2xl leading-relaxed">
                Pick the path that fits you and fill out the form. We forward your interest to your local chapter,{" "}
                <span className="text-reach-navy font-semibold">who runs their own admissions on their own timeline.</span>
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
                  What you get
                </span>
                <ul className="space-y-3">
                  {[
                    "Access to your local chapter",
                    "National creator network",
                    "Industry mentorship",
                    "Brand collaboration opportunities",
                    "Workshops & resources",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-reach-ink/75 leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-reach-gold flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Path selector ── */}
      <section id="paths" data-path-selector className="bg-white py-14 md:py-24 border-t border-reach-border scroll-mt-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-2xl"
          >
            <Eyebrow>Step One</Eyebrow>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight">
              Which path is{" "}
              <span className="text-reach-navy">yours?</span>
            </h2>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {PATHS.map((p) => {
              const isSelected = selectedPath === p.key;
              return (
                <motion.button
                  key={p.key}
                  type="button"
                  onClick={() => setSelectedPath(p.key)}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  whileHover={{ y: -6 }}
                  className={`group text-left bg-white border-2 rounded-xl p-7 relative overflow-hidden transition-all cursor-pointer ${
                    isSelected
                      ? "border-reach-navy shadow-lg shadow-reach-navy/10"
                      : "border-reach-border hover:border-reach-navy/30"
                  }`}
                >
                  <span className="absolute -bottom-3 -right-1 font-grotesk font-black text-[72px] leading-none text-reach-ink/[0.04] select-none">
                    {p.number}
                  </span>
                  {isSelected && (
                    <span
                      aria-label="Selected"
                      className="absolute top-4 right-4 w-7 h-7 rounded-full bg-reach-navy flex items-center justify-center shadow-md shadow-reach-navy/20"
                    >
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </span>
                  )}
                  <span className="inline-block w-fit text-[10px] font-bold uppercase tracking-[0.18em] text-reach-goldDark bg-reach-gold/10 px-3 py-1 rounded-full mb-5">
                    {p.tag}
                  </span>
                  <p.icon className={`w-5 h-5 mb-4 transition-colors ${isSelected ? "text-reach-navy" : "text-reach-goldDark group-hover:text-reach-navy"}`} />
                  <h3 className={`font-grotesk text-lg font-bold mb-3 leading-snug transition-colors ${isSelected ? "text-reach-navy" : "text-reach-ink group-hover:text-reach-navy"}`}>
                    {p.title}
                  </h3>
                  <p className="text-reach-ink/55 text-sm leading-relaxed">{p.body}</p>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Application form ── */}
      <section id="apply" className="bg-reach-offwhite py-14 md:py-24 border-t border-reach-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 max-w-3xl"
          >
            <Eyebrow>Step Two</Eyebrow>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight mb-4 md:whitespace-nowrap">
              The application.{" "}
              <span className="text-reach-navy">5–10 minutes.</span>
            </h2>
            <p className="text-reach-ink/55 text-base md:text-lg leading-relaxed">
              No essays. No GPAs. Just the basics on who you are and what you're building.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-start gap-4 bg-reach-gold/10 border border-reach-gold/30 rounded-xl px-6 py-5"
          >
            <Info className="w-5 h-5 text-reach-goldDark flex-shrink-0 mt-0.5" />
            <p className="text-reach-ink/75 text-sm leading-relaxed">
              <span className="font-semibold text-reach-ink">Unsure if there's a chapter at your campus?</span> Check your university's recognized student organization list before filling out the form. Some chapters also have a dedicated Instagram you can search for.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-white border border-reach-border rounded-xl p-7 md:p-10"
          >
            <div className="mb-8 pb-6 border-b border-reach-border flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-reach-goldDark mb-1">Applying as</p>
                <p className="font-grotesk font-bold text-reach-ink text-lg">
                  {PATHS.find((p) => p.key === selectedPath)?.title}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const el = document.querySelector("[data-path-selector]");
                  el?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="text-sm font-semibold text-reach-navy hover:text-reach-navy/80 transition-colors"
              >
                Change
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>Full Name</label>
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@email.com" className={inputClass} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Phone</label>
                <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Optional" className={inputClass} />
              </div>
              <div>
                <label htmlFor="role" className={labelClass}>You're a...</label>
                <select id="role" name="role" value={formData.role} onChange={handleChange} required className={inputClass}>
                  <option value="">Select one</option>
                  <option value="creator">Creator / on-camera</option>
                  <option value="strategist">Strategist / social manager</option>
                  <option value="editor">Editor / videographer</option>
                  <option value="designer">Designer</option>
                  <option value="founder">Founder / entrepreneur</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {selectedPath !== "regional" && (
                <>
                  <div>
                    <label htmlFor="university" className={labelClass}>University</label>
                    <input id="university" name="university" type="text" value={formData.university} onChange={handleChange} required placeholder="Where you go to school" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="gradYear" className={labelClass}>Grad Year</label>
                    <input id="gradYear" name="gradYear" type="text" value={formData.gradYear} onChange={handleChange} required placeholder="e.g., 2027" className={inputClass} />
                  </div>
                </>
              )}

              {selectedPath === "regional" && (
                <div className="sm:col-span-2">
                  <label htmlFor="city" className={labelClass}>City</label>
                  <select id="city" name="city" value={formData.city} onChange={handleChange} required className={inputClass}>
                    <option value="">Pick your city</option>
                    <option value="la">Los Angeles, CA</option>
                    <option value="ny">New York, NY</option>
                    <option value="miami">Miami, FL</option>
                    <option value="bay">Bay Area, CA</option>
                    <option value="chicago">Chicago, IL</option>
                    <option value="other">Other (tell us below)</option>
                  </select>
                </div>
              )}

              <div className="sm:col-span-2">
                <label htmlFor="socials" className={labelClass}>Social Handles</label>
                <input id="socials" name="socials" type="text" value={formData.socials} onChange={handleChange} placeholder="TikTok, IG, YouTube, X. Comma separated." className={inputClass} />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="portfolio" className={labelClass}>Portfolio / Best Work (optional)</label>
                <input id="portfolio" name="portfolio" type="url" value={formData.portfolio} onChange={handleChange} placeholder="https://..." className={inputClass} />
              </div>

              {(selectedPath === "start" || selectedPath === "regional") && (
                <div className="sm:col-span-2">
                  <label htmlFor="weeklyHours" className={labelClass}>Weekly Time Commitment</label>
                  <select
                    id="weeklyHours"
                    name="weeklyHours"
                    value={formData.weeklyHours}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">How much time can you dedicate each week?</option>
                    <option value="under-5">Under 5 hours / week</option>
                    <option value="5-10">5–10 hours / week</option>
                    <option value="10-15">10–15 hours / week</option>
                    <option value="15-plus">15+ hours / week</option>
                  </select>
                </div>
              )}

              <div className="sm:col-span-2">
                <label htmlFor="why" className={labelClass}>
                  {selectedPath === "start"
                    ? "Why start REACH at your school?"
                    : selectedPath === "regional"
                    ? "Why pioneer a city chapter?"
                    : "Why REACH?"}
                </label>
                <textarea id="why" name="why" rows={4} value={formData.why} onChange={handleChange} required placeholder="A few sentences is plenty. No fluff." className={inputClass} />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-reach-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-reach-ink/40 text-xs">
                By submitting, you agree to our <a href="/privacy" className="text-reach-navy hover:underline">Privacy Policy</a> and <a href="/terms" className="text-reach-navy hover:underline">Terms</a>.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-2 bg-reach-navy text-white font-bold text-sm px-7 py-3.5 rounded-lg hover:bg-reach-navy/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
                {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />}
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* ── What we look for ── */}
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
              <Eyebrow>What We Look For</Eyebrow>
              <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight">
                Four things bigger{" "}
                <br className="hidden sm:block" /> than a <span className="text-reach-navy">follower count.</span>
              </h2>
            </div>
            <p className="text-reach-ink/50 text-base max-w-sm leading-relaxed md:text-right">
              We don't filter by audience size, school name, or major. We filter by these.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {QUALITIES.map((q, i) => (
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
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="inline-block w-fit text-[10px] font-bold uppercase tracking-[0.18em] text-reach-goldDark bg-reach-gold/10 px-3 py-1 rounded-full mb-5">
                  {q.tag}
                </span>
                <q.icon className="w-5 h-5 text-reach-goldDark mb-4 group-hover:text-reach-navy transition-colors" />
                <h3 className="font-grotesk text-lg font-bold text-reach-ink mb-3 leading-snug group-hover:text-reach-navy transition-colors duration-200">
                  {q.title}
                </h3>
                <p className="text-reach-ink/50 text-sm leading-relaxed">{q.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── What happens next ── */}
      <section className="bg-reach-offwhite py-14 md:py-24 border-t border-reach-border">
        <div className="container mx-auto px-6">
          <motion.div
            key={selectedPath}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-2xl"
          >
            <Eyebrow>{TIMELINE_HEADERS[selectedPath].eyebrow}</Eyebrow>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight mb-4">
              {TIMELINE_HEADERS[selectedPath].title}
            </h2>
            <p className="text-reach-ink/55 text-base md:text-lg leading-relaxed">
              {TIMELINE_HEADERS[selectedPath].sub}
            </p>
          </motion.div>

          <motion.div
            key={`timeline-${selectedPath}`}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {(selectedPath === "join" ? JOIN_TIMELINE : FOUNDER_TIMELINE).map((t, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="bg-white border border-reach-border rounded-xl p-7 relative"
              >
                <span className="font-grotesk font-black text-[40px] leading-none text-reach-navy/20 block mb-4">
                  {t.step}
                </span>
                <h3 className="font-grotesk text-base font-bold text-reach-ink mb-2 leading-snug">{t.title}</h3>
                <p className="text-reach-ink/50 text-sm leading-relaxed">{t.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA / Reaffirm ── */}
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
            <Eyebrow>Still Have Questions?</Eyebrow>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-reach-ink">
              Reach out before{" "}
              <span className="text-reach-navy">you apply.</span>
            </h2>
            <p className="text-reach-ink/60 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              We answer every question. If you're unsure whether you're a fit, send us a note. We'll tell you straight.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="mailto:hello@reachnationals.org"
                className="group inline-flex items-center justify-center gap-2 bg-reach-navy text-white font-bold text-sm px-7 py-3.5 rounded-lg hover:bg-reach-navy/90 transition-colors"
              >
                Email Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-reach-ink font-medium text-sm px-7 py-3.5 rounded-lg border border-reach-border hover:bg-reach-offwhite transition-colors"
              >
                Contact form
              </a>
            </div>

            <p className="text-reach-ink/45 text-xs leading-relaxed max-w-xl pt-6 border-t border-reach-border">
              Reach National Corp. is a registered 501(c)(3) nonprofit. All chapter positions are voluntary and pro-bono.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Join;
