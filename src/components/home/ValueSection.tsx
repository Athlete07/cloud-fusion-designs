
import React, { useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import { Brain, Zap, BarChart3, CloudCog } from "lucide-react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, delay }) => {
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
      className="bg-white rounded-xl p-6 shadow-sm border border-border card-hover scroll-reveal"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground text-pretty">{description}</p>
    </div>
  );
};

const ValueSection = () => {
  const values = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Intelligent Automation",
      description:
        "Streamline operations and reduce manual tasks with AI-powered automation that learns and improves over time.",
      delay: 100,
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Predictive Analytics",
      description:
        "Leverage data-driven insights to anticipate market trends and make proactive business decisions.",
      delay: 200,
    },
    {
      icon: <CloudCog className="h-6 w-6" />,
      title: "Seamless Integration",
      description:
        "Easily connect our AI solutions with your existing systems for a unified technology ecosystem.",
      delay: 300,
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Enhanced Efficiency",
      description:
        "Boost productivity and reduce costs with optimized processes and intelligent resource allocation.",
      delay: 400,
    },
  ];

  return (
    <section className="py-20 bg-secondary" id="values">
      <div className="section-container">
        <SectionHeading
          title="Empowering Your Business with AI"
          subtitle="Our intelligent solutions provide tangible benefits that transform how your business operates and competes in today's dynamic market."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={value.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
