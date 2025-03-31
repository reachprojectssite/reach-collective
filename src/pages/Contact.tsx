
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Users, Building, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Success toast
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "General Inquiry",
      message: "",
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-24 bg-gradient-to-r from-reach-blue to-reach-teal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Have questions, ideas, or feedback? We'd love to hear from you! 
              Reach out to the REACH Nationals team using the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Whether you have questions about starting a chapter, joining REACH, or exploring partnership opportunities, 
                  we're here to help. Fill out the form, and our team will get back to you as soon as possible.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-reach-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="text-gray-600">info@reachnationals.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-reach-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Response Time</h3>
                      <p className="text-gray-600">We typically respond within 24-48 hours during business days.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-reach-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Headquarters</h3>
                      <p className="text-gray-600">New York, NY</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-reach-blue hover:text-white transition-colors"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-reach-blue hover:text-white transition-colors"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-reach-blue hover:text-white transition-colors"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-reach-blue" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-reach-blue" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-reach-blue" 
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Starting a Chapter">Starting a Chapter</option>
                      <option value="Joining a Chapter">Joining a Chapter</option>
                      <option value="Brand Partnership">Brand Partnership</option>
                      <option value="Press/Media">Press/Media</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-reach-blue" 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-primary">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Department Contacts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-12 w-12 bg-reach-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-reach-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Chapter Relations</h3>
                <p className="text-gray-600 mb-4">For inquiries about starting or managing a chapter.</p>
                <p className="font-medium">chapters@reachnationals.org</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-12 w-12 bg-reach-purple/10 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-reach-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Partnerships</h3>
                <p className="text-gray-600 mb-4">For brand and corporate partnership opportunities.</p>
                <p className="font-medium">partnerships@reachnationals.org</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-12 w-12 bg-reach-teal/10 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-reach-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2">Careers & Opportunities</h3>
                <p className="text-gray-600 mb-4">For information about jobs, internships, and volunteering.</p>
                <p className="font-medium">careers@reachnationals.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">How quickly will I receive a response?</h3>
                <p className="text-gray-700">
                  We typically respond to inquiries within 24-48 hours during business days.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">I'm interested in partnering with REACH. Who should I contact?</h3>
                <p className="text-gray-700">
                  For brand and partnership inquiries, please email partnerships@reachnationals.org or select "Brand Partnership" in the contact form subject line.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Does REACH offer speaking opportunities?</h3>
                <p className="text-gray-700">
                  Yes! We're always looking for industry professionals to speak at our events and workshops. Please reach out with details about your expertise and speaking experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Location Section (Placeholder) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Reach</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            With chapters at 75+ universities nationwide, REACH Nationals is building the future of the creator economy from college campuses across the country.
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto h-96 flex items-center justify-center">
            <p className="text-xl font-medium text-gray-500">
              Interactive Map of REACH Chapters Coming Soon
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
