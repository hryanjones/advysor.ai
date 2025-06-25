import 'react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 section-padding bg-gradient-hero relative overflow-hidden">
      <div className="container-max">
        {/* Main Hero Content - Following Wireframe Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Top Section: Headlines and CTAs */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-shadow-lg">
              Launch Your Startup
              <br />
              <span className="gradient-text">In Days, Not Months</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed max-w-4xl mx-auto">
              ADVYSOR shows you how to start a business from idea validation → minimum viable product (MVP) → customer
              acquisition → fundraising - 10x faster and with data-driven confidence.
            </p>

            {/* CTA Row - Matching Wireframe */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
              <Button
                as="a"
                href="https://chatgpt.com/g/g-67f1e806e6d88191bea42e0ffc617a39-startup-co-founder-ai"
                external
                variant="primary"
                size="lg"
                data-poc-cta
                aria-label="Open live AI chat in new tab"
              >
                Try ADVYSOR on ChatGPT
              </Button>
            </div>
          </div>

          {/* Bottom Section: Real ADVYSOR Product Interface */}
          <div className="flex justify-center">
            <div className="max-w-5xl w-full">
              <div className="relative">
                <div className="card-glass p-6 rounded-2xl">
                  <div className="bg-navy/80 rounded-lg p-6">
                    {/* Browser Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <div className="text-sm text-gray-400 ml-4">ADVYSOR | Startup Co-Founder AI</div>
                      </div>
                      <div className="text-xs text-gray-500">o3-pro</div>
                    </div>

                    {/* Product Interface Content */}
                    <div className="space-y-6">
                      {/* Header Section */}
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                          <img
                            src="/ADVYSOR.AI Brandmark.png"
                            alt="ADVYSOR.AI Compass Logo"
                            className="w-36 h-36 object-contain"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">ADVYSOR | Startup Co-Founder AI</h3>
                        <p className="text-gray-400 text-sm mb-4">By Mark Herberholz</p>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
                          AI cofounder shows how to start a business: startup ideas, business plan, lean canvas, name,
                          branding, pitch deck, elevator pitch, MVP, customer acquisition, GTM, digital marketing,
                          growth hacking, small business grants, crowdfunding, equity, valuation, seed round funding,
                          find angel investors.
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <button className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-3 text-sm text-gray-300 transition-colors">
                          Help me validate my startup idea
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-3 text-sm text-gray-300 transition-colors">
                          Create a GTM strategy for my product
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-3 text-sm text-gray-300 transition-colors">
                          Build a pitch deck for investors
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-3 text-sm text-gray-300 transition-colors">
                          Draft a product requirements document (PRD)
                        </button>
                      </div>

                      {/* Chat Input */}
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Ask anything"
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                          disabled
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                          <button className="text-gray-400 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <button className="text-gray-400 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Benefits - Below the Demo */}
          <div className="mt-16 max-w-4xl mx-auto overlay-panel">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <li className="flex items-start text-center md:text-left">
                <div className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0 hidden md:block"></div>
                <span>
                  <strong>Idea → startup roadmap, instantly.</strong>
                </span>
              </li>
              <li className="flex items-start text-center md:text-left">
                <div className="w-2 h-2 bg-cyan rounded-full mt-2 mr-3 flex-shrink-0 hidden md:block"></div>
                <span>
                  <strong>10× output—build faster than DIY.</strong>
                </span>
              </li>
              <li className="flex items-start text-center md:text-left">
                <div className="w-2 h-2 bg-magenta rounded-full mt-2 mr-3 flex-shrink-0 hidden md:block"></div>
                <span>
                  <strong>24/7 AI coach —always ready.</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
