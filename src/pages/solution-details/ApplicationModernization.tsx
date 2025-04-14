
import React from "react";
import { Layout } from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Layers, Code, RefreshCw, Cpu, Database, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ApplicationModernization = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="bg-muted/30">
          <div className="container max-w-7xl mx-auto py-4 px-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/solutions" className="hover:text-primary">Solutions</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Application Modernization</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-primary-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="z-10">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Application Modernization
                </h1>
                <p className="text-xl text-foreground/80 mb-8 max-w-xl">
                  Transform legacy systems into modern, scalable applications using microservices and cloud-native architectures.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                    Start Your Modernization Journey
                  </Button>
                  <Button size="lg" variant="outline">
                    View Success Stories
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary-100 rounded-full mr-4">
                      <Layers className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Modernization Benefits</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Improved scalability and performance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Enhanced user experience</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Reduced technical debt</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Lower maintenance costs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modernization Approaches */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Our Modernization Approaches"
              subtitle="Tailored strategies to transform your legacy applications"
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <RefreshCw className="text-primary-600 w-8 h-8" />,
                  title: "Refactoring / Re-architecting",
                  description: "Restructure existing code to improve non-functional attributes without changing external behavior."
                },
                {
                  icon: <Layers className="text-primary-600 w-8 h-8" />,
                  title: "Microservices Migration",
                  description: "Break down monolithic applications into smaller, independently deployable services."
                },
                {
                  icon: <Code className="text-primary-600 w-8 h-8" />,
                  title: "API-First Development",
                  description: "Design APIs as first-class citizens to enable seamless integration and reusability."
                },
                {
                  icon: <Cpu className="text-primary-600 w-8 h-8" />,
                  title: "Cloud-Native Transformation",
                  description: "Rebuild applications to fully leverage cloud capabilities for scalability and resilience."
                },
                {
                  icon: <Database className="text-primary-600 w-8 h-8" />,
                  title: "Database Modernization",
                  description: "Upgrade legacy databases to modern, scalable solutions with improved performance."
                },
                {
                  icon: <RefreshCw className="text-primary-600 w-8 h-8" />,
                  title: "UI/UX Modernization",
                  description: "Transform outdated interfaces into modern, responsive, and user-friendly experiences."
                }
              ].map((approach, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 group">
                  <div className="mb-4 p-3 bg-primary-100 rounded-lg inline-block group-hover:bg-primary-200 transition-colors">
                    {approach.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{approach.title}</h3>
                  <p className="text-foreground/70 mb-4">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modernization Process */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Our Modernization Process"
              subtitle="A structured approach to transform your legacy applications"
              className="mb-16"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5">
                <div className="bg-white rounded-xl shadow p-6 sticky top-24">
                  <h3 className="text-2xl font-bold mb-4">Process Overview</h3>
                  <p className="text-foreground/70 mb-6">
                    Our modernization process is designed to minimize risk while maximizing business value. We focus on understanding your business needs, current architecture, and future goals to create a roadmap that aligns with your strategic objectives.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { title: "1. Assess", description: "Evaluate your current application landscape" },
                      { title: "2. Strategize", description: "Develop a modernization roadmap" },
                      { title: "3. Design", description: "Create the target architecture" },
                      { title: "4. Implement", description: "Execute the modernization plan" },
                      { title: "5. Optimize", description: "Continuously improve the modernized application" }
                    ].map((step, idx) => (
                      <Collapsible key={idx}>
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-primary-50 rounded-lg text-left font-medium hover:bg-primary-100 transition-colors">
                          {step.title}
                          <span className="text-primary-600">+</span>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-3">
                          <p className="text-foreground/70">{step.description}</p>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <div className="space-y-8">
                  {[
                    {
                      title: "Assessment Phase",
                      description: "We start by conducting a comprehensive assessment of your current application landscape, identifying pain points, technical debt, and opportunities for improvement. This includes analyzing the codebase, architecture, infrastructure, and business requirements.",
                      details: [
                        "Application portfolio analysis",
                        "Technical debt assessment",
                        "Architecture evaluation",
                        "Performance analysis",
                        "Security assessment"
                      ]
                    },
                    {
                      title: "Strategy Development",
                      description: "Based on the assessment, we develop a modernization strategy that aligns with your business goals and technical requirements. This includes defining the target architecture, selecting the appropriate modernization approach, and creating a roadmap with clear milestones.",
                      details: [
                        "Target architecture definition",
                        "Modernization approach selection",
                        "Roadmap development",
                        "Risk mitigation planning",
                        "Business case preparation"
                      ]
                    },
                    {
                      title: "Design & Planning",
                      description: "We design the target architecture and create detailed implementation plans. This includes designing the application architecture, data architecture, infrastructure, and integration patterns. We also define the development, testing, and deployment processes.",
                      details: [
                        "Application architecture design",
                        "Data migration planning",
                        "API design",
                        "CI/CD pipeline setup",
                        "Testing strategy development"
                      ]
                    },
                    {
                      title: "Implementation",
                      description: "We execute the modernization plan using agile methodologies, delivering value incrementally. This includes refactoring code, migrating data, implementing new features, and setting up the required infrastructure and environments.",
                      details: [
                        "Iterative implementation",
                        "Continuous integration and delivery",
                        "Automated testing",
                        "Feature implementation",
                        "Performance optimization"
                      ]
                    },
                    {
                      title: "Optimization & Support",
                      description: "After the initial implementation, we continue to optimize the modernized application and provide ongoing support. This includes performance tuning, security hardening, and implementing new features as needed.",
                      details: [
                        "Performance monitoring",
                        "Continuous improvement",
                        "Security hardening",
                        "Feature enhancement",
                        "Knowledge transfer"
                      ]
                    }
                  ].map((phase, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-primary-100 rounded-full mr-3">
                          <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                            {idx + 1}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold">{phase.title}</h3>
                      </div>
                      <p className="text-foreground/70 mb-4">{phase.description}</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Key Activities:</h4>
                        <ul className="space-y-1">
                          {phase.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <div className="p-1 bg-primary-100 rounded-full mr-2 mt-1">
                                <div className="h-1.5 w-1.5 bg-primary-600 rounded-full"></div>
                              </div>
                              <span className="text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="mt-4">Learn more about {phase.title}</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{phase.title}</DialogTitle>
                            <DialogDescription>
                              Detailed information about this phase of our modernization process
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <p>{phase.description}</p>
                            <h4 className="font-medium">Key Activities:</h4>
                            <ul className="space-y-2">
                              {phase.details.map((detail, i) => (
                                <li key={i} className="flex items-start">
                                  <div className="p-1 bg-primary-100 rounded-full mr-2 mt-1">
                                    <div className="h-1.5 w-1.5 bg-primary-600 rounded-full"></div>
                                  </div>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your Applications?</h2>
                <p className="text-white/80 mb-6 max-w-lg">
                  Let's discuss how our application modernization solutions can help your organization improve performance, reduce costs, and enhance user experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                    Schedule a Consultation
                  </Button>
                  <Link to="/solutions">
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-primary-700">
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Back to Solutions
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApplicationModernization;
