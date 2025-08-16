import { getProducts } from '@/lib/data';
import ProductCard from '@/components/product-card';

export default function Home() {
  const products = getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-center sm:text-4xl">
        Explore Our Collection
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
