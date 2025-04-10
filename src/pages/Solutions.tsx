
import React from "react";
import { Layout } from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  Layers, 
  Network, 
  BarChart, 
  Terminal, 
  BrainCircuit,
  Workflow,
  Lock,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-b from-primary-100 to-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="z-10">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  End-to-End Solutions & Technology
                </h1>
                <p className="text-xl text-foreground/80 mb-8 max-w-xl">
                  Comprehensive enterprise solutions powered by cutting-edge technology to transform your business operations and drive innovation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline">
                    Book a Demo
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block z-10">
                <div className="absolute inset-0 bg-primary-300/20 rounded-3xl animate-morph"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-primary-200">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: <BrainCircuit className="text-primary-600" />, text: "AI & Machine Learning" },
                      { icon: <Cloud className="text-primary-600" />, text: "Cloud Solutions" },
                      { icon: <Database className="text-primary-600" />, text: "Data Integration" },
                      { icon: <Code className="text-primary-600" />, text: "Custom Development" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center p-3 rounded-lg hover:bg-primary-100 transition-colors">
                        <div className="mr-3 p-2 bg-primary-100 rounded-lg">
                          {item.icon}
                        </div>
                        <p className="font-medium">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-1/3 h-64 bg-primary-200/20 rounded-tl-full"></div>
        </div>

        {/* Solutions Categories */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Our Technology Solutions"
              subtitle="We deliver comprehensive solutions across the entire technology stack, from infrastructure to application development and intelligence."
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cloud className="text-primary-600 w-8 h-8" />,
                  title: "Cloud Infrastructure",
                  description: "Scalable and reliable cloud infrastructure designed for enterprise needs with high availability and performance."
                },
                {
                  icon: <Layers className="text-primary-600 w-8 h-8" />,
                  title: "Application Modernization",
                  description: "Transform legacy systems into modern, scalable applications using microservices and cloud-native architectures."
                },
                {
                  icon: <Database className="text-primary-600 w-8 h-8" />,
                  title: "Data Management",
                  description: "End-to-end data solutions from warehousing to analytics and business intelligence for data-driven decisions."
                },
                {
                  icon: <BrainCircuit className="text-primary-600 w-8 h-8" />,
                  title: "AI & Machine Learning",
                  description: "Harness the power of AI to automate processes, gain insights, and create intelligent applications."
                },
                {
                  icon: <Network className="text-primary-600 w-8 h-8" />,
                  title: "Integration Services",
                  description: "Connect disparate systems and applications to create a unified and cohesive technology ecosystem."
                },
                {
                  icon: <Terminal className="text-primary-600 w-8 h-8" />,
                  title: "DevOps & Automation",
                  description: "Streamline development and operations with continuous integration, delivery, and automated workflows."
                }
              ].map((solution, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 group">
                  <div className="mb-4 p-3 bg-primary-100 rounded-lg inline-block group-hover:bg-primary-200 transition-colors">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-foreground/70 mb-4">{solution.description}</p>
                  <Link to="#" className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700">
                    Learn more
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Our Technology Stack"
              subtitle="We leverage industry-leading technologies to deliver robust and scalable solutions for our enterprise clients."
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white rounded-xl shadow p-8 relative">
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { name: "Cloud", icon: <Cloud className="w-10 h-10" /> },
                      { name: "AI", icon: <BrainCircuit className="w-10 h-10" /> },
                      { name: "Data", icon: <Database className="w-10 h-10" /> },
                      { name: "DevOps", icon: <Workflow className="w-10 h-10" /> },
                      { name: "Security", icon: <Lock className="w-10 h-10" /> },
                      { name: "Web", icon: <Globe className="w-10 h-10" /> },
                      { name: "Analytics", icon: <BarChart className="w-10 h-10" /> },
                      { name: "Integration", icon: <Cpu className="w-10 h-10" /> },
                      { name: "APIs", icon: <Code className="w-10 h-10" /> },
                    ].map((tech, index) => (
                      <div key={index} className="flex flex-col items-center justify-center p-4 hover:bg-primary-50 rounded-lg transition-colors">
                        <div className="text-primary-600 mb-2">
                          {tech.icon}
                        </div>
                        <span className="text-sm font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Enterprise-Grade Technology</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Cloud Platforms",
                      description: "AWS, Microsoft Azure, Google Cloud Platform"
                    },
                    {
                      title: "AI & Machine Learning",
                      description: "TensorFlow, PyTorch, OpenAI, Custom AI Models"
                    },
                    {
                      title: "Data & Analytics",
                      description: "Snowflake, Databricks, BigQuery, Power BI"
                    },
                    {
                      title: "Development & DevOps",
                      description: "Kubernetes, Docker, CI/CD, GitOps, Terraform"
                    }
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-primary-500 pl-4">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Our Implementation Process"
              subtitle="We follow a structured methodology to ensure successful delivery of technology solutions that meet your business objectives."
              className="mb-16"
            />

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-300"></div>
              
              <div className="space-y-12">
                {[
                  {
                    number: "01",
                    title: "Discovery & Assessment",
                    description: "We thoroughly analyze your business needs, existing systems, and technical requirements to identify the right solution approach."
                  },
                  {
                    number: "02",
                    title: "Solution Design",
                    description: "Our experts design a comprehensive solution architecture tailored to your specific business requirements and technical constraints."
                  },
                  {
                    number: "03",
                    title: "Development & Configuration",
                    description: "We develop and configure the solution using our established technology stack and best practices for quality and security."
                  },
                  {
                    number: "04",
                    title: "Integration & Testing",
                    description: "The solution is integrated with your existing systems and thoroughly tested to ensure reliability, performance, and security."
                  },
                  {
                    number: "05",
                    title: "Deployment & Training",
                    description: "We deploy the solution to production and provide comprehensive training to ensure your team can effectively use and manage it."
                  },
                  {
                    number: "06",
                    title: "Ongoing Support & Optimization",
                    description: "Our team provides continuous support and optimization to ensure your solution evolves with your business needs."
                  }
                ].map((step, index) => (
                  <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 pb-8 md:pb-0">
                      <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow`}>
                        <h3 className="text-xl font-semibold mb-3 flex items-center">
                          <span className="text-primary-600 mr-2">{step.number}</span> {step.title}
                        </h3>
                        <p className="text-foreground/70">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Circle marker */}
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center w-8 h-8 bg-primary-100 rounded-full border-4 border-white">
                      <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    </div>
                    
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
                <p className="text-white/80 mb-6 max-w-lg">
                  Let's discuss how our end-to-end technology solutions can help your organization innovate, optimize, and grow.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                    Schedule a Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-primary-700">
                    View Case Studies
                  </Button>
                </div>
              </div>
              <div className="lg:flex justify-end hidden">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Cloud Migration", "App Modernization", 
                      "Data Analytics", "AI Solutions",
                      "Security Services", "Digital Transformation"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center bg-white/5 rounded-lg p-3">
                        <div className="w-2 h-2 bg-primary-300 rounded-full mr-2"></div>
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Solutions;
