
import React from "react";
import { Layout } from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Database, BarChart, Server, Code, Workflow, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const DataManagement = () => {
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
              <span className="text-foreground">Data Management</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-primary-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="z-10">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Data Management Solutions
                </h1>
                <p className="text-xl text-foreground/80 mb-8 max-w-xl">
                  End-to-end data solutions from warehousing to analytics and business intelligence for data-driven decisions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                    Start Your Data Journey
                  </Button>
                  <Button size="lg" variant="outline">
                    View Case Studies
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary-100 rounded-full mr-4">
                      <Database className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Data Solutions</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Data warehousing and lakes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Business intelligence</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Data integration and ETL</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Advanced analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Navigation */}
        <div className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-6">
            <NavigationMenu className="mx-auto">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Data Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      {[
                        {
                          title: "Data Warehousing",
                          description: "Modern data warehousing solutions for efficient data storage and retrieval."
                        },
                        {
                          title: "Data Lakes",
                          description: "Scalable data lakes for storing large volumes of raw data in its native format."
                        },
                        {
                          title: "Business Intelligence",
                          description: "BI tools and dashboards for visualizing and analyzing data."
                        },
                        {
                          title: "ETL/ELT Pipelines",
                          description: "Data integration and transformation workflows for seamless data movement."
                        }
                      ].map((item, index) => (
                        <li key={index}>
                          <NavigationMenuLink asChild>
                            <a
                              href="#"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Analytics</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      {[
                        {
                          title: "Predictive Analytics",
                          description: "Use historical data to predict future outcomes and trends."
                        },
                        {
                          title: "Prescriptive Analytics",
                          description: "Get recommendations on actions to optimize business outcomes."
                        },
                        {
                          title: "Real-time Analytics",
                          description: "Process and analyze data as it's generated for immediate insights."
                        },
                        {
                          title: "Machine Learning",
                          description: "Apply ML algorithms to uncover patterns and make predictions."
                        }
                      ].map((item, index) => (
                        <li key={index}>
                          <NavigationMenuLink asChild>
                            <a
                              href="#"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Governance</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                      {[
                        {
                          title: "Data Quality",
                          description: "Ensure data accuracy, completeness, and reliability."
                        },
                        {
                          title: "Data Security",
                          description: "Protect sensitive data with robust security measures."
                        },
                        {
                          title: "Data Privacy",
                          description: "Comply with regulations like GDPR, CCPA, and HIPAA."
                        },
                        {
                          title: "Master Data Management",
                          description: "Create a single source of truth for critical business data."
                        }
                      ].map((item, index) => (
                        <li key={index}>
                          <NavigationMenuLink asChild>
                            <a
                              href="#"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Data Solutions */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Our Data Management Solutions"
              subtitle="Comprehensive data solutions to help you harness the power of your data"
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Database className="text-primary-600 w-8 h-8" />,
                  title: "Data Warehousing",
                  description: "Modern data warehousing solutions for storing, integrating, and analyzing data from various sources."
                },
                {
                  icon: <Server className="text-primary-600 w-8 h-8" />,
                  title: "Data Lakes",
                  description: "Scalable data lake solutions for storing and processing large volumes of structured and unstructured data."
                },
                {
                  icon: <BarChart className="text-primary-600 w-8 h-8" />,
                  title: "Business Intelligence",
                  description: "Interactive dashboards and reports for visualizing data and deriving actionable insights."
                },
                {
                  icon: <Workflow className="text-primary-600 w-8 h-8" />,
                  title: "Data Integration",
                  description: "ETL/ELT pipelines for seamless data movement and transformation across your organization."
                },
                {
                  icon: <Code className="text-primary-600 w-8 h-8" />,
                  title: "Data Governance",
                  description: "Frameworks and tools for ensuring data quality, security, and compliance."
                },
                {
                  icon: <BarChart className="text-primary-600 w-8 h-8" />,
                  title: "Advanced Analytics",
                  description: "Predictive and prescriptive analytics solutions for uncovering insights and driving decision-making."
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

        {/* Our Approach */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Our Data Management Approach"
              subtitle="A structured methodology to help you unlock the full potential of your data"
              className="mb-16"
            />

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-300"></div>
              
              <div className="space-y-12">
                {[
                  {
                    title: "Data Strategy",
                    description: "We work with you to define your data strategy, aligning it with your business objectives and identifying key use cases and requirements.",
                    points: [
                      "Business objectives alignment",
                      "Use case identification",
                      "Data maturity assessment",
                      "Roadmap development"
                    ]
                  },
                  {
                    title: "Data Architecture",
                    description: "We design a modern data architecture that meets your current and future needs, leveraging best practices and industry standards.",
                    points: [
                      "Architecture blueprint",
                      "Technology selection",
                      "Scalability planning",
                      "Integration patterns"
                    ]
                  },
                  {
                    title: "Data Integration",
                    description: "We implement robust data integration processes to collect, transform, and load data from various sources into your data platform.",
                    points: [
                      "Source system analysis",
                      "ETL/ELT pipeline development",
                      "Data quality checks",
                      "Automated workflows"
                    ]
                  },
                  {
                    title: "Data Analytics",
                    description: "We enable data analytics capabilities, from basic reporting to advanced analytics, to help you derive insights from your data.",
                    points: [
                      "Dashboard development",
                      "Self-service analytics",
                      "Predictive models",
                      "Data visualization"
                    ]
                  },
                  {
                    title: "Data Governance",
                    description: "We establish data governance frameworks and processes to ensure data quality, security, privacy, and compliance.",
                    points: [
                      "Data quality management",
                      "Security controls",
                      "Privacy compliance",
                      "Master data management"
                    ]
                  },
                  {
                    title: "Continuous Improvement",
                    description: "We provide ongoing support and optimization to ensure your data platform evolves with your business needs.",
                    points: [
                      "Performance monitoring",
                      "Feature enhancement",
                      "User adoption",
                      "Capability expansion"
                    ]
                  }
                ].map((step, index) => (
                  <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 pb-8 md:pb-0">
                      <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow`}>
                        <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                        <p className="text-foreground/70 mb-4">{step.description}</p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Key Activities:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {step.points.map((point, i) => (
                              <li key={i} className="flex items-start">
                                <div className="p-1 bg-primary-100 rounded-full mr-2 mt-1">
                                  <div className="h-1.5 w-1.5 bg-primary-600 rounded-full"></div>
                                </div>
                                <span className="text-sm">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
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
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data Management?</h2>
                <p className="text-white/80 mb-6 max-w-lg">
                  Let's discuss how our data management solutions can help your organization make data-driven decisions and gain a competitive edge.
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

export default DataManagement;
