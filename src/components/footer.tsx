import { Waves } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-center px-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Waves className="h-5 w-5" />
          <p className="text-sm">
            © {new Date().getFullYear()} ShopWave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
