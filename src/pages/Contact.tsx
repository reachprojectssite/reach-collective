import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail, Users, Briefcase, Globe, MapPin, Clock, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const CONTACT_OPTIONS = [
  {
    number: "01",
    tag: "General",
    icon: Mail,
    title: "General Inquiries",
    body: "Questions about REACH Nationals, how the organization works, or anything else not covered elsewhere.",
    email: "hello@reachnationals.org",
  },
  {
    number: "02",
    tag: "Chapters",
    icon: Users,
    title: "Chapter Support",
    body: "For current chapter officers, members, or anyone exploring the application path. We route you to the right chapter team.",
    email: "join@reachnationals.org",
  },
  {
    number: "03",
    tag: "Partnerships",
    icon: Briefcase,
    title: "Brand Partnerships",
    body: "Looking to collaborate with the REACH Nationals creator community? Campaigns, gifting suites, and activations.",
    email: "partnerships@reachnationals.org",
  },
  {
    number: "04",
    tag: "Press",
    icon: Globe,
    title: "Press & Media",
    body: "Media inquiries, interview requests, and press resources about REACH Nationals.",
    email: "press@reachnationals.org",
  },
];

const QUICK_LINKS = [
  { title: "Apply to REACH",      desc: "Join, start, or pioneer a chapter.",            href: "/join" },
  { title: "Browse Chapters",     desc: "See where REACH currently operates.",           href: "/chapters" },
  { title: "Our Story",           desc: "How REACH started and where it's going.",       href: "/about" },
  { title: "Meet The Members",    desc: "Who's inside the community.",                   href: "/members" },
];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-reach-goldDark mb-4">
    <span className="w-5 h-px bg-reach-gold" />
    {children}
  </span>
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("/.netlify/functions/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      toast({
        title: "Message sent",
        description: "We'll get back to you within 24–48 business hours.",
      });
      setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
    } catch (error) {
      toast({
        title: "Couldn't send your message",
        description:
          error instanceof Error && error.message
            ? error.message
            : "Please try again or email us directly at hello@reachnationals.org.",
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
            src="/images/Photos/Students at Event.jpeg"
            alt="REACH Nationals community"
            className="w-full h-full object-cover object-[center_30%]"
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
              <Eyebrow>Contact</Eyebrow>
              <h1 className="font-grotesk text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-6 text-reach-ink">
                Say hello.
                <br />
                <span className="text-reach-navy">We actually read it.</span>
              </h1>
              <p className="text-reach-ink/60 text-base sm:text-lg max-w-2xl leading-relaxed">
                Whether you're applying, partnering, writing about us, or just curious,{" "}
                <span className="text-reach-navy font-semibold">there's a real person on the other side.</span>{" "}
                Pick the right inbox below or send a general note.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4"
            >
              <div className="bg-white border border-reach-border rounded-xl p-6 shadow-lg shadow-black/5 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-reach-goldDark mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-reach-ink/45 mb-1">National Office</p>
                    <p className="font-grotesk font-bold text-reach-ink text-sm">Los Angeles, California</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-reach-goldDark mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-reach-ink/45 mb-1">Response Time</p>
                    <p className="font-grotesk font-bold text-reach-ink text-sm">24–48 business hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-reach-goldDark mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-reach-ink/45 mb-1">General</p>
                    <a href="mailto:hello@reachnationals.org" className="font-grotesk font-bold text-reach-navy text-sm hover:underline">
                      hello@reachnationals.org
                    </a>
                  </div>
                </div>
                <div className="pt-4 border-t border-reach-border flex items-center gap-2">
                  <a
                    href="https://instagram.com/reachnatl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-reach-offwhite border border-reach-border text-reach-ink/55 hover:text-reach-navy hover:border-reach-navy/30 transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/reach-fam"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-reach-offwhite border border-reach-border text-reach-ink/55 hover:text-reach-navy hover:border-reach-navy/30 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Contact options ── */}
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
              <Eyebrow>Pick The Right Inbox</Eyebrow>
              <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight">
                Four ways{" "}
                <span className="text-reach-navy">to reach us.</span>
              </h2>
            </div>
            <p className="text-reach-ink/50 text-base max-w-sm leading-relaxed md:text-right">
              Use the inbox that fits your message. Faster routing, faster response.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {CONTACT_OPTIONS.map((o, i) => (
              <motion.a
                key={i}
                href={`mailto:${o.email}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
                }}
                whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.12)' }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className="group bg-white border border-reach-border rounded-xl p-7 relative overflow-hidden block"
              >
                <span className="absolute -bottom-3 -right-1 font-grotesk font-black text-[72px] leading-none text-reach-ink/[0.04] select-none group-hover:text-reach-navy/5 transition-colors duration-500">
                  {o.number}
                </span>
                <span className="inline-block w-fit text-[10px] font-bold uppercase tracking-[0.18em] text-reach-goldDark bg-reach-gold/10 px-3 py-1 rounded-full mb-5">
                  {o.tag}
                </span>
                <o.icon className="w-5 h-5 text-reach-goldDark mb-4 group-hover:text-reach-navy transition-colors" />
                <h3 className="font-grotesk text-lg font-bold text-reach-ink mb-3 leading-snug group-hover:text-reach-navy transition-colors duration-200">
                  {o.title}
                </h3>
                <p className="text-reach-ink/50 text-sm leading-relaxed mb-5">{o.body}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-reach-navy group-hover:gap-2.5 transition-all break-all">
                  {o.email}
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── General form ── */}
      <section id="form" className="bg-reach-offwhite py-14 md:py-24 border-t border-reach-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 max-w-3xl"
          >
            <Eyebrow>Or Just Send A Note</Eyebrow>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight mb-4 md:whitespace-nowrap">
              Skip the email.{" "}
              <span className="text-reach-navy">Use the form.</span>
            </h2>
            <p className="text-reach-ink/55 text-base md:text-lg leading-relaxed">
              We read every message. Most replies land in 24–48 business hours.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-reach-border rounded-xl p-7 md:p-10"
          >

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>Name</label>
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@email.com" className={inputClass} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className={labelClass}>Subject</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className={inputClass}>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Chapter Support">Chapter Support</option>
                  <option value="Brand Partnership">Brand Partnership</option>
                  <option value="Press & Media">Press & Media</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} required placeholder="Tell us what's up." className={inputClass} />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-reach-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-reach-ink/40 text-xs">
                By submitting, you agree to our{" "}
                <Link to="/privacy" className="text-reach-navy hover:underline">Privacy Policy</Link>.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-2 bg-reach-navy text-white font-bold text-sm px-7 py-3.5 rounded-lg hover:bg-reach-navy/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />}
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* ── Quick links ── */}
      <section className="bg-white py-14 md:py-24 border-t border-reach-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-2xl"
          >
            <Eyebrow>Looking For Something Specific?</Eyebrow>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight">
              You might find your answer{" "}
              <span className="text-reach-navy">faster here.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {QUICK_LINKS.map((q, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Link
                  to={q.href}
                  className="group block bg-reach-offwhite border border-reach-border rounded-xl p-6 hover:border-reach-navy/30 hover:bg-white hover:shadow-md transition-all h-full"
                >
                  <h3 className="font-grotesk font-bold text-reach-ink text-base mb-2 group-hover:text-reach-navy transition-colors">
                    {q.title}
                  </h3>
                  <p className="text-reach-ink/50 text-sm leading-relaxed mb-4">{q.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-reach-navy group-hover:gap-2.5 transition-all">
                    Go
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
