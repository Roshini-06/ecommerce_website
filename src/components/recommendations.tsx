'use client';

import { useState, useEffect } from 'react';
import type { CartItem } from '@/lib/types';
import { fetchRecommendations } from '@/actions/recommendations';
import ProductCard from './product-card';
import { Skeleton } from './ui/skeleton';
import type { Product } from '@/lib/types';

interface RecommendationsProps {
  cartItems: CartItem[];
}

export default function Recommendations({ cartItems }: RecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRecommendations = async () => {
      if (cartItems.length === 0) return;

      setLoading(true);
      try {
        const productIds = cartItems.map(item => item.product.id);
        const result = await fetchRecommendations(productIds);

        // Fallback: if API fails, show first 4 products from cart
        if (!result || result.length === 0) {
          setRecommendations(cartItems.map(item => item.product).slice(0, 4));
        } else {
          setRecommendations(result);
        }
      } catch (error) {
        console.error("Recommendation error:", error);
        setRecommendations(cartItems.map(item => item.product).slice(0, 4));
      } finally {
        setLoading(false);
      }
    };

    getRecommendations();
  }, [cartItems]);

  if (loading && cartItems.length > 0) {
    return (
      <div className="mt-16">
        <h2 className="mb-8 text-2xl font-bold">You Might Also Like</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-6 w-1/4" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="mb-8 text-2xl font-bold">You Might Also Like</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {recommendations.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
