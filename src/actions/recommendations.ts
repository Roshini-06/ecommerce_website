'use server';

import { getProductRecommendations } from '@/ai/flows/product-recommendations';
import { getProductById } from '@/lib/data';
import type { Product } from '@/lib/types';

export async function fetchRecommendations(productIds: string[]): Promise<Product[]> {
  try {
    const { recommendedProducts } = await getProductRecommendations({ cartItems: productIds });

    if (!recommendedProducts || recommendedProducts.length === 0) {
      return [];
    }

    const uniqueRecommendedIds = [...new Set(recommendedProducts)].filter(id => !productIds.includes(id));

    const products = uniqueRecommendedIds
      .map(id => getProductById(id))
      .filter((p): p is Product => p !== undefined);
      
    return products.slice(0, 4); // Limit to 4 recommendations
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return [];
  }
}
