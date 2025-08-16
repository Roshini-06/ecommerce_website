import type { Product } from './types';

const products: Product[] = [
  {
    id: '1',
    name: 'Modern Accent Chair',
    description: 'A stylish and comfortable chair that adds a modern touch to any room. Upholstered in premium fabric with solid wood legs for durability.',
    price: 299.99,
    imageUrl: 'https://placehold.co/600x600.png',
    category: 'Living Room',
  },
  {
    id: '2',
    name: 'Minimalist Oak Desk',
    description: 'A sleek and functional desk made from solid oak. Perfect for your home office, providing ample workspace without cluttering your space.',
    price: 450.0,
    imageUrl: 'https://placehold.co/600x600.png',
    category: 'Office',
  },
  {
    id: '3',
    name: 'Queen Size Platform Bed',
    description: 'A sturdy and elegant platform bed frame that offers excellent mattress support. No box spring needed. Simple, clean lines for a contemporary bedroom.',
    price: 550.0,
    imageUrl: 'https://placehold.co/600x600.png',
    category: 'Bedroom',
  },
  {
    id: '4',
    name: 'Industrial Bookshelf',
    description: 'A five-tier bookshelf combining a metal frame with rustic wood shelves. Ideal for displaying books, decor, and plants in any living area or office.',
    price: 220.5,
    imageUrl: 'https://placehold.co/600x600.png',
    category: 'Storage',
  },
  {
    id: '5',
    name: 'Velvet Throw Pillows (Set of 2)',
    description: 'Add a pop of color and comfort with these luxurious velvet throw pillows. Available in multiple colors to match your decor.',
    price: 45.99,
    imageUrl: 'https://placehold.co/600x600.png',
    category: 'Decor',
  },
  {
    id: '6',
    name: 'Round Marble Coffee Table',
    description: 'An elegant coffee table with a genuine marble top and a sturdy gold-finished metal base. A perfect centerpiece for your living room.',
    price: 380.0,
    imageUrl: 'https://placehold.co/600x600.png',
    category: 'Living Room',
  },
  {
    id: '7',
    name: 'Ergonomic Office Chair',
    description: 'Stay comfortable during long work hours with this adjustable ergonomic chair, featuring lumbar support, armrests, and smooth-rolling casters.',
    price: 320.0,
    imageUrl: 'https://placehold.co/600x600.png',
    category: 'Office',
  },
  {
    id: '8',
    name: 'LED Floor Lamp',
    description: 'A modern, dimmable floor lamp that provides warm, ambient lighting. Its slim design fits perfectly in any corner.',
    price: 89.99,
    imageUrl: 'https://placehold.co/600x600.png',
    category: 'Lighting',
  },
];

export const getProducts = (): Product[] => products;

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};
