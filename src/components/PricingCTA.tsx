import 'react';
import Button from './ui/Button';
import { useLinks } from '../contexts/LinkContext';

const PricingCTA = () => {
  const links = useLinks();

  return (
    <section className="section-padding bg-gradient-to-b from-navy/80 to-navy">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-glass p-12 rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-lg">
                Ready to Build with Your
                <br />
                <span className="gradient-text">AI Co‑Founder?</span>
              </h2>

              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Chat live with ADVYSOR. Instant access if you already have an ChatGPT account, and a less than a minute
                signup if you don't.
              </p>

              <div className="flex justify-center">
                <Button
                  as="a"
                  href={links.chatGPT.tryAdvysor}
                  external
                  variant="primary"
                  size="xl"
                  data-poc-cta
                  aria-label="Open live AI chat in new tab"
                >
                  Try ADVYSOR on ChatGPT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
