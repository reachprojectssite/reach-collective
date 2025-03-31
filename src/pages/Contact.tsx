import React, { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Building, Users, Briefcase, Phone, Globe, ArrowRight } from "lucide-react";

const contactOptions = [
  {
    title: "General Inquiries",
    icon: Mail,
    email: "hello@reachnationals.org",
    description: "Questions about REACH? We're here to help."
  },
  {
    title: "Chapter Support",
    icon: Users,
    email: "join@reachnationals.org",
    description: "Support for existing chapters and leadership."
  },
  {
    title: "Brand Partnerships",
    icon: Briefcase,
    email: "partnerships@reachnationals.org",
    description: "Collaborate with our creator community."
  },
  {
    title: "Press & Media",
    icon: Globe,
    email: "press@reachnationals.org",
    description: "Media inquiries and press resources."
  }
];

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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
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
            <h1 className="text-3xl md:text-6xl font-bold text-reach-navy mb-4 md:mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-reach-slate mb-8 md:mb-12">
              Have questions about REACH? Whether you're interested in joining, starting a chapter, or exploring partnerships, we're here to help you connect with our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 md:py-24 bg-reach-cream/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-sm font-semibold text-reach-gold uppercase tracking-wider mb-2 md:mb-3">
              Contact Options
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-reach-navy mb-4 md:mb-6">
              How Can We Help?
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-none border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <option.icon className="w-6 md:w-8 h-6 md:h-8 text-reach-gold mb-3 md:mb-4" />
                <h4 className="text-lg md:text-xl font-bold text-reach-navy mb-2">{option.title}</h4>
                <p className="text-sm md:text-base text-reach-slate mb-3 md:mb-4">{option.description}</p>
                <a 
                  href={`mailto:${option.email}`}
                  className="text-reach-gold hover:text-reach-navy transition-colors inline-flex items-center text-sm md:text-base break-all"
                >
                  <span className="truncate">{option.email}</span>
                  <ArrowRight className="ml-2 h-3 md:h-4 w-3 md:w-4 flex-shrink-0" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <h2 className="text-xl md:text-2xl font-bold text-reach-navy mb-4 md:mb-6">Our Details</h2>
              <p className="text-sm md:text-base text-reach-slate mb-6 md:mb-8">
                Looking to connect with REACH? We're here to help with any questions about membership, partnerships, or general inquiries.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 md:w-6 h-5 md:h-6 text-reach-gold mt-1 mr-3 md:mr-4" />
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-reach-navy">Location</h3>
                    <p className="text-sm md:text-base text-reach-slate">Los Angeles, California</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Building className="w-5 md:w-6 h-5 md:h-6 text-reach-gold mt-1 mr-3 md:mr-4" />
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-reach-navy">National Office</h3>
                    <p className="text-sm md:text-base text-reach-slate">Open Monday - Friday<br />9:00 AM - 5:00 PM PST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 md:w-6 h-5 md:h-6 text-reach-gold mt-1 mr-3 md:mr-4" />
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-reach-navy">Response Time</h3>
                    <p className="text-sm md:text-base text-reach-slate">We aim to respond within 24-48 hours during business days.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm md:text-base font-medium text-reach-navy mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 focus:border-reach-gold focus:ring-1 focus:ring-reach-gold outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm md:text-base font-medium text-reach-navy mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 focus:border-reach-gold focus:ring-1 focus:ring-reach-gold outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm md:text-base font-medium text-reach-navy mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 focus:border-reach-gold focus:ring-1 focus:ring-reach-gold outline-none transition-colors"
                  >
                    <option>General Inquiry</option>
                    <option>Chapter Support</option>
                    <option>Brand Partnership</option>
                    <option>Press & Media</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm md:text-base font-medium text-reach-navy mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 focus:border-reach-gold focus:ring-1 focus:ring-reach-gold outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-6 py-3 bg-reach-gold text-reach-navy font-semibold hover:bg-white hover:text-reach-navy border-2 border-reach-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
