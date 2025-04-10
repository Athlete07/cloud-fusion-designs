
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Cpu, Shield, Sparkles, Code, TerminalSquare, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Link } from "react-router-dom";

const DrehillProducts = () => {
  // Product categories with their respective icons
  const productCategories = [
    {
      title: "AI Solutions",
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      description: "Cutting-edge artificial intelligence solutions to transform your business operations.",
      link: "/products-showcase"
    },
    {
      title: "Security Products",
      icon: <Shield className="h-10 w-10 text-primary" />,
      description: "Enterprise-grade security products to protect your digital assets.",
      link: "/products-showcase"
    },
    {
      title: "Hardware",
      icon: <Cpu className="h-10 w-10 text-primary" />,
      description: "Next-generation hardware solutions designed for performance and reliability.",
      link: "/products-showcase"
    },
    {
      title: "Developer Tools",
      icon: <Code className="h-10 w-10 text-primary" />,
      description: "Powerful development tools to accelerate your software projects.",
      link: "/products-showcase"
    },
    {
      title: "Enterprise Solutions",
      icon: <TerminalSquare className="h-10 w-10 text-primary" />,
      description: "Comprehensive enterprise solutions for businesses of all sizes.",
      link: "/products-showcase"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-muted/50 to-background pt-32 pb-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Drehill Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our comprehensive range of innovative products designed to solve complex problems and drive digital transformation.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/products-showcase">View All Products</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeading 
            title="Product Categories" 
            subtitle="Explore our diverse range of product categories"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {productCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Link 
                  to={category.link} 
                  className="flex items-center text-primary font-medium hover:underline"
                >
                  Explore Products
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 bg-muted/20">
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeading 
            title="Featured Products" 
            subtitle="Our most popular and innovative products"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <Sparkles className="h-12 w-12 text-primary" />
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Flagship
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Fusion Analytics</h3>
              <p className="text-muted-foreground mb-6">
                Our advanced analytics platform combining AI and machine learning to provide actionable insights from your data.
              </p>
              <Link to="/product/fusion-analytics">
                <Button>Learn More</Button>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <Shield className="h-12 w-12 text-primary" />
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Best Seller
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">SecureGuard Pro</h3>
              <p className="text-muted-foreground mb-6">
                Enterprise-grade security solution providing comprehensive protection against cyber threats.
              </p>
              <Link to="/product/secureguard-pro">
                <Button>Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-primary/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
            <p className="text-muted-foreground mb-8">
              Contact our product specialists to discuss how Drehill products can help you achieve your business goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">
                <Link to="/products-showcase">Browse All Products</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="#contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DrehillProducts;
