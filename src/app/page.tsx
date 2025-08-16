'use client'

import { useState } from 'react';
import { getProducts, getCategories } from '@/lib/data';
import ProductCard from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const allProducts = getProducts();
  const categories = getCategories();
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredProducts(allProducts);
    } else if (category === 'Deals') {
      setFilteredProducts(allProducts.filter(p => p.salePrice));
    } else {
      setFilteredProducts(allProducts.filter(p => p.category === category));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-center sm:text-4xl flex items-center justify-center gap-2">
        <Sparkles className="h-8 w-8 text-primary" />
        Explore Our Collection
      </h1>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
