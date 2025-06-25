import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import Button, { FiMail, FiSend, FiUser, IoEnterOutline } from './Button';
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

type FormStep = 'initial' | 'required_submitted' | 'all_submitted';

export default function JoinWaitlistButton() {
  const links = useLinks();
  // UI state
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formStep, setFormStep] = useState<FormStep>('initial');

  // Form data
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [whatBuilding, setWhatBuilding] = useState('');

  // Checkboxes state
  const [howUseOptions, setHowUseOptions] = useState<Record<string, boolean>>({
    'Plan an MVP': false,
    'Refine my GTM strategy': false,
    'Model monetization or pricing': false,
    'Build a pitch deck': false,
    'Get feedback on my roadmap': false,
  });
  // Using boolean to track if "Other" checkbox is checked separately from the input text
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

  const handleRequiredSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append(formInputMap.email, email);
      formData.append(formInputMap.name, name);

      // Use fetch with no-cors mode since Google Forms doesn't allow CORS
      const response = await fetch(FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      // With no-cors, we can't check response.ok
      // Can check if response.type is 'opaque' which is expected with no-cors
      if (response.type === 'opaque') {
        // Successfully submitted email, move to next step
        setFormStep('required_submitted');
      } else {
        throw new Error('Failed to submit email');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting your email. Please try again.');
    } finally {
      setIsSubmitting(false);
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
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData();

      // Include required email and name again
      formData.append(formInputMap.email, email);
      formData.append(formInputMap.name, name);

      // What are you building?
      if (whatBuilding) {
        formData.append(formInputMap.whatBuilding, whatBuilding);
      }

      // How would you use ADVYSOR?
      for (const [option, isChecked] of Object.entries(howUseOptions)) {
        if (isChecked) {
          formData.append(formInputMap.howUse, option);
        }
      }

      // Add "Other" option if the checkbox is checked, regardless of whether text was entered
      if (howUseOtherChecked) {
        formData.append(formInputMap.howUse, '__other_option__');
        // Only append the text response if there is one
        if (howUseOther.trim()) {
          formData.append(`${formInputMap.howUse}.other_option_response`, howUseOther);
        }
      } // How did you hear about ADVYSOR? (single select)
      const selectedHowHeardOption = Object.entries(howHeardOptions).find(([_, isChecked]) => isChecked);
      if (selectedHowHeardOption) {
        // If a predefined option is selected
        formData.append(formInputMap.howHeard, selectedHowHeardOption[0]);
      } else if (howHeardOther) {
        const value = howHeardOther.trim() || 'Other';
        // If "other" is selected
        formData.append(formInputMap.howHeard, '__other_option__');
        formData.append(`${formInputMap.howHeard}.other_option_response`, value);
      }

      // Want to help shape ADVYSOR?
      for (const [option, isChecked] of Object.entries(wantToHelpOptions)) {
        if (isChecked) {
          formData.append(formInputMap.wantToHelp, option);
        }
      }

      // Submit full form
      const response = await fetch(FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      if (response.type === 'opaque') {
        setFormStep('all_submitted');
        document.getElementById('early-access-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        throw new Error('Failed to submit additional information');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting your responses. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showForm) {
    return (
      <div className="text-center">
        <Button icon={IoEnterOutline} onClick={() => setShowForm(true)} variant="standard">
          Get early access
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`w-full max-w-lg transition-all duration-300 ease-in-out overflow-hidden ${
          showForm ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {formStep === 'initial' && (
          <form onSubmit={handleRequiredSubmit} className="bg-background rounded-lg p-6 shadow-md">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-start gap-2">
                <FiAlertCircle className="text-red-500 mt-0.5 flex-shrink-0" />
                <p>{error}</p>
              </div>
            )}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-left">
                <strong>Email</strong>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 py-2 border border-gray-300 focus:ring-accent focus:border-accent rounded-md bg-white text-gray-900"
                  placeholder="What's the best email to reach you at?"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-left">
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-400" />
                </div>
                <input
                  id="name"
                  type="text"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent bg-white text-gray-900"
                  placeholder="What should we call you?"
                />
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting} variant="standard" icon={IoEnterOutline}>
              {isSubmitting ? 'Submitting...' : 'Get early access'}
            </Button>
          </form>
        )}

        {formStep !== 'initial' && <p className="text-xl">✅ You’re in. We'll reach out soon with next steps.</p>}

        {formStep === 'required_submitted' && (
          <div className="mt-6">
            <div className="rounded-lg">
              <p className="text-sm">Help us shape ADVYSOR by answering a few optional questions:</p>
            </div>

            <form onSubmit={handleFinalSubmit} className="bg-background rounded-lg p-6 shadow-md">
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-start gap-2">
                  <FiAlertCircle className="text-red-500 mt-0.5 flex-shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              <div className="mb-6">
                <label htmlFor="whatBuilding" className="block text-sm font-medium mb-2 text-left">
                  <strong>What are you building?</strong>
                </label>
                <input
                  type="text"
                  id="whatBuilding"
                  value={whatBuilding}
                  onChange={(e) => setWhatBuilding(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 focus:ring-accent focus:border-accent rounded-md bg-white text-gray-900"
                  placeholder="Idea, product, or space you're exploring (can be rough)"
                />
              </div>

              <div className="mb-6">
                <fieldset className="border border-gray-300 rounded-md p-4">
                  <legend className="text-sm font-medium px-1">
                    <strong>How would you use ADVYSOR?</strong>
                  </legend>
                  <p className="text-xs mb-3">Check all that apply. Helps us shape features and content.</p>

                  <div className="space-y-2">
                    {Object.keys(howUseOptions).map((option) => (
                      <label
                        key={`howUse-${option}`}
                        htmlFor={`howUse-${option}`}
                        className="ml-2 block text-sm cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          id={`howUse-${option}`}
                          name={option}
                          checked={howUseOptions[option]}
                          onChange={(e) => handleCheckboxChange(e, howUseOptions, setHowUseOptions)}
                          className="mt-1 h-3 w-3 rounded border-gray-300 text-accent focus:ring-accent"
                        />{' '}
                        {option}
                      </label>
                    ))}

                    <div className="flex items-start ml-2">
                      <input
                        type="checkbox"
                        id="howUse-other"
                        checked={howUseOtherChecked}
                        onChange={(e) => {
                          setHowUseOtherChecked(e.target.checked);
                        }}
                        className="mt-1 h-3 w-3 rounded border-gray-300 text-accent focus:ring-accent"
                      />
                      <div className="ml-2 block">
                        <input
                          type="text"
                          value={howUseOther}
                          onChange={(e) => setHowUseOther(e.target.value)}
                          className="mt-1 w-full px-3 py-1 border border-gray-300 rounded-md focus:ring-accent focus:border-accent bg-white text-gray-900"
                          placeholder="Other use case"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="mb-6">
                <fieldset className="border border-gray-300 rounded-md p-4">
                  <legend className="text-sm font-medium px-1">
                    <strong>How did you hear about ADVYSOR?</strong>
                  </legend>

                  <div className="space-y-2">
                    {Object.keys(howHeardOptions).map((option) => (
                      <div key={`howHeard-${option}`} className="flex items-start">
                        <input
                          type="radio"
                          id={`howHeard-${option}`}
                          name="howHeard"
                          checked={howHeardOptions[option]}
                          onChange={() => {
                            // Clear all options first
                            const resetOptions = Object.keys(howHeardOptions).reduce(
                              (acc, key) => {
                                acc[key] = false;
                                return acc;
                              },
                              {} as Record<string, boolean>,
                            );
                            // Set only the selected option to true
                            setHowHeardOptions({ ...resetOptions, [option]: true });
                            // Clear "other" if a predefined option is selected
                            setHowHeardOther('');
                          }}
                          className="mt-1 h-3 w-3 border-gray-300 text-accent focus:ring-accent"
                        />
                        <label htmlFor={`howHeard-${option}`} className="ml-2 block text-sm">
                          {option}
                        </label>
                      </div>
                    ))}

                    <div className="flex items-start">
                      <input
                        type="radio"
                        id="howHeard-other"
                        name="howHeard"
                        checked={!!howHeardOther}
                        onChange={() => {
                          // Clear all options
                          const resetOptions = Object.keys(howHeardOptions).reduce(
                            (acc, key) => {
                              acc[key] = false;
                              return acc;
                            },
                            {} as Record<string, boolean>,
                          );
                          setHowHeardOptions(resetOptions);
                          // Set other field to empty so user can type something
                          setHowHeardOther(' ');
                        }}
                        className="mt-1 h-3 w-3 border-gray-300 text-accent focus:ring-accent"
                      />
                      <div className="ml-2 block">
                        <input
                          type="text"
                          value={howHeardOther}
                          onChange={(e) => setHowHeardOther(e.target.value)}
                          className="mt-1 w-full px-3 py-1 border border-gray-300 rounded-md focus:ring-accent focus:border-accent bg-white text-gray-900"
                          placeholder="Other source"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="mb-6">
                <fieldset className="border border-gray-300 rounded-md p-4">
                  <legend className="text-sm font-medium px-1">
                    <strong>Want to help shape ADVYSOR or share your story?</strong>
                  </legend>

                  <div className="space-y-2">
                    {Object.keys(wantToHelpOptions).map((option) => (
                      <div key={`wantToHelp-${option}`} className="flex items-start">
                        <input
                          type="checkbox"
                          id={`wantToHelp-${option}`}
                          name={option}
                          checked={wantToHelpOptions[option]}
                          onChange={(e) => handleCheckboxChange(e, wantToHelpOptions, setWantToHelpOptions)}
                          className="mt-1 h-3 w-3 rounded border-gray-300 text-accent focus:ring-accent"
                        />
                        <label htmlFor={`wantToHelp-${option}`} className="ml-2 block text-sm">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={isSubmitting} variant="standard" icon={FiSend}>
                  {isSubmitting ? 'Submitting...' : 'Submit Additional Info'}
                </Button>
              </div>
            </form>
          </div>
        )}

        {formStep === 'all_submitted' && (
          <div className="my-6">
            <p className="mb-3">
              In the meantime, check out our vlog
              <br />👉{' '}
              <a href={links.youtube.channel} className="underline hover:opacity-80 transition-opacity">
                {links.youtube.channel}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
