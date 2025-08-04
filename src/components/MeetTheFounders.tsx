import 'react';
import { Linkedin } from 'lucide-react';

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
          <div />

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
              7x founder
              <br />
              20+ years in business
            </p>
            <div className="flex justify-center space-x-3">
              <a
                href="https://www.linkedin.com/in/alex-west-7bb53970/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-mint transition-colors"
                aria-label="Alex West LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div />
        </div>
      </div>
    </section>
  );
};

export default MeetTheFounders;
