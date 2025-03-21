
import React, { useRef, useEffect } from "react";
import SectionHeading from "../ui/SectionHeading";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    };

    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const timelineItems = entry.target.querySelectorAll('.timeline-item');
          timelineItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('revealed');
            }, 300 * index);
          });
        }
      });
    }, observerOptions);

    const valuesObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const valueItems = entry.target.querySelectorAll('.value-item');
          valueItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('revealed');
            }, 200 * index);
          });
        }
      });
    }, observerOptions);

    if (timelineRef.current) {
      timelineObserver.observe(timelineRef.current);
    }

    if (valuesRef.current) {
      valuesObserver.observe(valuesRef.current);
    }

    return () => {
      if (timelineRef.current) {
        timelineObserver.unobserve(timelineRef.current);
      }
      if (valuesRef.current) {
        valuesObserver.unobserve(valuesRef.current);
      }
    };
  }, []);

  const timelineItems = [
    {
      year: "2023",
      title: "Company Founded",
      description: "FusionAI was established with a vision to democratize artificial intelligence for businesses of all sizes."
    },
    {
      year: "2023",
      title: "First Product Launch",
      description: "Released our flagship analytics platform, helping companies transform their data into actionable insights."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Opened offices in Europe and Asia to better serve our growing international client base."
    },
    {
      year: "2024",
      title: "AI Innovation Award",
      description: "Recognized for breakthrough advancements in natural language processing and machine learning algorithms."
    },
    {
      year: "2025",
      title: "Next-Gen Solutions",
      description: "Launched our comprehensive suite of enterprise AI solutions designed for seamless integration and scalability."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI technology."
    },
    {
      title: "Excellence",
      description: "We deliver solutions of the highest quality that exceed expectations."
    },
    {
      title: "Integrity",
      description: "We uphold ethical standards in all aspects of AI development and deployment."
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients to ensure their success is our success."
    }
  ];

  return (
    <section className="py-24 bg-accent" id="about">
      <div className="section-container">
        <SectionHeading
          title="About FusionAI"
          subtitle="We're on a mission to transform how businesses operate through the power of artificial intelligence and advanced cloud solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <div className="space-y-8">
            <p className="text-lg">
              Founded by a team of AI researchers and industry veterans in 2023, FusionAI has rapidly grown from a startup to a leading provider of enterprise AI solutions. Our commitment to innovation and technical excellence has earned the trust of organizations worldwide.
            </p>

            <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="value-item scroll-reveal bg-white rounded-lg p-5 shadow-sm border border-border">
                  <div className="flex items-start mb-3">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <h3 className="font-semibold text-lg">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-pretty">
                To empower organizations with intelligent technologies that solve complex problems, 
                drive efficiency, and unlock new opportunities for growth and innovation.
              </p>
            </div>
          </div>

          <div ref={timelineRef} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-primary/20">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className="timeline-item scroll-reveal mb-12 relative before:content-[''] before:absolute before:w-3 before:h-3 before:bg-primary before:rounded-full before:-left-[25px] before:top-1.5"
              >
                <div className="bg-primary/10 text-primary text-sm font-medium rounded-full px-3 py-1 inline-block mb-2">
                  {item.year}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Meet Our Leadership Team</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our experienced team combines deep technical expertise with industry knowledge to drive innovation and deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="text-2xl">👤</span>
                    </div>
                  </div>
                  <h4 className="font-medium">Team Member {index}</h4>
                  <p className="text-sm text-muted-foreground">
                    {["CEO", "CTO", "COO", "VP of Product"][index - 1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
