
import React, { useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import { Cpu, Server, Sparkles, Zap, Lock, Rocket, BarChart3 } from "lucide-react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  highlight?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, delay, highlight }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("revealed");
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="tech-card p-6 neo-glow value-item"
    >
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-500 mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground text-pretty">
        {description}
        {highlight && <span className="font-medium text-primary-600"> {highlight}</span>}
      </p>
    </div>
  );
};

const ValueSection = () => {
  const values = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Quantum Processing",
      description:
        "Our proprietary quantum algorithms process complex data at speeds",
      highlight: "1000x faster than traditional systems.",
      delay: 100,
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Neural Networks",
      description:
        "Self-learning neural architecture with over 100 billion parameters for accuracy rates of",
      highlight: "99.8% in predictive models.",
      delay: 200,
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure Architecture",
      description:
        "Military-grade encryption protects all data with blockchain verification and zero-knowledge proofs.",
      delay: 300,
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Scalable Performance",
      description:
        "Cloud-native infrastructure that scales instantly with demand peaks of",
      highlight: "10 million concurrent operations.",
      delay: 400,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary-100/50 to-white relative overflow-hidden" id="technology">
      {/* Tech background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(131,127,216,0.05)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(131,127,216,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(131,127,216,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="section-container relative z-10">
        <SectionHeading
          title="Core Technology"
          subtitle="Our advanced AI platform leverages cutting-edge technology to deliver unprecedented performance, security, and efficiency."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              highlight={value.highlight}
              delay={value.delay}
            />
          ))}
        </div>

        <div className="mt-16 tech-card p-8 neo-glow">
          <h3 className="text-2xl font-semibold mb-4 text-center">Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">4.8ms</div>
              <p className="text-muted-foreground">Average Response Time</p>
              <div className="flex items-center justify-center mt-2 text-green-600">
                <Zap className="h-4 w-4 mr-1" />
                <span className="text-sm">98% faster than industry average</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">99.9%</div>
              <p className="text-muted-foreground">System Reliability</p>
              <div className="flex items-center justify-center mt-2 text-green-600">
                <BarChart3 className="h-4 w-4 mr-1" />
                <span className="text-sm">Enterprise-grade SLA</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">10TB+</div>
              <p className="text-muted-foreground">Data Processed Daily</p>
              <div className="flex items-center justify-center mt-2 text-green-600">
                <Sparkles className="h-4 w-4 mr-1" />
                <span className="text-sm">Real-time insights</span>
              </div>
            </div>
          </div>
          
          {/* Technical specifications */}
          <div className="mt-8 pt-8 border-t border-primary-100">
            <h4 className="text-lg font-medium mb-4 text-center">Technical Specifications</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-primary-50/50 rounded-lg p-3 text-center">
                <p className="text-sm text-muted-foreground mb-1">Architecture</p>
                <p className="font-medium">Multi-layered Neural Networks</p>
              </div>
              <div className="bg-primary-50/50 rounded-lg p-3 text-center">
                <p className="text-sm text-muted-foreground mb-1">Processing</p>
                <p className="font-medium">Distributed GPU Clusters</p>
              </div>
              <div className="bg-primary-50/50 rounded-lg p-3 text-center">
                <p className="text-sm text-muted-foreground mb-1">Security</p>
                <p className="font-medium">256-bit AES Encryption</p>
              </div>
              <div className="bg-primary-50/50 rounded-lg p-3 text-center">
                <p className="text-sm text-muted-foreground mb-1">Deployment</p>
                <p className="font-medium">Cloud-native Containerized</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
