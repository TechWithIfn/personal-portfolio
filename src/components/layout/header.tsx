import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '../ui/button';

interface HeaderProps {
  currentSection: string;
}

export function Header({ currentSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [theme, setTheme] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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
    setIsMenuOpen(false);
  };

  // Only show header for home, about, and contact sections
  const showHeader = ['home', 'about', 'contact'].includes(currentSection);

  if (!showHeader) return null;

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
              I
            </div>
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text group-hover:opacity-80 transition-opacity">
              rfan
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm lg:text-base hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-sm lg:text-base hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm lg:text-base hover:text-primary transition-colors">Contact</button>
            
            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600 hover:text-gray-900" />
              ) : (
                <Sun className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 hover:text-gray-100" />
              )}
            </Button>
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-gray-600 hover:text-gray-900" />
              ) : (
                <Sun className="w-4 h-4 text-gray-400 hover:text-gray-100" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="w-8 h-8 md:hidden"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('home')} className="text-base hover:text-primary transition-colors text-left px-2 py-1.5">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-base hover:text-primary transition-colors text-left px-2 py-1.5">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-base hover:text-primary transition-colors text-left px-2 py-1.5">Contact</button>
          </div>
        </nav>
      )}
    </header>
  );
}