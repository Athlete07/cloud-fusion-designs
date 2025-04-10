import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { 
  Package, Cpu, BarChart3, BrainCircuit, Layers, Database, 
  Search, CheckCircle2, ArrowRight, Shield, Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Product {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  pricing: string;
  tag?: string;
  tagColor?: string;
}

const ProductsShowcase = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  
  const products: Product[] = [
    {
      id: "fusion-analytics",
      name: "Fusion Analytics",
      description: "Advanced data analysis platform for enterprise insights",
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      features: [
        "Real-time data processing",
        "Interactive visual dashboards",
        "Custom report generation",
        "Anomaly detection",
        "Predictive analytics"
      ],
      pricing: "Starting at $499/month",
      tag: "Best Seller",
      tagColor: "bg-green-500"
    },
    {
      id: "neural-process",
      name: "Neural Process",
      description: "Intelligent workflow automation with machine learning",
      icon: <BrainCircuit className="h-6 w-6 text-primary" />,
      features: [
        "Document processing",
        "Workflow optimization",
        "AI decision support",
        "Process analytics",
        "Legacy system integration"
      ],
      pricing: "Starting at $599/month",
      tag: "New",
      tagColor: "bg-blue-500"
    },
    {
      id: "cloud-intelligence",
      name: "Cloud Intelligence",
      description: "AI-powered cloud optimization and resource management",
      icon: <Layers className="h-6 w-6 text-primary" />,
      features: [
        "Cost optimization",
        "Resource monitoring",
        "Automated scaling",
        "Security compliance",
        "Performance analytics"
      ],
      pricing: "Starting at $799/month"
    },
    {
      id: "insight-engine",
      name: "Insight Engine",
      description: "Natural language processing for unstructured data",
      icon: <Search className="h-6 w-6 text-primary" />,
      features: [
        "Text and sentiment analysis",
        "Entity recognition",
        "Content summarization",
        "Multi-language support",
        "Search optimization"
      ],
      pricing: "Starting at $649/month"
    },
    {
      id: "decision-matrix",
      name: "Decision Matrix",
      description: "AI-assisted decision making and risk assessment",
      icon: <Cpu className="h-6 w-6 text-primary" />,
      features: [
        "Scenario modeling",
        "Risk analysis",
        "Outcome prediction",
        "Collaborative decision tools",
        "Audit trails"
      ],
      pricing: "Starting at $899/month",
      tag: "Premium",
      tagColor: "bg-purple-500"
    },
    {
      id: "data-vault",
      name: "Data Vault",
      description: "Secure, compliant data storage and management",
      icon: <Database className="h-6 w-6 text-primary" />,
      features: [
        "End-to-end encryption",
        "Automated backups",
        "Compliance monitoring",
        "Access controls",
        "Data lifecycle management"
      ],
      pricing: "Starting at $549/month"
    }
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "analytics", name: "Analytics" },
    { id: "automation", name: "Automation" },
    { id: "cloud", name: "Cloud" },
    { id: "security", name: "Security" }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (category === "all") return matchesSearch;
    
    const categoryMapping: Record<string, string[]> = {
      "analytics": ["fusion-analytics", "insight-engine"],
      "automation": ["neural-process", "decision-matrix"],
      "cloud": ["cloud-intelligence"],
      "security": ["data-vault"]
    };
    
    return matchesSearch && categoryMapping[category]?.includes(product.id);
  });

  const handleDemoRequest = (productName: string) => {
    toast({
      title: "Demo Request Sent",
      description: `We'll contact you about ${productName} shortly.`,
    });
  };

  return (
    <Layout>
      <section className="bg-gradient-to-b from-background to-secondary/20 pt-24 pb-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                Enterprise-Grade <span className="text-primary">AI Solutions</span> for Modern Businesses
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover our comprehensive suite of AI-powered products designed to transform how your business operates, 
                analyzes data, and makes decisions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg">
                  <Package className="mr-2 h-5 w-5" />
                  Explore Products
                </Button>
                <Button variant="outline" size="lg">
                  Request Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-primary/5 rounded-2xl transform rotate-3"></div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  {products.slice(0, 4).map((product, idx) => (
                    <div key={idx} className="bg-secondary/30 rounded-lg p-4 flex flex-col items-center text-center">
                      <div className="mb-3">{product.icon}</div>
                      <h3 className="font-medium text-sm">{product.name}</h3>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm font-medium">Enterprise Security</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm font-medium">24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Our Product Suite"
            subtitle="Explore our range of AI-powered products designed to help your business thrive in the digital age."
          />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === cat.id
                      ? "bg-primary text-white"
                      : "bg-secondary/40 text-foreground hover:bg-primary/10"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <div className="w-full md:w-64">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden border-border transition-all duration-300 hover:border-primary/50 hover:shadow-md group">
                  {product.tag && (
                    <div className={`${product.tagColor || 'bg-primary'} text-white text-xs font-bold px-3 py-1 absolute right-0 top-4 z-10`}>
                      {product.tag}
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <div className="mb-4">{product.icon}</div>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mt-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start space-y-4 border-t pt-4">
                    <div className="font-medium">{product.pricing}</div>
                    <div className="flex gap-2 w-full">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => handleDemoRequest(product.name)}
                      >
                        Request Demo
                      </Button>
                      <Link to={`/product/${product.id}`} className="flex-1">
                        <Button className="w-full group-hover:bg-primary-600 transition-colors">
                          <span>Learn More</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                <Search className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground max-w-md">
                  We couldn't find any products matching your search. Try adjusting your filters or search terms.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {setCategory("all"); setSearchTerm("");}}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Enterprise Benefits"
            subtitle="Our solutions are built specifically for enterprise needs, providing robust features and comprehensive support."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Enterprise-Grade Security",
                description: "Bank-level encryption, compliance with global security standards, and regular security audits."
              },
              {
                icon: <Cpu className="h-10 w-10 text-primary" />,
                title: "Cutting-Edge AI Technology",
                description: "Leveraging the latest advancements in artificial intelligence and machine learning to drive results."
              },
              {
                icon: <Layers className="h-10 w-10 text-primary" />,
                title: "Seamless Integration",
                description: "Our products integrate smoothly with your existing tech stack without disrupting workflows."
              }
            ].map((benefit, idx) => (
              <Card key={idx} className="bg-white border-none shadow-sm">
                <CardHeader>
                  <div className="mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="bg-primary-50 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our team to discuss how our products can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-white">
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsShowcase;
