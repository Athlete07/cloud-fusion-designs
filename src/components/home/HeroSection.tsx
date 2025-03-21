
import React, { useEffect, useRef } from "react";
import { ArrowRight, Cpu, TerminalSquare, Code, LayoutGrid, Boxes, Sparkles } from "lucide-react";

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
      className="relative w-full min-h-[100vh] flex items-center bg-gradient-to-b from-background to-primary-100/50 overflow-hidden"
      id="hero"
    >
      {/* Background elements - Animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob-animation h-96 w-96 top-[5%] -left-[10%]"></div>
        <div className="blob-animation h-80 w-80 bottom-[10%] -right-[5%] opacity-50"></div>
        <div className="blob-animation h-64 w-64 top-[40%] right-[20%] opacity-40"></div>
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(131,127,216,0.1)_1px,transparent_1px)] bg-[length:30px_30px] opacity-50"></div>
        
        {/* Animated tech particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary-400 animate-float opacity-80"></div>
        <div className="absolute top-3/4 left-2/3 w-3 h-3 rounded-full bg-primary-500 animate-float opacity-70 delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-primary-600 animate-float opacity-60 delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center bg-primary-100 text-primary-600 rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
              Next-Generation AI Technology
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance text-shadow">
              Transforming Reality with
              <span className="text-gradient block mt-2 leading-tight">Advanced AI</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-md text-pretty">
              Our cutting-edge technology redefines what's possible, leveraging neural networks and quantum computing to solve complex problems with unprecedented efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-md shadow-sm button-hover futuristic-border group"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-primary-300/30 text-foreground rounded-md shadow-sm button-hover neo-glow"
              >
                Contact Us
              </a>
            </div>
            
            <div className="pt-8 space-y-4">
              <p className="text-sm font-medium text-muted-foreground">Powered by breakthrough technologies:</p>
              <div className="flex flex-wrap items-center gap-5">
                <div className="tech-card px-4 py-2.5 flex items-center space-x-2">
                  <Cpu className="h-5 w-5 text-primary-500" />
                  <span className="text-sm font-medium">Quantum AI</span>
                </div>
                <div className="tech-card px-4 py-2.5 flex items-center space-x-2">
                  <TerminalSquare className="h-5 w-5 text-primary-500" />
                  <span className="text-sm font-medium">Neural Networks</span>
                </div>
                <div className="tech-card px-4 py-2.5 flex items-center space-x-2">
                  <Code className="h-5 w-5 text-primary-500" />
                  <span className="text-sm font-medium">Cognitive Computing</span>
                </div>
                <div className="tech-card px-4 py-2.5 flex items-center space-x-2">
                  <Boxes className="h-5 w-5 text-primary-500" />
                  <span className="text-sm font-medium">Edge Intelligence</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute top-1/4 left-1/4 w-52 h-52 rounded-full bg-primary-300/20 animate-pulse-light blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-44 h-44 rounded-full bg-primary-500/20 animate-pulse-light delay-700 blur-3xl"></div>
            
            {/* 3D Tech Visualization */}
            <div className="relative w-full h-[500px] p-8 flex items-center justify-center">
              {/* Center sphere */}
              <div className="absolute w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full opacity-90 glow-shadow animate-float z-10 flex items-center justify-center">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute w-full h-full">
                <div className="absolute top-[15%] left-[45%] w-16 h-16 bg-gradient-to-br from-white to-primary-200 rounded-lg flex items-center justify-center shadow-lg animate-float delay-300">
                  <Cpu className="h-8 w-8 text-primary-600" />
                </div>
                
                <div className="absolute top-[60%] left-[20%] w-16 h-16 bg-gradient-to-br from-white to-primary-200 rounded-lg flex items-center justify-center shadow-lg animate-float delay-150">
                  <LayoutGrid className="h-8 w-8 text-primary-600" />
                </div>
                
                <div className="absolute top-[35%] right-[15%] w-16 h-16 bg-gradient-to-br from-white to-primary-200 rounded-lg flex items-center justify-center shadow-lg animate-float delay-500">
                  <Code className="h-8 w-8 text-primary-600" />
                </div>
                
                <div className="absolute top-[75%] right-[30%] w-16 h-16 bg-gradient-to-br from-white to-primary-200 rounded-lg flex items-center justify-center shadow-lg animate-float delay-700">
                  <TerminalSquare className="h-8 w-8 text-primary-600" />
                </div>
                
                {/* Connecting lines */}
                <div className="absolute inset-0 rounded-full border-[1px] border-dashed border-primary-300/40 animate-spin-slow"></div>
                <div className="absolute inset-0 rounded-full border-[1px] border-dashed border-primary-300/40 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                <div className="absolute inset-[15%] rounded-full border-[1px] border-dashed border-primary-400/30 animate-spin-slow" style={{ animationDuration: '15s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-light">
        <span className="text-sm text-primary-600 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-primary-400/30 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
