import 'react';

const PricingCTA = () => {
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

              <div className="text-center">
                <a
                  href="https://chatgpt.com/g/g-2acVF1ckn-advysor-startup-co-founder-ai"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-primary text-xl px-12 py-6 focus-visible:ring-2 ring-mint-400"
                  data-poc-cta
                  aria-label="Open live AI chat in new tab"
                >
                  Try ADVYSOR on ChatGPT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
