
import React from "react";
import { Layout } from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Cloud, Server, Database, Shield, Workflow, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CloudInfrastructure = () => {
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
              <span className="text-foreground">Cloud Infrastructure</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-primary-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="z-10">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Cloud Infrastructure Solutions
                </h1>
                <p className="text-xl text-foreground/80 mb-8 max-w-xl">
                  Scalable, reliable, and secure cloud infrastructure designed for your enterprise needs with high availability and performance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                    Schedule a Consultation
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
                      <Cloud className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Cloud Infrastructure</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Scalable and elastic infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>High availability architectures</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Disaster recovery solutions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Cost-optimized deployments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud Infrastructure Services */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Our Cloud Infrastructure Services"
              subtitle="Comprehensive cloud infrastructure solutions to support your digital transformation journey"
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Server className="text-primary-600 w-8 h-8" />,
                  title: "Cloud Migration",
                  description: "Seamlessly migrate your on-premises infrastructure to the cloud with minimal disruption to your business operations."
                },
                {
                  icon: <Database className="text-primary-600 w-8 h-8" />,
                  title: "Hybrid Cloud Solutions",
                  description: "Integrate your on-premises infrastructure with cloud services for a flexible and cost-effective solution."
                },
                {
                  icon: <Shield className="text-primary-600 w-8 h-8" />,
                  title: "Cloud Security",
                  description: "Implement robust security measures to protect your cloud infrastructure from threats and vulnerabilities."
                },
                {
                  icon: <Cloud className="text-primary-600 w-8 h-8" />,
                  title: "Multi-Cloud Strategy",
                  description: "Leverage multiple cloud providers to optimize performance, reliability, and cost-effectiveness."
                },
                {
                  icon: <Workflow className="text-primary-600 w-8 h-8" />,
                  title: "Cloud Optimization",
                  description: "Continuously monitor and optimize your cloud infrastructure to ensure maximum efficiency and cost savings."
                },
                {
                  icon: <Server className="text-primary-600 w-8 h-8" />,
                  title: "Infrastructure as Code",
                  description: "Automate infrastructure provisioning and management using code-based templates and workflows."
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

        {/* Platform Support */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Cloud Platforms We Support"
              subtitle="We have expertise across all major cloud platforms to meet your specific requirements"
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Amazon Web Services (AWS)",
                  description: "Leverage AWS's extensive range of services for a highly scalable and reliable cloud infrastructure.",
                  features: ["EC2", "S3", "RDS", "Lambda", "EKS", "CloudFront"]
                },
                {
                  title: "Microsoft Azure",
                  description: "Utilize Azure's integrated services for a seamless and secure cloud experience.",
                  features: ["Virtual Machines", "Azure SQL", "Cosmos DB", "Azure Functions", "AKS", "Azure CDN"]
                },
                {
                  title: "Google Cloud Platform",
                  description: "Harness GCP's innovative technology for powerful and intelligent cloud solutions.",
                  features: ["Compute Engine", "Cloud Storage", "Cloud SQL", "Cloud Functions", "GKE", "Cloud CDN"]
                }
              ].map((platform, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full">
                  <h3 className="text-xl font-semibold mb-3">{platform.title}</h3>
                  <p className="text-foreground/70 mb-4">{platform.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {platform.features.map((feature, i) => (
                      <div key={i} className="flex items-center bg-primary-50 rounded-lg p-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Get answers to common questions about our cloud infrastructure solutions"
              className="mb-12"
            />

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What are the benefits of moving to the cloud?</AccordionTrigger>
                <AccordionContent>
                  Moving to the cloud offers numerous benefits including cost savings, improved scalability, enhanced security, better disaster recovery, increased collaboration, and automatic software updates. It also allows businesses to focus on their core operations rather than managing infrastructure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do you ensure security in cloud environments?</AccordionTrigger>
                <AccordionContent>
                  We implement comprehensive security measures including encryption at rest and in transit, multi-factor authentication, network security groups, regular security audits, vulnerability scanning, and continuous monitoring. We also follow industry best practices and compliance standards to ensure the highest level of security.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What is your approach to cloud migration?</AccordionTrigger>
                <AccordionContent>
                  Our cloud migration approach follows a systematic process: assessment of your current infrastructure, developing a migration strategy, planning and designing the target architecture, executing the migration in phases, testing and validation, and post-migration support. We focus on minimizing business disruption and ensuring a smooth transition.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do you optimize cloud costs?</AccordionTrigger>
                <AccordionContent>
                  We optimize cloud costs through right-sizing instances, implementing auto-scaling, utilizing reserved instances or savings plans, identifying and removing unused resources, optimizing storage usage, and implementing cost allocation tags. We also provide regular cost analysis reports and recommendations for further optimization.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What is the typical timeline for a cloud migration project?</AccordionTrigger>
                <AccordionContent>
                  The timeline for a cloud migration project varies depending on the complexity and scale of your infrastructure. A small to medium-sized migration typically takes 3-6 months, while larger enterprises may require 6-12 months or more. We develop a detailed project plan with milestones to ensure transparency and predictability.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Cloud Infrastructure?</h2>
                <p className="text-white/80 mb-6 max-w-lg">
                  Let's discuss how our cloud infrastructure solutions can help your organization achieve greater scalability, reliability, and cost-effectiveness.
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

export default CloudInfrastructure;
