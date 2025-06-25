import 'react';
import { Twitter, Linkedin, Youtube, Mail } from 'lucide-react';
import { useLinks } from '../contexts/LinkContext';

const Footer = () => {
  const links = useLinks();
  return (
    <footer className="bg-navy/90 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-1">
                <img
                  src="/ADVYSOR.AI Brandmark.png"
                  alt="ADVYSOR.AI Compass Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-xl font-bold gradient-text text-shadow-lg">ADVYSOR.AI</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md leading-relaxed text-sm">
              Your smarter, better, faster co-founder. Empowering founders and indie hackers with AI-driven insights and
              strategic guidance from idea to funding.
            </p>
            <div className="flex space-x-3">
              <a href={links.social.twitter} className="text-gray-400 hover:text-mint transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href={links.social.linkedin} className="text-gray-400 hover:text-mint transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={links.youtube.channel} className="text-gray-400 hover:text-mint transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={links.social.discord}
                className="text-gray-400 hover:text-mint transition-colors"
                title="Discord Community"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a href={links.contact.email} className="text-gray-400 hover:text-mint transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-mint transition-colors text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-mint transition-colors text-sm">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#content" className="text-gray-400 hover:text-mint transition-colors text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href={links.contact.email} className="text-gray-400 hover:text-mint transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href={links.contact.support} className="text-gray-400 hover:text-mint transition-colors text-sm">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 ADVYSOR.AI. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a
              href={links.legal.privacyPolicy}
              className="text-gray-400 hover:text-mint transition-colors text-sm"
              target="_blank"
              rel="noreferrer noopener"
            >
              Privacy Policy
            </a>
            <a
              href={links.legal.termsOfService}
              className="text-gray-400 hover:text-mint transition-colors text-sm"
              target="_blank"
              rel="noreferrer noopener"
            >
              Terms of Service
            </a>
            <a
              href={links.legal.cookiePolicy}
              className="text-gray-400 hover:text-mint transition-colors text-sm"
              target="_blank"
              rel="noreferrer noopener"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
