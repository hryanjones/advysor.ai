import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-navy/95 backdrop-blur-sm border-b border-white/10 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-3">
              <img src="/ADVYSOR.AI Brandmark.png" alt="ADVYSOR.AI Compass Logo" className="w-12 h-12 object-contain" />
            </div>
            <span className="text-2xl font-bold gradient-text text-shadow-lg">ADVYSOR.AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#testimonials" className="text-gray-300 hover:text-mint transition-colors">
              Testimonials
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-mint transition-colors">
              How It Works
            </a>
            <a
              href="#content"
              className="text-gray-300 hover:text-mint transition-colors"
              target="_blank"
              rel="noreferrer noopener"
            >
              Blog
            </a>
            <a
              href="https://chatgpt.com/g/g-2acVF1ckn-advysor-startup-co-founder-ai"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary focus-visible:ring-2 ring-mint-400"
              data-poc-cta
              aria-label="Open live AI chat in new tab"
            >
              Try ADVYSOR on ChatGPT
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <a href="#testimonials" className="text-gray-300 hover:text-mint transition-colors">
                Testimonials
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-mint transition-colors">
                How It Works
              </a>
              <a
                href="#content"
                className="text-gray-300 hover:text-mint transition-colors"
                target="_blank"
                rel="noreferrer noopener"
              >
                Blog
              </a>
              <a
                href="https://chatgpt.com/g/g-2acVF1ckn-advysor-startup-co-founder-ai"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary w-full focus-visible:ring-2 ring-mint-400"
                data-poc-cta
                aria-label="Open live AI chat in new tab"
              >
                Try ADVYSOR on ChatGPT
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
