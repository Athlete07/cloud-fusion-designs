
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollY = window.scrollY;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Parallax effect for background
      if (scrollY <= sectionHeight) {
        const translateY = scrollY * 0.3;
        sectionRef.current.style.backgroundPositionY = `-${translateY}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100vh] flex items-center bg-gradient-to-b from-background to-accent"
      id="hero"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[5%] left-[15%] w-64 h-64 rounded-full bg-primary/5 animate-float delay-100"></div>
        <div className="absolute top-[20%] right-[10%] w-96 h-96 rounded-full bg-primary/5 animate-float delay-300"></div>
        <div className="absolute bottom-[15%] left-[5%] w-80 h-80 rounded-full bg-primary/5 animate-float delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Next-Generation AI Solutions
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
              Unlock the Power of AI for Your Business
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-md text-pretty">
              Transform your operations with cutting-edge AI technology that boosts efficiency,
              drives innovation, and delivers measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md shadow-sm button-hover"
              >
                Discover Our Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-6 py-3 bg-white border border-border text-foreground rounded-md shadow-sm button-hover"
              >
                Request a Demo
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <p className="text-sm text-muted-foreground">Trusted by leading companies:</p>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-6 w-20 bg-muted-foreground/20 rounded animate-pulse-light"></div>
              ))}
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px] bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl overflow-hidden animate-scale-in">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-white/40 backdrop-blur-sm rounded-xl shadow-lg animate-float"></div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 rounded-full bg-primary/20 animate-pulse-light"></div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl font-bold text-gradient">AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-light">
        <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
