import 'react';
import { Twitter, Linkedin, Youtube, Mail } from 'lucide-react';
import { useLinks } from '../contexts/LinkContext';
import RedditIcon from './ui/RedditIcon';

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
                <img src="/advysor-brand.png" alt="ADVYSOR.AI Compass Logo" className="w-12 h-12 object-contain" />
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
              <a href={links.social.reddit} className="text-gray-400 hover:text-mint transition-colors">
                <RedditIcon />
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
            {/* <a
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
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
