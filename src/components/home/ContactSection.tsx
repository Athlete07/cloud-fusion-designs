
import React, { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { toast } from "sonner";
import { CheckCircle, Calendar, Mail, Phone, MapPin, ArrowRight, Users, Briefcase, DollarSign } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    interest: "investor"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your message has been sent! Our investor relations team will contact you shortly.", {
        icon: <CheckCircle className="h-4 w-4" />
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        interest: "investor"
      });
    }, 1500);
  };

  return (
    <section className="py-24 bg-background" id="contact">
      <div className="section-container">
        <SectionHeading
          title="Investor Relations"
          subtitle="Connect with our team to learn more about investment opportunities and how our AI solutions are revolutionizing enterprise operations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Your Organization"
                />
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium mb-1">
                  What are you interested in?
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                >
                  <option value="investor">Investment Opportunities</option>
                  <option value="partner">Strategic Partnership</option>
                  <option value="demo">Product Demo</option>
                  <option value="pricing">Enterprise Solutions</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-white rounded-md shadow-sm button-hover flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                )}
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-6">Investor Relations</h3>
              
              <div className="space-y-6 flex-grow">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mr-4">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Investor Relations</p>
                    <a href="mailto:investors@fusionai.com" className="font-medium hover:text-primary transition-colors">
                      investors@fusionai.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Investor Hotline</p>
                    <a href="tel:+1234567890" className="font-medium hover:text-primary transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Headquarters</p>
                    <address className="not-italic font-medium">
                      100 Innovation Way<br />
                      Tech Park, CA 94103
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-medium mb-4">Upcoming Investor Events</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium">Q3 Earnings Call</p>
                      <p className="text-sm text-muted-foreground">September 15, 2023 • 2:00 PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium">Annual Investor Day</p>
                      <p className="text-sm text-muted-foreground">October 7, 2023 • New York City</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
              <h4 className="font-semibold text-lg mb-3">Investor Resources</h4>
              <div className="space-y-3">
                <a
                  href="#financial-reports"
                  className="flex items-center text-primary font-medium hover:underline"
                >
                  <DollarSign className="h-4 w-4 mr-2" />
                  Financial Reports
                </a>
                <a
                  href="#investor-deck"
                  className="flex items-center text-primary font-medium hover:underline"
                >
                  <Briefcase className="h-4 w-4 mr-2" />
                  Investor Presentation
                </a>
                <a
                  href="#press-releases"
                  className="flex items-center text-primary font-medium hover:underline"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Press Releases
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
