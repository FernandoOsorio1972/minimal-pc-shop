import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart, Product } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} agregado al carrito`);
  };

  return (
    <article
      className="group animate-slide-up overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.brand}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-foreground">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{product.specs}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-foreground">
            ${product.price.toLocaleString()}
          </span>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="gap-1 transition-all duration-300"
          >
            <Plus className="h-4 w-4" />
            Agregar
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
