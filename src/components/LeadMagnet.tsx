import type React from 'react';
import { useState } from 'react';
import { Download, Gift, CheckCircle } from 'lucide-react';

const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section
      id="lead-magnet"
      className="section-padding bg-gradient-to-r from-indigo/20 to-magenta/20 border-y border-white/10"
    >
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-glass p-12 rounded-2xl relative overflow-hidden leadmagnet">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow-lg headline">
                Free Startup&nbsp;Prompt Pack 🎁
              </h3>

              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed subhead">
                50 proven prompts you can paste into <strong>ChatGPT</strong> — and turbo‑charge inside{' '}
                <strong>ADVYSOR</strong>.
              </p>

              <ul className="benefit-list text-lg text-gray-300 mb-8 flex flex-wrap justify-center gap-3 sm:gap-6">
                <li>✅ Validate ideas</li>
                <li>✅ Draft MVP specs</li>
                <li>✅ Acquire customers</li>
                <li>✅ Craft pitch slides</li>
              </ul>

              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                  data-beta-form
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary flex items-center justify-center min-w-[200px] focus-visible:ring-2 ring-mint-400 cta-btn"
                    aria-label="Send me the startup prompt pack"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-navy"></div>
                    ) : (
                      <>
                        Send Me
                        <br />
                        the Prompts
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="max-w-md mx-auto">
                  <div className="flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-mint mr-3" />
                    <span className="text-xl font-semibold text-mint">Prompts sent!</span>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Next →{' '}
                    <a
                      href="https://chatgpt.com/g/g-2acVF1ckn-advysor-startup-co-founder-ai"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-mint hover:underline"
                      data-poc-cta
                    >
                      Start chatting live
                    </a>
                  </p>
                </div>
              )}

              <p className="text-xs text-gray-400 mt-6 footnote" style={{ fontSize: '11px' }}>
                We'll email the PDF plus a 2‑min ADVYSOR guide. No spam — unsubscribe anytime.
                <br />
                <small className="disclaimer text-gray-500 opacity-50" style={{ fontSize: '10px' }}>
                  "ChatGPT" is a trademark of OpenAI, used for compatibility reference.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
