'use client';

import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Recommendations from '@/components/recommendations';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  if (cartCount === 0) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 py-16 text-center">
        <ShoppingCart className="h-16 w-16 text-muted-foreground" />
        <h1 className="text-2xl font-semibold">Your cart is empty</h1>
        <p className="text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild>
          <Link href="/">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cartItems.map(({ product, quantity }) => (
              <Card key={product.id} className="flex items-center p-4">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                  data-ai-hint={`${product.category} furniture`}
                />
                <div className="ml-4 flex-grow">
                  <Link href={`/products/${product.id}`} className="font-semibold hover:underline">
                    {product.name}
                  </Link>
                   <div className="flex items-baseline gap-2 text-sm">
                    {product.salePrice ? (
                      <>
                        <p className="font-semibold text-destructive">${product.salePrice.toFixed(2)}</p>
                        <p className="text-muted-foreground line-through">${product.price.toFixed(2)}</p>
                      </>
                    ) : (
                       <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                    className="h-9 w-16 text-center"
                    aria-label={`Quantity for ${product.name}`}
                  />
                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(product.id)} aria-label={`Remove ${product.name} from cart`}>
                    <Trash2 className="h-5 w-5 text-muted-foreground" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" size="lg">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Recommendations cartItems={cartItems} />
    </div>
  );
}
