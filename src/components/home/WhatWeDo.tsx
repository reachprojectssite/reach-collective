import { motion } from 'framer-motion';

const WhatWeDo = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const offerings = [
    {
      icon: "🏛",
      title: "University Chapters",
      description: "Join official student organizations where creators collaborate and build meaningful communities."
    },
    {
      icon: "🎓",
      title: "Creator Education",
      description: "Learn the business of being a creator through expert-led workshops and comprehensive toolkits."
    },
    {
      icon: "🤝",
      title: "Community & Events",
      description: "Connect at national summits, campus activations, and brand pop-ups for unforgettable experiences."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-reach-navy mb-6"
          >
            What We Offer
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-reach-navy/80 font-light max-w-3xl mx-auto"
          >
            REACH is the nation's first and only student-led creator economy organization, providing the structure and support you need to thrive.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto"
        >
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-reach-navy/5 hover:shadow-xl hover:shadow-reach-navy/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl sm:text-5xl mb-4">{offering.icon}</div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-reach-navy mb-3">
                {offering.title}
              </h3>
              <p className="text-reach-navy/70 leading-relaxed">
                {offering.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo; 