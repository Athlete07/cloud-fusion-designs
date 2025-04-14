
import React from "react";
import { Layout } from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Sparkles, Search, BarChart, Database, Code, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AiMachineLearning = () => {
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
              <span className="text-foreground">AI & Machine Learning</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-primary-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="z-10">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  AI & Machine Learning Solutions
                </h1>
                <p className="text-xl text-foreground/80 mb-8 max-w-xl">
                  Harness the power of AI to automate processes, gain insights, and create intelligent applications that transform your business.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                    Explore AI Solutions
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
                      <BrainCircuit className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold">AI Capabilities</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Predictive analytics and forecasting</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Natural language processing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Computer vision and image recognition</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span>Recommendation systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Solutions */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Our AI & Machine Learning Solutions"
              subtitle="Cutting-edge AI technologies to drive innovation and business growth"
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Sparkles className="text-primary-600 w-8 h-8" />,
                  title: "Predictive Analytics",
                  description: "Leverage historical data to forecast trends, behavior, and outcomes for proactive decision-making."
                },
                {
                  icon: <BrainCircuit className="text-primary-600 w-8 h-8" />,
                  title: "Natural Language Processing",
                  description: "Extract insights from text data, build chatbots, and enable voice interfaces for enhanced user experiences."
                },
                {
                  icon: <Search className="text-primary-600 w-8 h-8" />,
                  title: "Computer Vision",
                  description: "Analyze and interpret visual data for object detection, image recognition, and visual inspection."
                },
                {
                  icon: <Database className="text-primary-600 w-8 h-8" />,
                  title: "Recommendation Systems",
                  description: "Deliver personalized recommendations based on user behavior, preferences, and contextual data."
                },
                {
                  icon: <Code className="text-primary-600 w-8 h-8" />,
                  title: "Custom AI Models",
                  description: "Develop tailor-made AI models to address your specific business challenges and opportunities."
                },
                {
                  icon: <BarChart className="text-primary-600 w-8 h-8" />,
                  title: "AI-Driven Analytics",
                  description: "Enhance your analytics with AI capabilities to uncover hidden patterns and gain deeper insights."
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

        {/* Use Cases */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="AI & ML Use Cases"
              subtitle="Real-world applications of AI and machine learning across various industries"
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Financial Services",
                  description: "AI-powered fraud detection, risk assessment, customer segmentation, and personalized financial advice.",
                  examples: [
                    "Credit risk modeling",
                    "Algorithmic trading",
                    "Anti-money laundering",
                    "Customer churn prediction"
                  ]
                },
                {
                  title: "Healthcare",
                  description: "Predictive diagnostics, medical image analysis, patient monitoring, and personalized treatment plans.",
                  examples: [
                    "Disease prediction",
                    "Medical imaging analysis",
                    "Drug discovery",
                    "Patient outcome prediction"
                  ]
                },
                {
                  title: "Retail & E-commerce",
                  description: "Customer segmentation, demand forecasting, personalized recommendations, and inventory optimization.",
                  examples: [
                    "Product recommendations",
                    "Price optimization",
                    "Demand forecasting",
                    "Customer lifetime value prediction"
                  ]
                },
                {
                  title: "Manufacturing",
                  description: "Predictive maintenance, quality control, supply chain optimization, and demand forecasting.",
                  examples: [
                    "Predictive maintenance",
                    "Defect detection",
                    "Production optimization",
                    "Supply chain forecasting"
                  ]
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-foreground/70 mb-4">{useCase.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {useCase.examples.map((example, i) => (
                      <div key={i} className="flex items-center bg-primary-50 rounded-lg p-3">
                        <div className="p-1 bg-primary-100 rounded-full mr-2">
                          <div className="h-1.5 w-1.5 bg-primary-600 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title="Our AI Implementation Approach"
              subtitle="A systematic methodology to deliver successful AI solutions"
              className="mb-16"
            />

            <div className="relative">
              {/* Steps */}
              <ol className="relative border-l border-primary-200 space-y-12 ml-6">
                {[
                  {
                    title: "Discovery & Assessment",
                    description: "We start by understanding your business challenges and identifying opportunities where AI can add value. This involves analyzing your data landscape, defining success criteria, and determining the feasibility of potential AI solutions.",
                    points: [
                      "Business problem analysis",
                      "Data assessment",
                      "Opportunity identification",
                      "Feasibility evaluation"
                    ]
                  },
                  {
                    title: "Solution Design",
                    description: "Based on the discovery findings, we design an appropriate AI solution architecture. This includes selecting the right algorithms, data processing pipelines, and integration approaches to meet your specific requirements.",
                    points: [
                      "Algorithm selection",
                      "Data pipeline design",
                      "Solution architecture",
                      "Integration planning"
                    ]
                  },
                  {
                    title: "Data Preparation",
                    description: "High-quality data is essential for successful AI implementations. We help you collect, clean, and prepare your data for model training, including feature engineering and data transformation.",
                    points: [
                      "Data collection",
                      "Data cleaning",
                      "Feature engineering",
                      "Data validation"
                    ]
                  },
                  {
                    title: "Model Development",
                    description: "We develop and train AI models using your prepared data, continuously refining them to achieve optimal performance. This involves model selection, hyperparameter tuning, and cross-validation.",
                    points: [
                      "Model training",
                      "Hyperparameter tuning",
                      "Cross-validation",
                      "Model evaluation"
                    ]
                  },
                  {
                    title: "Deployment & Integration",
                    description: "We deploy the trained models into your production environment and integrate them with your existing systems and workflows to deliver business value.",
                    points: [
                      "Model deployment",
                      "API development",
                      "System integration",
                      "Performance testing"
                    ]
                  },
                  {
                    title: "Monitoring & Optimization",
                    description: "We continuously monitor the performance of your AI solutions and optimize them over time to ensure they remain accurate and relevant as your business evolves.",
                    points: [
                      "Performance monitoring",
                      "Model retraining",
                      "Continuous improvement",
                      "ROI measurement"
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
                <h2 className="text-3xl font-bold mb-4">Ready to Leverage AI for Your Business?</h2>
                <p className="text-white/80 mb-6 max-w-lg">
                  Let's discuss how our AI and machine learning solutions can help your organization automate processes, gain insights, and create intelligent applications.
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

export default AiMachineLearning;
