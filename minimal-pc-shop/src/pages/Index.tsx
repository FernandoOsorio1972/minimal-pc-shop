import { useState, useMemo } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import Header from '@/components/layout/Header';
import FilterBar from '@/components/layout/FilterBar';
import { ProductCategory } from '@/contexts/CartContext';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('Todos');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const getCategoryTitle = () => {
    if (selectedCategory === 'Todos') return 'Todos los Productos';
    return selectedCategory;
  };

  const getCategoryDescription = () => {
    switch (selectedCategory) {
      case 'Laptops':
        return 'Encuentra la laptop perfecta para ti';
      case 'Celulares':
        return 'Los mejores smartphones del mercado';
      case 'Desktop':
        return 'Computadoras de escritorio potentes';
      default:
        return 'Explora nuestra selección completa';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FilterBar 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />
      <main className="container py-12">
        <section className="animate-fade-in">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {getCategoryTitle()}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {getCategoryDescription()}
            </p>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No hay productos disponibles en esta categoría
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Index;
