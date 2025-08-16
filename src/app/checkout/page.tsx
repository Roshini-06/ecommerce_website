'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  address: z.string().min(5, 'Please enter a valid address.'),
  city: z.string().min(2, 'Please enter a valid city.'),
  zip: z.string().regex(/^\d{5}(?:[-\s]\d{4})?$/, 'Please enter a valid zip code.'),
  country: z.string().min(2, 'Please enter a valid country.'),
});

export default function CheckoutPage() {
  const router = useRouter();
  const { clearCart, cartTotal, cartCount } = useCart();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      address: '',
      city: '',
      zip: '',
      country: '',
    },
  });

  if (cartCount === 0 && typeof window !== 'undefined') {
    router.push('/');
    return null;
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Order submitted:', values);
    clearCart();
    toast({
        title: "Order Placed!",
        description: "Thank you for your purchase. A confirmation is on its way.",
    });
    router.push('/order-confirmation');
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Checkout</CardTitle>
          <CardDescription>Enter your shipping information to complete your purchase.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main St" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                    <FormItem className="sm:col-span-1">
                        <FormLabel>City</FormLabel>
                        <FormControl>
                        <Input placeholder="Anytown" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="zip"
                    render={({ field }) => (
                    <FormItem className="sm:col-span-1">
                        <FormLabel>ZIP Code</FormLabel>
                        <FormControl>
                        <Input placeholder="12345" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                    <FormItem className="sm:col-span-1">
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                        <Input placeholder="USA" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
              </div>
            </CardContent>
            <CardFooter className="flex-col items-stretch space-y-4">
               <div className="flex justify-between font-bold text-lg">
                <span>Order Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <Button type="submit" className="w-full" size="lg">Place Order</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
