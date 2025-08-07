import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';
import { type AppLinks, useLinks } from '../contexts/LinkContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = useLinks();

  return (
    <header className="fixed top-0 w-full bg-navy/95 backdrop-blur-sm border-b border-white/10 z-50 whitespace-nowrap">
      <div className="container-max">
        <div className="flex justify-between items-center pr-3">
          {/* Logo */}
          <div className="flex items-center">
            <div className="p-3">
              <img src="/advysor-brand.png" alt="ADVYSOR.AI Compass Logo" className="w-10 h-10 object-contain" />
            </div>
            <span className="text-2xl font-bold gradient-text text-shadow-lg">ADVYSOR.AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">{navContents(links)}</nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden p-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">{navContents(links)}</nav>
          </div>
        )}
      </div>
    </header>
  );
};

function navContents(links: AppLinks) {
  return (
    <>
      <a href="#testimonials" className="font-bold text-gray-300 hover:text-mint transition-colors">
        Testimonials
      </a>
      <a href="#how-it-works" className="font-bold text-gray-300 hover:text-mint transition-colors">
        How It Works
      </a>
      <a href="#content" className="font-bold text-gray-300 hover:text-mint transition-colors">
        Blog
      </a>
      <div className="flex">
        <Button
          as="a"
          href={links.chatGPT.tryAdvysor}
          external
          variant="primary"
          data-poc-cta
          aria-label="Open live AI chat in new tab"
          size="sm"
        >
          Try ADVYSOR on ChatGPT
        </Button>
      </div>
    </>
  );
}

export default Header;
