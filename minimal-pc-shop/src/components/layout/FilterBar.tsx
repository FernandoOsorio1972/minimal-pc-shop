import { Laptop, Smartphone, Monitor } from 'lucide-react';
import { ProductCategory } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';

interface FilterBarProps {
  selectedCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
}

const FilterBar = ({ selectedCategory, onCategoryChange }: FilterBarProps) => {
  const categories: { value: ProductCategory; label: string; icon: React.ReactNode }[] = [
    { 
      value: 'Todos', 
      label: 'Todos', 
      icon: null 
    },
    { 
      value: 'Laptops', 
      label: 'Laptops', 
      icon: <Laptop className="h-4 w-4" /> 
    },
    { 
      value: 'Celulares', 
      label: 'Celulares', 
      icon: <Smartphone className="h-4 w-4" /> 
    },
    { 
      value: 'Desktop', 
      label: 'Desktop', 
      icon: <Monitor className="h-4 w-4" /> 
    },
  ];

  return (
    <div 
      className="sticky top-16 z-40 w-full border-b border-border backdrop-blur"
      style={{ 
        background: 'linear-gradient(135deg, rgb(54, 74, 107) 0%, rgba(54, 74, 107, 0.8) 100%)'
      }}
    >
      <div className="container">
        <nav className="flex items-center justify-center gap-1 overflow-x-auto py-3" aria-label="Filtros de categoría">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              className={cn(
                "flex items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-all",
                "hover:bg-white/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2",
                selectedCategory === category.value
                  ? "bg-white/20 text-white hover:bg-white/30"
                  : "text-white/70 hover:text-white"
              )}
              aria-pressed={selectedCategory === category.value}
              aria-label={`Filtrar por ${category.label}`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default FilterBar;
