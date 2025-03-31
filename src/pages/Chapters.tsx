import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen, Calendar, Megaphone, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Chapters = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
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
            <h1 className="text-4xl md:text-6xl font-bold text-reach-navy mb-6">
              Our Chapters
            </h1>
            <p className="text-xl text-reach-slate mb-12">
              REACH chapters are vibrant communities of creators at universities across the nation. Each chapter operates as an official student organization, supported by REACH Nationals with resources, opportunities, and infrastructure.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-16"
          >
            {[
              { label: "Active Chapters", value: "75+" },
              { label: "Student Creators", value: "2,500+" },
              { label: "Social Reach", value: "350M+" },
              { label: "2025 Goal", value: "250+" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-reach-gold mb-2">{stat.value}</div>
                <div className="text-sm text-reach-slate uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chapter Structure */}
      <section className="py-24 bg-reach-cream/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold text-reach-gold uppercase tracking-wider mb-3">
              Chapter Structure
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-reach-navy mb-6">
              How Chapters Work
            </h3>
            <p className="text-xl text-reach-slate max-w-3xl mx-auto">
              Each REACH chapter follows a proven structure that combines leadership development with creator empowerment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Leadership Team",
                icon: Users,
                description: "Led by student Presidents and Executive Boards who guide chapter vision and operations."
              },
              {
                title: "Regular Events",
                icon: Calendar,
                description: "Host workshops, content creation days, brand collaborations, and social gatherings."
              },
              {
                title: "Educational Focus",
                icon: BookOpen,
                description: "Regular sessions on creator business skills, platform growth, and industry insights."
              },
              {
                title: "Brand Partnerships",
                icon: Target,
                description: "Access to exclusive brand deals and sponsored content opportunities."
              },
              {
                title: "Campus Presence",
                icon: Megaphone,
                description: "Official student organization status with university recognition and support."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-none border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <feature.icon className="w-8 h-8 text-reach-gold mb-4" />
                <h4 className="text-xl font-bold text-reach-navy mb-4">{feature.title}</h4>
                <p className="text-reach-slate">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* National Support */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold text-reach-gold uppercase tracking-wider mb-3">
              National Support
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-reach-navy mb-6">
              What Chapters Receive
            </h3>
            <p className="text-xl text-reach-slate max-w-3xl mx-auto">
              REACH Nationals provides comprehensive support to ensure chapter success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              "Branding & Templates",
              "Creator Opportunities",
              "National Slack Community",
              "Regular Newsletter",
              "Chapter Playbooks",
              "Event Support"
            ].map((support, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-none border border-gray-100 text-center group hover:border-reach-gold transition-colors"
              >
                <h4 className="text-lg font-bold text-reach-navy group-hover:text-reach-gold transition-colors">
                  {support}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-reach-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Start a Chapter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Start a Chapter</h3>
              <p className="text-white/90 mb-8">
                Want to bring REACH to your campus? We'll help you every step of the way.
              </p>
              <Link
                to="/start-chapter"
                className="group relative px-8 py-3 bg-reach-gold overflow-hidden inline-block"
              >
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full" />
                <span className="relative flex items-center justify-center text-reach-navy text-lg font-semibold group-hover:text-reach-navy">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            {/* Join Existing Chapter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Join a Chapter</h3>
              <p className="text-white/90 mb-8">
                Already have REACH on your campus? Connect with your local chapter.
              </p>
              <Link
                to="/find-chapter"
                className="group relative px-8 py-3 overflow-hidden border-2 border-white inline-block"
              >
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full" />
                <span className="relative text-white text-lg font-semibold group-hover:text-reach-navy">
                  Find Your Chapter
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chapters; 