
import React from "react";
import { Layout } from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Network, Workflow, Code, Database, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const IntegrationServices = () => {
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
              <span className="text-foreground">Integration Services</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-primary-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="z-10">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Integration Services
                </h1>
                <p className="text-xl text-foreground/80 mb-8 max-w-xl">
                  Connect disparate systems and applications to create a unified and cohesive technology ecosystem that drives business efficiency.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                    Explore Integration Solutions
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule a Demo
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary-100 rounded-full mr-4">
                      <Network className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Integration Capabilities</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>API-based integration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Middleware solutions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Data integration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Custom connectors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Solutions */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Our Integration Services"
              subtitle="Seamlessly connect systems, applications, and data sources for a unified enterprise ecosystem"
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="text-primary-600 w-8 h-8" />,
                  title: "API Development & Management",
                  description: "Design, develop, and manage APIs to enable seamless communication between applications and services."
                },
                {
                  icon: <Workflow className="text-primary-600 w-8 h-8" />,
                  title: "Middleware Solutions",
                  description: "Implement middleware platforms to facilitate communication and data exchange between disparate systems."
                },
                {
                  icon: <Database className="text-primary-600 w-8 h-8" />,
                  title: "Data Integration",
                  description: "Integrate data from various sources to create a unified view and enable data-driven decision-making."
                },
                {
                  icon: <Network className="text-primary-600 w-8 h-8" />,
                  title: "Enterprise Application Integration",
                  description: "Connect enterprise applications to streamline business processes and improve operational efficiency."
                },
                {
                  icon: <Code className="text-primary-600 w-8 h-8" />,
                  title: "Custom Connectors",
                  description: "Develop custom connectors for legacy systems or specialized applications to enable seamless integration."
                },
                {
                  icon: <Workflow className="text-primary-600 w-8 h-8" />,
                  title: "iPaaS Solutions",
                  description: "Implement Integration Platform as a Service (iPaaS) solutions for cloud-based integration capabilities."
                }
              ].map((solution, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 group">
                  <div className="mb-4 p-3 bg-primary-100 rounded-lg inline-block group-hover:bg-primary-200 transition-colors">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-foreground/70 mb-4">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integration Technologies */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Integration Technologies"
              subtitle="We leverage industry-leading technologies and platforms for robust integration solutions"
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "API Management Platforms",
                  technologies: [
                    "Apigee",
                    "MuleSoft",
                    "Kong",
                    "AWS API Gateway",
                    "Azure API Management"
                  ]
                },
                {
                  title: "iPaaS Solutions",
                  technologies: [
                    "Boomi",
                    "Informatica",
                    "Workato",
                    "Zapier",
                    "Microsoft Power Automate"
                  ]
                },
                {
                  title: "ESB & Middleware",
                  technologies: [
                    "IBM Integration Bus",
                    "Red Hat Fuse",
                    "Oracle Service Bus",
                    "TIBCO",
                    "MuleSoft"
                  ]
                }
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.technologies.map((tech, i) => (
                      <li key={i} className="flex items-center bg-primary-50 rounded-lg p-3">
                        <div className="p-1 bg-primary-100 rounded-full mr-2">
                          <div className="h-1.5 w-1.5 bg-primary-600 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integration Process */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Our Integration Process"
              subtitle="A systematic approach to deliver seamless integration solutions"
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {[
                {
                  number: "01",
                  title: "Discovery & Assessment",
                  description: "We analyze your current systems, identify integration points, and define requirements for the integration solution.",
                  activities: [
                    "System landscape analysis",
                    "Integration requirements gathering",
                    "Feasibility assessment",
                    "Technology selection"
                  ]
                },
                {
                  number: "02",
                  title: "Integration Architecture",
                  description: "We design a robust integration architecture that meets your business requirements and technical constraints.",
                  activities: [
                    "Architecture blueprint",
                    "Integration patterns selection",
                    "Security considerations",
                    "Performance planning"
                  ]
                },
                {
                  number: "03",
                  title: "Development & Configuration",
                  description: "We develop and configure the integration solution, including APIs, connectors, and data mappings.",
                  activities: [
                    "API development",
                    "Connector implementation",
                    "Data mapping",
                    "Transformation logic"
                  ]
                },
                {
                  number: "04",
                  title: "Testing & Validation",
                  description: "We thoroughly test the integration solution to ensure it meets functional and non-functional requirements.",
                  activities: [
                    "Unit testing",
                    "Integration testing",
                    "Performance testing",
                    "Security testing"
                  ]
                },
                {
                  number: "05",
                  title: "Deployment & Go-Live",
                  description: "We deploy the integration solution to production and ensure a smooth transition to operational status.",
                  activities: [
                    "Deployment planning",
                    "Environment configuration",
                    "Go-live support",
                    "Handover documentation"
                  ]
                },
                {
                  number: "06",
                  title: "Monitoring & Support",
                  description: "We provide ongoing monitoring and support to ensure the integration solution continues to perform optimally.",
                  activities: [
                    "Performance monitoring",
                    "Error handling",
                    "Proactive maintenance",
                    "Continuous improvement"
                  ]
                }
              ].map((step, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-primary-100 rounded-lg mr-3 text-primary-600 font-bold text-xl">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-foreground/70 mb-4">{step.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Key Activities:</h4>
                    <ul className="space-y-2">
                      {step.activities.map((activity, i) => (
                        <li key={i} className="flex items-start">
                          <div className="p-1 bg-primary-100 rounded-full mr-2 mt-1">
                            <div className="h-1.5 w-1.5 bg-primary-600 rounded-full"></div>
                          </div>
                          <span className="text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Integrate Your Systems?</h2>
                <p className="text-white/80 mb-6 max-w-lg">
                  Let's discuss how our integration services can help your organization connect disparate systems and create a cohesive technology ecosystem.
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

export default IntegrationServices;
