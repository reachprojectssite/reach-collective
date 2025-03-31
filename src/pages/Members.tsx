import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, BookOpen, Sparkles, Compass, Heart, BarChart, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import membersPhoto from "../assets/images/members-group-photo.jpg";

const offerings = [
  {
    title: "University Chapters",
    icon: GraduationCap,
    items: [
      "Recognized student orgs at 75+ universities",
      "Led by student Presidents and Executive Boards",
      "Host regular workshops, brand collabs, and social gatherings",
      "Unified branding and national-level support"
    ]
  },
  {
    title: "Creator Education",
    icon: BookOpen,
    items: [
      "Sessions and toolkits on the business of being a creator",
      "Contracts, brand deals, monetization, analytics, and more",
      "Peer-to-peer learning and alumni speaker events"
    ]
  },
  {
    title: "Community & Events",
    icon: Sparkles,
    items: [
      "National summits, campus tours, and brand activations",
      "Opportunities to meet and collaborate with other creators",
      "Featured at VidCon, CES, SXSW, and more"
    ]
  },
  {
    title: "Mentorship & Career Growth",
    icon: Compass,
    items: [
      "Connections to industry professionals and recruiters",
      "Support with resumes, pitch decks, and creator portfolios",
      "Alumni have gone on to work at Meta, TikTok, YouTube, and major agencies"
    ]
  },
  {
    title: "Mental Wellness Focus",
    icon: Heart,
    items: [
      "REACH was built on the belief that mental health matters",
      "Promotes open dialogue about burnout, identity, and pressure",
      "Safe spaces for creators to share experiences and support one another"
    ]
  }
];

const stats = [
  { name: 'Universities', value: '75+' },
  { name: 'Student Creators', value: '2,500+' },
  { name: 'Social Reach', value: '350M+' },
  { name: '2025 Goal', value: '250+' }
];

const chapterRoles = [
  "President",
  "Vice President",
  "Director of Events",
  "Director of Marketing",
  "Director of Outreach",
  "General Membership"
];

const nationalSupport = [
  "Branding & Templates",
  "Creator and Career Opportunities",
  "National Slack, Newsletter & Playbooks"
];

const Members = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-reach-cream rounded-full opacity-20 blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-reach-gold/20 rounded-full opacity-20 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-reach-navy mb-4">
              Our Members
            </h1>
            <p className="text-xl md:text-2xl text-reach-slate mb-4">
              More than influencers. More than students.
              <span className="text-reach-gold font-semibold"> The heart of REACH.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-reach-cream/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
            >
              <div className="prose prose-lg order-2 md:order-1">
                <p className="text-xl text-reach-slate leading-relaxed">
                  They're not just students. They're storytellers, strategists, editors, designers, founders, and visionaries.
                </p>
                <p className="text-lg text-reach-slate mt-4">
                  Our members are the ones filming between classes, planning shoots after lectures, and pitching brands from their dorm rooms. They run group chats, build mini-production studios in student housing, and hit "post" with purpose.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg order-1 md:order-2">
                <img 
                  src={membersPhoto} 
                  alt="REACH members collaborating and creating content together on campus" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 px-4 md:px-0"
            >
              <p className="text-lg md:text-xl text-reach-slate mb-4">
                Some are just starting. Some have millions of followers.
              </p>
              <p className="text-lg md:text-xl font-semibold text-reach-gold">
                But every single one of them is building something bigger than a brand—they're building a future in the creator economy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16"
            >
              <div className="bg-white p-4 md:p-6 shadow-sm">
                <Users className="w-6 md:w-8 h-6 md:h-8 text-reach-gold mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-reach-navy mb-2 md:mb-3">Community First</h3>
                <p className="text-sm md:text-base text-reach-slate">A place to grow with others who speak the same creative language.</p>
              </div>
              <div className="bg-white p-4 md:p-6 shadow-sm">
                <Star className="w-6 md:w-8 h-6 md:h-8 text-reach-gold mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-reach-navy mb-2 md:mb-3">Cross-Campus Collaboration</h3>
                <p className="text-sm md:text-base text-reach-slate">Work with creators across schools, time zones, and content genres.</p>
              </div>
              <div className="bg-white p-4 md:p-6 shadow-sm">
                <Heart className="w-6 md:w-8 h-6 md:h-8 text-reach-gold mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-reach-navy mb-2 md:mb-3">Mutual Support</h3>
                <p className="text-sm md:text-base text-reach-slate">Share feedback, resources, and opportunities within the community.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none px-4 md:px-0"
            >
              <p className="text-lg md:text-xl text-reach-slate mb-6 md:mb-8">
                At the core of REACH Nationals isn't just a network. It's a collective of individuals who are redefining what it means to be a student in the creator economy.
              </p>
              <p className="text-base md:text-lg text-reach-slate mb-6 md:mb-8">
                Our members are Gen Z creators who live at the intersection of ambition and authenticity. They're building brands between classes, pitching campaigns from coffee shops, and editing videos at 2AM—not for likes, but for legacy.
              </p>
              <div className="text-center my-8 md:my-12">
                <p className="text-xl md:text-2xl font-semibold text-reach-navy mb-3 md:mb-4">
                  Being a REACH member means you're never creating alone.
                </p>
                <p className="text-lg md:text-xl text-reach-slate">
                  It means you're part of something bigger than your own platform—a national community of creators who care, who collaborate, and who are collectively raising the bar for what student creators can do.
                </p>
              </div>
              <div className="bg-reach-cream/10 p-6 md:p-8 text-center">
                <p className="text-lg md:text-xl font-semibold text-reach-navy mb-2">This is where confidence is built.</p>
                <p className="text-lg md:text-xl font-semibold text-reach-navy mb-2">This is where creators become leaders.</p>
                <p className="text-lg md:text-xl font-semibold text-reach-navy mb-3 md:mb-4">This is where influence meets purpose.</p>
                <p className="text-xl md:text-2xl font-bold text-reach-gold">This is REACH.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl font-semibold text-reach-navy mb-6">
                REACH members don't wait for opportunity.
                <br />
                They create it. Together.
              </p>
              <a
                href="/join"
                className="group relative px-8 py-3 bg-reach-gold overflow-hidden inline-flex items-center justify-center"
              >
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full" />
                <span className="relative text-reach-navy text-lg font-semibold group-hover:text-reach-navy flex items-center">
                  Join REACH
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members; 