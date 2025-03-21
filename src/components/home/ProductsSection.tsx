
import React, { useState, useRef, useEffect } from "react";
import SectionHeading from "../ui/SectionHeading";
import { Dialog } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ArrowRight, X } from "lucide-react";

interface Product {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  category: string;
  longDesc: string;
  features: string[];
}

const products: Product[] = [
  {
    id: "fusion-analytics",
    title: "Fusion Analytics",
    shortDesc: "Advanced data analysis and visualization platform",
    icon: "📊",
    category: "Analytics",
    longDesc: "Transform raw data into actionable insights with our comprehensive analytics platform. Fusion Analytics combines powerful AI algorithms with intuitive visualizations to help you understand trends, identify opportunities, and make data-driven decisions.",
    features: [
      "Real-time data processing and analysis",
      "Customizable dashboards and reports",
      "Predictive modeling and forecasting",
      "Anomaly detection and alerting",
      "Natural language query capabilities"
    ]
  },
  {
    id: "cloud-intelligence",
    title: "Cloud Intelligence",
    shortDesc: "AI-powered cloud optimization and management",
    icon: "☁️",
    category: "Cloud",
    longDesc: "Maximize your cloud infrastructure's efficiency and performance with Cloud Intelligence. Our AI continuously monitors your cloud resources, automatically optimizing configurations, predicting usage patterns, and reducing costs while maintaining peak performance.",
    features: [
      "Automated resource optimization",
      "Cost management and reduction",
      "Performance monitoring and enhancement",
      "Security threat detection and prevention",
      "Multi-cloud environment support"
    ]
  },
  {
    id: "neural-process",
    title: "Neural Process",
    shortDesc: "Business process automation with machine learning",
    icon: "🔄",
    category: "Automation",
    longDesc: "Streamline your business operations with intelligent process automation. Neural Process learns from your workflows, identifies bottlenecks, and continuously improves processes to increase efficiency, reduce errors, and free your team to focus on strategic tasks.",
    features: [
      "Intelligent workflow automation",
      "Document processing and extraction",
      "Adaptive learning from user behavior",
      "Process optimization suggestions",
      "Integration with existing systems"
    ]
  },
  {
    id: "insight-engine",
    title: "Insight Engine",
    shortDesc: "Natural language processing for unstructured data",
    icon: "🔍",
    category: "NLP",
    longDesc: "Unlock the value hidden in your unstructured data with Insight Engine. Our advanced NLP technology analyzes documents, conversations, and feedback to extract meaningful insights, identify patterns, and provide valuable intelligence for better decision-making.",
    features: [
      "Text analysis and sentiment detection",
      "Entity recognition and relationship mapping",
      "Conversational AI capabilities",
      "Semantic search and knowledge discovery",
      "Multilingual support for global operations"
    ]
  },
  {
    id: "decision-matrix",
    title: "Decision Matrix",
    shortDesc: "AI-assisted decision making platform",
    icon: "🧠",
    category: "Decision Support",
    longDesc: "Navigate complex decisions with confidence using Decision Matrix. Our platform combines historical data analysis, predictive modeling, and scenario planning to provide recommendations that optimize outcomes and reduce risk across your organization.",
    features: [
      "Decision modeling and simulation",
      "Risk assessment and mitigation",
      "Scenario analysis and comparison",
      "Collaborative decision frameworks",
      "Decision audit trails and explanations"
    ]
  },
  {
    id: "vision-core",
    title: "Vision Core",
    shortDesc: "Computer vision solution for image and video analysis",
    icon: "👁️",
    category: "Computer Vision",
    longDesc: "See beyond what's visible with Vision Core. Our advanced computer vision technology accurately analyzes images and video streams to detect objects, recognize patterns, monitor activities, and extract valuable information in real-time across various industries.",
    features: [
      "Object detection and recognition",
      "Visual inspection and quality control",
      "Facial recognition and biometrics",
      "Motion analysis and tracking",
      "Real-time video processing"
    ]
  }
];

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = filter === "All" 
    ? products 
    : products.filter(p => p.category === filter);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll('.product-card');
            cards?.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('revealed');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [filter]);

  return (
    <section className="py-24 bg-background" id="products" ref={sectionRef}>
      <div className="section-container">
        <SectionHeading
          title="Our AI Solutions"
          subtitle="Discover our comprehensive suite of AI-powered products designed to address specific business challenges and drive innovation."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all",
                filter === category
                  ? "bg-primary text-white shadow-sm"
                  : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={cn(
                "product-card bg-white rounded-xl overflow-hidden border border-border shadow-sm transition-all duration-500 scroll-reveal",
                hoveredCard === product.id ? "shadow-lg scale-[1.02]" : ""
              )}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => openProductModal(product)}
            >
              <div className="p-6">
                <div className="text-3xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4">{product.shortDesc}</p>
                <div className="inline-flex items-center text-primary text-sm font-medium">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-1" />
                </div>
              </div>
              <div
                className={cn(
                  "h-1.5 w-full bg-primary/20 relative overflow-hidden",
                  hoveredCard === product.id ? "bg-primary/30" : ""
                )}
              >
                <div
                  className={cn(
                    "absolute left-0 top-0 h-full bg-primary transition-all duration-500",
                    hoveredCard === product.id ? "w-full" : "w-0"
                  )}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
                <div className="sticky top-0 bg-white p-4 border-b border-border flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{selectedProduct.title}</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1 rounded-full hover:bg-secondary transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="text-4xl mb-6">{selectedProduct.icon}</div>
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {selectedProduct.category}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{selectedProduct.longDesc}</p>
                  
                  <h3 className="text-lg font-medium mb-4">Key Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block h-5 w-5 rounded-full bg-primary/10 text-primary flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-0.5">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-end mt-6">
                    <button 
                      onClick={() => setIsModalOpen(false)}
                      className="mr-3 px-4 py-2 bg-secondary text-foreground rounded-md hover:bg-secondary/80 transition-colors"
                    >
                      Close
                    </button>
                    <a
                      href={`#${selectedProduct.id}`}
                      className="px-4 py-2 bg-primary text-white rounded-md shadow-sm button-hover"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
