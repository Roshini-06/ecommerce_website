'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`}>
          <div className="aspect-square overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              data-ai-hint={`${product.category} furniture`}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <Link href={`/products/${product.id}`}>
          <CardTitle className="text-lg font-semibold hover:text-primary">{product.name}</CardTitle>
        </Link>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <p className="text-xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </p>
        <Button onClick={() => addToCart(product)} size="icon" aria-label="Add to cart">
          <ShoppingCart />
        </Button>
      </CardFooter>
    </Card>
  );
}
