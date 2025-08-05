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
          <div className="text-gray-300 max-w-3xl mx-auto">
            <p>
              Alex and Andrew West are third-generation builders. Their grandfather launched a manufacturing company
              before WWII. Their father expanded it into six businesses across multiple states, operating under the{' '}
              <a className="text-mint transition-colors" href="https://ustars.com">
                United Stars, Inc.
              </a>{' '}
              family office.
            </p>
            <p className="mt-4">
              Now, the brothers bring the family's business experience to creating ADVYSOR for today's generation of
              startup founders.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
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
            <p className="text-mint font-semibold mb-2">CEO</p>
            <p className="text-gray-400 text-sm mb-2 leading-relaxed whitespace-pre-line font-bold">
              8x founder
              <br />
              25+ years in business
            </p>
            <p className="text-gray-400 text-sm mb-2 leading-relaxed whitespace-pre-line">
              Alex brings founder empathy, business judgment, and a sharp storytelling instinct to help first-time
              founders move fast and think long-term.
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

          <div className="card-glass p-8 text-center hover:bg-white/10 transition-all duration-300">
            <img
              src="/AndrewWest-cropped.jpg"
              alt="Andrew West"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-mint/30"
              width="96"
              height="96"
              loading="lazy"
            />
            <h4 className="text-xl font-bold text-white mb-2">Andrew West</h4>
            <p className="text-mint font-semibold mb-2">CTO</p>
            <p className="text-gray-400 text-sm mb-2 leading-relaxed whitespace-pre-line font-bold">
              ex-DocuSign, ex-Expedia
              <br />
              15+ years in engineering and ops
            </p>
            <p className="text-gray-400 text-sm mb-2 leading-relaxed whitespace-pre-line">
              Andrew leads technical execution with deep experience in cloud infrastructure, enterprise systems, and
              cross-functional program delivery.
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
        </div>
      </div>
    </section>
  );
};

export default MeetTheFounders;
