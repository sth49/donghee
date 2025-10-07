import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-base-content/10 bg-base-200/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-8">
        <div className="text-center space-y-2">
          <p className="text-sm text-base-content/60">
            © {new Date().getFullYear()} Donghee Hong. All rights reserved.
          </p>
          <p className="text-xs text-base-content/50 flex items-center justify-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}