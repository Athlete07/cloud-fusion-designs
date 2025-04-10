
import React, { useState, useRef, useEffect } from "react";
import SectionHeading from "../ui/SectionHeading";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import ProductCard from "./products/ProductCard";
import ProductModal from "./products/ProductModal";
import CategoryFilter from "./products/CategoryFilter";

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

        <CategoryFilter 
          categories={categories}
          activeFilter={filter}
          onFilterChange={setFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isHovered={hoveredCard === product.id}
              onHover={setHoveredCard}
              onClick={openProductModal}
            />
          ))}
        </div>

        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      </div>
    </section>
  );
};

export default ProductsSection;
