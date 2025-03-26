
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Cpu, Rocket, Clock, BellRing, Mail, CheckCircle2 } from "lucide-react";

const Products = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    // This would normally connect to a backend service
    toast({
      title: "Notification Subscribed",
      description: "We'll notify you when our products launch!",
    });
    
    setEmail("");
  };

  return (
    <Layout>
      <div className="w-full">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-background to-primary-100 pt-24 pb-16">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary-100 text-primary">
                <Cpu className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Coming Soon</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500">
                Our Products Are Under Development
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
                We're building the next generation of AI and cloud solutions for enterprise. 
                Stay tuned for our official product launch!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="px-8 py-6 button-hover">
                  <Rocket className="mr-2 h-5 w-5" />
                  Join Waiting List
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Teaser */}
        <section className="py-16 bg-white">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">What's Coming</h2>
                <p className="text-muted-foreground mb-8">
                  At Drehill, we're developing innovative AI solutions to transform how enterprises
                  operate. Our products will help businesses streamline operations, gain deeper insights,
                  and drive better outcomes through advanced technology.
                </p>
                
                <div className="space-y-4">
                  {[
                    "AI-powered analytics platforms",
                    "Enterprise cloud management tools",
                    "Process automation solutions",
                    "Natural language processing systems",
                    "Custom AI integration services"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary-100 rounded-xl p-8 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 h-24 w-24 bg-primary-300 rounded-full opacity-50"></div>
                <div className="absolute -bottom-8 -left-8 h-16 w-16 bg-primary-200 rounded-full opacity-70"></div>
                
                <div className="relative z-10 bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Product Launch Timeline</h3>
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-200 flex items-center justify-center mr-3">
                        <span className="text-primary font-medium">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Beta Testing Program</p>
                        <p className="text-sm text-muted-foreground">Q2 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-200 flex items-center justify-center mr-3">
                        <span className="text-primary font-medium">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Early Access</p>
                        <p className="text-sm text-muted-foreground">Q3 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-200 flex items-center justify-center mr-3">
                        <span className="text-primary font-medium">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Official Launch</p>
                        <p className="text-sm text-muted-foreground">Q4 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notification Section */}
        <section className="py-16 bg-primary-100">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="max-w-3xl mx-auto text-center">
                <BellRing className="h-10 w-10 mb-4 text-primary mx-auto" />
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-muted-foreground mb-8">
                  Be the first to know when our products launch. Sign up for notifications
                  and we'll keep you informed about our progress.
                </p>
                
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow"
                    required
                  />
                  <Button type="submit">Notify Me</Button>
                </form>
                
                <p className="text-xs text-muted-foreground mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Products;
