'use client';

import { getProductById } from '@/lib/data';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ShoppingCart, ArrowLeft, Tag } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const product = getProductById(params.id);
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="outline" asChild className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </Button>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={800}
            className="h-full w-full object-cover"
            data-ai-hint={`${product.category} furniture`}
          />
           {product.salePrice && (
            <Badge variant="destructive" className="absolute left-4 top-4 flex items-center gap-1 text-base">
              <Tag className="h-4 w-4" />
              SALE
            </Badge>
          )}
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{product.name}</h1>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="flex items-baseline gap-4">
            {product.salePrice ? (
              <>
                <p className="text-4xl font-extrabold text-destructive">${product.salePrice.toFixed(2)}</p>
                <p className="text-2xl font-medium text-muted-foreground line-through">${product.price.toFixed(2)}</p>
              </>
            ) : (
              <p className="text-4xl font-extrabold text-primary">${product.price.toFixed(2)}</p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <Input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
              className="w-20"
              aria-label="Quantity"
            />
            <Button onClick={handleAddToCart} size="lg" className="flex-grow md:flex-grow-0">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
