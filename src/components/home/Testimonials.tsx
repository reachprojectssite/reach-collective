import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Founding and leading a chapter of REACH has been monumental for my growth as a leader. It has prepared me to build systems and delegate... a great skill that will help me within my own social media business career!",
    name: "Justin Leusner",
    title: "Chapter Founder, Penn State University"
  },
  {
    quote: "REACH gave me the platform and support to take my passion seriously. Through hosting events, managing a team, and connecting with other creatives, I've grown more than I ever expected.",
    name: "Nila Makhfi",
    title: "USC Chapter President"
  },
  {
    quote: "REACH helped me realize that content creation can be a real career path. Through the workshops and campaigns, I've learned how to pitch myself, work with brands, and grow my platform in a smart way.",
    name: "Jayme Aiden",
    title: "Alum, UCLA"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-reach-cream rounded-full opacity-20 blur-3xl" />
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-reach-gold/20 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-semibold text-reach-gold uppercase tracking-wider mb-3">
            Testimonials
          </h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-reach-navy mb-6">
            Hear From Our Community
          </h3>
          <p className="text-xl text-reach-slate max-w-3xl mx-auto">
            Our members are building the future of digital influence while developing lifelong skills and connections.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-none border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Hover Effect Border */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-reach-navy to-reach-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-reach-gold to-reach-gold transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-reach-navy to-reach-gold transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-reach-gold to-reach-gold transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
              </div>

              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-reach-gold mb-6" />

              {/* Quote */}
              <blockquote className="text-lg text-reach-navy mb-6">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <div>
                <cite className="not-italic font-semibold text-reach-navy block">
                  {testimonial.name}
                </cite>
                <span className="text-reach-slate text-sm">
                  {testimonial.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 