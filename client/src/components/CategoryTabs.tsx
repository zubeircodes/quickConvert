import { categories } from "@shared/conversions";
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="border-b border-border">
      <div className="flex overflow-x-auto hide-scrollbar">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 hover-elevate",
              activeCategory === category.id
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground"
            )}
            data-testid={`tab-${category.id}`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
