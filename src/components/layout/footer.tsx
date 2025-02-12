import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { Button } from '../ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Irfan Ansari</h3>
            <p className="text-muted-foreground">
              Python Developer | Full-Stack Enthusiast | Data Analytics Expert
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors text-left">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors text-left">Contact</button>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              variant="outline"
              size="icon"
              className="ml-auto"
              onClick={scrollToTop}
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2025 Irfan Ansari. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}