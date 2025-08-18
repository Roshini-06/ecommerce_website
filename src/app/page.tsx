'use client';

import { useState } from 'react';
import { getProducts, getCategories } from '@/lib/data';
import ProductCard from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import type { Product } from '@/lib/types';

export default function Home() {
  // ✅ Fetch all products & categories
  const allProducts: Product[] = getProducts();
  const categories: string[] = getCategories();

  // ✅ State for filters
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // ✅ Handle category filtering
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);

    if (category === 'All') {
      setFilteredProducts(allProducts);
    } else if (category === 'Deals') {
      setFilteredProducts(allProducts.filter((p) => p.salePrice));
    } else {
      setFilteredProducts(allProducts.filter((p) => p.category === category));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-center sm:text-4xl flex items-center justify-center gap-2">
        <Sparkles className="h-8 w-8 text-primary" />
        Explore Our Collection
      </h1>

      {/* Category Filter Buttons */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            onClick={() => handleCategoryClick(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">
          No products found in this category.
        </p>
      )}
    </div>
  );
}
