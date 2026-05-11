import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, Mic, Users, Lightbulb, Sparkles, Calendar, MapPin, Clock,
  CheckCircle2, Tv, Brain, Trophy, Music, Building2, Rocket, Zap, Star, Bell,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AnimatedCounter from "../components/AnimatedCounter";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

/* ─────────────────────────────────────────────
   AGENDA & TOPIC DATA
───────────────────────────────────────────── */

const MAIN_STAGE = [
  { time: "9:00 – 10:00 AM",     type: "Breakfast",     title: "Breakfast & check-in",                                                  duration: "60 min" },
  { time: "10:00 – 10:10 AM",    type: "Opening",       title: "Welcomes & Introductions",                                              duration: "10 min" },
  { time: "10:10 – 10:30 AM",    type: "Keynote",       title: "Dylan Huey, CEO of REACH",                                              duration: "20 min" },
  { time: "10:35 – 10:55 AM",    type: "Fireside",      title: "Fireside Chat 1",                                                       duration: "20 min" },
  { time: "11:00 – 11:30 AM",    type: "Panel",         title: "How Traditional Entertainment Continues to Evolve",                     duration: "30 min" },
  { time: "11:35 AM – 12:05 PM", type: "Panel",         title: "Celebrities Turned Founders & Founder-Led Content",                     duration: "30 min" },
  { time: "12:10 – 12:55 PM",    type: "Networking",    title: "Networking Lunch",                                                      duration: "45 min" },
  { time: "12:55 – 1:25 PM",     type: "Panel",         title: "Staying Authentic in an Era of AI: Creators, Actors & Music Artists",  duration: "30 min" },
  { time: "1:30 – 2:00 PM",      type: "Panel",         title: "Evolving Technology and How It Impacts Media",                          duration: "30 min" },
  { time: "2:05 – 2:25 PM",      type: "Fireside",      title: "Fireside Chat 2",                                                       duration: "20 min" },
  { time: "2:30 – 3:00 PM",      type: "Panel",         title: "Creator-Led Studios: Building Into a Media Empire",                     duration: "30 min" },
  { time: "3:05 – 3:35 PM",      type: "Panel",         title: "Breakthrough Brands: Innovating Through AI",                            duration: "30 min" },
  { time: "3:40 – 4:10 PM",      type: "Panel",         title: "Hollywood New Leaders",                                                 duration: "30 min" },
  { time: "4:15 – 4:45 PM",      type: "Panel",         title: "Sports & Athletics in the Digital Ecosystem",                           duration: "30 min" },
  { time: "4:45 – 5:00 PM",      type: "Closing",       title: "Closing Remarks & Transition to Happy Hour",                            duration: "15 min" },
  { time: "5:00 – 6:30 PM",      type: "Happy Hour",    title: "Happy Hour",                                                            duration: "90 min" },
];

const WORKSHOP_SCHEDULE = [
  { time: "11:00 – 11:30 AM",    duration: "30 min", stage2: "Workshop TBD", stage3: "Workshop TBD" },
  { time: "11:35 AM – 12:05 PM", duration: "30 min", stage2: "Workshop TBD", stage3: "Workshop TBD" },
  { time: "12:55 – 1:40 PM",     duration: "45 min", stage2: "Workshop TBD", stage3: "Workshop TBD" },
  { time: "1:45 – 2:30 PM",      duration: "45 min", stage2: "Workshop TBD", stage3: "Workshop TBD" },
  { time: "2:35 – 3:20 PM",      duration: "45 min", stage2: "Workshop TBD", stage3: "Workshop TBD" },
  { time: "3:25 – 4:10 PM",      duration: "45 min", stage2: "Workshop TBD", stage3: "Workshop TBD" },
  { time: "4:15 – 4:45 PM",      duration: "30 min", stage2: "Workshop TBD", stage3: "Workshop TBD" },
];

const PILLARS = [
  { icon: Mic,        tag: "Main Stage",  title: "9 panels. 2 firesides. 1 keynote.",  body: "A full day on the main stage covering AI in media, creator-led studios, traditional entertainment's evolution, sports, and Hollywood's new leadership." },
  { icon: Lightbulb,  tag: "Workshops",   title: "Two parallel workshop stages.",      body: "14 hands-on sessions running alongside the main stage. Build a skill, sharpen a thesis, leave with playbooks." },
  { icon: Users,      tag: "Networking",  title: "Built for the room, not the stage.", body: "Breakfast, networking lunch, and a 90-minute happy hour. Real conversations with the operators shaping the industry." },
  { icon: Sparkles,   tag: "Community",   title: "One day. One room. The full mix.",   body: "Founders, executives, creators, agencies, platforms, and rising talent. Under one roof. For one day." },
];

const TOPICS = [
  { icon: Tv,        title: "Traditional Entertainment", body: "How linear, streaming, and theatrical are adapting to the creator era." },
  { icon: Star,      title: "Celebrities → Founders",    body: "When the audience becomes the business." },
  { icon: Brain,     title: "AI & Authenticity",         body: "Creators, actors, and musicians defining what real means now." },
  { icon: Building2, title: "Media-Tech Evolution",      body: "The tools and platforms rewriting distribution." },
  { icon: Rocket,    title: "Creator-Led Studios",       body: "Building media empires from scratch." },
  { icon: Zap,       title: "Breakthrough Brands",       body: "Direct-to-consumer companies innovating through AI." },
  { icon: Sparkles,  title: "Hollywood's New Leaders",   body: "The next generation rewriting the gatekeeping playbook." },
  { icon: Trophy,    title: "Sports & Digital",          body: "Athletes, leagues, and the IRL-to-feed economy." },
];

const FAQ_ITEMS = [
  { q: "When and where is the Summit?",        a: "First week of December, Los Angeles. Venue announced as we lock the final lineup. The day runs 9:00 AM – 6:30 PM, including a 90-minute happy hour to close." },
  { q: "Who attends?",                          a: "Students, creators, industry leaders, and executives across every facet of entertainment and media. Founders, agency leads, platform talent teams, celebrities, athletes, established creators, and rising leaders. We curate the room — it isn't a free-for-all conference badge." },
  { q: "Can I buy a ticket now?",               a: "Not yet. Reservations open a few months out from the event. Express interest below to be first in line when sales open." },
  { q: "How do I speak or lead a workshop?",    a: "Use the interest form below. Main stage = keynote, fireside, or panel. Workshop stage requires a working title, topic, and your 3–4 co-leaders." },
  { q: "We want to bring a team. Group rates?", a: "Yes. Reserved tables and group pricing are available. Email Dylan Huey directly at dylan@reachnationals.org with team size and you'll get a custom quote." },
  { q: "Sponsorship?",                          a: "Packages range across budgets and perks — Presented By title placement, branded lanyards, workshop sponsorships, on-stage moments, promotional integrations, gifting drops, and custom activations. Every package is built around your goals. Use the form below or email summit@reachnationals.org for the deck." },
];

const SESSION_TYPE_COLOR: Record<string, string> = {
  Breakfast:    "text-reach-slate bg-reach-slate/10",
  Opening:      "text-reach-goldDark bg-reach-gold/10",
  Keynote:      "text-white bg-reach-navy",
  Fireside:     "text-reach-crimson bg-reach-crimson/10",
  Panel:        "text-reach-goldDark bg-reach-gold/10",
  Networking:   "text-reach-slate bg-reach-slate/10",
  Closing:      "text-reach-goldDark bg-reach-gold/10",
  "Happy Hour": "text-reach-crimson bg-reach-crimson/10",
};

const MARQUEE_PHRASES = [
  "Creators",
  "Tech",
  "Entertainment",
  "AI",
  "Hollywood",
  "Sports",
  "Streaming",
  "Founders",
  "Music",
  "Brand",
  "Talent",
  "Studios",
];

/* ─────────────────────────────────────────────
   SHARED PIECES
───────────────────────────────────────────── */

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-reach-goldDark mb-4">
    <span className="w-5 h-px bg-reach-gold" />
    {children}
  </span>
);

/* ─────────────────────────────────────────────
   FORM STATE
───────────────────────────────────────────── */

type FormState = {
  submitterType: "" | "Brand / Agency / Industry" | "Creator / Celebrity / Talent";
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  socials: string;
  website: string;
  isOnBehalf: boolean;
  submittingOnBehalfOf: string;
  interestSponsor: boolean;
  interestSpeaker: boolean;
  sponsorshipPackage: string;
  workshopName: string;
  workshopTopic: string;
  workshopCoLeaders: string;
  openToMainStage: boolean;
  speakerTermsAccepted: boolean;
  notes: string;
};

const initialForm: FormState = {
  submitterType: "",
  name: "", title: "", company: "", email: "", phone: "",
  socials: "", website: "",
  isOnBehalf: false, submittingOnBehalfOf: "",
  interestSponsor: false, interestSpeaker: false,
  sponsorshipPackage: "",
  workshopName: "", workshopTopic: "", workshopCoLeaders: "",
  openToMainStage: false,
  speakerTermsAccepted: false,
  notes: "",
};

/* ─────────────────────────────────────────────
   SUMMIT PAGE
───────────────────────────────────────────── */

type WaitlistState = {
  name: string;
  email: string;
  audience: "" | "Student" | "Creator" | "Brand" | "Industry";
};

const initialWaitlist: WaitlistState = { name: "", email: "", audience: "" };

const Summit = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [waitlist, setWaitlist] = useState<WaitlistState>(initialWaitlist);
  const [waitlistSubmitting, setWaitlistSubmitting] = useState(false);

  // Hero photo parallax
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroPhotoY = useTransform(heroProgress, [0, 1], ["0%", "18%"]);
  const heroPhotoScale = useTransform(heroProgress, [0, 1], [1, 1.1]);

  const handleWaitlistChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setWaitlist((p) => ({ ...p, [name]: value }));
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistSubmitting) return;
    if (!waitlist.name || !waitlist.email || !waitlist.audience) {
      toast({ title: "Fill in all fields", description: "Name, email, and who you are." });
      return;
    }
    setWaitlistSubmitting(true);
    try {
      const res = await fetch("/.netlify/functions/submit-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(waitlist),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      toast({
        title: "You're on the list",
        description: "We'll email you the moment ticket sales open. Any questions in the meantime: summit@reachnationals.org.",
      });
      setWaitlist(initialWaitlist);
      setWaitlistOpen(false);
    } catch (err) {
      toast({
        title: "Could not save your spot",
        description: err instanceof Error && err.message ? err.message : "Try again or email summit@reachnationals.org.",
      });
    } finally {
      setWaitlistSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((p) => ({ ...p, [name]: checked }));
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!form.interestSponsor && !form.interestSpeaker) {
      toast({ title: "Pick at least one", description: "Sponsoring, speaking, or both?" });
      return;
    }
    if (!form.submitterType) {
      toast({ title: "Tell us who you are", description: "Pick brand-side or creator/talent so we route correctly." });
      return;
    }
    if (form.interestSpeaker && !form.speakerTermsAccepted) {
      toast({ title: "Acknowledge the speaker terms", description: "Please confirm you've read the speaker terms before submitting." });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/.netlify/functions/submit-summit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      const speakerOnly = form.interestSpeaker && !form.interestSponsor;
      const sponsorOnly = form.interestSponsor && !form.interestSpeaker;
      const both = form.interestSpeaker && form.interestSponsor;

      let description = "";
      if (speakerOnly) {
        description = "Thanks for putting your hand up. We review every submission, and we'll only reach back out if there's a fit for the lineup. Any questions, email summit@reachnationals.org.";
      } else if (sponsorOnly) {
        description = "Thanks for your interest in partnering with the Summit. We'll respond within 5–7 business days. Any questions, email summit@reachnationals.org.";
      } else if (both) {
        description = "Got it. Sponsorship side: we'll respond within 5–7 business days. Speaking side: we'll only reach back out if there's a fit for the lineup. Any questions, email summit@reachnationals.org.";
      } else {
        description = "Thanks for your interest in REACH Summit. Any questions, email summit@reachnationals.org.";
      }

      toast({
        title: "Submission received",
        description,
      });
      setForm(initialForm);
    } catch (err) {
      toast({
        title: "Could not submit",
        description: err instanceof Error && err.message ? err.message : "Try again or email summit@reachnationals.org.",
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
      {/* ════════════════════════════════════════
          SUMMIT SECTION NAV — sits below main navbar, above hero
      ════════════════════════════════════════ */}
      <nav className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-reach-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-8 md:gap-14 py-4 overflow-x-auto">
            {[
              { label: "Get Involved", href: "#interest" },
              { label: "Agenda",       href: "#agenda" },
              { label: "Workshops",    href: "#workshops" },
              { label: "Track Record", href: "#track-record" },
              { label: "FAQ",          href: "#faq" },
              { label: "Tickets",      href: "#tickets" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] md:text-xs font-bold uppercase tracking-[0.24em] text-reach-ink/55 hover:text-reach-navy transition-colors whitespace-nowrap flex-shrink-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ════════════════════════════════════════
          HERO — Cinematic, light theme, theatrical
      ════════════════════════════════════════ */}
      <section ref={heroRef} className="relative overflow-hidden border-b border-reach-border">
        <div className="absolute inset-0">
          <motion.img
            src="/images/gettyimages-2144928162-2048x2048.jpg"
            alt="REACH Summit"
            style={{ y: heroPhotoY, scale: heroPhotoScale }}
            className="w-full h-full object-cover object-[center_20%] will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/70 to-reach-offwhite/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
          <div className="absolute -right-32 -top-32 w-[520px] h-[520px] bg-reach-gold/25 rounded-full blur-[140px]" />
          <div className="absolute -left-40 bottom-0 w-[460px] h-[460px] bg-reach-navy/15 rounded-full blur-[140px]" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-end pt-24 pb-24 md:pt-32 md:pb-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="xl:col-span-8"
            >
              <div className="flex items-center gap-3 mb-7 flex-wrap">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-reach-goldDark">
                  <span className="w-6 h-px bg-reach-gold" />
                  REACH Summit
                </span>
                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-reach-navy bg-reach-navy/5 border border-reach-navy/20 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-reach-navy animate-pulse" />
                  First Week of December
                </span>
              </div>

              <h1 className="font-grotesk text-[2.5rem] sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[7rem] 2xl:text-[7.5rem] font-bold leading-[0.92] sm:leading-[0.88] tracking-tight mb-7 text-reach-ink">
                Creators.
                <br />
                Tech.
                <br />
                <span className="text-reach-navy">Entertainment.</span>
              </h1>

              <p className="text-reach-ink/65 text-lg md:text-xl max-w-2xl leading-relaxed">
                A one-day summit in Los Angeles for students, creators, industry leaders, and executives across{" "}
                <span className="text-reach-navy font-semibold">every facet of entertainment and media.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="xl:col-span-4"
            >
              <div className="bg-white border border-reach-border rounded-xl p-6 shadow-2xl shadow-reach-navy/10 space-y-5">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-reach-goldDark mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-reach-ink/45 mb-1">When</p>
                    <p className="font-grotesk font-bold text-reach-ink text-sm">First week of December</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-reach-goldDark mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-reach-ink/45 mb-1">Hours</p>
                    <p className="font-grotesk font-bold text-reach-ink text-sm">9:00 AM – 6:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-reach-goldDark mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-reach-ink/45 mb-1">Location</p>
                    <p className="font-grotesk font-bold text-reach-ink text-sm">Los Angeles, CA</p>
                    <p className="text-reach-ink/45 text-[11px] mt-0.5">Venue to be announced</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-reach-border space-y-2">
                  <a
                    href="#interest"
                    className="group inline-flex items-center justify-center gap-2 w-full bg-reach-navy text-white font-bold text-sm px-5 py-3 rounded-lg hover:bg-reach-navy/90 transition-colors"
                  >
                    Get Involved
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setWaitlistOpen(true)}
                    className="inline-flex items-center justify-center gap-2 w-full text-reach-ink font-medium text-sm px-5 py-3 rounded-lg border border-reach-border hover:bg-reach-offwhite transition-colors"
                  >
                    <Bell className="w-4 h-4" />
                    Interested In Purchasing Tickets
                  </button>
                  <a
                    href="#agenda"
                    className="inline-flex items-center justify-center gap-2 w-full text-reach-ink font-medium text-sm px-5 py-3 rounded-lg border border-reach-border hover:bg-reach-offwhite transition-colors"
                  >
                    See the Day
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MARQUEE — Topic ticker
      ════════════════════════════════════════ */}
      <section className="bg-reach-navy py-6 overflow-hidden border-y border-reach-navy group">
        <div className="flex animate-[marquee_38s_linear_infinite] gap-12 whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...MARQUEE_PHRASES, ...MARQUEE_PHRASES, ...MARQUEE_PHRASES].map((p, i) => (
            <span key={i} className="font-grotesk text-2xl md:text-4xl font-bold text-white tracking-tight flex items-center gap-12">
              {p}
              <span className="text-reach-gold">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS — Big animated counters
      ════════════════════════════════════════ */}
      <section className="bg-reach-offwhite py-14 md:py-20 border-b border-reach-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
          >
            {[
              { value: 1,    suffix: "",   label: "Full Day" },
              { value: 3,    suffix: "",   label: "Stages" },
              { value: 11,   suffix: "",   label: "Main Stage Sessions" },
              { value: 14,   suffix: "",   label: "Workshops" },
            ].map((s, i) => (
              <div key={i} className="border-l-2 border-reach-gold pl-4 md:pl-6">
                <span className="block font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-reach-ink leading-none mb-2 tracking-tight">
                  <AnimatedCounter value={s.value} suffix={s.suffix} duration={1.4 + i * 0.15} />
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.22em] font-bold text-reach-ink/55">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          INTEREST FORM
      ════════════════════════════════════════ */}
      <section id="interest" className="bg-white py-14 md:py-24 border-t border-reach-border scroll-mt-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 max-w-5xl"
          >
            <Eyebrow>Get Involved</Eyebrow>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight mb-4">
              Sponsor.{" "}
              <span className="text-reach-navy">Speak.</span>{" "}
              <span className="text-reach-ink">Or both.</span>
            </h2>
            <p className="text-reach-ink/55 text-base md:text-lg leading-relaxed">
              Tell us how you'd like to be part of the Summit. Speakers include celebrities, creators, talent, executives, and operators across entertainment and media. Sponsorship perks range from Presented By title placement to lanyards, workshops, promotionals, and custom activations. Submitting for a client? There's a check box for that. We respond within 5–7 business days.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-reach-offwhite border border-reach-border rounded-xl p-7 md:p-10"
          >
            <p className="text-reach-ink/45 text-xs mb-6">
              Fields marked with <span className="text-reach-crimson font-bold">*</span> are required.
            </p>

            <div className="mb-8 pb-8 border-b border-reach-border">
              <p className={labelClass}>
                I'm interested in <span className="text-reach-crimson normal-case tracking-normal ml-0.5">*</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`flex items-start gap-3 border rounded-lg p-4 cursor-pointer transition-all bg-white ${
                    form.interestSponsor
                      ? "border-reach-navy ring-2 ring-reach-navy/20"
                      : "border-reach-border hover:border-reach-navy/30"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="interestSponsor"
                    checked={form.interestSponsor}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-reach-navy"
                  />
                  <div>
                    <p className="font-grotesk font-bold text-reach-ink text-sm leading-tight mb-0.5">Sponsoring</p>
                    <p className="text-reach-ink/55 text-xs leading-snug">Partner with the Summit.</p>
                  </div>
                </label>
                <label
                  className={`flex items-start gap-3 border rounded-lg p-4 cursor-pointer transition-all bg-white ${
                    form.interestSpeaker
                      ? "border-reach-navy ring-2 ring-reach-navy/20"
                      : "border-reach-border hover:border-reach-navy/30"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="interestSpeaker"
                    checked={form.interestSpeaker}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-reach-navy"
                  />
                  <div>
                    <p className="font-grotesk font-bold text-reach-ink text-sm leading-tight mb-0.5">Speaking</p>
                    <p className="text-reach-ink/55 text-xs leading-snug">Celebrity, creator, talent, exec, or operator.</p>
                  </div>
                </label>
              </div>

              {/* Submitting on behalf of someone */}
              <div className="mt-5">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="isOnBehalf"
                    checked={form.isOnBehalf}
                    onChange={handleChange}
                    className="w-4 h-4 accent-reach-navy"
                  />
                  <span className="text-sm text-reach-ink/75 leading-snug">
                    I'm submitting on behalf of a client / talent / someone else
                  </span>
                </label>
                {form.isOnBehalf && (
                  <div className="mt-4">
                    <label htmlFor="submittingOnBehalfOf" className={labelClass}>
                      Who You're Submitting For <span className="text-reach-crimson normal-case tracking-normal ml-0.5">*</span>
                    </label>
                    <textarea
                      id="submittingOnBehalfOf"
                      name="submittingOnBehalfOf"
                      rows={3}
                      required={form.isOnBehalf}
                      value={form.submittingOnBehalfOf}
                      onChange={handleChange}
                      placeholder="Name, title, company, socials, and your relationship to them (e.g. agent, manager, publicist)."
                      className={inputClass}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Submitter type selector */}
            <div className="mb-6">
              <p className={labelClass}>
                You are <span className="text-reach-crimson normal-case tracking-normal ml-0.5">*</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { value: "Brand / Agency / Industry", title: "Brand / Agency / Industry", desc: "Exec, marketer, agency lead, sponsor side." },
                  { value: "Creator / Celebrity / Talent", title: "Creator / Celebrity / Talent", desc: "On-camera, performer, athlete, artist." },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-start gap-3 border rounded-lg p-4 cursor-pointer transition-all bg-white ${
                      form.submitterType === opt.value
                        ? "border-reach-navy ring-2 ring-reach-navy/20"
                        : "border-reach-border hover:border-reach-navy/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="submitterType"
                      value={opt.value}
                      checked={form.submitterType === opt.value}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 accent-reach-navy"
                    />
                    <div>
                      <p className="font-grotesk font-bold text-reach-ink text-sm leading-tight mb-0.5">{opt.title}</p>
                      <p className="text-reach-ink/55 text-xs leading-snug">{opt.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
              {form.isOnBehalf && (
                <p className="text-reach-ink/45 text-xs mt-2 leading-relaxed">
                  Submitting on behalf of someone? Pick the option that fits <span className="font-semibold text-reach-ink">you</span> (the submitter). You've already added the client's details above.
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Full Name <span className="text-reach-crimson normal-case tracking-normal ml-0.5">*</span>
                </label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email <span className="text-reach-crimson normal-case tracking-normal ml-0.5">*</span>
                </label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder={form.submitterType === "Creator / Celebrity / Talent" ? "you@email.com" : "you@company.com"} className={inputClass} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Phone</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} />
              </div>

              {form.submitterType === "Brand / Agency / Industry" && (
                <>
                  <div>
                    <label htmlFor="title" className={labelClass}>
                      Title <span className="text-reach-crimson normal-case tracking-normal ml-0.5">*</span>
                    </label>
                    <input id="title" name="title" type="text" required value={form.title} onChange={handleChange} placeholder="CEO, Head of Marketing, etc." className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company <span className="text-reach-crimson normal-case tracking-normal ml-0.5">*</span>
                    </label>
                    <input id="company" name="company" type="text" required value={form.company} onChange={handleChange} placeholder="Where you work" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="website" className={labelClass}>Company Website</label>
                    <input id="website" name="website" type="url" value={form.website} onChange={handleChange} placeholder="https://..." className={inputClass} />
                  </div>
                </>
              )}

              <div className="sm:col-span-2">
                <label htmlFor="socials" className={labelClass}>
                  {form.submitterType === "Creator / Celebrity / Talent" ? "Your Socials / Where People Can Find You" : "Socials"}
                  {form.submitterType === "Creator / Celebrity / Talent" && (
                    <span className="text-reach-crimson normal-case tracking-normal ml-0.5">*</span>
                  )}
                </label>
                <input
                  id="socials"
                  name="socials"
                  type="text"
                  required={form.submitterType === "Creator / Celebrity / Talent"}
                  value={form.socials}
                  onChange={handleChange}
                  placeholder="Instagram, TikTok, YouTube, LinkedIn, X. Whatever you're active on."
                  className={inputClass}
                />
              </div>
            </div>

            {form.interestSponsor && (
              <div className="mb-6 pt-6 border-t border-reach-border">
                <p className="font-grotesk font-bold text-reach-ink text-base mb-4">Sponsorship</p>
                <div>
                  <label htmlFor="sponsorshipPackage" className={labelClass}>
                    Target Package <span className="text-reach-crimson normal-case tracking-normal ml-0.5">*</span>
                  </label>
                  <select
                    id="sponsorshipPackage"
                    name="sponsorshipPackage"
                    value={form.sponsorshipPackage}
                    onChange={handleChange}
                    required={form.interestSponsor}
                    className={inputClass}
                  >
                    <option value="">Pick a budget range</option>
                    <option value="Under $10K">Under $10K</option>
                    <option value="$10K">$10K</option>
                    <option value="$25K">$25K</option>
                    <option value="$50K">$50K</option>
                    <option value="$100K">$100K</option>
                    <option value="$250K">$250K</option>
                    <option value="$500K (Presented By)">$500K+</option>
                  </select>
                  <div className="mt-3 bg-white border border-reach-border rounded-lg p-4">
                    <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-reach-goldDark mb-2">What sponsors get</p>
                    <p className="text-reach-ink/70 text-sm leading-relaxed">
                      Perks vary by package and conversation. The menu ranges from{" "}
                      <span className="text-reach-ink font-semibold">Presented By title placement</span>, branded lanyards, workshop sponsorships, on-stage moments, promotional integrations, gifting suite drops, custom activations, and beyond. Every package is built around your goals.
                    </p>
                  </div>
                  <p className="text-reach-ink/45 text-xs mt-3 leading-relaxed">
                    Not sure? Pick the closest range and we'll work backward from your goals.
                  </p>
                  <div className="mt-4 bg-reach-gold/10 border border-reach-gold/30 rounded-lg p-4">
                    <p className="text-reach-ink/75 text-xs leading-relaxed">
                      <span className="font-semibold text-reach-ink">Note:</span> REACH National Corp. is a 501(c)(3) nonprofit. Sponsorship of the Summit is sponsorship of a nonprofit event.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {form.interestSpeaker && (
              <div className="mb-6 pt-6 border-t border-reach-border">
                <p className="font-grotesk font-bold text-reach-ink text-base mb-1">Workshop Proposal</p>
                <p className="text-reach-ink/55 text-sm leading-relaxed mb-5">
                  Every speaker pitch starts as a workshop. Main stage (keynote / fireside / panel) is curated by REACH — you can opt in below.
                </p>
                <div className="grid grid-cols-1 gap-5">
                  <div>
                    <label htmlFor="workshopName" className={labelClass}>
                      Workshop Name <span className="text-reach-crimson normal-case tracking-normal ml-0.5">*</span>
                    </label>
                    <input
                      id="workshopName"
                      name="workshopName"
                      type="text"
                      required={form.interestSpeaker}
                      value={form.workshopName}
                      onChange={handleChange}
                      placeholder="What's the working title?"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="workshopTopic" className={labelClass}>
                      Workshop Topic / Description <span className="text-reach-crimson normal-case tracking-normal ml-0.5">*</span>
                    </label>
                    <textarea
                      id="workshopTopic"
                      name="workshopTopic"
                      rows={3}
                      required={form.interestSpeaker}
                      value={form.workshopTopic}
                      onChange={handleChange}
                      placeholder="What attendees will walk away with."
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="workshopCoLeaders" className={labelClass}>
                      The Other 2–3 Workshop Leaders <span className="text-reach-crimson normal-case tracking-normal ml-0.5">*</span>
                    </label>
                    <textarea
                      id="workshopCoLeaders"
                      name="workshopCoLeaders"
                      rows={3}
                      required={form.interestSpeaker}
                      value={form.workshopCoLeaders}
                      onChange={handleChange}
                      placeholder="Name, title, company for each. We expect 3–4 leaders total per workshop."
                      className={inputClass}
                    />
                  </div>

                  {/* Main Stage opt-in */}
                  <label
                    className={`flex items-start gap-3 border rounded-lg p-4 cursor-pointer transition-all bg-white ${
                      form.openToMainStage
                        ? "border-reach-navy ring-2 ring-reach-navy/20"
                        : "border-reach-border hover:border-reach-navy/30"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="openToMainStage"
                      checked={form.openToMainStage}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 accent-reach-navy"
                    />
                    <div>
                      <p className="font-grotesk font-bold text-reach-ink text-sm leading-tight mb-0.5">Also open to the main stage</p>
                      <p className="text-reach-ink/55 text-xs leading-snug">Optional. Check if you're open to being called up for a keynote, fireside, or panel slot. Main stage is curated by REACH.</p>
                    </div>
                  </label>
                </div>

                {/* Speaker Terms */}
                <div className="mt-6 bg-white border border-reach-border rounded-lg p-5">
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-reach-goldDark mb-3">Speaker Terms</p>
                  <p className="text-reach-ink/70 text-sm leading-relaxed mb-4">
                    REACH National Corp. is a 501(c)(3) nonprofit. By submitting, you acknowledge:
                  </p>
                  <ul className="space-y-2 text-reach-ink/70 text-sm leading-relaxed list-disc pl-5 mb-5">
                    <li>REACH will not pay speaking or appearance fees.</li>
                    <li>REACH does not cover hotel, travel, or parking costs.</li>
                    <li>A Speaker badge is a full-access credential, but does not necessarily grant entry to every area or session, as access may be limited by capacity or other restrictions.</li>
                    <li>REACH may use the Speaker's name, likeness, and/or image for marketing purposes.</li>
                  </ul>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="speakerTermsAccepted"
                      checked={form.speakerTermsAccepted}
                      onChange={handleChange}
                      required={form.interestSpeaker}
                      className="mt-1 w-4 h-4 accent-reach-navy flex-shrink-0"
                    />
                    <span className="text-reach-ink/80 text-sm leading-snug">
                      I've read and agree to the Speaker Terms above.
                    </span>
                  </label>
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-reach-border">
              <label htmlFor="notes" className={labelClass}>Anything else (optional)</label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={form.notes}
                onChange={handleChange}
                placeholder="Context, asks, custom requests."
                className={inputClass}
              />
            </div>

            <div className="mt-8 pt-6 border-t border-reach-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-reach-ink/40 text-xs">
                By submitting, you agree to our <a href="/privacy" className="text-reach-navy hover:underline">Privacy Policy</a>.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-2 bg-reach-navy text-white font-bold text-sm px-7 py-3.5 rounded-lg hover:bg-reach-navy/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Interest"}
                {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />}
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT TO EXPECT
      ════════════════════════════════════════ */}
      <section className="bg-reach-offwhite py-14 md:py-24 border-t border-reach-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-5xl"
          >
            <Eyebrow>What To Expect</Eyebrow>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight lg:whitespace-nowrap">
              One day. Three stages.{" "}
              <span className="text-reach-navy">A signal flare for the industry.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {PILLARS.map((p, i) => (
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
                  {p.tag}
                </span>
                <p.icon className="w-5 h-5 text-reach-goldDark mb-4 group-hover:text-reach-navy transition-colors" />
                <h3 className="font-grotesk text-lg font-bold text-reach-ink mb-3 leading-snug group-hover:text-reach-navy transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-reach-ink/50 text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TOPICS — Editorial grid
      ════════════════════════════════════════ */}
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
              <Eyebrow>Topics On Stage</Eyebrow>
              <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight">
                The conversations{" "}
                <span className="text-reach-navy">we're putting on the record.</span>
              </h2>
            </div>
            <p className="text-reach-ink/50 text-base max-w-sm leading-relaxed md:text-right">
              Each panel surfaces the questions that move the industry forward, not just the ones already being answered.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.04 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {TOPICS.map((t, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                }}
                whileHover={{ y: -4 }}
                className="group bg-reach-offwhite border border-reach-border rounded-xl p-6 hover:bg-white hover:border-reach-navy/30 hover:shadow-md transition-all"
              >
                <t.icon className="w-5 h-5 text-reach-goldDark mb-4 group-hover:text-reach-navy transition-colors" />
                <h3 className="font-grotesk font-bold text-reach-ink text-base mb-2 leading-tight">{t.title}</h3>
                <p className="text-reach-ink/50 text-sm leading-snug">{t.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MAIN STAGE AGENDA
      ════════════════════════════════════════ */}
      <section id="agenda" className="bg-reach-offwhite py-14 md:py-24 border-t border-reach-border scroll-mt-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-5xl"
          >
            <Eyebrow>Main Stage</Eyebrow>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight">
              The full day,{" "}
              <span className="text-reach-navy">to the minute.</span>
            </h2>
            <p className="text-reach-ink/55 text-base md:text-lg leading-relaxed mt-4">
              Keynote, two fireside chats, and nine industry panels. Curated to surface the conversations that matter right now.
            </p>
          </motion.div>

          <div className="bg-white border border-reach-border rounded-xl overflow-hidden">
            {MAIN_STAGE.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
                className={`grid grid-cols-12 gap-4 md:gap-6 items-center px-5 md:px-7 py-4 md:py-5 ${
                  i < MAIN_STAGE.length - 1 ? "border-b border-reach-border" : ""
                } hover:bg-reach-offwhite/50 transition-colors`}
              >
                <div className="col-span-12 sm:col-span-3 md:col-span-3">
                  <p className="font-grotesk font-bold text-reach-ink text-sm md:text-base tracking-tight">{s.time}</p>
                  <p className="text-reach-ink/40 text-[11px] md:text-xs">{s.duration}</p>
                </div>
                <div className="col-span-12 sm:col-span-2 md:col-span-2">
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full ${SESSION_TYPE_COLOR[s.type] || "text-reach-ink/60 bg-reach-offwhite"}`}>
                    {s.type}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-7 md:col-span-7">
                  <p className="font-grotesk font-bold text-reach-ink text-sm md:text-base leading-snug">{s.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WORKSHOP STAGES
      ════════════════════════════════════════ */}
      <section id="workshops" className="bg-white py-14 md:py-24 border-t border-reach-border scroll-mt-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-5xl"
          >
            <Eyebrow>Workshop Stages</Eyebrow>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight md:whitespace-nowrap">
              Two parallel stages. <span className="text-reach-navy">Hands-on programming.</span>
            </h2>
            <p className="text-reach-ink/55 text-base md:text-lg leading-relaxed mt-4 lg:whitespace-nowrap">
              Simultaneous workshops running alongside the main stage. 30 to 45 minutes each. Final picks announced closer to the date.
            </p>
          </motion.div>

          <div className="bg-white border border-reach-border rounded-xl overflow-hidden">
            <div className="grid grid-cols-12 gap-4 md:gap-6 items-center px-5 md:px-7 py-4 bg-reach-offwhite border-b border-reach-border">
              <div className="col-span-12 sm:col-span-3 text-[10px] font-bold uppercase tracking-[0.18em] text-reach-ink/55">Time</div>
              <div className="col-span-12 sm:col-span-4 md:col-span-4 text-[10px] font-bold uppercase tracking-[0.18em] text-reach-goldDark">Stage 2</div>
              <div className="col-span-12 sm:col-span-4 md:col-span-4 text-[10px] font-bold uppercase tracking-[0.18em] text-reach-goldDark">Stage 3</div>
              <div className="hidden md:block md:col-span-1 text-[10px] font-bold uppercase tracking-[0.18em] text-reach-ink/55 text-right">Length</div>
            </div>
            {WORKSHOP_SCHEDULE.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`grid grid-cols-12 gap-4 md:gap-6 items-center px-5 md:px-7 py-4 md:py-5 ${
                  i < WORKSHOP_SCHEDULE.length - 1 ? "border-b border-reach-border" : ""
                } hover:bg-reach-offwhite/50 transition-colors`}
              >
                <div className="col-span-12 sm:col-span-3">
                  <p className="font-grotesk font-bold text-reach-ink text-sm md:text-base tracking-tight">{w.time}</p>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <p className="text-reach-ink/55 text-sm">{w.stage2}</p>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <p className="text-reach-ink/55 text-sm">{w.stage3}</p>
                </div>
                <div className="hidden md:block md:col-span-1 text-right">
                  <span className="text-reach-ink/40 text-xs">{w.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          PAST EVENTS — Proof of execution
      ════════════════════════════════════════ */}
      <section id="track-record" className="bg-reach-offwhite py-14 md:py-24 border-t border-reach-border scroll-mt-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex flex-col items-center">
              <Eyebrow>Track Record</Eyebrow>
            </div>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight md:whitespace-nowrap">
              We've thrown rooms like this <span className="text-reach-navy">before.</span>
            </h2>
            <p className="text-reach-ink/55 text-base md:text-lg leading-relaxed mt-4 max-w-4xl mx-auto">
              REACH produced Pre-Coachella, Lollapalooza Creator House, and HiitHaus #NUFFSAID. 2,500 cumulative creators, 100+ brand partners across different activations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 md:gap-4 h-[400px] md:h-[500px]"
          >
            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden group">
              <img src="/images/Summit/24a1ea0a-5c36-4b54-b2b0-9b54e04028e5.jpeg" alt="REACH event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden group">
              <img src="/images/Summit/original%20(4).jpeg" alt="REACH event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden group">
              <img src="/images/Summit/4ce0c3c4-4903-4b55-b6cc-070344dfcf1b.jpg" alt="REACH event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden group">
              <img src="/images/Summit/5c62a245-e947-4191-ad85-c8e832ce609d.jpg" alt="REACH event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden group">
              <img src="/images/Summit/original%20(5).jpeg" alt="REACH event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FAQ
      ════════════════════════════════════════ */}
      <section id="faq" className="bg-white py-14 md:py-24 border-t border-reach-border scroll-mt-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex flex-col items-center">
              <Eyebrow>FAQ</Eyebrow>
            </div>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-reach-ink leading-tight md:whitespace-nowrap">
              Quick answers, <span className="text-reach-navy">no run-around.</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-3">
            {FAQ_ITEMS.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="bg-white border border-reach-border rounded-xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left px-6 md:px-7 py-5 flex items-center justify-between gap-4 hover:bg-reach-offwhite/40 transition-colors"
                  >
                    <span className="font-grotesk font-bold text-reach-ink text-base md:text-lg leading-snug">{f.q}</span>
                    <span className={`flex-shrink-0 w-7 h-7 rounded-full bg-reach-offwhite border border-reach-border flex items-center justify-center transition-transform ${isOpen ? "rotate-45" : ""}`}>
                      <span className="block w-3 h-px bg-reach-ink/60 absolute" />
                      <span className="block w-px h-3 bg-reach-ink/60" />
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-7 pb-5 text-reach-ink/60 text-sm md:text-base leading-relaxed">
                      {f.a}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TICKETS + GROUP RATES
      ════════════════════════════════════════ */}
      <section id="tickets" className="bg-white py-14 md:py-24 border-t border-reach-border scroll-mt-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-reach-offwhite border border-reach-border rounded-xl p-7 md:p-10"
            >
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-reach-goldDark bg-reach-gold/10 px-3 py-1 rounded-full mb-5">
                Tickets
              </span>
              <h3 className="font-grotesk text-2xl md:text-3xl font-bold text-reach-ink leading-tight mb-4">
                Reservations open soon.
              </h3>
              <p className="text-reach-ink/55 text-base leading-relaxed mb-6">
                Tickets are paid and sales open a few months out from the event. Drop your info below to be first in line when they go on sale.
              </p>
              <button
                type="button"
                onClick={() => setWaitlistOpen(true)}
                className="group inline-flex items-center gap-2 bg-reach-navy text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-reach-navy/90 transition-colors"
              >
                <Bell className="w-4 h-4" />
                Get Early Access Notification
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-reach-offwhite border border-reach-border rounded-xl p-7 md:p-10"
            >
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-reach-goldDark bg-reach-gold/10 px-3 py-1 rounded-full mb-5">
                Bringing A Team?
              </span>
              <h3 className="font-grotesk text-2xl md:text-3xl font-bold text-reach-ink leading-tight mb-4">
                Group rates & reserved tables.
              </h3>
              <p className="text-reach-ink/55 text-base leading-relaxed mb-6">
                Attending with your team? Reserved tables and group rates are available on request. Email Dylan Huey directly.
              </p>
              <a
                href="mailto:dylan@reachnationals.org"
                className="group inline-flex items-center gap-2 text-reach-navy font-bold text-sm hover:gap-3 transition-all"
              >
                dylan@reachnationals.org
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-reach-ink/45 text-sm text-center mt-10 max-w-2xl mx-auto leading-relaxed"
          >
            For sponsorship or programming inquiries, you can also email{" "}
            <a href="mailto:summit@reachnationals.org" className="text-reach-navy hover:underline font-semibold">
              summit@reachnationals.org
            </a>
            .
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WAITLIST DIALOG
      ════════════════════════════════════════ */}
      <Dialog open={waitlistOpen} onOpenChange={setWaitlistOpen}>
        <DialogContent className="w-[calc(100%-2rem)] sm:w-full sm:max-w-md bg-white rounded-xl">
          <DialogHeader>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-reach-goldDark mb-2 w-fit">
              <Bell className="w-3 h-3" />
              Early Access
            </span>
            <DialogTitle className="font-grotesk text-2xl md:text-3xl font-bold text-reach-ink leading-tight">
              Be first in line when tickets drop.
            </DialogTitle>
            <DialogDescription className="text-reach-ink/55 text-sm leading-relaxed pt-2">
              Summit tickets are paid. We'll email you the moment sales open so you can lock your spot before the general announcement.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleWaitlistSubmit} className="space-y-4 mt-2">
            <div>
              <label htmlFor="waitlist-name" className={labelClass}>
                Name <span className="text-reach-crimson normal-case tracking-normal ml-0.5">*</span>
              </label>
              <input
                id="waitlist-name"
                name="name"
                type="text"
                required
                value={waitlist.name}
                onChange={handleWaitlistChange}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="waitlist-email" className={labelClass}>
                Email <span className="text-reach-crimson normal-case tracking-normal ml-0.5">*</span>
              </label>
              <input
                id="waitlist-email"
                name="email"
                type="email"
                required
                value={waitlist.email}
                onChange={handleWaitlistChange}
                placeholder="you@email.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="waitlist-audience" className={labelClass}>
                I am a <span className="text-reach-crimson normal-case tracking-normal ml-0.5">*</span>
              </label>
              <select
                id="waitlist-audience"
                name="audience"
                value={waitlist.audience}
                onChange={handleWaitlistChange}
                required
                className={inputClass}
              >
                <option value="">Pick one</option>
                <option value="Student">Student</option>
                <option value="Creator">Creator</option>
                <option value="Brand">Brand</option>
                <option value="Industry">Industry</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={waitlistSubmitting}
              className="group inline-flex items-center justify-center gap-2 w-full bg-reach-navy text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-reach-navy/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {waitlistSubmitting ? "Saving..." : "Join Waitlist"}
              {!waitlistSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />}
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Summit;
