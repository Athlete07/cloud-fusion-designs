
import React from "react";
import { Layout } from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Terminal, RefreshCw, Code, Workflow, GitBranch, GitMerge, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DevOpsAutomation = () => {
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
              <span className="text-foreground">DevOps & Automation</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-primary-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="z-10">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  DevOps & Automation Solutions
                </h1>
                <p className="text-xl text-foreground/80 mb-8 max-w-xl">
                  Streamline development and operations with continuous integration, delivery, and automated workflows to accelerate your software delivery.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                    Transform Your Development Process
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
                      <Terminal className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold">DevOps Benefits</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Faster time to market</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Improved collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Increased reliability</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Reduced operational costs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DevOps Services */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Our DevOps & Automation Services"
              subtitle="Comprehensive solutions to streamline your software development lifecycle"
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <GitBranch className="text-primary-600 w-8 h-8" />,
                  title: "CI/CD Implementation",
                  description: "Implement continuous integration and continuous delivery pipelines to automate your software delivery process."
                },
                {
                  icon: <Code className="text-primary-600 w-8 h-8" />,
                  title: "Infrastructure as Code",
                  description: "Automate infrastructure provisioning and management using code-based templates and workflows."
                },
                {
                  icon: <Terminal className="text-primary-600 w-8 h-8" />,
                  title: "Configuration Management",
                  description: "Automate system configuration and ensure consistency across environments with configuration management tools."
                },
                {
                  icon: <Workflow className="text-primary-600 w-8 h-8" />,
                  title: "Containerization & Orchestration",
                  description: "Implement container-based deployment strategies with Docker and Kubernetes for scalable applications."
                },
                {
                  icon: <GitMerge className="text-primary-600 w-8 h-8" />,
                  title: "Version Control & Collaboration",
                  description: "Set up robust version control systems and collaboration workflows for efficient team development."
                },
                {
                  icon: <RefreshCw className="text-primary-600 w-8 h-8" />,
                  title: "Monitoring & Observability",
                  description: "Implement comprehensive monitoring and observability solutions to ensure system reliability and performance."
                }
              ].map((service, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 group">
                  <div className="mb-4 p-3 bg-primary-100 rounded-lg inline-block group-hover:bg-primary-200 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 mb-4">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DevOps Toolchain */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="DevOps Toolchain"
              subtitle="Industry-leading tools and technologies for implementing DevOps practices"
              className="mb-16"
            />

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    category: "Source Control",
                    tools: [
                      "Git",
                      "GitHub",
                      "GitLab",
                      "Bitbucket",
                      "Azure DevOps"
                    ]
                  },
                  {
                    category: "CI/CD",
                    tools: [
                      "Jenkins",
                      "GitHub Actions",
                      "GitLab CI/CD",
                      "Azure DevOps Pipelines",
                      "CircleCI"
                    ]
                  },
                  {
                    category: "Infrastructure as Code",
                    tools: [
                      "Terraform",
                      "AWS CloudFormation",
                      "Azure Resource Manager",
                      "Pulumi",
                      "Ansible"
                    ]
                  }
                ].map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4 pb-2 border-b">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.tools.map((tool, i) => (
                        <li key={i} className="flex items-center p-3 bg-primary-50 rounded-lg">
                          <div className="p-1 bg-primary-100 rounded-full mr-2">
                            <div className="h-1.5 w-1.5 bg-primary-600 rounded-full"></div>
                          </div>
                          <span className="font-medium">{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  {
                    category: "Container & Orchestration",
                    tools: [
                      "Docker",
                      "Kubernetes",
                      "Amazon EKS",
                      "Azure AKS",
                      "OpenShift"
                    ]
                  },
                  {
                    category: "Monitoring & Observability",
                    tools: [
                      "Prometheus",
                      "Grafana",
                      "ELK Stack",
                      "Datadog",
                      "New Relic"
                    ]
                  },
                  {
                    category: "Collaboration & Planning",
                    tools: [
                      "Jira",
                      "Confluence",
                      "Slack",
                      "Microsoft Teams",
                      "Trello"
                    ]
                  }
                ].map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4 pb-2 border-b">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.tools.map((tool, i) => (
                        <li key={i} className="flex items-center p-3 bg-primary-50 rounded-lg">
                          <div className="p-1 bg-primary-100 rounded-full mr-2">
                            <div className="h-1.5 w-1.5 bg-primary-600 rounded-full"></div>
                          </div>
                          <span className="font-medium">{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DevOps Implementation Process */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Our DevOps Implementation Process"
              subtitle="A structured approach to implementing DevOps practices in your organization"
              className="mb-16"
            />

            <div className="relative">
              {/* Steps */}
              <ol className="relative border-l border-primary-200 space-y-12 ml-6">
                {[
                  {
                    title: "Assessment & Planning",
                    description: "We evaluate your current development and operations processes, identify pain points, and develop a roadmap for implementing DevOps practices.",
                    activities: [
                      "Current state assessment",
                      "Gap analysis",
                      "Roadmap development",
                      "Tool selection"
                    ]
                  },
                  {
                    title: "CI/CD Pipeline Implementation",
                    description: "We implement continuous integration and continuous delivery pipelines to automate your build, test, and deployment processes.",
                    activities: [
                      "Source control setup",
                      "Automated build configuration",
                      "Test automation",
                      "Deployment pipeline setup"
                    ]
                  },
                  {
                    title: "Infrastructure Automation",
                    description: "We implement infrastructure as code practices to automate the provisioning and management of your infrastructure.",
                    activities: [
                      "IaC templates development",
                      "Environment provisioning",
                      "Configuration management",
                      "Security implementation"
                    ]
                  },
                  {
                    title: "Containerization & Orchestration",
                    description: "We implement container-based deployment strategies and orchestration to improve scalability and reliability.",
                    activities: [
                      "Container strategy",
                      "Docker implementation",
                      "Kubernetes setup",
                      "Deployment strategies"
                    ]
                  },
                  {
                    title: "Monitoring & Observability",
                    description: "We implement comprehensive monitoring and observability solutions to ensure system reliability and performance.",
                    activities: [
                      "Monitoring tool implementation",
                      "Logging strategy",
                      "Alert configuration",
                      "Dashboard setup"
                    ]
                  },
                  {
                    title: "DevOps Culture & Training",
                    description: "We help you foster a DevOps culture within your organization and provide training to ensure successful adoption.",
                    activities: [
                      "Team training",
                      "Process documentation",
                      "Knowledge transfer",
                      "Continuous improvement"
                    ]
                  }
                ].map((step, index) => (
                  <li key={index} className="ml-8">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary-100 rounded-full -left-4 ring-4 ring-white">
                      <span className="text-primary-600 font-semibold">{index + 1}</span>
                    </span>
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-foreground/70 mb-4">{step.description}</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Key Activities:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Development Process?</h2>
                <p className="text-white/80 mb-6 max-w-lg">
                  Let's discuss how our DevOps and automation solutions can help your organization streamline development and operations, accelerate delivery, and improve reliability.
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

export default DevOpsAutomation;
