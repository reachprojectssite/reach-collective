import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const headlineVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, staggerChildren: 0.2 }
  };

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          src="/images/hero/thisphoto.jpg"
          alt="REACH community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-reach-navy/60 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={headlineVariants}
            className="space-y-12 sm:space-y-16 mb-16 sm:mb-20"
          >
            <motion.div 
              className="overflow-hidden"
              variants={fadeInUp}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl font-light text-reach-gold tracking-[0.2em] uppercase"
                whileHover={{ scale: 1.02 }}
              >
                Welcome to REACH
              </motion.h2>
            </motion.div>

            <motion.div className="space-y-6 sm:space-y-8">
              <motion.div 
                className="overflow-hidden"
                variants={fadeInUp}
              >
                <motion.div
                  className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white leading-tight tracking-tight"
                  whileHover={{ scale: 1.02 }}
                >
                  Fostering the Next Generation
                </motion.div>
              </motion.div>

              <motion.div 
                className="overflow-hidden"
                variants={fadeInUp}
              >
                <motion.div
                  className="text-4xl sm:text-6xl md:text-7xl font-display font-black bg-gradient-to-r from-reach-gold via-white to-reach-gold bg-clip-text text-transparent leading-tight tracking-tight"
                  whileHover={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: ["0% 0%", "100% 0%"],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                >
                  of Digital Entrepreneurs
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-16 sm:mb-20"
          >
            Join a nationwide network of collegiate creatives shaping the future of digital influence while building lifelong connections.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-row items-center justify-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/join"
                className="px-8 sm:px-10 py-4 sm:py-5 bg-reach-gold text-white font-medium rounded-lg hover:bg-reach-gold/90 transition-colors duration-200 text-base sm:text-lg"
              >
                Join REACH
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/about"
                className="px-8 sm:px-10 py-4 sm:py-5 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors duration-200 text-base sm:text-lg"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 bg-black/30 mt-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center">
            <div className="flex flex-col items-center justify-center py-4 sm:py-6">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">100+</span>
              <span className="text-sm sm:text-base text-white/80">Active Chapters</span>
            </div>
            <div className="flex flex-col items-center justify-center py-4 sm:py-6">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">5,000+</span>
              <span className="text-sm sm:text-base text-white/80">Active Members</span>
            </div>
            <div className="flex flex-col items-center justify-center py-4 sm:py-6">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">500M+</span>
              <span className="text-sm sm:text-base text-white/80">Total Reach</span>
            </div>
            <div className="flex flex-col items-center justify-center py-4 sm:py-6">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">250+</span>
              <span className="text-sm sm:text-base text-white/80">National Workshops</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 