
import React from "react";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeFilter,
  onFilterChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-full transition-all",
            activeFilter === category
              ? "bg-primary text-white shadow-sm"
              : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
