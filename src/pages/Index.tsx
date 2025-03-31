
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Newspaper, Users, School, Globe, BookOpen, Heart, Twitter, Lightbulb, MessageSquare, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import NewsletterPopup from "@/components/NewsletterPopup";
import StatCounter from "@/components/StatCounter";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Add animation classes when elements come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Features data
  const features = [
    {
      title: "University Chapters",
      description: "Join one of our 75+ university chapters operating as official student organizations, giving creators a space to grow together.",
      icon: School,
    },
    {
      title: "Creator Education",
      description: "Learn the business behind social media: contracts, monetization, analytics, negotiations, and entrepreneurial skills.",
      icon: BookOpen,
    },
    {
      title: "Community & Events",
      description: "Experience national summits, brand activations, and opportunities to collaborate with fellow creators.",
      icon: Users,
    },
    {
      title: "Mentorship & Careers",
      description: "Connect with industry professionals, access internships, and develop your career in the creator economy.",
      icon: Lightbulb,
    },
    {
      title: "Mental Wellness",
      description: "Prioritize mental health with supportive programs designed specifically for creators navigating online pressures.",
      icon: Heart,
    },
    {
      title: "Brand Partnerships",
      description: "Access exclusive brand collaboration opportunities through our extensive industry network.",
      icon: Award,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "REACH has completely transformed how I approach content creation. The community and resources have been invaluable for my growth as a creator while balancing college life.",
      name: "Sarah Johnson",
      title: "Fashion Creator, UCLA",
    },
    {
      quote: "With REACH, I found a community that understands the unique challenges of being a student creator. The mentorship I've received has helped me land brand deals I never thought possible.",
      name: "Michael Chen",
      title: "Tech Content Creator, NYU",
    },
    {
      quote: "Being part of REACH opened doors to incredible opportunities and connections. I've learned more about the business side of content creation than I ever could have on my own.",
      name: "Ava Williams",
      title: "Lifestyle Creator, University of Texas",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 hero-gradient text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to REACH Nationals
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              The first and only collegiate influencer organization. We're building the future of the creator economy from college campuses across the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join">
                <Button className="btn-primary text-lg w-full sm:w-auto">Join REACH</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white text-lg w-full sm:w-auto">Learn More</Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="stat-card">
              <p className="text-reach-blue text-4xl md:text-5xl font-bold mb-2">
                <StatCounter end={5000} suffix="+" />
              </p>
              <p className="text-gray-600">Members</p>
            </div>
            <div className="stat-card">
              <p className="text-reach-purple text-4xl md:text-5xl font-bold mb-2">
                <StatCounter end={100} suffix="+" />
              </p>
              <p className="text-gray-600">Universities</p>
            </div>
            <div className="stat-card">
              <p className="text-reach-pink text-4xl md:text-5xl font-bold mb-2">
                <StatCounter end={200} suffix="M+" />
              </p>
              <p className="text-gray-600">Followers</p>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 transform -skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 transform skew-x-12"></div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Shaping the Future of Content Creation
            </h2>
            <p className="text-lg text-gray-600">
              REACH Nationals is the nonprofit backbone of REACH, created to support and uplift student creators navigating the digital world while in school. With a strong focus on community, education, and mental wellness, we empower the next generation of digital leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-on-scroll opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-reach-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the REACH Community?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Whether you're a micro-creator, content newbie, or established influencer, there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join#start">
              <Button className="bg-white text-reach-blue hover:bg-gray-100 text-lg">Start a Chapter</Button>
            </Link>
            <Link to="/join#existing">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg">Join Existing Chapter</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Members Say</h2>
            <p className="text-lg text-gray-600">
              Hear from the students who are shaping the future of digital content creation with REACH.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-on-scroll opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">As Seen In</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <p className="text-xl font-bold">The Information</p>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <p className="text-xl font-bold">Good Morning America</p>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <p className="text-xl font-bold">Hollywood Reporter</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-reach-purple text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
            <p className="text-xl opacity-90 mb-8">
              Join our newsletter to receive updates on events, opportunities, and creator economy insights.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none text-gray-900"
                required
              />
              <Button className="bg-white text-reach-purple hover:bg-gray-100 px-6">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter Popup */}
      <NewsletterPopup />
    </>
  );
};

export default Index;
