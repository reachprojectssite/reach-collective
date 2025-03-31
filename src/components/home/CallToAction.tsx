import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Target } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/group-photo.jpg"
          alt="REACH community members in red shirts"
          className="w-full h-full object-cover object-center"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-br from-reach-navy/90 via-reach-navy/85 to-reach-gold/70"
        />
        {/* Decorative Pattern */}
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
      </div>

      {/* Content */}
      <div className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Commit to
              <span className="block italic mt-2 bg-gradient-to-r from-reach-gold via-white to-reach-gold bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join a nationwide network of collegiate creatives who are shaping the future of digital influence. Together, we're building a community that values innovation, leadership, and authentic storytelling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Link
              to="/join"
              className="group relative px-8 py-3 bg-reach-gold overflow-hidden"
            >
              <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full" />
              <span className="relative flex items-center justify-center text-reach-navy text-lg font-semibold group-hover:text-reach-navy">
                Begin Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white/90"
          >
            {[
              { title: "Purpose", subtitle: "Lead with Vision", icon: Target },
              { title: "Community", subtitle: "Build Together", icon: Users },
              { title: "Impact", subtitle: "Create Change", icon: Star }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group bg-white/5 backdrop-blur-sm p-6 rounded-lg"
              >
                <item.icon className="w-8 h-8 text-reach-gold mx-auto mb-4" />
                <div className="text-2xl font-serif font-bold mb-2">{item.title}</div>
                <div className="text-sm uppercase tracking-wider text-reach-gold group-hover:text-white transition-colors">
                  {item.subtitle}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction; 