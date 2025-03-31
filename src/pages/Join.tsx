
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Users, School, CheckCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Join = () => {
  const location = useLocation();
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to section based on hash
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received!",
      description: "We'll be in touch soon about your REACH application.",
    });
  };

  // Mock list of current REACH chapters
  const chapters = [
    { name: "University of California, Los Angeles", location: "Los Angeles, CA" },
    { name: "New York University", location: "New York, NY" },
    { name: "University of Texas at Austin", location: "Austin, TX" },
    { name: "University of Michigan", location: "Ann Arbor, MI" },
    { name: "Florida State University", location: "Tallahassee, FL" },
    { name: "Arizona State University", location: "Tempe, AZ" },
    { name: "University of Washington", location: "Seattle, WA" },
    { name: "Boston University", location: "Boston, MA" },
    { name: "Northwestern University", location: "Evanston, IL" },
    { name: "Georgetown University", location: "Washington, D.C." },
    { name: "University of Georgia", location: "Athens, GA" },
    { name: "University of Southern California", location: "Los Angeles, CA" },
  ];

  // Benefits of starting or joining a chapter
  const startBenefits = [
    "Official recognition and support from REACH Nationals",
    "Full access to REACH resources, toolkits, and network",
    "Exclusive brand partnership opportunities",
    "Leadership development and experience",
    "Direct support from REACH Nationals team",
    "Access to national summits and events",
  ];

  const joinBenefits = [
    "Connect with like-minded creators on your campus",
    "Access to workshops, events, and resources",
    "Networking with industry professionals",
    "Mentorship from experienced creators",
    "Opportunities for brand collaborations",
    "Portfolio and resume development",
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-24 bg-gradient-to-r from-reach-purple to-reach-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join REACH Nationals</h1>
            <p className="text-xl opacity-90">
              Whether you're looking to start a new chapter at your university or join an existing one, 
              REACH provides the community, resources, and opportunities to help you thrive as a creator.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#start" className="px-6 py-3 bg-white shadow-md rounded-full text-reach-blue font-semibold hover:shadow-lg transition-shadow">
              Start a Chapter
            </a>
            <a href="#existing" className="px-6 py-3 bg-white shadow-md rounded-full text-reach-purple font-semibold hover:shadow-lg transition-shadow">
              Join Existing Chapter
            </a>
            <a href="#membership" className="px-6 py-3 bg-white shadow-md rounded-full text-gray-700 font-semibold hover:shadow-lg transition-shadow">
              Membership Benefits
            </a>
          </div>
        </div>
      </section>

      {/* Start a Chapter Section */}
      <section id="start" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Start a REACH Chapter</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Ready to bring REACH to your campus? We'll help you every step of the way. From official recognition to recruitment, brand partnerships to event support, we've got you covered.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Each REACH chapter is led by a student President and Executive Board, supported by REACH Nationals with branding, infrastructure, and opportunities.
                </p>
                
                <h3 className="text-xl font-bold mb-4">Chapter Leadership Structure</h3>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="text-reach-green h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>President</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-reach-green h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Vice President</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-reach-green h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Director of Events</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-reach-green h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Director of Marketing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-reach-green h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Director of Outreach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-reach-green h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>General Membership</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold mb-4">Benefits</h3>
                <ul className="space-y-2 mb-8">
                  {startBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-reach-blue h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Apply to Start a Chapter</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-reach-blue" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-reach-blue" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">University</label>
                    <input 
                      type="text" 
                      id="university" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-reach-blue" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="graduation" className="block text-sm font-medium text-gray-700 mb-1">Expected Graduation Year</label>
                    <input 
                      type="text" 
                      id="graduation" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-reach-blue" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="social" className="block text-sm font-medium text-gray-700 mb-1">Social Media Handles (optional)</label>
                    <input 
                      type="text" 
                      id="social" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-reach-blue" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to start a REACH chapter?</label>
                    <textarea 
                      id="motivation" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-reach-blue" 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-primary">
                    Submit Application
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    We'll review your application and get back to you within 5-7 business days.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Existing Chapter Section */}
      <section id="existing" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join an Existing Chapter</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Already have a REACH chapter at your school? Jump in. Whether you're a micro-creator, content newbie, or established influencer, there's a place for you here.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Current REACH Chapters</h3>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="max-h-96 overflow-y-auto pr-4">
                    <ul className="space-y-4">
                      {chapters.map((chapter, index) => (
                        <li key={index} className="border-b border-gray-100 pb-3 last:border-0">
                          <p className="font-semibold">{chapter.name}</p>
                          <p className="text-sm text-gray-600 flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {chapter.location}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Don't see your school? <a href="#start" className="text-reach-blue hover:underline">Start a chapter</a>.
                  </p>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Benefits of Joining</h3>
                  <ul className="space-y-2">
                    {joinBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-reach-purple h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Find Your Chapter</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="find-university" className="block text-sm font-medium text-gray-700 mb-1">Search for your university</label>
                    <input 
                      type="text" 
                      id="find-university" 
                      placeholder="e.g. UCLA, NYU, etc."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-reach-blue" 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-reach-purple hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors">
                    Find Chapter
                  </Button>
                  
                  <div className="text-center mt-6">
                    <h4 className="text-lg font-bold mb-2">Contact Information</h4>
                    <p className="text-gray-600 mb-4">
                      For specific inquiries about joining a chapter, please reach out directly:
                    </p>
                    <p className="font-medium">chapters@reachnationals.org</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section id="membership" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Membership Benefits</h2>
            <p className="text-lg text-gray-700">
              REACH is more than just a college club. We're building the future of the creator economy, and our members get access to exclusive benefits, opportunities, and resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Networking</h3>
              <p className="text-gray-600 mb-4">
                Connect with creators across 75+ universities nationwide, building relationships that last beyond graduation.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="text-reach-blue h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>National community of 5,000+ student creators</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-reach-blue h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Access to alumni network in creative industries</span>
                </li>
              </ul>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Skill Development</h3>
              <p className="text-gray-600 mb-4">
                Workshops and training sessions to enhance both your creative and business skills.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="text-reach-blue h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Content creation workshops and feedback</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-reach-blue h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Business and entrepreneurship training</span>
                </li>
              </ul>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Brand Opportunities</h3>
              <p className="text-gray-600 mb-4">
                Access to exclusive brand partnerships and collaboration opportunities.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="text-reach-blue h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Paid campaigns with partner brands</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-reach-blue h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Product seeding and ambassador programs</span>
                </li>
              </ul>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Resources & Tools</h3>
              <p className="text-gray-600 mb-4">
                Access to creator tools, resources, and educational materials.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="text-reach-blue h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Contract templates and negotiation guides</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-reach-blue h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Content planning and analytics tools</span>
                </li>
              </ul>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Events & Summits</h3>
              <p className="text-gray-600 mb-4">
                Invitations to exclusive REACH events, summits, and conferences.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="text-reach-blue h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Annual REACH National Summit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-reach-blue h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regional meet-ups and chapter exchanges</span>
                </li>
              </ul>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Career Support</h3>
              <p className="text-gray-600 mb-4">
                Resume building, portfolio development, and internship opportunities.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="text-reach-blue h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Creator resume and portfolio reviews</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-reach-blue h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Priority access to industry internships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Do I need to be an established creator to join?</h3>
                <p className="text-gray-700">
                  No! REACH welcomes anyone interested in content creation and the creator economy, regardless of follower count or experience. We have members who are just starting out, as well as those with established platforms.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">What's the time commitment for REACH members?</h3>
                <p className="text-gray-700">
                  REACH chapters typically meet 1-2 times per month, with additional optional events and workshops. The time commitment is flexible and can be adjusted based on your schedule and involvement level.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Is there a membership fee?</h3>
                <p className="text-gray-700">
                  Most chapters have a small semester or annual fee to cover administrative costs and events. These fees are set by individual chapters and typically range from $20-50 per semester, with scholarship options available.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">How long does it take to start a new chapter?</h3>
                <p className="text-gray-700">
                  The process typically takes 2-3 months from application to official chapter status. This includes university approval processes, recruiting an executive board, and setting up your chapter infrastructure with REACH Nationals support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-reach-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Join the community that's shaping the future of the creator economy from college campuses nationwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#start">
              <Button className="bg-white text-reach-purple hover:bg-gray-100 text-lg">Start a Chapter</Button>
            </a>
            <a href="#existing">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg">Join Existing Chapter</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
