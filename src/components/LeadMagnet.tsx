import { useState, type FormEvent } from 'react';
import { CheckCircle } from 'lucide-react';
import Button from './ui/Button';
import { useLinks } from '../contexts/LinkContext';

// Field IDs from Google Form
const formInputMap = {
  email: 'entry.732351849',
  name: 'entry.1066006339',
  whatBuilding: 'entry.464073483',
  howUse: 'entry.1018956477',
  howHeard: 'entry.83165922',
  wantToHelp: 'entry.1115098463',
};

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfJWzvDZ2UPbu8mFOrU1gWR26PLHTm__csZTosOq2jYBFnB6Q/formResponse';

function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const links = useLinks();

  return (
    <section
      id="lead-magnet"
      className="section-padding mt-10 py-10 bg-gradient-to-r from-indigo/20 to-magenta/20 border-y border-white/10"
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
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    variant="primary"
                    className="min-w-[200px] cta-btn"
                    isLoading={isLoading}
                    aria-label="Send me the startup prompt pack"
                  >
                    Send Me
                    <br />
                    the Prompts
                  </Button>
                  {error && (
                    <p className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-start gap-2">
                      {error}
                    </p>
                  )}
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
                      href={links.chatGPT.tryAdvysor}
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append(formInputMap.email, email);

      // Use fetch with no-cors mode since Google Forms doesn't allow CORS
      await fetch(FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      // With no-cors, we can't check response.ok
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting your email. Please try again.');
    } finally {
      setIsSubmitted(true);
      setIsLoading(false);
    }
  }
}

export default LeadMagnet;
