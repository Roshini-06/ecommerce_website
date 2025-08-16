export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
