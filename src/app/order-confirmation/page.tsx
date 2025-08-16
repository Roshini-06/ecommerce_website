import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function OrderConfirmationPage() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <CheckCircle2 className="h-16 w-16 text-green-500" />
      <h1 className="text-3xl font-bold">Thank you for your order!</h1>
      <p className="max-w-md text-muted-foreground">
        Your order has been placed successfully. A confirmation email is on its way. We appreciate your business!
      </p>
      <Button asChild>
        <Link href="/">Continue Shopping</Link>
      </Button>
    </div>
  );
}
