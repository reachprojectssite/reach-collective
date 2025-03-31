
import React from "react";
import { Link } from "react-router-dom";
import { Users, School, BookOpen, Heart, Brain, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";

const About = () => {
  // Advisors data
  const industryAdvisors = [
    {
      name: "Jennifer Martinez",
      title: "Head of Creator Partnerships, Social Media Platform",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "David Chen",
      title: "CEO, Creator Management Agency",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Sophia Williams",
      title: "Professor of Digital Media, Major University",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Marcus Johnson",
      title: "VP of Marketing, Global Brand",
      image: "https://i.pravatar.cc/150?img=4",
    },
  ];
  
  const creatorAdvisors = [
    {
      name: "Taylor Rodriguez",
      title: "Lifestyle Creator, 2M+ Followers",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Alex Kim",
      title: "Tech Reviewer, 1.5M+ Followers",
      image: "https://i.pravatar.cc/150?img=6",
    },
    {
      name: "Jordan Smith",
      title: "Educational Content Creator, 3M+ Followers",
      image: "https://i.pravatar.cc/150?img=7",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-24 bg-gradient-to-r from-reach-blue to-reach-purple text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About REACH Nationals</h1>
            <p className="text-xl opacity-90">
              REACH Nationals is the nonprofit backbone of REACH, created to support and uplift student creators navigating the digital world while in school. With a strong focus on community, education, and mental wellness, we empower the next generation of digital leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mission</h2>
            <div className="bg-gray-50 p-8 rounded-xl text-center italic text-xl">
              "To empower student creators by building community, providing opportunity, and creating a structured support system for digital influence in higher education."
            </div>
            
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-4">Why REACH Exists</h3>
              <p className="text-lg text-gray-700 mb-6">
                REACH Nationals is the first and only collegiate influencer organization, supporting the next generation of digital creators across campuses nationwide. With a strong emphasis on community, education, and creator empowerment, REACH provides a structured space where student influencers can thrive both online and offline—without having to choose between school and social media.
              </p>
              <p className="text-lg text-gray-700">
                We believe that young creators shouldn't have to navigate the complex world of content creation alone. By providing resources, community, and structured support, we're helping shape the future of the creator economy from college campuses across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600">
              REACH provides comprehensive support for student creators through various programs and resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              title="University Chapters"
              description="Our 75+ university chapters operate as official student organizations, giving creators a space to grow together."
              icon={School}
            />
            <FeatureCard
              title="Creator Education"
              description="REACH teaches student influencers the business behind social media: contracts, monetization, analytics, negotiations, and more."
              icon={BookOpen}
            />
            <FeatureCard
              title="Community & Events"
              description="From national summits to brand activations, we bring creators together for connections, collaboration, and career development."
              icon={Users}
            />
            <FeatureCard
              title="Mentorship & Growth"
              description="Our network connects students with industry professionals, mentorship opportunities, internships, and jobs."
              icon={Brain}
            />
            <FeatureCard
              title="Mental Wellness"
              description="Mental health is at the core of our work. We prioritize community care, authenticity, and open conversation."
              icon={Heart}
            />
            <FeatureCard
              title="Analytics & Insights"
              description="Access to industry data, trends, and analytics to help creators make informed decisions about their content strategy."
              icon={BarChart}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
            <p className="text-lg text-gray-600">
              Hear what our members and partners have to say about REACH.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard
              quote="REACH has completely transformed how I approach content creation. The community and resources have been invaluable for my growth."
              name="Sarah Johnson"
              title="Fashion Creator, UCLA"
            />
            <TestimonialCard
              quote="With REACH, I found a community that understands the unique challenges of being a student creator."
              name="Michael Chen"
              title="Tech Content Creator, NYU"
            />
            <TestimonialCard
              quote="Being part of REACH opened doors to incredible opportunities and connections in the industry."
              name="Ava Williams"
              title="Lifestyle Creator, University of Texas"
            />
          </div>
        </div>
      </section>

      {/* Brand Partnerships */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Brand Partnerships</h2>
            <p className="text-lg text-gray-600">
              REACH collaborates with forward-thinking brands to create meaningful opportunities for student creators.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              Our brand partnerships focus on creating authentic, value-driven collaborations that benefit both brands and creators. We've worked with companies across industries including technology, fashion, beauty, finance, and more.
            </p>
            <p className="text-lg mb-6">
              Through these partnerships, REACH members gain access to exclusive opportunities, resources, and real-world experience working with established brands.
            </p>
            <div className="mt-8 text-center">
              <Link to="/contact">
                <Button className="btn-primary">Partner With Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Boards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advisory Boards</h2>
            <p className="text-lg text-gray-600">
              Our direction is shaped by top leaders across entertainment, education, marketing, and social media.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Industry Advisory Board</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {industryAdvisors.map((advisor, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                  <img 
                    src={advisor.image} 
                    alt={advisor.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-bold text-lg">{advisor.name}</h4>
                  <p className="text-gray-600 text-sm">{advisor.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Creator Advisory Board</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {creatorAdvisors.map((advisor, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                  <img 
                    src={advisor.image} 
                    alt={advisor.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-bold text-lg">{advisor.name}</h4>
                  <p className="text-gray-600 text-sm">{advisor.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-reach-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the REACH Community?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Whether you're a micro-creator, content newbie, or established influencer, there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button className="bg-white text-reach-blue hover:bg-gray-100 text-lg">Join REACH</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
