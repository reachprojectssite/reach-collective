import { motion } from 'framer-motion';
import { 
  Users, 
  GraduationCap, 
  CalendarDays, 
  Heart, 
  Briefcase,
  Globe,
  BookOpen
} from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: "University Chapters",
    description: "Official student organizations where creators collaborate, share resources, and build meaningful communities—both online and IRL.",
    color: "bg-reach-navy"
  },
  {
    icon: BookOpen,
    title: "Creator Education",
    description: "Workshops and toolkits covering the business of being a creator: contracts, negotiations, monetization, analytics, branding, and more.",
    color: "bg-reach-gold"
  },
  {
    icon: CalendarDays,
    title: "Community & Events",
    description: "From national summits to campus activations and brand pop-ups, we bring creators together for unforgettable experiences and creative synergy.",
    color: "bg-reach-crimson"
  },
  {
    icon: Briefcase,
    title: "Career Growth",
    description: "Our alumni go on to work at TikTok, Meta, YouTube, agencies, and creator startups. We help build portfolios, resumes, and real industry pipelines.",
    color: "bg-reach-navy"
  },
  {
    icon: Globe,
    title: "National Opportunities",
    description: "Through REACH Nationals, members gain access to exclusive creator opportunities, brand deals, internships, and national campaigns—only available through REACH.",
    color: "bg-reach-slate"
  },
  {
    icon: Heart,
    title: "Mental Wellness",
    description: "Founded with mental health at our core, REACH prioritizes peer support, creative balance, and healthy relationships with social media.",
    color: "bg-reach-navy"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Features = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-reach-cream rounded-full opacity-20 blur-3xl" />
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-reach-gold/20 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-semibold text-reach-gold uppercase tracking-wider mb-3">
            What We Offer
          </h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-reach-navy mb-6">
            REACH is the nation's first and only student-led creator economy organization.
          </h3>
          <p className="text-xl text-reach-slate max-w-3xl mx-auto">
            We provide student influencers and marketers with the structure, support, and opportunities they need to grow their platforms and their potential on campus, online, and in their careers.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-white p-8 rounded-none border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Hover Effect Border */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-reach-navy to-reach-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-reach-gold to-reach-gold transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-reach-navy to-reach-gold transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-reach-gold to-reach-gold transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
              </div>

              {/* Icon */}
              <div className={`${feature.color} w-12 h-12 rounded-none flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h4 className="font-serif text-xl font-bold text-reach-navy mb-4 group-hover:text-reach-gold transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-reach-slate group-hover:text-reach-navy transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 