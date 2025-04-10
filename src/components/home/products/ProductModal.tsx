
import React from "react";
import { Dialog } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Product } from "@/types/product";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onOpenChange,
}) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
          <div className="sticky top-0 bg-white p-4 border-b border-border flex justify-between items-center">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <button
              onClick={() => onOpenChange(false)}
              className="p-1 rounded-full hover:bg-secondary transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="text-4xl mb-6">{product.icon}</div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {product.category}
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6">{product.longDesc}</p>
            
            <h3 className="text-lg font-medium mb-4">Key Features</h3>
            <ul className="space-y-2 mb-6">
              {product.features.map((feature, index) => (
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
                onClick={() => onOpenChange(false)}
                className="mr-3 px-4 py-2 bg-secondary text-foreground rounded-md hover:bg-secondary/80 transition-colors"
              >
                Close
              </button>
              <a
                href={`#${product.id}`}
                className="px-4 py-2 bg-primary text-white rounded-md shadow-sm button-hover"
                onClick={() => onOpenChange(false)}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModal;
