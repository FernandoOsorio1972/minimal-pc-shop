import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import CartItem from '@/components/cart/CartItem';
import Header from '@/components/layout/Header';
import { toast } from 'sonner';

const Cart = () => {
  const { items, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    toast.success('Procesando tu pedido...');
    clearCart();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <div className="animate-fade-in">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Seguir comprando
          </Link>

          <h1 className="mb-8 text-2xl font-bold text-foreground">
            Tu carrito
          </h1>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-6 rounded-full bg-muted p-6">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                Tu carrito está vacío
              </h2>
              <p className="mt-2 text-muted-foreground">
                Agrega productos para comenzar
              </p>
              <Button asChild className="mt-6">
                <Link to="/">Ver productos</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="rounded-xl border border-border bg-card p-6">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
                  <h2 className="text-lg font-semibold text-foreground">
                    Resumen del pedido
                  </h2>
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium text-foreground">
                        ${totalPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Envío</span>
                      <span className="font-medium text-foreground">Gratis</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold text-foreground">
                          Total
                        </span>
                        <span className="text-lg font-bold text-foreground">
                          ${totalPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="mt-6 w-full"
                    size="lg"
                    onClick={handleCheckout}
                  >
                    Finalizar compra
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;
