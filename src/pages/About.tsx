import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, GraduationCap, Briefcase, Heart, Target, Lightbulb, Building2, ArrowRight, Sparkles, Globe, Rocket, Star } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-reach-cream rounded-full opacity-20 blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-reach-gold/20 rounded-full opacity-20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-reach-navy/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <Sparkles className="w-12 h-12 text-reach-gold" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-reach-navy mb-4 leading-tight">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-reach-slate mb-6 max-w-3xl mx-auto leading-relaxed">
              In a world where creators are becoming entrepreneurs, storytellers, and cultural leaders, one thing has remained true: most student creators are navigating that journey alone.
            </p>
            <p className="text-lg md:text-xl font-semibold text-reach-gold">
              That's where REACH began.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-12 bg-reach-cream/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-reach-gold/0 via-reach-gold/20 to-reach-gold/0" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-reach-gold" />
                <h2 className="text-sm font-semibold text-reach-gold uppercase tracking-wider">
                  How It All Started
                </h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-reach-navy mb-4">
                The Origin of REACH (2017–2020)
              </h3>
              <div className="prose prose-lg text-reach-slate">
                <p className="text-lg">
                  Founded in 2017 at the University of Southern California by Markian Benhamou, Xavier Di Petta (of PartyShirt), and a group of like-minded students, REACH emerged at a time when the world of digital influence was rapidly evolving—but few resources existed for the student creators shaping it.
                </p>
                <p className="text-lg">
                  What did exist was raw ambition, creative energy, and a shared belief: student creators needed a place to belong, to grow, and to be taken seriously.
                </p>
                <p className="text-lg font-semibold text-reach-gold">
                  So, they built one.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-6 h-6 text-reach-gold" />
                <h2 className="text-sm font-semibold text-reach-gold uppercase tracking-wider">
                  A New Era
                </h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-reach-navy mb-4">
                National Expansion Begins (2020–2022)
              </h3>
              <div className="prose prose-lg text-reach-slate">
                <p className="text-lg">
                  In Fall 2020, a new chapter began when Dylan Huey joined REACH during his freshman year at USC. As a creator with millions of followers and a deep background in talent development and digital strategy, Dylan brought a unique lens to the organization.
                </p>
                <p className="text-lg">
                  By Spring 2022, Dylan took over leadership of REACH at USC—and reimagined what REACH could be. He saw that the same challenges student creators faced at USC existed nationwide.
                </p>
                <p className="text-lg font-semibold text-reach-gold">
                  What began as a single chapter evolved into REACH Nationals—a full-scale nonprofit built to support student creators across the country.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current State */}
      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-reach-gold" />
                <h2 className="text-sm font-semibold text-reach-gold uppercase tracking-wider">
                  Where We Are Today
                </h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-reach-navy mb-4">
                A National Network for Student Creators
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-reach-cream/10">
                  <div className="text-4xl font-bold text-reach-gold mb-2">75+</div>
                  <div className="text-lg text-reach-slate">Universities</div>
                </div>
                <div className="text-center p-6 bg-reach-cream/10">
                  <div className="text-4xl font-bold text-reach-gold mb-2">2,500+</div>
                  <div className="text-lg text-reach-slate">Active Members</div>
                </div>
                <div className="text-center p-6 bg-reach-cream/10">
                  <div className="text-4xl font-bold text-reach-gold mb-2">350M+</div>
                  <div className="text-lg text-reach-slate">Social Reach</div>
                </div>
              </div>
              <div className="prose prose-lg text-reach-slate">
                <p className="text-xl text-reach-slate mb-8">
                  But REACH is about more than numbers. It's about access. Every student creator in REACH—whether they have 500 followers or 500,000—gains access to:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xl">
                  <li className="flex items-start gap-4 p-4 bg-reach-cream/5">
                    <Users className="w-7 h-7 text-reach-gold mt-1 flex-shrink-0" />
                    <span>Official student org chapters on campus</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 bg-reach-cream/5">
                    <GraduationCap className="w-7 h-7 text-reach-gold mt-1 flex-shrink-0" />
                    <span>Workshops on contracts and monetization</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 bg-reach-cream/5">
                    <Briefcase className="w-7 h-7 text-reach-gold mt-1 flex-shrink-0" />
                    <span>Industry mentorship and career pipelines</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 bg-reach-cream/5">
                    <Heart className="w-7 h-7 text-reach-gold mt-1 flex-shrink-0" />
                    <span>A supportive creator community</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="bg-reach-cream/10 p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-reach-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg font-bold text-reach-navy mb-4">What We Believe In</h3>
                <ul className="space-y-3 text-reach-slate">
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-reach-gold mt-1" />
                    <span>Student-led leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <GraduationCap className="w-5 h-5 text-reach-gold mt-1" />
                    <span>Peer-to-peer mentorship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-reach-gold mt-1" />
                    <span>Authenticity over algorithm chasing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-reach-gold mt-1" />
                    <span>Mental wellness as a foundation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-reach-cream/10 p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-reach-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg font-bold text-reach-navy mb-4">The REACH Difference</h3>
                <ul className="space-y-3 text-reach-slate">
                  <li className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-reach-gold mt-1" />
                    <span>Student-run, not brand-controlled</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Briefcase className="w-5 h-5 text-reach-gold mt-1" />
                    <span>Long-term development over trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Building2 className="w-5 h-5 text-reach-gold mt-1" />
                    <span>Community building over clout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-reach-gold mt-1" />
                    <span>Treating creators like founders</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-12 bg-reach-cream/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-reach-gold/0 via-reach-gold/20 to-reach-gold/0" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Rocket className="w-6 h-6 text-reach-gold" />
                <h2 className="text-sm font-semibold text-reach-gold uppercase tracking-wider">
                  What's Next
                </h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-reach-navy mb-4">
                The Future of REACH
              </h3>
              <div className="prose prose-lg text-reach-slate mb-6">
                <p className="text-lg">
                  REACH is on track to be in 250+ campuses by the end of 2025. But even more importantly, we're laying the foundation for a future where every university recognizes creators the way they do athletes or entrepreneurs—with infrastructure, education, and support.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-none shadow-sm">
                    <h4 className="text-base font-semibold text-reach-navy mb-2">The REACH Academy</h4>
                    <p className="text-reach-slate">A self-guided creator curriculum</p>
                  </div>
                  <div className="bg-white p-4 rounded-none shadow-sm">
                    <h4 className="text-base font-semibold text-reach-navy mb-2">National Tours</h4>
                    <p className="text-reach-slate">Speaker series and brand showcases</p>
                  </div>
                  <div className="bg-white p-4 rounded-none shadow-sm">
                    <h4 className="text-base font-semibold text-reach-navy mb-2">Industry Advisory Board</h4>
                    <p className="text-reach-slate">Guiding our long-term impact</p>
                  </div>
                  <div className="bg-white p-4 rounded-none shadow-sm">
                    <h4 className="text-base font-semibold text-reach-navy mb-2">Expanded Partnerships</h4>
                    <p className="text-reach-slate">With universities, brands, and platforms</p>
                  </div>
                </div>
              </div>
              <Link
                to="/join"
                className="group relative px-6 py-2 bg-reach-gold overflow-hidden inline-flex items-center justify-center"
              >
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full" />
                <span className="relative text-reach-navy text-base font-semibold group-hover:text-reach-navy flex items-center">
                  Join the Movement
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
