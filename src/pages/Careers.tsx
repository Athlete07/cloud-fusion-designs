
import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BriefcaseIcon, Code, GraduationCap, MapPin, Users, Building, Share2, Cpu, Cloud, Shield, Database } from "lucide-react";

const Careers = () => {
  // Current open positions
  const openPositions = [
    {
      id: 1,
      title: "AI Research Scientist",
      location: "San Francisco, CA",
      type: "Full-time",
      department: "Research & Development",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      description: "Join our R&D team to develop cutting-edge AI models that power our enterprise solutions."
    },
    {
      id: 2,
      title: "Senior Cloud Architect",
      location: "Remote",
      type: "Full-time",
      department: "Engineering",
      icon: <Cloud className="h-8 w-8 text-primary" />,
      description: "Design and implement scalable cloud infrastructure for our enterprise software solutions."
    },
    {
      id: 3,
      title: "Machine Learning Engineer",
      location: "Boston, MA",
      type: "Full-time",
      department: "AI Products",
      icon: <Code className="h-8 w-8 text-primary" />,
      description: "Build and optimize machine learning pipelines for our AI products."
    },
    {
      id: 4,
      title: "Product Manager - Enterprise Solutions",
      location: "New York, NY",
      type: "Full-time",
      department: "Product",
      icon: <BriefcaseIcon className="h-8 w-8 text-primary" />,
      description: "Define and execute product strategy for our enterprise cloud software offerings."
    },
    {
      id: 5,
      title: "DevOps Engineer",
      location: "Chicago, IL",
      type: "Full-time",
      department: "Engineering",
      icon: <Database className="h-8 w-8 text-primary" />,
      description: "Build and maintain CI/CD pipelines and cloud infrastructure for our products."
    },
    {
      id: 6,
      title: "AI Solutions Consultant",
      location: "Remote",
      type: "Full-time",
      department: "Client Services",
      icon: <Users className="h-8 w-8 text-primary" />,
      description: "Work with enterprise clients to implement our AI solutions and ensure client success."
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className="py-12 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-800/10 to-primary-900/5 rounded-2xl"></div>
          <div className="relative max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join the AI Revolution at Drehill</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're building the future of enterprise AI and cloud software. Come shape the future with us.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#open-positions">
                <Button size="lg" className="bg-primary hover:bg-primary-600">
                  View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#why-drehill">
                <Button variant="outline" size="lg">Learn About Drehill</Button>
              </a>
            </div>
          </div>
        </div>

        {/* Why Join Drehill */}
        <div id="why-drehill" className="py-16">
          <SectionHeading
            title="Why Join Drehill"
            subtitle="At Drehill Private Limited, we're not just building products - we're shaping the future of AI and enterprise software."
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-card/50 hover:bg-card/80 transition-all border border-primary/10 hover:border-primary/20">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Innovation First</CardTitle>
                <CardDescription>
                  We're at the cutting edge of AI and cloud technology, constantly pushing boundaries.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-card/50 hover:bg-card/80 transition-all border border-primary/10 hover:border-primary/20">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Collaborative Culture</CardTitle>
                <CardDescription>
                  Work alongside industry experts who are passionate about sharing knowledge.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-card/50 hover:bg-card/80 transition-all border border-primary/10 hover:border-primary/20">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Continuous Learning</CardTitle>
                <CardDescription>
                  Ongoing educational opportunities and support for professional growth.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Company Values */}
        <div className="py-16 bg-gradient-to-r from-primary-900/5 to-primary-800/10 rounded-2xl p-8 my-16">
          <SectionHeading
            title="Our Values"
            subtitle="These principles guide everything we do at Drehill - from product development to how we interact with our team members."
          />
          
          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Share2 className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we build, maintaining the highest standards of quality and innovation.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Customer Obsession</h3>
                <p className="text-muted-foreground">
                  We build our products with a deep understanding of our customers' needs and challenges.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Building className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Responsible Innovation</h3>
                <p className="text-muted-foreground">
                  We consider the broader impact of our AI technologies and enterprise solutions on society.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Diverse Perspectives</h3>
                <p className="text-muted-foreground">
                  We believe diverse teams build better products and solve more complex problems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div id="open-positions" className="py-16">
          <SectionHeading
            title="Open Positions"
            subtitle="Join our team and help shape the future of AI and enterprise cloud software."
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {openPositions.map((position) => (
              <Card key={position.id} className="hover:shadow-md transition-all">
                <CardHeader className="flex flex-row items-start space-y-0 gap-4">
                  {position.icon}
                  <div>
                    <CardTitle>{position.title}</CardTitle>
                    <CardDescription className="mt-2">
                      <div className="flex items-center text-sm gap-2 mb-1">
                        <MapPin className="h-4 w-4" /> {position.location}
                      </div>
                      <div className="flex items-center text-sm gap-2">
                        <BriefcaseIcon className="h-4 w-4" /> {position.department} • {position.type}
                      </div>
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{position.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-white">
                    Apply Now <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="py-16">
          <SectionHeading
            title="Our Application Process"
            subtitle="We've designed our hiring process to be transparent and to help us find the best talent."
          />
          
          <div className="relative mt-12">
            <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-primary/20"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-12">
                <div className="bg-primary rounded-full h-8 w-8 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">Application Review</h3>
                  <p className="text-muted-foreground max-w-xl">
                    Our team carefully reviews your application to assess your skills and experience against the role requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center mb-12">
                <div className="bg-primary rounded-full h-8 w-8 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">Initial Interview</h3>
                  <p className="text-muted-foreground max-w-xl">
                    A conversation with our hiring manager to discuss your experience and how you might fit with the team.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center mb-12">
                <div className="bg-primary rounded-full h-8 w-8 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">Technical Assessment</h3>
                  <p className="text-muted-foreground max-w-xl">
                    For technical roles, we'll ask you to complete a relevant challenge to showcase your skills.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary rounded-full h-8 w-8 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">Final Interviews & Offer</h3>
                  <p className="text-muted-foreground max-w-xl">
                    Meet with potential team members and leadership, followed by an offer if there's a great match.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-8 my-16 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See a Perfect Fit?</h2>
            <p className="text-xl mb-8 text-white/90">
              We're always looking for talented individuals to join our team. Send us your resume for future opportunities.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              Submit Your Resume
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
