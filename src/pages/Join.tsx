import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Users, School, CheckCircle, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const membershipTypes = [
  {
    name: 'Join Existing Chapter',
    description: 'Connect with REACH at your university',
    features: [
      'Access to local chapter events and workshops',
      'Network with fellow creators on campus',
      'Participate in brand collaborations',
      'Mentorship opportunities',
      'Access to national resources',
    ],
  },
  {
    name: 'Start a Chapter',
    description: 'Bring REACH to your campus',
    features: [
      'Full support in chapter establishment',
      'Leadership development training',
      'National organization resources',
      'Brand partnership opportunities',
      'Networking with other chapter leaders',
    ],
  },
];

const Join = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    socialLinks: '',
    membershipType: '',
    message: '',
  });
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Join REACH</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you're looking to join an existing chapter or start one at your university, we're here to support your journey in the creator economy.
            </p>
          </div>
        </div>
      </div>

      {/* Membership options */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Membership Options</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose Your Path
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {membershipTypes.map((type) => (
            <div
              key={type.name}
              className="flex flex-col rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900">{type.name}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">{type.description}</p>
              </div>
              <ul role="list" className="mb-8 space-y-3 text-sm leading-6 text-gray-600">
                {type.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Application form */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Apply to Join</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Fill out the form below and we'll get back to you with next steps.
          </p>

          <form onSubmit={handleSubmit} className="mt-16 space-y-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <div>
                <label htmlFor="university" className="block text-sm font-semibold leading-6 text-gray-900">
                  University
                </label>
                <input
                  type="text"
                  name="university"
                  id="university"
                  value={formData.university}
                  onChange={handleChange}
                  className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <div>
                <label htmlFor="socialLinks" className="block text-sm font-semibold leading-6 text-gray-900">
                  Social Media Links
                </label>
                <input
                  type="text"
                  name="socialLinks"
                  id="socialLinks"
                  value={formData.socialLinks}
                  onChange={handleChange}
                  className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="membershipType" className="block text-sm font-semibold leading-6 text-gray-900">
                  I want to
                </label>
                <select
                  name="membershipType"
                  id="membershipType"
                  value={formData.membershipType}
                  onChange={handleChange}
                  className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="join">Join an existing chapter</option>
                  <option value="start">Start a new chapter</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Tell us about yourself
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
