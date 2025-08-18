import type { Product } from './types';
import Image from 'next/image';
const products: Product[] = [
  {
    id: '1',
    name: 'Modern Accent Chair',
    description: 'A stylish and comfortable chair that adds a modern touch to any room. Upholstered in premium fabric with solid wood legs for durability.',
    price: 299.99,
    salePrice: 249.99,
    image: '/images/accent_chair.jpg',
    category: 'Living Room',
  },
  {
    id: '2',
    name: 'Minimalist Oak Desk',
    description: 'A sleek and functional desk made from solid oak. Perfect for your home office, providing ample workspace without cluttering your space.',
    price: 450.0,
    image: '/images/oak_desk.jpg',
    category: 'Office',
  },
  {
    id: '3',
    name: 'Queen Size Platform Bed',
    description: 'A sturdy and elegant platform bed frame that offers excellent mattress support. No box spring needed. Simple, clean lines for a contemporary bedroom.',
    price: 550.0,
    image: '/images/queen_bed.jpg',
    category: 'Bedroom',
  },
  {
    id: '4',
    name: 'Industrial Bookshelf',
    description: 'A five-tier bookshelf combining a metal frame with rustic wood shelves. Ideal for displaying books, decor, and plants in any living area or office.',
    price: 220.5,
    salePrice: 199.50,
    image: '/images/bookshelf.jpg',
    category: 'Storage',
  },
  {
    id: '5',
    name: 'Velvet Throw Pillows (Set of 2)',
    description: 'Add a pop of color and comfort with these luxurious velvet throw pillows. Available in multiple colors to match your decor.',
    price: 45.99,
    image: '/images/pillow_cover.jpg',
    category: 'Decor',
  },
  {
    id: '6',
    name: 'Round Marble Coffee Table',
    description: 'An elegant coffee table with a genuine marble top and a sturdy gold-finished metal base. A perfect centerpiece for your living room.',
    price: 380.0,
    image: '/images/round_table.jpg',
    category: 'Living Room',
  },
  {
    id: '7',
    name: 'Ergonomic Office Chair',
    description: 'Stay comfortable during long work hours with this adjustable ergonomic chair, featuring lumbar support, armrests, and smooth-rolling casters.',
    price: 320.0,
    salePrice: 280.0,
    image: '/images/rolling_chair.jpg',
    category: 'Office',
  },
  {
    id: '8',
    name: 'LED Floor Lamp',
    description: 'A modern, dimmable floor lamp that provides warm, ambient lighting. Its slim design fits perfectly in any corner.',
    price: 89.99,
    image: '/images/led_lamp.jpg',
    category: 'Lighting',
  },
    {
    id: '9',
    name: 'Wireless Bluetooth Speaker',
    description: 'Portable and powerful, this Bluetooth speaker delivers crisp, room-filling sound. Long-lasting battery for music on the go.',
    price: 129.99,
    image: '/images/speaker.jpg',
    category: 'Electronics',
  },
  {
    id: '10',
    name: 'Smart Coffee Maker',
    description: 'Brew the perfect cup of coffee from your phone. This smart coffee maker lets you schedule brewing times and customize strength.',
    price: 149.00,
    image: '/images/coffee_maker.jpg',
    category: 'Kitchen',
  },
  {
    id: '11',
    name: 'Memory Foam Mattress Topper',
    description: 'Upgrade your sleep with this 3-inch memory foam mattress topper. It conforms to your body for pressure relief and comfort.',
    price: 180.0,
    image: '/images/memory_foam_mattress.jpg',
    category: 'Bedroom',
  },
  {
    id: '12',
    name: 'Acacia Wood Dining Table',
    description: 'A beautiful and durable dining table crafted from solid acacia wood. Comfortably seats six people, perfect for family dinners.',
    price: 750.0,
    image: '/images/dinning_table.jpg',
    category: 'Dining',
  },
  {
    id: '13',
    name: 'Digital Air Fryer',
    description: 'Enjoy your favorite fried foods with less oil. This digital air fryer has multiple presets for easy and healthy cooking.',
    price: 99.50,
    salePrice: 89.00,
    image: '/images/airfryer.jpg',
    category: 'Kitchen',
  },
  {
    id: '14',
    name: 'Outdoor Patio Set',
    description: 'A comfortable and stylish 3-piece patio set, including two chairs and a small table. Weather-resistant and perfect for your balcony or garden.',
    price: 399.00,
    image: '/images/outdoor_set.jpg',
    category: 'Outdoor',
  },
  {
    id: '15',
    name: 'Noise-Cancelling Headphones',
    description: 'Immerse yourself in music with these over-ear noise-cancelling headphones. Superior sound quality and all-day comfort.',
    price: 249.99,
    image: '/images/headphones.jpg',
    category: 'Electronics',
  },
  {
    id: '16',
    name: 'Set of 4 Wall Art Prints',
    description: 'Modern abstract art prints to elevate your home decor. High-quality prints on archival paper, ready to be framed.',
    price: 75.00,
    image: '/images/art_print.jpg',
    category: 'Decor',
  },
  {
    id: '17',
    name: 'Compact Standing Mixer',
    description: 'A powerful and compact mixer for all your baking needs. Comes with multiple attachments for dough, batter, and more.',
    price: 199.99,
    salePrice: 179.99,
    image: '/images/standing_mixer.jpg',
    category: 'Kitchen',
  },
  {
    id: '18',
    name: 'Woven Storage Baskets (Set of 3)',
    description: 'Stylish and functional woven baskets for organizing your home. Perfect for storing blankets, toys, or magazines.',
    price: 65.00,
    image: '/images/woven_basket.jpg',
    category: 'Storage',
  },
  {
    id: '19',
    name: 'Upholstered Dining Chairs (Set of 2)',
    description: 'Elegant and comfortable dining chairs with a cushioned seat and back, upholstered in a durable fabric. Perfect for any dining room.',
    price: 250.00,
    salePrice: 225.00,
    image: '/images/dinning_chair.jpg',
    category: 'Dining',
  },
  {
    id: '20',
    name: 'Modern TV Stand',
    description: 'A sleek and modern TV stand with ample storage for your media devices. Fits TVs up to 65 inches. Features cable management holes.',
    price: 350.00,
    image: '/images/tv_stand.jpg',
    category: 'Living Room',
  },
  {
    id: '21',
    name: 'Professional Chef\'s Knife Set',
    description: 'A complete set of high-carbon stainless steel knives for all your kitchen tasks. Includes a wooden block for safe storage.',
    price: 180.00,
    image: '/images/knief_set.jpg',
    category: 'Kitchen',
  },
  {
    id: '22',
    name: 'Robotic Vacuum Cleaner',
    description: 'Keep your floors clean with this smart robotic vacuum. Wi-Fi connected, works with voice assistants, and ideal for pet hair.',
    price: 299.00,
    salePrice: 249.00,
    image: '/images/vaccum_cleaner.jpg',
    category: 'Electronics',
  }
];

export const getProducts = (): Product[] => products;

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getCategories = (): string[] => {
    const categories = products.map(product => product.category);
    // Add 'Deals' category and ensure 'All' is first
    const uniqueCategories = ['All', 'Deals', ...new Set(categories)];
    return uniqueCategories;
}
