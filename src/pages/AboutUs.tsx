
import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { BookOpen, Award, Code, Users, Cpu, Building, Milestone } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";

const AboutUs = () => {
  useEffect(() => {
    // Initialize animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe scroll reveal elements
    document.querySelectorAll(".scroll-reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll(".scroll-reveal").forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Company story milestones
  const milestones = [
    {
      year: "2023",
      title: "Foundation",
      description: "FusionAI was established by a team of AI researchers and industry experts committed to making advanced AI accessible."
    },
    {
      year: "2023",
      title: "First Product Launch",
      description: "Launched our flagship AI analytics platform, helping companies transform raw data into actionable insights."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Opened offices in Europe and Asia to serve our growing international client base and foster global innovation."
    },
    {
      year: "2024",
      title: "Technical Breakthrough",
      description: "Pioneered new algorithms in natural language processing and neural network optimization."
    },
    {
      year: "2025",
      title: "Enterprise Solutions",
      description: "Launched our comprehensive suite of enterprise AI solutions designed for seamless integration and scalability."
    }
  ];

  // Team members
  const teamMembers = [
    {
      name: "Dr. Alexandra Chen",
      role: "Founder & CEO",
      bio: "Ph.D. in Machine Learning with 15+ years of experience leading AI initiatives at major tech companies."
    },
    {
      name: "Michael Rahman",
      role: "CTO",
      bio: "Former research scientist specialized in neural networks and distributed computing architectures."
    },
    {
      name: "Sarah Nakamura",
      role: "VP of Engineering",
      bio: "Systems architect who has built scalable solutions for Fortune 500 companies."
    },
    {
      name: "David Okonkwo",
      role: "Head of Research",
      bio: "Leading our AI research team with a focus on explainable AI and ethical algorithms."
    },
    {
      name: "Li Wei",
      role: "VP of Product",
      bio: "Product visionary with expertise in creating user-centric AI applications."
    },
    {
      name: "Sophia Rodriguez",
      role: "Director of Operations",
      bio: "Operational strategist ensuring our AI solutions are deployed efficiently and effectively."
    }
  ];

  // Tech stack
  const techStack = [
    { name: "Python", category: "Core Language" },
    { name: "TensorFlow", category: "ML Framework" },
    { name: "PyTorch", category: "ML Framework" },
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "Containerization" },
    { name: "Kubernetes", category: "Orchestration" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-100 via-primary-50 to-background py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="scroll-reveal fade-in-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-600">
                  Our Story
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
                  At FusionAI, we're on a mission to democratize artificial intelligence and make cutting-edge technology accessible to businesses of all sizes.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white">
                      <Users className="h-6 w-6" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Team Size</p>
                      <p className="text-foreground/70">50+ experts</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white">
                      <Building className="h-6 w-6" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Locations</p>
                      <p className="text-foreground/70">Global presence</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative scroll-reveal fade-in-right">
                <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-primary-200 bg-white relative glassmorphism">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Cpu className="h-10 w-10 text-primary-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Pushing Boundaries</h3>
                      <p className="text-foreground/70">
                        Since 2023, we've been at the forefront of AI innovation, creating solutions that transform how businesses operate.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-primary-200 rounded-full opacity-50 blur-2xl"></div>
                <div className="absolute -top-5 -left-5 w-24 h-24 bg-primary-300 rounded-full opacity-30 blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Our Journey"
              subtitle="From startup to industry innovator - the milestones that have defined our path in AI excellence"
            />
            
            <div className="mt-16 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
              
              <div className="space-y-20">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`scroll-reveal fade-in-${index % 2 === 0 ? 'right' : 'left'} relative z-10 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                  >
                    <div className={`w-full md:w-1/2 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-md border border-primary-100 hover:border-primary-300 transition-all duration-300 hover:-translate-y-1">
                        <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-600 font-medium text-sm mb-4">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                        <p className="text-foreground/70">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary-400 z-20 flex items-center justify-center">
                      <Milestone className="h-5 w-5 text-primary-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 md:py-24 bg-accent">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Meet Our Team"
              subtitle="The brilliant minds behind FusionAI's innovative solutions and technical excellence"
            />
            
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="scroll-reveal fade-in-up bg-white rounded-xl p-6 shadow-sm border border-primary-100 hover:shadow-md hover:border-primary-300 transition-all duration-300"
                >
                  <div className="w-20 h-20 mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                  <p className="text-foreground/70">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Our Core Values"
              subtitle="The principles that guide our work and define our company culture"
            />
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="scroll-reveal fade-in-left flex flex-col h-full bg-primary-50 rounded-xl p-8 border border-primary-100">
                <Award className="h-12 w-12 text-primary-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Technical Excellence</h3>
                <p className="text-foreground/70 mb-6">
                  We're committed to pushing the boundaries of what's possible with AI. Our team stays at the cutting edge of technology, constantly learning and evolving our approaches to deliver the most advanced solutions.
                </p>
                <div className="mt-auto">
                  <div className="flex items-center">
                    <div className="w-10 h-1 bg-primary-500 mr-3"></div>
                    <span className="text-primary-600 font-medium">Innovation-driven</span>
                  </div>
                </div>
              </div>
              
              <div className="scroll-reveal fade-in-right flex flex-col h-full bg-primary-50 rounded-xl p-8 border border-primary-100">
                <Code className="h-12 w-12 text-primary-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Ethical AI Development</h3>
                <p className="text-foreground/70 mb-6">
                  We believe that AI should be developed responsibly. All our solutions are built with a strong focus on fairness, transparency, and privacy, ensuring that technology advances humanity in positive ways.
                </p>
                <div className="mt-auto">
                  <div className="flex items-center">
                    <div className="w-10 h-1 bg-primary-500 mr-3"></div>
                    <span className="text-primary-600 font-medium">Human-centered</span>
                  </div>
                </div>
              </div>
              
              <div className="scroll-reveal fade-in-left flex flex-col h-full bg-primary-50 rounded-xl p-8 border border-primary-100">
                <BookOpen className="h-12 w-12 text-primary-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Continuous Learning</h3>
                <p className="text-foreground/70 mb-6">
                  In the fast-evolving field of AI, standing still means falling behind. We foster a culture of continuous learning, experimentation, and knowledge sharing that keeps us at the forefront of innovation.
                </p>
                <div className="mt-auto">
                  <div className="flex items-center">
                    <div className="w-10 h-1 bg-primary-500 mr-3"></div>
                    <span className="text-primary-600 font-medium">Growth mindset</span>
                  </div>
                </div>
              </div>
              
              <div className="scroll-reveal fade-in-right flex flex-col h-full bg-primary-50 rounded-xl p-8 border border-primary-100">
                <Users className="h-12 w-12 text-primary-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Collaborative Spirit</h3>
                <p className="text-foreground/70 mb-6">
                  We believe the best solutions emerge when diverse perspectives come together. Our team thrives on collaboration, both internally and with our clients, creating partnerships that drive mutual success.
                </p>
                <div className="mt-auto">
                  <div className="flex items-center">
                    <div className="w-10 h-1 bg-primary-500 mr-3"></div>
                    <span className="text-primary-600 font-medium">Team-oriented</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Technology */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                We use cutting-edge technologies to build solutions that are powerful, scalable, and future-proof
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="scroll-reveal fade-in-up bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20 hover:bg-white/20 transition-all"
                >
                  <h3 className="font-semibold text-lg mb-1">{tech.name}</h3>
                  <p className="text-white/60 text-sm">{tech.category}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-white/80 mb-6">
                Our technology choices are guided by performance, reliability, and innovation, ensuring we deliver solutions that exceed expectations.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-full font-medium hover:bg-primary-50 transition-all"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
