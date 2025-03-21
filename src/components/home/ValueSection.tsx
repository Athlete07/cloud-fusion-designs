
import React, { useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import { Brain, BarChart3, CloudCog, TrendingUp, DollarSign, ShieldCheck, Globe } from "lucide-react";

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
      className="bg-white rounded-xl p-6 shadow-sm border border-border card-hover scroll-reveal"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground text-pretty">
        {description}
        {highlight && <span className="font-medium text-primary"> {highlight}</span>}
      </p>
    </div>
  );
};

const ValueSection = () => {
  const values = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Market Growth",
      description:
        "Our AI solutions target a rapidly expanding market with a projected CAGR of",
      highlight: "42% through 2030.",
      delay: 100,
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Revenue Model",
      description:
        "Scalable SaaS subscription model with high-margin enterprise contracts and retention rate of",
      highlight: "94%.",
      delay: 200,
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Proprietary Technology",
      description:
        "16 patents filed for our core AI algorithms, creating significant barriers to entry and competitive advantages.",
      delay: 300,
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Footprint",
      description:
        "Operations in 7 countries serving enterprise clients across multiple industries with",
      highlight: "65% international revenue.",
      delay: 400,
    },
  ];

  return (
    <section className="py-20 bg-secondary" id="values">
      <div className="section-container">
        <SectionHeading
          title="Investment Highlights"
          subtitle="Our AI-driven enterprise solutions present a compelling investment opportunity with strong market position, proprietary technology, and sustainable competitive advantages."
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

        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-border">
          <h3 className="text-2xl font-semibold mb-4 text-center">Financial Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$42M</div>
              <p className="text-muted-foreground">Annual Recurring Revenue</p>
              <div className="flex items-center justify-center mt-2 text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm">+68% YoY</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">78%</div>
              <p className="text-muted-foreground">Gross Margin</p>
              <div className="flex items-center justify-center mt-2 text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm">+7% YoY</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2.4x</div>
              <p className="text-muted-foreground">LTV:CAC Ratio</p>
              <div className="flex items-center justify-center mt-2 text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm">Efficient Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
