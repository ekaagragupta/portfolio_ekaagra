import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-muted-foreground">Built with</span>
            <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
            <span className="text-muted-foreground">using</span>
            <Code className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">and</span>
            <Coffee className="h-4 w-4 text-amber-500" />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} John Doe. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Crafted with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;