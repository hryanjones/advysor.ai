import { useState, type FormEvent, type ChangeEvent, useEffect } from 'react';
import { CheckCircle, AlertCircle, Mail, UserRoundPlus, Copy, Check } from 'lucide-react';
import Button from './ui/Button';
import { useLinks } from '../contexts/LinkContext';

// Field IDs from Google Form
const formInputMap = {
  email: 'entry.732351849',
  whatBuilding: 'entry.464073483',
  howUse: 'entry.1018956477',
  howHeard: 'entry.83165922',
  wantToHelp: 'entry.1115098463',
  referredBy: 'entry.1457512683',
};

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfJWzvDZ2UPbu8mFOrU1gWR26PLHTm__csZTosOq2jYBFnB6Q/formResponse';

const LEAD_MAGNET_ANCHOR = 'lead-magnet';

type FormStep = 'initial' | 'required_submitted' | 'all_submitted';

// Utility functions for referral encoding/decoding
const encodeReferral = (email: string): string => {
  return btoa(email).replace(/[+/=]/g, (char) => {
    switch (char) {
      case '+':
        return '-';
      case '/':
        return '_';
      case '=':
        return '';
      default:
        return char;
    }
  });
};

const decodeReferral = (encoded: string): string => {
  try {
    const base64 = encoded.replace(/[-_]/g, (char) => (char === '-' ? '+' : '/'));
    const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
    return atob(padded);
  } catch {
    return '';
  }
};

function LeadMagnet() {
  // UI state
  const [formStep, setFormStep] = useState<FormStep>('initial');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [referralLink, setReferralLink] = useState<string>('');
  const [copied, setCopied] = useState(false);

  // Form data
  const [email, setEmail] = useState('');
  const [whatBuilding, setWhatBuilding] = useState('');
  const [referredBy, setReferredBy] = useState<string>('');

  // Checkboxes state
  const [howUseOptions, setHowUseOptions] = useState<Record<string, boolean>>({
    'Plan an MVP': false,
    'Refine my GTM strategy': false,
    'Model monetization or pricing': false,
    'Build a pitch deck': false,
    'Get feedback on my roadmap': false,
  });
  const [howUseOtherChecked, setHowUseOtherChecked] = useState(false);
  const [howUseOther, setHowUseOther] = useState('');

  const [howHeardOptions, setHowHeardOptions] = useState<Record<string, boolean>>({
    'Twitter / X': false,
    LinkedIn: false,
    'YouTube / VLOG': false,
    Reddit: false,
    'Discord / community group': false,
    'Friend or colleague': false,
  });
  const [howHeardOther, setHowHeardOther] = useState('');

  const [wantToHelpOptions, setWantToHelpOptions] = useState<Record<string, boolean>>({
    "I'd be open to giving feedback.": false,
    "I'd be open to being featured in a VLOG.": false,
  });

  const links = useLinks();

  // Check for referral parameter on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const refParam = urlParams.get('ref');
    if (refParam) {
      const decodedEmail = decodeReferral(refParam);
      if (decodedEmail) {
        setReferredBy(decodedEmail);
      }
    }
  }, []);

  const generateReferralLink = (userEmail: string): string => {
    const encodedEmail = encodeReferral(userEmail);
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('ref', encodedEmail);
    currentUrl.hash = LEAD_MAGNET_ANCHOR; // Ensure it points to the lead magnet section
    return currentUrl.toString();
  };

  const copyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleRequiredSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append(formInputMap.email, email);

      if (referredBy) {
        formData.append(formInputMap.referredBy, referredBy);
      }

      await fetch(FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      // Generate referral link for this user
      const newReferralLink = generateReferralLink(email);
      setReferralLink(newReferralLink);

      setFormStep('required_submitted');
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting your email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckboxChange = (
    e: ChangeEvent<HTMLInputElement>,
    options: Record<string, boolean>,
    setOptions: (value: Record<string, boolean>) => void,
  ) => {
    const { name, checked } = e.target;
    setOptions({ ...options, [name]: checked });
  };

  const handleFinalSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append(formInputMap.email, email);

      if (referredBy) {
        formData.append(formInputMap.referredBy, referredBy);
      }

      if (whatBuilding) {
        formData.append(formInputMap.whatBuilding, whatBuilding);
      }

      for (const [option, isChecked] of Object.entries(howUseOptions)) {
        if (isChecked) {
          formData.append(formInputMap.howUse, option);
        }
      }

      if (howUseOtherChecked) {
        formData.append(formInputMap.howUse, '__other_option__');
        if (howUseOther.trim()) {
          formData.append(`${formInputMap.howUse}.other_option_response`, howUseOther);
        }
      }

      const selectedHowHeardOption = Object.entries(howHeardOptions).find(([_, isChecked]) => isChecked);
      if (selectedHowHeardOption) {
        formData.append(formInputMap.howHeard, selectedHowHeardOption[0]);
      } else if (howHeardOther) {
        const value = howHeardOther.trim() || 'Other';
        formData.append(formInputMap.howHeard, '__other_option__');
        formData.append(`${formInputMap.howHeard}.other_option_response`, value);
      }

      for (const [option, isChecked] of Object.entries(wantToHelpOptions)) {
        if (isChecked) {
          formData.append(formInputMap.wantToHelp, option);
        }
      }

      await fetch(FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      setFormStep('all_submitted');
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting your responses. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Referral steps data
  const referralSteps = [
    'Sign up for our waitlist',
    'Share the waitlist referral link with a friend',
    'Your friend signs up for waitlist',
    'You get 1 month of pro free when we launch per friend (Limit 3)',
  ];

  return (
    <section
      id={LEAD_MAGNET_ANCHOR}
      className="section-padding mt-10 py-10 bg-gradient-to-r from-indigo/20 to-magenta/20 border-y border-white/10"
    >
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-glass p-12 rounded-2xl relative overflow-hidden leadmagnet">
            <div className="relative z-10">
              <h2 className="text-4xl text-balance md:text-5xl font-bold text-white mb-6">
                <span className="text-shadow-lg">Get Early Access to Your</span>{' '}
                <span className="gradient-text">AI Co‑Founder</span>
              </h2>

              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed subhead">
                Join the waitlist for our Pro version launch and earn 1 month free for each friend you invite!
              </p>

              {referredBy && (
                <div className="mb-4 p-3 bg-mint/10 border border-mint/20 text-mint rounded-lg text-sm">
                  🎉 You were referred by a friend!
                </div>
              )}

              {formStep === 'initial' && (
                <form onSubmit={handleRequiredSubmit} data-beta-form>
                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-start gap-2">
                      <AlertCircle className="text-red-500 mt-0.5 flex-shrink-0 w-4 h-4" />
                      <p>{error}</p>
                    </div>
                  )}

                  <div className="flex relative gap-2 items-center flex-wrap">
                    <Mail className="absolute inset-y-4 left-4 ztext-gray-400 w-5 h-5" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="What's the best email to reach you?"
                      className="pl-10 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20 flex-grow"
                      required
                    />

                    <Button
                      type="submit"
                      disabled={isLoading}
                      variant="primary"
                      className="cta-btn"
                      isLoading={isLoading}
                      aria-label="Get Early Access"
                    >
                      <UserRoundPlus className="inline-block mr-2" />
                      Join Waitlist
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    We'll email you no more than twice a month. No spam, ever.
                  </p>
                </form>
              )}

              {formStep !== 'initial' && (
                <div className="">
                  <div className="flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-mint mr-3" />
                    <div>
                      <div className="text-2xl font-semibold">👋 Thanks! </div>
                      <p>You're on the list. </p>
                      {referralLink && (
                        <p>
                          Use this{' '}
                          <a
                            type="link"
                            href={referralLink}
                            className="text-mint hover:underline underline-offset-2 transition-colors"
                            title="Copy referral link"
                          >
                            referral link
                          </a>{' '}
                          to invite friends{' '}
                          <button
                            type="button"
                            onClick={copyReferralLink}
                            className="inline-flex items-center gap-1 px-2 py-0.5 bg-mint/20 hover:bg-mint/30 text-mint rounded transition-colors text-xs ml-1"
                            title="Copy referral link"
                          >
                            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            {copied ? 'Copied!' : 'copy'}
                          </button>
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">
                    Meanwhile →{' '}
                    <a
                      href={links.chatGPT.tryAdvysor}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-mint hover:underline"
                      data-poc-cta
                    >
                      Try ADVYSOR now
                    </a>
                  </p>
                </div>
              )}

              {formStep === 'required_submitted' && (
                <div className="mt-16 max-w-2xl mx-auto">
                  <p className="text-sm text-gray-300 mb-4">
                    Help us shape ADVYSOR by answering a few optional questions:
                  </p>

                  <form onSubmit={handleFinalSubmit} className="space-y-6">
                    {error && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-start gap-2">
                        <AlertCircle className="text-red-500 mt-0.5 flex-shrink-0 w-4 h-4" />
                        <p>{error}</p>
                      </div>
                    )}

                    <div>
                      <label htmlFor="whatBuilding" className="block text-sm font-medium mb-2 text-gray-300 text-left">
                        <strong>What are you building?</strong>
                      </label>
                      <input
                        type="text"
                        id="whatBuilding"
                        value={whatBuilding}
                        onChange={(e) => setWhatBuilding(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20"
                        placeholder="Idea, product, or space you're exploring (can be rough)"
                      />
                    </div>

                    <fieldset className="border border-white/20 rounded-lg p-4">
                      <legend className="text-sm font-medium px-2 text-gray-300">
                        <strong>How would you use ADVYSOR?</strong>
                      </legend>
                      <p className="text-xs mb-3 text-gray-400">
                        Check all that apply. Helps us shape features and content.
                      </p>

                      <div className="space-y-2 text-left">
                        {Object.keys(howUseOptions).map((option) => (
                          <label
                            key={`howUse-${option}`}
                            className="flex items-start space-x-2 text-sm text-gray-300 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              name={option}
                              checked={howUseOptions[option]}
                              onChange={(e) => handleCheckboxChange(e, howUseOptions, setHowUseOptions)}
                              className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/10 text-mint focus:ring-mint/20"
                            />
                            <span>{option}</span>
                          </label>
                        ))}

                        <div className="flex items-start space-x-2">
                          <input
                            type="checkbox"
                            checked={howUseOtherChecked}
                            onChange={(e) => setHowUseOtherChecked(e.target.checked)}
                            className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/10 text-mint focus:ring-mint/20"
                          />
                          <input
                            type="text"
                            value={howUseOther}
                            onChange={(e) => setHowUseOther(e.target.value)}
                            className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-1 text-white placeholder-gray-400 focus:outline-none focus:border-mint"
                            placeholder="Other use case"
                          />
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="border border-white/20 rounded-lg p-4">
                      <legend className="text-sm font-medium px-2 text-gray-300">
                        <strong>How did you hear about ADVYSOR?</strong>
                      </legend>

                      <div className="space-y-2 text-left">
                        {Object.keys(howHeardOptions).map((option) => (
                          <label
                            key={`howHeard-${option}`}
                            className="flex items-start space-x-2 text-sm text-gray-300 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="howHeard"
                              checked={howHeardOptions[option]}
                              onChange={() => {
                                const resetOptions = Object.keys(howHeardOptions).reduce(
                                  (acc, key) => {
                                    acc[key] = false;
                                    return acc;
                                  },
                                  {} as Record<string, boolean>,
                                );
                                setHowHeardOptions({ ...resetOptions, [option]: true });
                                setHowHeardOther('');
                              }}
                              className="mt-0.5 h-4 w-4 border-white/20 bg-white/10 text-mint focus:ring-mint/20"
                            />
                            <span>{option}</span>
                          </label>
                        ))}

                        <div className="flex items-start space-x-2">
                          <input
                            type="radio"
                            name="howHeard"
                            checked={!!howHeardOther}
                            onChange={() => {
                              const resetOptions = Object.keys(howHeardOptions).reduce(
                                (acc, key) => {
                                  acc[key] = false;
                                  return acc;
                                },
                                {} as Record<string, boolean>,
                              );
                              setHowHeardOptions(resetOptions);
                              setHowHeardOther(' ');
                            }}
                            className="mt-0.5 h-4 w-4 border-white/20 bg-white/10 text-mint focus:ring-mint/20"
                          />
                          <input
                            type="text"
                            value={howHeardOther}
                            onChange={(e) => setHowHeardOther(e.target.value)}
                            className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-1 text-white placeholder-gray-400 focus:outline-none focus:border-mint"
                            placeholder="Other source"
                          />
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="border border-white/20 rounded-lg p-4">
                      <legend className="text-sm font-medium px-2 text-gray-300">
                        <strong>Want to help shape ADVYSOR or share your story?</strong>
                      </legend>

                      <div className="space-y-2 text-left">
                        {Object.keys(wantToHelpOptions).map((option) => (
                          <label
                            key={`wantToHelp-${option}`}
                            className="flex items-start space-x-2 text-sm text-gray-300 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              name={option}
                              checked={wantToHelpOptions[option]}
                              onChange={(e) => handleCheckboxChange(e, wantToHelpOptions, setWantToHelpOptions)}
                              className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/10 text-mint focus:ring-mint/20"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <div className="flex justify-end">
                      <Button type="submit" disabled={isLoading} variant="primary" isLoading={isLoading}>
                        Submit Additional Info
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              <div className="mt-8 bg-white/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4">How the referral works:</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-300">
                  {referralSteps.map((step, index) => (
                    <div className="flex items-start" key={`step-${index}`}>
                      <div className="w-8 h-8 bg-gradient-brand text-navy rounded-full flex items-center justify-center font-bold text-sm mr-3 mt-0.5 flex-shrink-0 shadow-lg">
                        {index + 1}
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadMagnet;
