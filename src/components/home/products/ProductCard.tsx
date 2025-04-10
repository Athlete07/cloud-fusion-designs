
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types/product";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isHovered,
  onHover,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "product-card bg-white rounded-xl overflow-hidden border border-border shadow-sm transition-all duration-500 scroll-reveal",
        isHovered ? "shadow-lg scale-[1.02]" : ""
      )}
      onMouseEnter={() => onHover(product.id)}
      onMouseLeave={() => onHover(null)}
    >
      <Link to={`/product/${product.id}`} className="block p-6">
        <div className="text-3xl mb-4">{product.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
        <p className="text-muted-foreground mb-4">{product.shortDesc}</p>
        <div className="inline-flex items-center text-primary text-sm font-medium">
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-1" />
        </div>
      </Link>
      <div
        className={cn(
          "h-1.5 w-full bg-primary/20 relative overflow-hidden",
          isHovered ? "bg-primary/30" : ""
        )}
      >
        <div
          className={cn(
            "absolute left-0 top-0 h-full bg-primary transition-all duration-500",
            isHovered ? "w-full" : "w-0"
          )}
        ></div>
      </div>
    </div>
  );
};

export default ProductCard;
