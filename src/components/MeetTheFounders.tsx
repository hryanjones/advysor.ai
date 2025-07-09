import 'react';

const MeetTheFounders = () => {
  return (
    <section className="section-padding bg-navy/30" id="meet-the-founders">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-lg">
            Meet the <span className="gradient-text">Founders</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Built by founders who've been there. We've scaled products to millions of users and know what it takes to
            succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card-glass p-8 text-center hover:bg-white/10 transition-all duration-300">
            <img
              src="/Mark%20Herberholz_cropped.png"
              alt="Mark Herberholz"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-mint/30"
              width="96"
              height="96"
              loading="lazy"
            />
            <h4 className="text-xl font-bold text-white mb-2">Mark Herberholz</h4>
            <p className="text-mint font-semibold mb-2">Co‑Founder • Product</p>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed whitespace-pre-line">
              10m user and 100m ARR product launches 10+ years in product
            </p>
            <div className="flex justify-center space-x-3">
              <a
                href="https://www.linkedin.com/in/mark-herberholz-99966096/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-mint transition-colors"
                aria-label="Mark Herberholz LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="card-glass p-8 text-center hover:bg-white/10 transition-all duration-300">
            <img
              src="/Alex%20West.png"
              alt="Alex West"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-mint/30"
              width="96"
              height="96"
              loading="lazy"
            />
            <h4 className="text-xl font-bold text-white mb-2">Alex West</h4>
            <p className="text-mint font-semibold mb-2">Co‑Founder • Growth</p>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed whitespace-pre-line">
              7x founder 20+ years in business
            </p>
            <div className="flex justify-center space-x-3">
              <a
                href="https://www.linkedin.com/in/alex-west-7bb53970/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-mint transition-colors"
                aria-label="Alex West LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="card-glass p-8 text-center hover:bg-white/10 transition-all duration-300">
            <img
              src="/Patrick%20Allen.png"
              alt="Patrick Allen"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-mint/30"
              width="96"
              height="96"
              loading="lazy"
            />
            <h4 className="text-xl font-bold text-white mb-2">Patrick Allen</h4>
            <p className="text-mint font-semibold mb-2">Co‑Founder • Engineering</p>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed whitespace-pre-line">
              500k screen adtech platform 10+ years in software
            </p>
            <div className="flex justify-center space-x-3">
              <a
                href="https://www.linkedin.com/in/patrick-r-allen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-mint transition-colors"
                aria-label="Patrick Allen LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheFounders;
